import { ThemeProvider } from "@emotion/react";
import React, { useState } from "react";
import theme from "../../Theme/theme";
import Layout from "../../components/Layout/Layout";
import { motion } from "framer-motion";
import Image from "../../images/HornetBg.png";
import { Box, TextField, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const Documentation = () => {
  const [value, setValue] = useState("1");
  const [code, setCode] = useState(
    "curl -sSL 'https://mempool.space/api/v1/difficulty-adjustment'"
  );
  const [Response, setResponse] = useState(`
  {
    progressPercent: 44.397234501112074,
    difficultyChange: 98.45932018381687,
    estimatedRetargetDate: 1627762478,
    remainingBlocks: 1121,
    remainingTime: 665977,
    previousRetarget: -4.807005268478962,
    nextRetargetHeight: 741888,
    timeAvg: 302328,
    timeOffset: 0
  }
`);

  const [Common, setCommon] = useState(`
<!DOCTYPE html>
<html>
  <head>
    <script src="https://mempool.space/mempool.js"></script>
    <script>
      const init = async () => {
        
        const { bitcoin: { difficulty } } = mempoolJS({
          hostname: 'mempool.space'
        });

        const difficultyAdjustment = await difficulty.getDifficultyAdjustment();

        document.getElementById("result").textContent = JSON.stringify(difficultyAdjustment, undefined, 2);
          
      };
      init();
    </script>
  </head>
  <body>
    <pre id="result"></pre>
  </body>
</html>

`);

  const [Package, setPackage] = useState(`
# npm
npm install @mempool/mempool.js --save

# yarn
yarn add @mempool/mempool.js
import mempoolJS from "@mempool/mempool.js";
`);

  const [Module, setModule] = useState(`
const init = async () => {
  
    const { bitcoin: { difficulty } } = mempoolJS({
      hostname: 'mempool.space'
    });
  
    const difficultyAdjustment = await difficulty.getDifficultyAdjustment();
    console.log(difficultyAdjustment);
            
  };
  
  init();
`);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        <Layout>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              padding: theme.spacing(5),
              backgroundImage: `url(${Image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              flexDirection: "column",
            }}
          >
            <Box sx={{ maxWidth: "270px", height: "46px", margin: "2rem" }}>
              <Typography
                sx={{
                  maxWidth: "270px",
                  height: "46px",
                  fontFamily: "Arial",
                  fontWeight: 400,
                  fontSize: "40px",
                  lineHeight: "46px",
                  color: "#fff",
                }}
              >
                Documentation
              </Typography>
            </Box>
            <Box
              sx={{
                maxWidth: "1050px",
                width: "100%",
                minHeight: "1835px",
                height: "100%",
                background: "#262626",
                borderRadius: "20px",
                flexDirection: "column",
                padding: "3rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "3rem",
                  [theme.breakpoints.down("sm")]: {
                    margin: "0rem",
                  },
                }}
              >
                <TextField
                  variant="standard"
                  placeholder="GET Dificulty Adjustment"
                  sx={{
                    borderRadius: "104px",
                    background: "#fff",
                    width: "894px",
                    height: "71px",
                    padding: "1.5rem 2rem",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "3rem",
                  flexDirection: "column",
                  [theme.breakpoints.down("sm")]: {
                    margin: "3rem 0rem",
                  },
                }}
              >
                <Typography sx={{ color: "#fff" }}>Endpoint</Typography>

                <Typography sx={{ color: "#fff", textDecoration: "underline" }}>
                  GET/api/v1/difficulty-adjustment
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "3rem",
                  flexDirection: "column",
                  [theme.breakpoints.down("sm")]: {
                    margin: "3rem 0rem",
                  },
                }}
              >
                <Typography sx={{ color: "#fff" }}>Description</Typography>

                <Typography sx={{ color: "#fff" }}>
                  Returns details about difficulty adjustment.
                </Typography>
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  maxWidth: "750px",
                  width: "100%",
                  height: "68px",
                  background: "#FFE249",
                  borderRadius: "20px 20px 0 0",
                  margin: "0rem 3rem",
                  [theme.breakpoints.down("md")]: {
                    maxWidth: "510px",
                  },
                  [theme.breakpoints.down("sm")]: {
                    width: "340px",
                    margin: "0rem 0rem",
                  },
                  [theme.breakpoints.down("xs")]: {
                    width: "220px",
                  },
                }}
              >
                <TabContext value={value}>
                  <TabList onChange={handleChange} sx={{ height: "68px" }}>
                    <Tab
                      label={
                        <span>
                          <span style={{ fontSize: "small" }}>c</span>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontSize: "inherit",
                            }}
                          >
                            URL
                          </span>
                        </span>
                      }
                      value="1"
                      sx={{
                        position: "absolute",
                        width: "240px",
                        height: "68px",
                        color: "#000",
                        textTransform: "capitalize",
                        background: "#FFFFFF",
                        borderRadius: "20px 20px 0 0",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        [theme.breakpoints.down("md")]: {
                          width: "170px",
                        },
                        [theme.breakpoints.down("sm")]: {
                          width: "113.3px",
                        },
                        [theme.breakpoints.down("xs")]: {
                          width: "35px",
                        },
                      }}
                    />
                    <Tab
                      label="CommonJS"
                      value="2"
                      sx={{
                        position: "absolute",
                        width: "240px",
                        height: "68px",
                        color: "#000",
                        left: "240px",
                        textTransform: "capitalize",
                        background: "#FFE249",
                        borderRadius: "20px 20px 0 0",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        [theme.breakpoints.down("md")]: {
                          width: "170px",
                          left: "170px",
                        },
                        [theme.breakpoints.down("sm")]: {
                          width: "113.3px",
                          left: "113.3px",
                        },
                        [theme.breakpoints.down("xs")]: {
                          width: "40px",
                          left: "70px",
                        },
                      }}
                    />

                    <Tab
                      label="ES Module"
                      value="3"
                      sx={{
                        position: "absolute",
                        width: "240px",
                        height: "68px",
                        color: "#000",
                        left: "480px",
                        textTransform: "capitalize",
                        background: "#FFE249",
                        borderRadius: "20px 20px 0 0",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        [theme.breakpoints.down("md")]: {
                          width: "170px",
                          left: "340px",
                        },
                        [theme.breakpoints.down("sm")]: {
                          width: "113.3px",
                          left: "226.6px",
                        },
                        [theme.breakpoints.down("xs")]: {
                          width: "40px",
                          left: "140px",
                        },
                      }}
                    />
                  </TabList>

                  <TabPanel value="1">
                    <Box
                      sx={{
                        position: "absolute",
                        maxWidth: "50rem",
                        width: "100%",
                        height: "439px",
                        top: "76px",
                        left: "-2px",
                        borderRadius: "0 20px 20px 20px",
                        [theme.breakpoints.down("md")]: {
                          maxWidth: "480px",
                        },
                        [theme.breakpoints.down("sm")]: {
                          maxWidth: "340px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          maxWidth: "211px",
                          height: "37px",
                          fontFamily: "Arial",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: "32px",
                          lineHeight: "37px",
                          color: "#fff",
                          margin: "1rem 0rem",
                        }}
                      >
                        Code Example
                      </Typography>
                      <TextareaAutosize
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        rowsMin={10}
                        style={{
                          maxWidth: "922px",
                          width: "100%",
                          fontSize: "20px",
                          height: "80px",
                          margin: "0rem 0rem",
                          background: "#797979",
                          fontFamily: "Arial",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "28px",
                          color: "#ffe249",
                          textAlign: "initial",
                          padding: "1.5rem 1rem",
                        }}
                      />
                      <Typography
                        sx={{
                          maxWidth: "211px",
                          height: "37px",
                          fontFamily: "Arial",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: "32px",
                          lineHeight: "37px",
                          color: "#fff",
                          marginTop: "2rem",
                          marginBottom: "1rem",
                        }}
                      >
                        Response
                      </Typography>

                      <TextareaAutosize
                        value={Response}
                        onChange={(e) => setResponse(e.target.value)}
                        rowsMin={10}
                        style={{
                          maxWidth: "922px",
                          width: "100%",
                          fontSize: "20px",
                          height: "360px",
                          margin: "0rem 0rem",
                          background: "#797979",
                          fontFamily: "Arial",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "28px",
                          color: "#ffe249",
                        }}
                      />
                    </Box>
                  </TabPanel>

                  <TabPanel value="2">
                    <Box
                      sx={{
                        position: "absolute",
                        maxWidth: "50rem",
                        width: "100%",
                        height: "439px",
                        top: "76px",
                        left: "-2px",
                        borderRadius: "0 20px 20px 20px",
                        [theme.breakpoints.down("md")]: {
                          maxWidth: "480px",
                        },
                        [theme.breakpoints.down("sm")]: {
                          maxWidth: "340px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          maxWidth: "211px",
                          height: "37px",
                          fontFamily: "Arial",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: "32px",
                          lineHeight: "37px",
                          color: "#fff",
                          marginTop: "1rem",
                        }}
                      >
                        Code Example
                      </Typography>
                      <Typography sx={{ color: "#fff" }}>
                        GitHub Repo
                      </Typography>
                      <TextareaAutosize
                        value={Common}
                        onChange={(e) => setCommon(e.target.value)}
                        rowsMin={10}
                        style={{
                          maxWidth: "922px",
                          width: "100%",
                          fontSize: "20px",
                          height: "735px",
                          margin: "0rem 0rem",
                          background: "#797979",
                          fontFamily: "Arial",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "28px",
                          color: "#ffe249",
                          padding: "0rem 1rem",
                        }}
                      />

                      <Typography
                        sx={{
                          maxWidth: "211px",
                          height: "37px",
                          fontFamily: "Arial",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: "32px",
                          lineHeight: "37px",
                          color: "#fff",
                          marginTop: "2rem",
                          marginBottom: "1rem",
                        }}
                      >
                        Response
                      </Typography>

                      <TextareaAutosize
                        value={Response}
                        onChange={(e) => setResponse(e.target.value)}
                        rowsMin={10}
                        style={{
                          maxWidth: "922px",
                          width: "100%",
                          fontSize: "20px",
                          height: "360px",
                          margin: "0rem 0rem",
                          background: "#797979",
                          fontFamily: "Arial",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "28px",
                          color: "#ffe249",
                        }}
                      />
                    </Box>
                  </TabPanel>

                  <TabPanel value="3">
                    <Box
                      sx={{
                        position: "absolute",
                        maxWidth: "50rem",
                        width: "100%",
                        height: "439px",
                        top: "76px",
                        left: "-2px",
                        borderRadius: "0 20px 20px 20px",
                        [theme.breakpoints.down("md")]: {
                          maxWidth: "480px",
                        },
                        [theme.breakpoints.down("sm")]: {
                          maxWidth: "340px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          maxWidth: "250px",
                          height: "37px",
                          fontFamily: "Arial",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: "32px",
                          lineHeight: "37px",
                          color: "#fff",
                          marginTop: "1rem",
                        }}
                      >
                        Install Package
                      </Typography>
                      <Typography sx={{ color: "#fff" }}>
                        GitHub Repo <span> | </span>
                        NPM Package
                      </Typography>
                      <TextareaAutosize
                        value={Package}
                        onChange={(e) => setPackage(e.target.value)}
                        rowsMin={10}
                        style={{
                          maxWidth: "922px",
                          width: "100%",
                          fontSize: "20px",
                          height: "208px",
                          margin: "0rem 0rem",
                          background: "#797979",
                          fontFamily: "Arial",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "28px",
                          color: "#ffe249",
                          padding: "0rem 1rem",
                        }}
                      />

                      <Typography
                        sx={{
                          maxWidth: "211px",
                          height: "37px",
                          fontFamily: "Arial",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: "32px",
                          lineHeight: "37px",
                          color: "#fff",
                          marginTop: "2rem",
                          marginBottom: "1rem",
                        }}
                      >
                        Code Example
                      </Typography>

                      <TextareaAutosize
                        value={Module}
                        onChange={(e) => setModule(e.target.value)}
                        rowsMin={10}
                        style={{
                          maxWidth: "922px",
                          width: "100%",
                          fontSize: "20px",
                          height: "410px",
                          margin: "0rem 0rem",
                          background: "#797979",
                          fontFamily: "Arial",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "28px",
                          color: "#ffe249",
                          padding: "1rem",
                        }}
                      />

                      <Typography
                        sx={{
                          maxWidth: "211px",
                          height: "37px",
                          fontFamily: "Arial",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: "32px",
                          lineHeight: "37px",
                          color: "#fff",
                          marginTop: "2rem",
                          marginBottom: "1rem",
                        }}
                      >
                        Response
                      </Typography>

                      <TextareaAutosize
                        value={Response}
                        onChange={(e) => setResponse(e.target.value)}
                        rowsMin={10}
                        style={{
                          maxWidth: "922px",
                          width: "100%",
                          fontSize: "20px",
                          height: "360px",
                          margin: "0rem 0rem",
                          background: "#797979",
                          fontFamily: "Arial",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "28px",
                          color: "#ffe249",
                        }}
                      />
                    </Box>
                  </TabPanel>
                </TabContext>
              </Box>
            </Box>
          </Box>
        </Layout>
      </motion.div>
    </ThemeProvider>
  );
};
export default Documentation;
