import React from "react";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "./avatar.png";

//CSS Styles be here
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "30rem",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
}));

const menuItems = [
  {
    smolIcon: <Home />,
    listText: "Home",
  },
  {
    smolIcon: <AssignmentInd />,
    listText: "Resume",
  },
  {
    smolIcon: <Apps />,
    listText: "MyWork",
  },
  {
    smolIcon: <ContactMail />,
    listText: "Contacts",
  },
];

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.menuSliderContainer} component="div">
        <Avatar className={classes.Avatar} src={avatar} alt="Dylan"></Avatar>
      </Box>
      <Divider />
      <List>
        menuItems.map((lsItem, key)=>)
        <ListItem>
          <ListItemIcon></ListItemIcon>
        </ListItem>
      </List>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton>
              <ArrowBack style={{ color: "coral" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "coral" }}>
              Dylan Barry
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
