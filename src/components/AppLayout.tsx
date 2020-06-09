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
import { DeveloperMode } from '@material-ui/icons'
import React, { ReactNode } from 'react'

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
      <AppBar position="sticky">
        <DeveloperMode />
        <Toolbar>
          <Typography variant="h6">React hands on</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerContainer}>{props.drawerContent}</div>
      </Drawer>
      <main className={classes.content}>
        <Container maxWidth="sm">{props.mainContent}</Container>
      </main>
    </div>
  )
}
