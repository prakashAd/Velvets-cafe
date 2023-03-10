import React from 'react'
import { Typography ,Box,TextField,Button} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import Navbar from '../layout/Navbar'

function Contact() {
  return (
    <>
    <Navbar/>
    <h3  className='conrtainer text-center'>CONTACT US</h3>
     <Box className='container  p-5 m-auto mt-5'>
      <Box className='top' display='flex'>
      <Box className='Address'maxWidth={345} p={5}>
      <Typography variant='h4'color={'dark.light'} >
        Velvets cafe
          </Typography>  
        
          <Typography variant='h5'color={'dark.light'} sx={{textDecoration:'underline'}}>
           Address:
          </Typography>        
               
          <Typography variant='h6'color={'dark.light'}>
          Kathmandu,Nepal
          </Typography>        
          <Typography variant='h6'color={'dark.light'} >
           Phone no:014387079
          </Typography>  
          <Typography variant='h6'color={'dark.light'} >
           Email:velvetscafe123@gmail.com
          </Typography>  <Typography variant='h6'color={'dark.light'} sx={{textDecoration:'underline'}}>
          Website:www.velvetscafe123.com.np
          </Typography>        

      
    </Box>
    <Box className='contact-form'maxWidth={'345'} p={5} >
       
        <Typography>
        Contact form
      
        <TextField label="Email" variant="outlined" placeholder='Enter your email'fullWidth autoComplete='off'helperText='required' color='primary' multiline required Size='small' margin='normal'/>
        <TextField label="Subject" variant="outlined"placeholder='Subject you want to write'fullWidth autoComplete='off'helperText='required' color='primary' multiline required Size='small' margin='normal'/>
        <TextField label="Body" variant="outlined"placeholder='Type here'fullWidth autoComplete='off'helperText='required' color='primary' multiline required Size='small' margin='normal' maxRows={5} minRows={5}/>
        <Button variant ='contained'color='success'
         startIcon= {<SendIcon/>}>Send</Button>
        </Typography>
    </Box>

      </Box>

     </Box>

    <Box backgroundColor='white' className='m-5' borderRadius={3} boxShadow={3} p={5}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.987389321713!2d85.29901623144302!3d27.748390475519948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18cda6cab503%3A0xc6e679a984ca3452!2sLambagar%2C%20Tarakeshwar%2044600!5e0!3m2!1sen!2snp!4v1671516394447!5m2!1sen!2snp" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </Box> 

    </>
  )
}

export default Contact