import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GlobeIcon, DotFilledIcon } from "@radix-ui/react-icons";
import { HeroiconsLanguage } from "./ui/icons";
import { getLocalePaths, LOCALES } from "@/lib/i18n";

// Use optional currentLocale prop for locale text in button (not used otherwise)
type LocaleDropdownProps = {
  url: URL;
  currentLocale?: string;
};

export default function LocaleDropdown({
  url,
  currentLocale,
}: LocaleDropdownProps) {
  const handleLocaleChange = (path: string, lang: string) => {
    localStorage.setItem("selectedLang", lang);
    window.location.href = path;
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <HeroiconsLanguage className="h-5 w-5" />
          <span className="sr-only">select language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {getLocalePaths(url).map(({ path, lang }) => (
          <DropdownMenuItem
            key={lang}
            className="justify-between capitalize"
            onClick={() => handleLocaleChange(path, lang)}
          >
            {LOCALES[lang].label}
            {path === url.pathname && <DotFilledIcon />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
