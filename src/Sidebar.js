import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { Add, Inbox } from "@material-ui/icons";
import { Button } from "@material-ui/core";
function Sidebar() {
  return (
    <div className="sidebar">
      <Button startIcon={<Add fontSize="large" />} className="sidebar-compose">
        Compose
      </Button>
      <SidebarOption Icon={Inbox} title="Inbox" number={54} />
    </div>
  );
}

export default Sidebar;
