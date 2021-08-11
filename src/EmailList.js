import {
  ArrowDropDown,
  Redo,
  MoreVert,
  ChevronLeft,
  ChevronRight,
  Settings,
  KeyboardHide,
  LocalOffer,
  People,
  Inbox,
} from "@material-ui/icons";
import Section from "./Section";
import { Checkbox, IconButton } from "@material-ui/core";
import React from "react";
import "./EmailList.css";
import EmailRow from "./EmailRow";

function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList-settings">
        <div className="emailList-settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList-settings">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="emailList-sections">
        <Section Icon={Inbox} title="primary" color="red" selected />
        <Section Icon={People} title="social" color="#1A73E8" />
        <Section Icon={LocalOffer} title="promotions" color="green" />
      </div>
      <div className="emailList-list">
        <EmailRow />
      </div>
    </div>
  );
}

export default EmailList;
