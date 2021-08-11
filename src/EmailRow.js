import { Checkbox, IconButton } from "@material-ui/core";
import { LabelImportant, StarBorderOutlined } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router";
import "./EmailRow.css";
function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory();
  return (
    <div onClick={() => history.push("/mail")} className="emailRow">
      <div className="emailRow-options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportant />
        </IconButton>
      </div>
      <div className="emailRow-title">{title}</div>
      <div className="emailRow-message">
        <h4>
          {subject}
          {""}
          <span className="emailRow-description">{description}</span>
        </h4>
      </div>
      <p className="emailRow-time">{time}</p>
    </div>
  );
}

export default EmailRow;
