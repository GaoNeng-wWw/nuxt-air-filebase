export {};

declare global {
  interface Post {
    id: string;
    title: string;
    createAt: string;
    categories: string[];
  }
}
