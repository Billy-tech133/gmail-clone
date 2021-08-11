import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import {
  AccessTime,
  Add,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Star,
  Phone,
  Note,
  Person,
  Duo,
} from "@material-ui/icons";
import { openSendMessage } from "./features/mailSlice";
import { useDispatch } from "react-redux";
import { Button, IconButton } from "@material-ui/core";
function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        onClick={() => dispatch(openSendMessage())}
        startIcon={<Add fontSize="large" />}
        className="sidebar-compose"
      >
        Compose
      </Button>
      <SidebarOption selected={true} Icon={Inbox} title="Inbox" number={54} />
      <SidebarOption Icon={Star} title="Starred" number={54} />
      <SidebarOption Icon={AccessTime} title="Snozzed" number={54} />
      <SidebarOption Icon={LabelImportant} title="Important" number={54} />
      <SidebarOption Icon={NearMe} title="Sent" number={54} />
      <SidebarOption Icon={Note} title="Drafts" number={54} />
      <SidebarOption Icon={ExpandMore} title="More" number={54} />
      <div className="sidebar-footer">
        <div className="sidebar-foort">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
