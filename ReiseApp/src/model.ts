export const navItems: NavItem[] = [
  { name: 'Hjem', path: '/' },
  { name: 'Om oss', path: '/om' },
  { name: 'Kontakt', path: '/kontakt' },
  {
    name: 'Reise',
    path: '/fly',
    subItems: [
      { name: 'Hotell', path: '/hotell' },
      { name: 'Leiebil', path: '/leiebil' },
      { name: 'Pakkereiser', path: '/pakkereiser' },
      { name: 'Reisetips', path: '/reisetips' },
    ],
  },
  {
    name: 'Min Konto',
    path: '/min-konto',
    subItems: [
      { name: 'Logg inn', path: '/logg-inn' },
      { name: 'Registrer', path: '/registrer' }
    ],
  },
];

import type { NavItem } from "./Type";