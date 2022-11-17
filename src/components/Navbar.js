import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core/drawer";
import {
  AppBar,
  Toolbar,
  ListItem,
  ListItemIcon,
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
import avatar from "../avatar.png";

//CSS Styles be here
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
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
    listText: "My Work",
  },
  {
    smolIcon: <ContactMail />,
    listText: "Contact Me",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });
  const sliderToggle = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };
  const classes = useStyles();
  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={sliderToggle(slider, false)}
    >
      <Avatar className={classes.Avatar} src={avatar} alt="Dylan"></Avatar>

      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.smolIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={sliderToggle("right", true)}>
              <ArrowBack style={{ color: "coral" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "coral" }}>
              Dylan Barry
            </Typography>
            <MobilRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={sliderToggle("right", false)}
            >
              {sideList("right")}
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
