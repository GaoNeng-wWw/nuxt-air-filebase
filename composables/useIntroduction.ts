import icons from '@/components/icon';

export async function useIntroduction() {
  const { data, status } = useAsyncData('introduction', () => {
    return queryCollection('introduction').first();
  });
  const introduction = computed(() => data.value);
  const socialItems = computed(() => {
    if (!introduction.value?.author.social) {
      return [];
    }
    return introduction.value.author.social.map(({ icon, link }) => {
      if (icon in icons) {
        const iconComponent = icons[icon as keyof typeof icons];
        return {
          icon: iconComponent,
          link,
        };
      }
      return {
        icon: null,
        link,
      };
    });
  });
  const bio = computed(() => {
    const maybeBio = introduction.value?.author.bio ?? '';
    if (Array.isArray(maybeBio)) {
      return randomChioce(maybeBio);
    } else if (isUrl(maybeBio)) {
      return $fetch<string>(maybeBio)
        .then(value => value);
    }
    return maybeBio;
  });
  const author = computed(() => introduction.value?.author);
  return { socialItems, bio, author, introduction, status, data };
}
