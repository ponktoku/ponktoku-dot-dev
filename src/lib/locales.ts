// Locale settings

export const DEFAULT_LOCALE_SETTING = "en";

export const LOCALES_SETTING: LocaleSetting = {
  en: {
    label: "English",
    // lang: "en",
  },
  ja: {
    label: "日本語",
    // lang: "ja",
  },
};

interface LocaleSetting {
  [key: Lowercase<string>]: {
    label: string;
    lang?: string;
    dir?: "rtl" | "ltr";
  };
}
