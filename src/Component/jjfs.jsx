import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { CssBaseline, Drawer,List, ListItem,  ListItemText,} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
     


  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {

 
 const {totalqty} =useSelector(state => state.CartData);

  const history = useHistory();
  const ProductD=()=>{
    history.push("/Registration")
}
  const ProductDi=()=>{
    history.push("/Login")
}

  const dispatchMethod = useDispatch();
  const logout = () => {
    window.localStorage.clear();
    history.push("/Login");
    // dispatchMethod(logout());
  };



  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
     

      <AppBar position="static">
      
       <Toolbar>
         <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
      
            <MenuIcon />
               </IconButton>
               <Link to='/home'>
              <Typography variant="h6" className={classes.title} id="section11"   >
                     Sourojit's
                </Typography>
                </Link>
          <Typography variant="h6" className={classes.title}>
            
          </Typography>

          
          
          
          <Link to='/Productcategory'>
              <Typography  className={classes.title} id="section11" >
                     SHOP
                </Typography>
                </Link> 
              
                <Link to='/Services'>
              <Typography  className={classes.title} id="section11" >
                     SERVICE
                </Typography>
                </Link> 
              
          
          <Link to='/FAQ'>
              <Typography  className={classes.title} id="section11"   >
                     FAQ
                </Typography>
                </Link>

                <div className="nav__right">
             <Link to="/cart">
                 <div className="basket">
          <FiShoppingCart className="cart-icon" />
          <span>{totalqty}</span>
          </div>
         </Link>
          </div>
          


          {auth && (
            
            <div>
              
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                
                 
                <AccountCircle />
                
              </IconButton>
              
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={ProductD}>Registration</MenuItem>
                <MenuItem onClick={ProductDi}>Log in</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}