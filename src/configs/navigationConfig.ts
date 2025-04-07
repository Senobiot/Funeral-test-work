type navTreeProps = {
  key: string
  path: string
  title: string
  breadcrumb: boolean
  isActive?: boolean
  src: string
}

export const navTree: Array<navTreeProps> = [
  {
    key: 'organizations',
    path: '/',
    title: 'Organizations',
    breadcrumb: false,
    isActive: true,
    src: '/Company.svg',
  },
  {
    key: 'contarctors',
    path: '/contarctors',
    title: 'Contarctors',
    breadcrumb: false,
    src: '/Contractor.svg',
  },
  {
    key: 'clients',
    path: '/clients',
    title: 'clients',
    breadcrumb: false,
    src: '/Account.svg',
  },
]
