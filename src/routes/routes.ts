import { lazy, LazyExoticComponent } from 'react'

import { NoLazy } from '../01-lazyload/pages/NoLazy'

type JSXComponent = () => JSX.Element

interface Route {
  path: string
  name: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
  children?: Route[]
}

export const routes: Route[] = [
  {
    path: '/lazyload',
    name: 'LazyLoading Nested',
    Component: lazy(
      async () =>
        await import(
          /* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'
        )
    )
  },
  {
    path: '/no-lazy',
    name: 'No Lazy loading',
    Component: NoLazy
  }
]
