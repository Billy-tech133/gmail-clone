import React from "react";
import "./Header.css";
import { auth } from "./firebase";
import { logout } from "./features/userSlice";
import { useDispatch } from "react-redux";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, Avatar } from "@material-ui/core";
import { ArrowDropDown, Search, Apps, Notifications } from "@material-ui/icons";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
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
        <Avatar onClick={signOut} src={user?.photoUrl} />
      </div>
    </div>
  );
}

export default Header;
