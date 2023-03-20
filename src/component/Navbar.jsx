import styled from '@emotion/styled'
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import { Box } from '@mui/system';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const StyledToolbar = styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between'
})

const Search = styled('div')(({theme})=>({
  backgroundColor:'white',
  padding:'0 10px',
  borderRadius: '5px',
  width:'40%'
}))

const IconBox = styled(Box)(({theme})=>({
  display:'none',
  alignItems:'center',
  gap:'20px',
  [theme.breakpoints.up('sm')]:{
    display:'flex'
  }
}))

const UserBox = styled(Box)(({theme})=>({
  display:'flex',
  alignItems:'center',
  gap:'10px',
  [theme.breakpoints.up('sm')]:{
    display:'none'
  }
}))


const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:'none', sm:'block'}}}>FACEBOOK</Typography>
        <PetsIcon sx={{display:{xs:'block', sm:'none'}}}/>
        <Search> <InputBase placeholder='Search...'/> </Search>
        <IconBox>
          <Badge badgeContent={4} color="error">
            <MailOutlineIcon/>
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsNoneIcon/>
          </Badge>
          <Avatar onClick={(e)=>setOpen(true)} sx={{width:35, height:35}}src="https://material-ui.com/static/images/avatar/1.jpg" />
        </IconBox>
        <UserBox>
        <Avatar onClick={(e)=>setOpen(true)} sx={{width:30, height:30}}src="https://material-ui.com/static/images/avatar/1.jpg" />
        <Typography variant='span'>Joun</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
