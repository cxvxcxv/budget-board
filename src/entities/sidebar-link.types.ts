import type { LucideIcon } from 'lucide-react';

interface ISidebarBase {
  name: string;
  icon: LucideIcon;
}

interface ISidebarSubLink {
  name: string;
  path: string;
}

export type ISidebarLink =
  | (ISidebarBase & { path: string; subLinks?: never })
  | (ISidebarBase & { subLinks: ISidebarSubLink[]; path?: never });
