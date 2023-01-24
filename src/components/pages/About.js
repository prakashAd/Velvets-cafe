import {
    Typography,
    Card,
    CardMedia,
    CardActions,
    CardContent,
    Button,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import React from "react";
  import Navbar from "../layout/Navbar";
  
  function About() {
    return (
      <>
        <Navbar />
  
        <Box backgroundColor={"cornsilk"} p={"25px"} textAlign='center'>
          <Typography
            variant="h4"
            sx={{ textDecoration: "underline" }}
            color="success.light"
            textAlign={"center"}
          >
            About us
          </Typography>
  
          <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-evenly"}>
            <Card sx={{ maxWidth: 500}}>
              <CardMedia
                component="img"
                height="140" width="100"  
                image="../slider images/velvets logo.png"
                alt="Velvets Cafe"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 About us
                </Typography>
                <Typography variant="body2" color="text.secondary">
               Greetings from Velvets cafe .Velvet Lounge & Bar situated at the heart of Jhamsikhel providing quality foods with excellent service, having spacious Lounge & Bar with Live performance to ensure that our valuable customers will have a " Relaxing Time".

               PRICE RANGE
               NPR 50 - NPR 1,000
               CUISINES
              Italian, Chinese, Indian, Asian, Nepalese
                </Typography>
              </CardContent>
              <CardActions>
               
              </CardActions>
            </Card>          
          </Box>
        </Box>
      </>
    );
  }
  
  export default About;
  