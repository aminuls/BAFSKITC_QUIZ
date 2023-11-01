import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";

function Copyright(props) {
   return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
         {"Copyright © "}
         <Link to="https://bafskitc.netlify.app">bafskitc.netlify.app</Link> {new Date().getFullYear()}
         {"."}
      </Typography>
   );
}

export default function SignUp() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const [enabledButton, setEnabledButton] = useState(true);
   const [signUpError, setSignUpError] = useState(null);
   const { createUser, updateUser } = useContext(AuthContext);
   const navigate = useNavigate();
   const handleSignUp = (data) => {
      setEnabledButton(false);
      setSignUpError(null);
      createUser(data.email, data.password)
         .then((result) => {
            const user = result.user;
            console.log(user, data);
            const userInfo = {
               displayName: `${data.first_name} ${data.last_name}`,
            };
            updateUser(userInfo)
               .then(() => {
                  saveUserData(data.first_name, data.last_name, data.email, data.tel, data.social, data.year, data.version, data.section, data.roll);
                  console.log(userInfo);
                  console.log(user);
                  navigate("/");
               })
               .catch((error) => console.error(error));
         })
         .catch((error) => {
            setSignUpError(error.message);
            console.error(error.message);
         });
      setEnabledButton(true);
   };
   const saveUserData = (firstName, lastName, email, phone, social = "Not given", year, version, section, roll) => {
      const user = {
         firstName,
         lastName,
         email,
         social,
         phone,
         year,
         version,
         section,
         roll,
      };
      fetch("https://bafskitcserver.up.railway.app/users", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(user),
      })
         .then((res) => res.json())
         .then((data) => console.log(data))
         .catch((err) => console.log(err));
   };

   return (
      <Container component="main" maxWidth="sm">
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
               <LockOpenOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
               Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit(handleSignUp)} sx={{ mt: 3 }}>
               <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                     <TextField autoComplete="given-name" type="text" {...register("first_name", { required: "First name is Required" })} fullWidth label="First Name" autoFocus />
                     {errors.first_name && (
                        <p role="alert" className="text-red-700 pt-1 pl-1">
                           {errors.first_name?.message}
                        </p>
                     )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <TextField type="text" {...register("last_name", { required: "Last name is Required" })} fullWidth label="Last Name" autoComplete="family-name" />
                     {errors.last_name && (
                        <p role="alert" className="text-red-700 pt-1 pl-1">
                           {errors.last_name?.message}
                        </p>
                     )}
                  </Grid>
                  {/*  */}
                  <Grid item xs={12} sm={6}>
                     <TextField type="text" {...register("year", { required: "Year is Required" })} fullWidth label="Session year (Ex- 2024/2025)" />
                     {errors.year && (
                        <p role="alert" className="text-red-700 pt-1 pl-1">
                           {errors.year?.message}
                        </p>
                     )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <TextField type="text" {...register("version", { required: "Version is Required" })} fullWidth label="Version (Ex- Bangla)" />
                     {errors.version && (
                        <p role="alert" className="text-red-700 pt-1 pl-1">
                           {errors.version?.message}
                        </p>
                     )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <TextField type="text" {...register("section", { required: "Section is Required" })} fullWidth label="Section (Ex- THETA)" />
                     {errors.section && (
                        <p role="alert" className="text-red-700 pt-1 pl-1">
                           {errors.section?.message}
                        </p>
                     )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <TextField type="text" {...register("roll", { required: "Roll is Required" })} fullWidth id="roll" label="Roll (Ex- 2297)" name="roll" />
                     {errors.roll && (
                        <p role="alert" className="text-red-700 pt-1 pl-1">
                           {errors.roll?.message}
                        </p>
                     )}
                  </Grid>
                  {/*  */}
                  <Grid item xs={12}>
                     <TextField type="tel" {...register("tel", { required: "Mobile Number is Required" })} fullWidth label="Mobile" autoComplete="tel" />
                     {errors.tel && (
                        <p role="alert" className="text-red-700 pt-1 pl-1">
                           {errors.tel?.message}
                        </p>
                     )}
                  </Grid>
                  {/*  */}
                  <Grid item xs={12}>
                     <TextField type="text" {...register("social")} fullWidth label="Facebook ID (Optional)" autoComplete="social" />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField type="email" {...register("email", { required: "Email Address is Required" })} fullWidth label="Email Address" autoComplete="email" />
                     {errors.email && (
                        <p role="alert" className="text-red-700 pt-1 pl-1">
                           {errors.email?.message}
                        </p>
                     )}
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        {...register("password", {
                           required: "Password is Required",
                           minLength: { value: 6, message: "Password must be 6 characters or longer" },
                           pattern: { value: /(^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$)/, message: "Password must contains one uppercase letter, one lowercase letter and one number" },
                        })}
                        autoComplete="new-password"
                     />
                     {(errors.password && (
                        <p role="alert" className="text-red-700 pt-1 pl-1">
                           {errors.password?.message}
                        </p>
                     )) ||
                        (signUpError && (
                           <p role="alert" className="text-red-700 pt-1 pl-1">
                              {signUpError === "Firebase: Error (auth/email-already-in-use)." ? "This email is already used. Please Log in or use another email" : signUpError}
                           </p>
                        ))}
                  </Grid>
                  <Grid item xs={12}>
                     <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="I aware about your terms & conditions"
                        {...register("checkbox", {
                           required: "You must agree with our terms & conditions",
                        })}
                     />
                     {errors.checkbox && (
                        <p role="alert" className="text-red-700 pl-1">
                           {errors.checkbox?.message}
                        </p>
                     )}
                  </Grid>
               </Grid>
               <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} disabled={enabledButton ? "" : "off"}>
                  Sign Up
               </Button>
               <Grid container justifyContent="flex-end">
                  <Grid item>
                     <Link to="/login">Already have an account? Sign in</Link>
                  </Grid>
               </Grid>
            </Box>
         </Box>
         <Copyright sx={{ mt: 5 }} />
      </Container>
   );
}
