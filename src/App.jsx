import React, { useState } from 'react'
import { Box } from "@mui/material";
import Navbar from './component/Navbar';
import { Stack } from '@mui/system';
import Sidebar from './component/Sidebar';
import Feed from './component/Feed';
import Rightbar from './component/Rightbar';
import Add from './component/Add';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const App = () => {
  const [mode,setMode] = useState('light')

  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar/>
        <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Sidebar mode={mode} setMode={setMode}/>
        <Feed/>
        <Rightbar/>
        </Stack>
        <Add/>
    </Box>
    </ThemeProvider>
  )
}

export default App
