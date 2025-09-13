import type { RouteObject } from 'react-router'
import App from '../App'
import AboutPage from '../pages/aboutPage'

export const routesConfig: RouteObject[] = [
  {
    index: true,
    element: <App />,
  },
  {
    path: 'about',
    element: <AboutPage />,
  },
  {
    path: 'others',
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: ':thing',
        element: <AboutPage />,
      },
      {
        path: 'info',
        element: <AboutPage />,
      },
    ],
  },
]
