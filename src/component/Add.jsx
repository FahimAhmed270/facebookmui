import { Box, Fab, Modal, Tooltip, Typography,styled, Avatar, TextField, ButtonGroup, Button } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Stack } from '@mui/system';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DateRangeIcon from '@mui/icons-material/DateRange';


const StyledModal = styled(Modal)({
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
})
const UserBox = styled(Box)({
  display:'flex',
  alignItems:'center',
  gap:'10px',
  marginBottom:'10px'
})

const Add = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
        <Tooltip onClick={e=>setOpen(true)} title="Create Post" sx={{position:'fixed', bottom:10, left:{xs:'calc(50% - 25px)', md:30}}}>
        <Fab color="primary" aria-label="add">
        <AddIcon />
        </Fab>
        </Tooltip>
        <StyledModal
          open={open}
          onClose={e=>setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <Box width={400} height={280} p={3} bgcolor={'background.default'} color={'text.primary'} borderRadius={3}>
          <Typography variant='h6' color='gray' textAlign='center'>Create Post</Typography>
          <UserBox>
            <Avatar><img src="https://material-ui.com/static/images/avatar/2.jpg" alt=""  /></Avatar>
            <Typography variant='span'>Joun Doe</Typography>
          </UserBox>
          <TextField
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
          sx={{width:'100%'}}
        />
        <Stack direction='row' gap={2} mt={2} mb={5}>
          <InsertEmoticonIcon color='primary'/>
          <PhotoCameraBackIcon color='secondary'/>
          <VideoSettingsIcon color='success'/>
          <PersonOutlineIcon color='error'/>
        </Stack>
        <ButtonGroup fullWidth variant="contained" >
          <Button>Post</Button>
          <Button sx={{width:'100px'}}><DateRangeIcon/></Button>
        </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}

export default Add
