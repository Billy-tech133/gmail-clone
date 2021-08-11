import {
  CheckCircle,
  Delete,
  Email,
  LabelImportant,
  MoreVert,
  MoveToInbox,
  WatchLater,
  ArrowBack,
  Error,
  Print,
  UnfoldMore,
  ExitToApp,
} from "@material-ui/icons";
import { useSelector } from "react-redux";
import { selectOpenMail } from "./features/mailSlice";
import { IconButton } from "@material-ui/core";
import React from "react";
import "./Mail.css";
import { useHistory } from "react-router";
function Mail() {
  const history = useHistory();
  const selectedMail = useSelector(selectOpenMail);
  return (
    <div className="mail">
      <div className="mail-tools">
        <div className="mail-toolsLeft">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <MoveToInbox />
          </IconButton>
          <IconButton>
            <Error />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
          <IconButton>
            <Email />
          </IconButton>
          <IconButton>
            <WatchLater />
          </IconButton>
          <IconButton>
            <CheckCircle />
          </IconButton>
          <IconButton>
            <LabelImportant />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="mail-toolsRight">
          <IconButton>
            <UnfoldMore />
          </IconButton>
          <IconButton>
            <Print />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>
      <div className="mail-c">
        <div className="mail-bodyHeader">
          <h2>{selectedMail?.subject}</h2>
          <LabelImportant className="mail-important" />
          <p>{selectedMail?.title}</p>
          <p className="mail-time">{selectedMail?.time}</p>
        </div>
        <div className="mail-message">
          <p> {selectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
