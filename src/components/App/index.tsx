import React, { memo, useState } from 'react'

import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'

const HEADER_HEIGHT = 60
const DRAWER_WIDTH = 240

function App(): React.ReactElement {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const sm = useMediaQuery(theme.breakpoints.up('sm'))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflowY: 'hidden' }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: (theme) => theme.palette.primary.dark
        }}
      >
        <Toolbar variant="dense" sx={{ height: HEADER_HEIGHT }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Header
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: sm ? 'none' : 'block',
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
              borderRight: 'none',
              backgroundColor: (theme) => theme.palette.grey[900],
              color: (theme) => theme.palette.common.white
            }
          }}
        >
          <Box sx={{ p: 3, marginTop: `${HEADER_HEIGHT}px` }}>{`temporary`}</Box>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: sm ? 'block' : 'none',
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
              borderRight: 'none',
              backgroundColor: (theme) => theme.palette.grey[900],
              color: (theme) => theme.palette.common.white
            }
          }}
          open
        >
          <Box sx={{ p: 3, marginTop: `${HEADER_HEIGHT}px` }}>{`permanent`}</Box>
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: `${HEADER_HEIGHT}px`,
          overflowY: 'auto',
          backgroundColor: (theme) => theme.palette.grey[700],
          color: (theme) => theme.palette.common.white
        }}
      >
        {Array.from({ length: 5 }, (v, i) => i).map((_, index) => (
          <Typography key={index} paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
        ))}
      </Box>
    </Box>
  )
}

export default memo(App)
