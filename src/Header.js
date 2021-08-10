import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, Avatar } from "@material-ui/core";
import { ArrowDropDown, Search, Apps, Notifications } from "@material-ui/icons";
function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src="https://bit.ly/3scqvF9" alt="gmail" />
      </div>
      <div className="header-middle">
        <Search />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDown />
      </div>
      <div className="header-right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
