import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../avatar.png";
const Header = () => {
  return (
    <Box>
      <Avatar src={avatar} alt="Dylan"></Avatar>
      <Typography variant="h4">
        <Typed strings={["Dylan Barry"]} typeSpeed={40} />
      </Typography>
    </Box>
  );
};

export default Header;
