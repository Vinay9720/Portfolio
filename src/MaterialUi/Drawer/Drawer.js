import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import { Divider } from "@mui/material";

const navigate = [
  { href: "#info", name: "Info" },
  { href: "#skills", name: "Skills" },
  { href: "#experience", name: "Experience" },
  { href: "#contact", name: "Contact" },
];

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: "rgb(31, 31, 46)",
        color: "#5FC1E2",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List sx={{ marginTop: "5rem" }}>
        {navigate.map((el, index) => (
          <ListItem key={el.name}>
            <a
              href={el.href}
              style={{ textDecoration: "none", color: "#5fc1e2" }}
            >
              <ListItemButton>
                <ListItemIcon sx={{ color: "#5fc1e2" }}>
                  {index === 0 && <InfoOutlinedIcon />}
                  {index === 1 && <KeyboardIcon />}
                  {index === 2 && <WorkOutlineOutlinedIcon />}
                  {index === 3 && <ContactMailOutlinedIcon />}
                </ListItemIcon>
                <ListItemText primary={el.name} />
              </ListItemButton>
            </a>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {<MenuIcon color="#5fc1e2" />}
          </Button>
          <Drawer
            sx={{ "	.MuiDrawer-paper": { backgroundColor: "rgb(31,31,46)" } }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
