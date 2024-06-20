import { ThemeProvider } from "@emotion/react";
import React from "react";
import theme from "../../Theme/theme";
import { motion } from "framer-motion";

import Content from "./Content";

const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        <Content />
      </motion.div>
    </ThemeProvider>
  );
};

export default About;
