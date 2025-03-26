// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string
  href: string
  noLink?: true // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[]
}

export const ROUTES: EachRoute[] = [
  {
    title: 'OER Lab',
    href: '/get-started',
    noLink: true,
    items: [
      { title: 'Overview', href: '/overview' },
      { title: 'Quick Start Guide', href: '/quick-start-guide' },
    ],
  },
  {
    title: 'Pressbooks',
    href: '/pressbooks',
    noLink: true,
    items: [
      {
        title: 'Overview',
        href: '/overview',
      },
      {
        title: 'Styling',
        href: '/styling',
        noLink: true,
        items: [
          { title: 'Introduction', href: '/introduction' },
          { title: 'Usage', href: '/usage' },
          {
            title: 'Attributes',
            href: '/attributes',
            noLink: true,
            items: [
              { title: 'Display', href: '/display' },
              { title: 'Spacing', href: '/spacing' },
            ],
          },
          {
            title: 'Components',
            href: '/components',
            items: [
              { title: 'Headings', href: '/tabs' },
              { title: 'Accordion', href: '/stepper' },
            ],
          },
        ],
      },
    ],
  },
]

type Page = { title: string; href: string }

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = []
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href })
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` }
    ans.push(...getRecurrsiveAllLinks(temp))
  })
  return ans
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat()
