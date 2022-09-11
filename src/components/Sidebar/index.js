import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import * as actionType from "../../store/actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const PersistentDrawerLeft=(props)=> {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleMyEbooksClick=()=>{
    if(!props.isSigned)
    alert('Please Sign in ')
  }
  const handleSignProcess=()=>{
    if(props.isSigned){
      props.handelSignOut()
      window.location.href='/' // if you signed out you will redirect to home page 
    }
     else
      props.handelSignIn()
    
    
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Book Store
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to='/' style={{textDecoration:'none' , color:'black'}}>
          
          <ListItem button key="Home">
            <ListItemText primary="Home" />
          </ListItem>
          </Link>

          <ListItem button key="My Ebook" onClick={handleMyEbooksClick}>
            {props.isSigned === true ? (
              <Link to="/my-ebooks" style={{textDecoration:'none', color:'black'}}>
                <ListItemText primary="My Ebooks" ></ListItemText>
              </Link>
            ) : <ListItemText primary="My Ebooks"></ListItemText>}
          </ListItem>
              {props.isSigned===true ?(<ListItem button key="Sign out" onClick={handleSignProcess}>
            <ListItemText primary="Sign out" />
          </ListItem>) : (<ListItem button key="Sign in" onClick={handleSignProcess}>
            <ListItemText primary="Sign in" />
          </ListItem>)}
          
        </List>
      </Drawer>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isSigned : state.isSigned.isSigned
  };
};
const mapDispatchToProps = dispatch =>{
  return {
    handelSignIn : ()=>dispatch({type:actionType.SET_SIGNED}),
    handelSignOut : ()=>dispatch({type:actionType.SET_UNSIGNED})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PersistentDrawerLeft)