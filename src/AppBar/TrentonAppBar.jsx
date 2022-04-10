import { Box, Button, Tab, Tabs, Link, Menu, MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { useState } from "react";

import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// import routes from '../App/Routes';

const tabs = [
  { value: "home", link: "/", label: "home" },
  { value: "about", link: "/about", label: "about us" },
  { value: "stewards", link: "/about/stewards", label: "stewards" },
  { value: "elected", link: "/about/elected", label: "elected" },
  { value: "contact", link: "/contact", label: "contact" },
];

const pages = ["Contact", "Blog"];

const about = [
  { label: "Elected Officials", link: "/about/elected" },
  { label: "Stewards", link: "/about/stewards" },
];

const members = [
  {
    id: "volunteer",
    label: "Voluntary Benefits Plan",
    link: "https://www.voluntarybenefitsplan.com/",
  },
  {
    id: "scholarship",
    label: "APWU Scholarship",
    link: "https://www.apwu.org/scholarship-programs",
  },
  {
    id: "auxillary",
    label: "APWU Auxillary",
    link: "https://www.apwuauxiliary.org/",
  },
  { id: "health", label: "APWU Health Plan", link: "https://www.apwuhp.com/" },
  {
    id: "benefits",
    label: "APWU Accident Benefits",
    link: "https://apw-aba.org/",
  },
];

const national = [
  { id: "apwu", label: "APWU.Org", link: "https://www.apwu.org/" },
  {
    id: "manuals",
    label: "handbooks and manuals",
    link: "https://www.apwu.org/usps-handbooks-and-manuals",
  },
  { id: "press", label: "postal press", link: "http://apwupostalpress.org/" },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElAbout, setAnchorElAbout] = React.useState(null);
  const [anchorElNation, setAnchorElNation] = React.useState(null);
  const [anchorElMember, setAnchorElMember] = React.useState(null);
  const [anchorElByLaws, setAnchorElByLaws] = React.useState(null);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNationMenu = (event) => {
    setAnchorElNation(event.currentTarget);
  };

  const handleOpenMemberMenu = (event) => {
    setAnchorElMember(event.currentTarget);
  };

  const handleOpenByLawsMenu = (event) => {
    setAnchorElByLaws(event.currentTarget);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenAboutMenu = (event) => {
    setAnchorElAbout(event.currentTarget);
  };

  const handleCloseNationMenu = () => {
    setAnchorElNation(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseMembertMenu = () => {
    setAnchorElMember(null);
  };

  return (
    <AppBar position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            LOGO
          </Typography>
          <Button href="/" sx={{ p: 0, color: "white" }}>
            Logo
          </Button>
          <Box sx={{ flexGrow: 0 }}>
            <Button href="/about" sx={{ p: 0, color: "white" }}>
              About
            </Button>
            <Button
              sx={{ p: 0, color: "white" }}
              onClick={handleOpenNationMenu}
              endIcon={<KeyboardArrowDownIcon />}
            >
              National
            </Button>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElNation}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNation)}
              onClose={handleCloseNationMenu}
            >
              {national.map((item) => (
                <MenuItem key={item.id}>
                  <Link href={item.link} target="_blank">
                    {item.label}
                  </Link>
                </MenuItem>
              ))}
              {/* <MenuItem key="apwuForms">
                <Link
                  href="https://www.apwu.org/usps-handbooks-and-manuals"
                  target="_blank"
                >
                  handbooks and manuals
                </Link>
              </MenuItem>
              <MenuItem key="postPress">
                <Link href="http://apwupostalpress.org/" target="_blank">
                  postal press
                </Link>
              </MenuItem> */}
            </Menu>

            <Button
              sx={{ p: 0, color: "white" }}
              onClick={handleOpenMemberMenu}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Members
            </Button>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElMember}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElMember)}
              onClose={handleCloseMembertMenu}
            >
              {members.map((item) => (
                 <MenuItem key={item.id}>
                <Link href={item.link} underline="none" color="black">
                  {item.label}
                </Link>
              </MenuItem>
              ))}
             
              {/* <MenuItem key="benefit">
                <Link
                  href="https://www.voluntarybenefitsplan.com/"
                  target="_blank"
                >
                  Voluntary Benefits Plan
                </Link>
              </MenuItem>
              <MenuItem key="scholarship">
                <Link
                  href="https://www.apwu.org/scholarship-programs"
                  target="_blank"
                >
                  APWU Scholarship
                </Link>
              </MenuItem>
              <MenuItem key="auxillary">
                <Link href="https://www.apwuauxiliary.org/" target="_blank">
                  APWU Auxillary
                </Link>
              </MenuItem>
              <MenuItem key="health">
                <Link href="https://www.apwuhp.com/" target="_blank">
                  APWU Health Plan
                </Link>
              </MenuItem>

              <MenuItem key="health">
                <Link href="https://apw-aba.org/" target="_blank">
                  APWU Accident Benefits
                </Link>
              </MenuItem> */}
            </Menu>

            <Button sx={{ p: 0, color: "white" }} href="/contact">
              Contact
            </Button>

            <Button sx={{ p: 0, color: "white" }} href="/resources/stewards">
              Stewards Corner
            </Button>

            {/* <SearchBox /> */}

            <Button sx={{ p: 0, color: "white" }} href="">
              login
            </Button>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Button
              sx={{ p: 0, color: "white" }}
              onClick={handleOpenByLawsMenu}
              endIcon={<KeyboardArrowDownIcon />}
            >
              bylaws
            </Button>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElByLaws}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElByLaws)}
              onClose={handleClose}
            >
              <MenuItem key="elect">
                <Link href="/about/elected">Elected Officials</Link>
              </MenuItem>
              <MenuItem key="steward">
                <Link href="/about/stewards">Stewards</Link>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
