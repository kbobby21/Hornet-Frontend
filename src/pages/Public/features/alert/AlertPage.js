import React from "react";
import { Typography, Button, Box } from "@mui/material";
import theme from "../../../../Theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import Layout from "../../../../components/Layout/Layout";
import Image from "../../../../images/Background5.jpg";
import { motion } from "framer-motion";
import RingLoader from "../../../Protected/RingLoader";
import { Alert, Stack } from "@mui/material";
import {
  useDeleteNotificationsMutation,
  useGetNotificationsQuery,
} from "../../../../Service/api";

const AlertPage = () => {
  const {
    data: Data,
    isLoading: loading,
    refetch,
  } = useGetNotificationsQuery();
  const notificationsData = Data?.data || [];

  const [deleteNotification] = useDeleteNotificationsMutation();

  function formatTimestamp(timestamp) {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };

    return new Date(timestamp).toLocaleString(undefined, options);
  }

  const handleDeleteNotification = () => {
    deleteNotification()
      .then(() => {
        refetch();
      })
      .catch((error) => {
        console.error("Error deleting notification:", error);
      });
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
              backgroundImage: `url(${Image})`,
              padding: theme.spacing(5),
              backgroundSize: "cover",
              minHeight: "100vh",
              backgroundAttachment: "fixed",
              [theme.breakpoints.down("sm")]: {
                padding: theme.spacing(5),
              },
              flexDirection: "column",
              backgroundColor: "#f2f2f2",
              fontFamily: "Poppins, Arial, sans-serif",
            }}
          >
            <Box>
              {loading ? (
                <RingLoader />
              ) : (
                <Stack sx={{ width: "100%" }} spacing={2}>
                  {Array.isArray(notificationsData) &&
                    notificationsData.map((alert, index) => (
                      <Alert
                        sx={{
                          borderRadius: "1rem",
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                          boxShadow: "0px 0px 6px #ff0000",
                        }}
                        key={index}
                        severity="error"
                      >
                        <Typography
                          style={{
                            flex: 1,
                            fontFamily: theme.typography.fontFamily,
                            color: theme.palette.special.main,
                          }}
                        >
                          {alert.alert_type}
                        </Typography>
                        <Typography
                          style={{
                            flex: 1,
                            fontFamily: theme.typography.fontFamily,
                            color: theme.palette.special.main,
                          }}
                        >
                          {alert.alert_message}
                        </Typography>
                        <Typography
                          style={{
                            flex: 1,
                            fontFamily: theme.typography.fontFamily,
                            color: theme.palette.special.main,
                          }}
                        >
                          {formatTimestamp(alert.nt_time)}
                        </Typography>
                      </Alert>
                    ))}
                </Stack>
              )}
            </Box>
            <Button
              variant="contained"
              type="clear_all_notification"
              // onClick={() => deletePost()}
              onClick={handleDeleteNotification}
              style={{
                marginTop: "1rem",
                padding: "0.5rem",
                border: "none",
                borderRadius: "0.25rem",
                color: theme.palette.special.main,
                fontSize: "0.9rem",
                cursor: "pointer",
                transition: "backgroundColor 0.2s",
                "&:hover": {
                  backgroundColor: "#0069d9",
                },
              }}
            >
              clear all notifications
            </Button>
          </Box>
        </Layout>
      </motion.div>
    </ThemeProvider>
  );
};

export default AlertPage;
