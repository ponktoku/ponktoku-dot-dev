import { useState, useEffect } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import * as Icons from "./ui/icons";

interface IconLinkProps {
  iconName: keyof typeof Icons;
  tooltipText: string;
  link: string;
  openNewTab?: boolean;
}

export default function IconLink({
  iconName,
  tooltipText,
  link,
  openNewTab,
}: IconLinkProps) {
  const [Icon, setIcon] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    setIcon(() => Icons[iconName]);
  }, [iconName]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <a
            href={link}
            {...(openNewTab
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <Button variant="ghost" size="icon">
              {Icon && <Icon />}
            </Button>
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
