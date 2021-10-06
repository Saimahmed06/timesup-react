
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

 function About(){
  return (

<div className="fone">
  <h1 >Contact us</h1>
  <div className="contact-form">

  
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error
          id="outlined-error"
          label="name"
          defaultValue=""
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="last name"
          defaultValue="last name"
       
        />
      </div>
      <div>
        <TextField
          error
          id="filled-error"
          label="Email"
          defaultValue="saim@hotmail.com"
          variant="filled"
        />
        <TextField
          error
          id="filled-error-helper-text"
          label="contact"
          defaultValue="+92xxxxxx"
    
          variant="filled"
        />
      </div>
      <div>
        <TextField
          error
          id="standard-error"
          label="order number"
          defaultValue="***00"
          variant="standard"
        />
        <TextField
          error
          id="standard-error-helper-text"
          label="city"
          defaultValue="karachi"
          variant="standard"
        />
      </div>
    </Box>
    
</div>
    </div>
  );
}







 




export default About;
