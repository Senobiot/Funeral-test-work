type navTreeProps = {
  key: string;
  path: string;
  title: string;
  breadcrumb: boolean;
};

export const navTree: Array<navTreeProps> = [
  {
    key: 'organizations',
    path: '/',
    title: 'Organizations',
    breadcrumb: false,
  },
  {
    key: 'contarctors',
    path: '/contarctors',
    title: 'Contarctors',
    breadcrumb: false,
  },
  {
    key: 'clients',
    path: '/clients',
    title: 'clients',
    breadcrumb: false,
  },
];
