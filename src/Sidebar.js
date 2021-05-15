import { Button, IconButton } from "@material-ui/core";
import SidebarOption from "./SidebarOption";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import InboxRoundedIcon from "@material-ui/icons/InboxRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import AccessTimeRoundedIcon from "@material-ui/icons/AccessTimeRounded";
import NearMeRoundedIcon from "@material-ui/icons/NearMeRounded";
import LabelImportantRoundedIcon from "@material-ui/icons/LabelImportantRounded";
import NoteRoundedIcon from "@material-ui/icons/NoteRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import DuoRoundedIcon from "@material-ui/icons/DuoRounded";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        className="sidebar__compose"
        startIcon={<AddIcon fontSize="large" />}
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxRoundedIcon}
        title="Inbox"
        number={108}
        selected
      />
      <SidebarOption Icon={StarRoundedIcon} title="Starred" number={108} />
      <SidebarOption Icon={AccessTimeRoundedIcon} title="Snoozed" number={108} />
      <SidebarOption
        Icon={LabelImportantRoundedIcon}
        title="Important"
        number={108}
      />
      <SidebarOption Icon={NearMeRoundedIcon} title="Sent" number={108} />
      <SidebarOption Icon={NoteRoundedIcon} title="Drafts" number={108} />
      <SidebarOption Icon={ExpandMoreRoundedIcon} title="More" number={108} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonRoundedIcon />
          </IconButton>
          <IconButton>
            <DuoRoundedIcon />
          </IconButton>
          <IconButton>
            <PhoneRoundedIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
