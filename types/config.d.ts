export {};

declare module 'nuxt/schema' {
  interface AppConfig {
    authorName: string;
    startYear: string;
    colors: {
      dark: {
        default: string;
        foreground: string;
      }[];
      light: {
        default: string;
        foreground: string;
      }[];
    };
    introduction: {
      authorName: string;
      avatar: string;
      bio: string | string[];
      description: string | string[];
      social: {
        icon: string;
        link: string;
      }[];
    };
    license: {
      title: string;
      url: string;
    };
  }
}
