import React from "react";
import theme from "../../Theme/theme";
import Layout from "../../components/Layout/Layout";
import { motion } from "framer-motion";
import Image from "../../images/White_Bg.png";
import { Box, Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const Styles = {
    header: {
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "20px",
      marginTop: "30px",
      fontFamily: "Times New Roman",
      fontSize: "40px",
    },
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
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100vh",
              padding: theme.spacing(10),
              backgroundImage: `url(${Image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              [theme.breakpoints.down("lg")]: {
                backgroundPosition: "right",
              },
              [theme.breakpoints.down("md")]: {
                backgroundPosition: "right",
              },
              [theme.breakpoints.down("sm")]: {
                padding: theme.spacing(5),
                paddingTop: "5rem",
              },
            }}
          >
            <Typography
              variant="h2"
              component="div"
              sx={{
                fontWeight: "bold",
                textAlign: "start",
                marginBottom: "20px",
                fontFamily: "Times New Roman",
                textDecoration: "underline",
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              variant="h4"
              component="div"
              style={{ ...Styles.header }}
            >
              Personal Identification Information
            </Typography>
            <Typography>
              We may collect personal identification information from users in
              various ways, including when users visit our site, register, place
              an order, subscribe to the newsletter, respond to a survey, or
              fill out a form. This information may include names, email
              addresses, mailing addresses, phone numbers, and other relevant
              details. Users can choose to visit our site anonymously and may
              refuse to provide personal identification information, except when
              it might impact engagement in certain site-related activities.
            </Typography>

            <Typography
              variant="h4"
              component="div"
              style={{ ...Styles.header }}
            >
              Non-Personal Identification Information
            </Typography>
            <Typography>
              Whenever users interact with our site, we may collect non-personal
              identification information. This could include browser names,
              types of computers, and technical details about users'
              connections, such as operating systems and Internet service
              providers.
            </Typography>

            <Typography
              variant="h4"
              component="div"
              style={{ ...Styles.header }}
            >
              Web Browser Cookies
            </Typography>
            <Typography>
              Our site may use "cookies" to enhance user experience. Users may
              choose to set their web browser to refuse cookies or to alert them
              when cookies are being sent. However, this might limit some
              functionalities of the site.
            </Typography>

            <Typography
              variant="h4"
              component="div"
              style={{ ...Styles.header }}
            >
              How We Use Collected Information
            </Typography>
            <Typography>
              Hornet may collect and use users' personal information for various
              purposes:
              <ul>
                <li>To personalize user experience</li>
                <li>To improve our site</li>
                <li>To process payments</li>
                <li>To send periodic emails</li>
                <li>To run promotions, surveys, or other site features</li>
              </ul>
            </Typography>

            <Typography
              variant="h4"
              component="div"
              style={{ ...Styles.header }}
            >
              How We Protect Your Information
            </Typography>
            <Typography>
              We adopt appropriate data collection, storage, and processing
              practices and security measures to protect against unauthorized
              access, alteration, disclosure, or destruction of users' personal
              information, transaction data, and data stored on our site.
            </Typography>

            <Typography
              variant="h4"
              component="div"
              style={{ ...Styles.header }}
            >
              Sharing Your Personal Information
            </Typography>
            <Typography>
              We do not sell, trade, or rent users' personal identification
              information to others. We may share generic aggregated demographic
              information not linked to any personal identification information
              regarding visitors and users with our business partners, trusted
              affiliates, and advertisers for the purposes outlined above.
            </Typography>

            <Typography
              variant="h4"
              component="div"
              style={{ ...Styles.header }}
            >
              Changes to This Privacy Policy
            </Typography>
            <Typography>
              Hornet has the discretion to update this privacy policy at any
              time. When we do, we will revise the updated date at the bottom of
              this page. We encourage users to frequently check this page for
              any changes to stay informed about how we are helping to protect
              the personal information we collect.
            </Typography>

            <Typography
              variant="h4"
              component="div"
              style={{ ...Styles.header }}
            >
              Your Acceptance of These Terms
            </Typography>
            <Typography>
              By using this site, you signify your acceptance of this policy. If
              you do not agree to this policy, please refrain from using our
              site. Your continued use of the site following changes to this
              policy will be deemed your acceptance of those changes.
            </Typography>

            <Typography
              variant="h4"
              component="div"
              style={{ ...Styles.header }}
            >
              Contacting Us
            </Typography>
            <Typography>
              If you have any questions about this Privacy Policy, the practices
              of this site, or your dealings with this site, please contact us
              at<span> </span>
              <Link>souvikh@hornet.technology.</Link>
            </Typography>

            <Typography
              variant="h4"
              component="div"
              style={{ ...Styles.header }}
            >
              This document was last updated on 22nd of September 2023.
            </Typography>
          </Box>
        </Layout>
      </motion.div>
    </ThemeProvider>
  );
};

export default PrivacyPolicy;
