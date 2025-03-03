import ms from 'ms';
import { Octokit } from 'octokit';
import { z } from 'zod';

const getPr = z.object({
  pullNumber: z.coerce.number(),
  repo: z.string(),
  owner: z.string(),
});

export interface PrCard {
  title: string;
  body: string | null;
  closed: boolean;
  merged: boolean;
  draft: boolean;
  link: string;
}

export default defineEventHandler(async (event) => {
  const octokit = new Octokit();
  const query = await getValidatedQuery(event, getPr.safeParseAsync);
  if (!query.success) {
    throw createError({ status: 400 });
  }
  const redis = useStorage('redis');
  const { pullNumber, repo, owner } = query.data;
  const key = `${owner}::${repo}::${pullNumber}`;
  if (redis && await redis.hasItem(key)) {
    return redis.getItem<PrCard>(key);
  }
  const pr = octokit.rest.pulls.get({
    pull_number: pullNumber,
    repo,
    owner,
  });
  return new Promise<PrCard>((resolve, reject) => {
    pr.then((pr) => {
      const card = {
        title: pr.data.title,
        body: pr.data.body,
        closed: pr.data.state === 'closed',
        merged: pr.data.merged,
        link: pr.data.html_url,
        draft: pr.data.draft ?? false,
      };
      redis.setItem(key, card, { ttl: ms('10min') })
        .then(() => {
          resolve(card);
        });
    })
      .catch(() => {
        reject(createError({ status: 400 }));
      });
  });
});
