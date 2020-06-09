import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { AppLayout } from './AppLayout'

export const App = () => {
  return (
    <AppLayout
      drawerContent={
        <>
          <List>
            {['Lorem', 'Ipsum', 'Dolor sit', 'Amet'].map(text => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </>
      }
      mainContent={
        <Typography
          component="div"
          style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
        />
      }
    />
  )
}
