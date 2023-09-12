interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Posts',
    href: '/#posts',
  },
  {
    label: 'Projects',
    href: '/#projects',
  },
  {
    label: 'About Me',
    href: '/#about-me',
  },
];
