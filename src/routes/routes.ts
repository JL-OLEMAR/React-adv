import { lazy, LazyExoticComponent } from 'react'

import { NoLazy } from '../01-lazyload/pages/NoLazy'

type JSXComponent = () => JSX.Element
interface Route {
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
  path: string
  to: string
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'
    )
)

export const routes: Route[] = [
  {
    Component: LazyLayout,
    name: 'LazyLayout-Dashboard',
    path: '/lazyLayout/*', // /* is for all children routes
    to: '/lazyLayout'
  },
  {
    Component: NoLazy,
    name: 'NoLazy',
    path: '/no-lazy',
    to: '/no-lazy'
  }
]
