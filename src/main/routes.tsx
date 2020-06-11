import { IconButton, List, ListItem, ListItemText } from '@material-ui/core'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'
import React from 'react'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'

import HelloWorld from '../pages/hello-world.mdx'
import Intro from '../pages/intro.mdx'

export interface PageDef {
  path: string
  component: () => JSX.Element
  icon?: string
  title?: string
}

export const PAGES: PageDef[] = [
  {
    path: '/intro',
    component: () => <Intro />,
    title: 'Intro to React',
  },
  {
    path: '/helloWorld',
    component: () => <HelloWorld />,
    title: 'Hello world, a minimal app',
  },
]

export const PageRouter = () => {
  return (
    <Switch>
      {PAGES.map(def => {
        return (
          <Route
            path={def.path}
            key={def.path}
            render={() => <def.component />}
          />
        )
      })}
    </Switch>
  )
}

export const PageNavMenu = () => {
  const history = useHistory()
  const location = useLocation()
  return (
    <List>
      {PAGES.map(def => (
        <ListItem
          button={true}
          key={def.path}
          onClick={() => history.push(def.path)}
          selected={location.pathname === def.path}
        >
          <ListItemText primary={def?.title ?? def.path} />
        </ListItem>
      ))}
    </List>
  )
}

export const NavButtons = () => {
  const history = useHistory()
  const location = useLocation()
  return (
    <>
      <IconButton
        onClick={() => {
          const toIndex =
            PAGES.findIndex(def => def.path === location.pathname) - 1
          history.push(PAGES[toIndex >= 0 ? toIndex : 0]?.path)
        }}
      >
        <ChevronLeft />
      </IconButton>
      <IconButton
        onClick={() => {
          const toIndex =
            PAGES.findIndex(def => def.path === location.pathname) + 1
          history.push(
            PAGES[toIndex <= PAGES.length - 1 ? toIndex : PAGES.length - 1]
              ?.path,
          )
        }}
      >
        <ChevronRight />
      </IconButton>
    </>
  )
}
