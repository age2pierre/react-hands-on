import {
  AppBar,
  Container,
  createStyles,
  CssBaseline,
  Drawer,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { PanTool } from '@material-ui/icons'
import React, { ReactNode } from 'react'

import { NavButtons } from './routes'

const DRAWER_WIDTH = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
    },
    drawerPaper: {
      width: DRAWER_WIDTH,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    title: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(3),
    },
  }),
)

export const AppLayout = (props: {
  drawerContent: ReactNode
  mainContent: ReactNode
}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <PanTool />
          <Typography className={classes.title} variant="h6">
            on React
          </Typography>
          <NavButtons />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Toolbar />
        <div className={classes.drawerContainer}>{props.drawerContent}</div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Container maxWidth="md">{props.mainContent}</Container>
      </main>
    </div>
  )
}
