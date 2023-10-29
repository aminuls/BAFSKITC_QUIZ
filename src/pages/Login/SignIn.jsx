import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom/dist";

function Copyright(props) {
   return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
         {"Copyright © "}
         <Link to="https://bafskitc.netlify.app">bafskitc.netlify.app</Link> {new Date().getFullYear()}
         {"."}
      </Typography>
   );
}

export default function SignIn() {
   //
   const [loginError, setLoginError] = useState(null);
   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm();

   const { logIn } = useContext(AuthContext);

   // redirect
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";
   const navigate = useNavigate();

   const handleLogin = (data) => {
      console.log(data);
      logIn(data.email, data.password)
         .then((result) => {
            const user = result.user;
            setLoginError(null);
            navigate(from, { replace: true });
            console.log(user);
         })
         .catch((error) => {
            console.log(error.message);
            setLoginError(error.message);
         });
   };

   return (
      <Container component="main" maxWidth="xs">
         <CssBaseline />
         <Box
            sx={{
               // marginTop: 8,
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
            }}
         >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
               <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
               Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit(handleLogin)} sx={{ mt: 1 }}>
               <TextField margin="normal" fullWidth label="Email Address" type="email" {...register("email", { required: "Email Address is required" })} autoComplete="email" autoFocus />
               {errors.email && (
                  <p role="alert" className="text-red-700 pl-1 pb-1 font-semibold">
                     {errors.email?.message}
                  </p>
               )}
               <TextField
                  margin="normal"
                  fullWidth
                  label="Password"
                  type="password"
                  {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be 6 characters or longers" } })}
                  autoComplete="current-password"
               />
               {(errors.password && (
                  <p role="alert" className="text-red-700 pl-1 pb-1 font-semibold">
                     {console.log(errors)}
                     {errors.password?.message}
                  </p>
               )) ||
                  (loginError && (
                     <p role="alert" className="text-red-700 pt-1 pl-1 font-semibold">
                        {loginError === "Firebase: Error (auth/invalid-login-credentials)."
                           ? "This email is not registered. Please Sign up"
                           : loginError === "Firebase: Error (auth/network-request-failed)."
                           ? "Your internet connection is too slow. Network ERROR"
                           : loginError}
                     </p>
                  ))}
               <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
               <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Sign In
               </Button>
               <Grid container>
                  <Grid item xs>
                     <Link to="/">Forgot password?</Link>
                  </Grid>
                  <Grid item>
                     <Link to="/join">{"Don't have an account? Sign Up"}</Link>
                  </Grid>
               </Grid>
            </Box>
         </Box>
         <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
   );
}
