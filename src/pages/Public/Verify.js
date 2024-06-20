import React from "react"
import { Typography,  Box, Button, Card, CardContent } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import { useNavigate } from 'react-router-dom';
import theme from '../../Theme/theme';
import { ThemeProvider } from '@mui/material/styles';
import { motion } from "framer-motion";
import Layout from '../../components/Layout/Layout';

const Verify = () =>{
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };
    return (
      <ThemeProvider theme={theme}>
        <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:1}}
    >
        <Layout>
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          bgcolor: theme.palette.special.main, 
          padding:theme.spacing(5),
          [theme.breakpoints.down("sm")]:{
            padding:theme.spacing(5)
          }
        }}
        >
        <Box
            sx={{
              alignItems: 'center',
              bgcolor: theme.palette.special.main,
            }}
          >
            <Card variant='outlined' style={{ border:"2px solid #DAA520" ,
            borderRadius:30
            }}>
              <CardContent>
              <Box style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2rem" }}>
                <VerifiedIcon color="success" style={{ fontSize: "3rem" }} />
                </Box>
                <Typography
                  variant="h5"
                  color="success"
                  style={{
                    color: "green", // Change the color to your desired color
                    fontFamily: theme.typography.fontFamily, 
                    justifyContent:'center',
                    textAlign:'center',
                    marginTop:"2rem",'&:hover':{
                      backgroundColor:theme.palette.primary.main
                    }
                  }}
                >
                  You've been sucessfully verified. Please log in to continue.
                </Typography>
                <Box style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2rem" }}>
                <Button onClick={handleLoginClick}
                 sx={{ mt: 3, bgcolor: theme.palette.primary.main, color:theme.palette.special.main,'&:hover': {
                backgroundColor: theme.palette.primary.main }}}>
                  Login
                </Button>
               
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
        </Layout>
        </motion.div>
      </ThemeProvider>
      );
    };
export default Verify;