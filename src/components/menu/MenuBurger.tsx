import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Link as LinkScroll } from "react-scroll";

type Anchor = "right";

export default function MenuDrawer() {
  const { t, i18n } = useTranslation(["global"]);
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  const handleClick = () => {
    setState({
      right: true,
    });
    setOpen(!open);
  };

  const changeLanguageEnglish = () => {
    handleClick();
    i18n.changeLanguage(`en`);
  };

  const changeLanguageSpanish = () => {
    handleClick();
    i18n.changeLanguage(`es`);
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 220 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem  disablePadding>
          <LinkScroll smooth={true} offset={-80} to="banner">
            <ListItemButton sx={{ width: 220 }}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={t("home")} />
            </ListItemButton>
          </LinkScroll>
        </ListItem>
        <ListItem disablePadding>
          <LinkScroll smooth={true} offset={-90} to="about">
            <ListItemButton sx={{ width: 220 }}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={t("about")} />
            </ListItemButton>
          </LinkScroll>
        </ListItem>
        <ListItem disablePadding>
          <LinkScroll smooth={true} offset={-70} to="videos">
            <ListItemButton sx={{ width: 220 }}>
              <ListItemIcon>
                <PlayCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary={t("videos")} />
            </ListItemButton>
          </LinkScroll>
        </ListItem>
        <ListItem disablePadding>
          <LinkScroll smooth={true} offset={-70} to="photos">
            <ListItemButton sx={{ width: 220 }}>
              <ListItemIcon>
                <CameraAltIcon />
              </ListItemIcon>
              <ListItemText primary={t("photos")} />
            </ListItemButton>
          </LinkScroll>
        </ListItem>
        <ListItem disablePadding>
          <LinkScroll smooth={true} offset={-60} to="contact">
            <ListItemButton sx={{ width: 220 }}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={t("contact")} />
            </ListItemButton>
          </LinkScroll>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LanguageOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={t("language")} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primary={t("english")}
              onClick={changeLanguageEnglish}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primary={t("spanish")}
              onClick={changeLanguageSpanish}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon sx={{ color: "#33dbd2", fontSize: "40px" }} />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
