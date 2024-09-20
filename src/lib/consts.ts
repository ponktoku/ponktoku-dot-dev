// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "ponktoku.dev";
export const SITE_DESCRIPTION = "Danny Bao's Personal Website";

// Locale constants

export const DEFAULT_LOCALE_SETTING = "en";

export const LOCALES_SETTING: LocaleSetting = {
  en: {
    label: "English",
  },
  ja: {
    label: "日本語",
  },
};

interface LocaleSetting {
  [key: Lowercase<string>]: {
    label: string;
    lang?: string;
    dir?: "rtl" | "ltr";
  };
}
