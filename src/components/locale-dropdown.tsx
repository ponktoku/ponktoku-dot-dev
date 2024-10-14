import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { HeroiconsLanguage } from "./ui/icons";
import { getLocalePaths, LOCALES } from "@/lib/i18n";

// Use optional currentLocale prop for locale text in button (not used otherwise)
type LocaleDropdownProps = {
  url: URL;
  currentLocale?: string;
};

// export default function LocaleDropdown({
//   url,
//   currentLocale,
// }: LocaleDropdownProps) {
//   const handleLocaleChange = (path: string, lang: string) => {
//     // Avoid unnecessary reload if user selects the current language
//     if (url.pathname === `/${lang}/`) return;

//     // Save the selected language to localStorage
//     localStorage.setItem("selectedLang", lang);

//     // Ensure we strip out any potential .html suffix from the path
//     const newPath = path.replace(/\.html$/, "").endsWith("/")
//       ? path
//       : `${path}/`;

//     // Redirect to the new path
//     window.location.href = newPath;
//   };

//   console.log(getLocalePaths(url));

//   return (
//     <DropdownMenu modal={false}>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" size="icon">
//           <HeroiconsLanguage className="h-5 w-5" />
//           <span className="sr-only">select language</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         {getLocalePaths(url).map(({ path, lang }) => (
//           <DropdownMenuItem
//             key={lang}
//             className="justify-between capitalize"
//             onClick={() => handleLocaleChange(path, lang)}
//           >
//             {LOCALES[lang].label}
//             {(path === url.pathname ||
//               url.pathname === `/${lang}` ||
//               url.pathname === `/${lang}/`) && <DotFilledIcon />}
//           </DropdownMenuItem>
//         ))}
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

// 2 below

export default function LocaleDropdown({
  url,
  currentLocale,
}: LocaleDropdownProps) {
  const handleLocaleChange = (path: string, lang: string) => {
    localStorage.setItem("selectedLang", lang);
    const newPath = path === "/" ? `/${lang}/` : path; // Handle homepage
    window.location.href = newPath;
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
            {(path === url.pathname || url.pathname === `/${lang}`) && (
              <DotFilledIcon />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// 3 below

// export default function LocaleDropdown({
//   url,
//   currentLocale,
// }: LocaleDropdownProps) {
//   const handleLocaleChange = (path: string, lang: string) => {
//     localStorage.setItem("selectedLang", lang);
//     window.location.href = path;
//   };

//   console.log("Current pathname:", url.pathname);
//   console.log(getLocalePaths(url));

//   return (
//     <DropdownMenu modal={false}>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" size="icon">
//           <HeroiconsLanguage className="h-5 w-5" />
//           <span className="sr-only">select language</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         {getLocalePaths(url).map(({ path, lang }) => (
//           <DropdownMenuItem
//             key={lang}
//             className="justify-between capitalize"
//             onClick={() => handleLocaleChange(path, lang)}
//           >
//             {LOCALES[lang].label}
//             {path === url.pathname && <DotFilledIcon />}
//           </DropdownMenuItem>
//         ))}
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
