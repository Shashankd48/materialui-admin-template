import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  makeStyles,
  Paper,
} from "@material-ui/core";
import FacebookIcon from "src/icons/Facebook";
import GoogleIcon from "src/icons/Google";
import Page from "src/components/Page";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const LoginView = () => {
  const classes = useStyles();
  // const { mobileNumber, setState } = useState(null);
  const navigate = useNavigate();

  return (
    <Page className={classes.root} title="Login">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              mobileNumber: "",
            }}
            validationSchema={Yup.object().shape({
              mobileNumber: Yup.string()
                .min(10)
                .max(10)
                .required("Please enter your mobile no!"),
            })}
            onSubmit={() => {
              navigate("/app/dashboard", { replace: true });
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box component={Paper} p={3}>
                  <Box mb={3}>
                    <Typography color="textPrimary" variant="h2" align="center">
                      Login
                    </Typography>
                  </Box>
                  <Box mt={3} mb={1}>
                    <Typography
                      align="center"
                      color="textSecondary"
                      variant="body1"
                    >
                      Login to Mimansaa admin dashboard.
                    </Typography>
                  </Box>
                  <TextField
                    error={Boolean(touched.mobileNumber && errors.mobileNumber)}
                    fullWidth
                    helperText={touched.mobileNumber && errors.mobileNumber}
                    label="Mobile Number"
                    margin="normal"
                    name="mobileNumber"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    value={values.mobileNumber}
                    variant="outlined"
                  />
                  <Box my={2}>
                    <Button
                      color="primary"
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Sign in now
                    </Button>
                  </Box>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default LoginView;
