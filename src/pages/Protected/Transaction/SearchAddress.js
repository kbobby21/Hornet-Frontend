import React, { useState} from "react";
import {Box,Button,TextField,} from "@mui/material";
import theme from "../../../Theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import Layout from "../../../components/Layout/Layout";
import Image from "../../../images/Background5.jpg";
import { motion } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";


const SearchAddress =()=>{

  const [walletAddress, setWalletAddress] = useState("");
  const navigate = useNavigate();

  const handleAnalyse = () => {
    if (!walletAddress) {
      alert("Please enter your Wallet Address");
    } else if (/^[a-zA-Z0-9]{27,34}$/.test(walletAddress)) {
      navigate(`/searchdetail?wallet=${walletAddress}`);
    } else {
      alert("Please input a valid Wallet Address");
    }
  };
  
    
    


return(
  <ThemeProvider theme={theme}>
    <motion.div  initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:1}}>
        <Layout>
          <Box style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                    minHeight: "100vh",
                    backgroundImage: `url(${Image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"}}>
                
                <Box sx={{width: "50%",maxWidth: "700px",display: "flex",justifyContent: "center",alignItems: "center",}}>
            <Box
               style={{
               display: "flex",
               width: '830px',
               height: '65px',
               background: '#FFFFFF',
               borderRadius: '104px',
              boxShadow:"0px 0px 8px 4px #71797E"
              ,padding:"0.5rem"
               }}>
                <TextField
                   variant="standard"
                   placeholder="Wallet Address"
                   value={walletAddress}
                   onChange={(e) => setWalletAddress(e.target.value)}
                   sx={{
                      backgroundColor: theme.palette.secondary.main,
                      width: "100%",
                      color: "white",
                      borderRadius: "104px",
                      outlineColor:"#fff",
                      marginTop:"1rem",
                      marginLeft:"1.5rem",
                      mb:"0.5rem"
                        }}
                      />
                 <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center", mr:"1rem",ml:"1rem"}}>
                    <SearchIcon sx={{fontSize:"2rem"}}/>
                </Box>
            </Box>
            </Box>


         <Button
              style={{
                position: 'absolute',
                width: '220px',
                height: '50px',
                marginTop:"15rem",
                background: 'linear-gradient(270deg, #FFE249 6.69%, #B49701 74.02%)',
                boxShadow: '0px 8px 6px rgba(255, 226, 73, 0.15)',
                borderRadius: '104px',
                color:"#000",
                textTransform: 'capitalize', // Capitalize the first letter, make the rest lowercase
                fontWeight: 'bold',
                fontSize:"16px",
                fontFamily:"poppins" 
              }}
              onClick={handleAnalyse}
            >
              Analyse
            </Button>  
        </Box>
        </Layout>
    </motion.div>
  </ThemeProvider>
    );
};
export default SearchAddress;
