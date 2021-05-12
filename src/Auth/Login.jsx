import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState }  from 'react'
import { useDispatch } from "react-redux";
import { signin } from "../Actions/Auth.Action";

import { useHistory } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";







function Copyright() {

 

  



  return (
    <Typography variant="body2" color="textSecondary" align="center">
      
      <Link color="inherit" href="https://material-ui.com/">
        
      </Link>{' '}
      {/* {new Date().getFullYear()} */}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



const validationSchema = yup.object({
  email: yup
  .string('Enter your email')
  .email('Enter a valid email')
  .required('Email is required'),
  password: yup
  .string('Enter your password')
  .min(8, ' minimum 8 characters')
  .required('Password is required'),
  });
export default function SignIn() {
 
  // const App = () => {
  //   const [values, setValues] = React.useState({
  //     password: "",
  //     showPassword: false,
  //   });
    
  //   const handleClickShowPassword = () => {
  //     setValues({ ...values, showPassword: !values.showPassword });
  //   };
    
  //   const handleMouseDownPassword = (event) => {
  //     event.preventDefault();
  //   };
    
  //   const handlePasswordChange = (prop) => (event) => {
  //     setValues({ ...values, [prop]: event.target.value });
  //   };
  // }

















  const history = useHistory();
   
  const redirectt=()=>{
    history.push("/Registration")
}
 


  const classes = useStyles();
  const dispatchMethod = useDispatch();
    
  const formik = useFormik({
    initialValues: {
    email: '',
    password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
    dispatchMethod(signin(values))
    // alert(JSON.stringify(values, null, 2));
    },
    });
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
           





            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formik.values.password}
               onChange={formik.handleChange}
               error={formik.touched.password && Boolean(formik.errors.password)}
                   helperText={formik.touched.password && formik.errors.password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>

             
               <Link href="#" variant="body2"  onClick={redirectt} >
                {"Don't have an account? Sign Up"}
              </Link> 
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}