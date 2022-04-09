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

  //  { value: "national", link: "/national" , label: "national"},

  //  { value: "members", link: "/members" , label: "members"},

  { value: "contact", link: "/contact", label: "contact" },

  //  { value: "login", link: "/login" , label: "login"},

  //  { value: "bylaws", link: "/bylaws" , label: "bylaws"},

  //  { value: "stewards", link: "/stewards" , label: "stewards corner"},

  //  { value: "elected", link: "/elected" , label: "elected"},
];

const pages = ["Contact", "Blog"];

const about = [
  { label: "Elected Officials", link: "/about/elected" },
  { label: "Stewards", link: "/about/stewards" },
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

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseAboutMenu = () => {
    setAnchorElAbout(null);
  };

  return (
    <AppBar position="static">
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
          <Button
            href="/"
            sx={{ p: 0, color: "white" }}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Logo
          </Button>
          <Box sx={{ flexGrow: 0 }}>
            <Button
              onClick={handleOpenAboutMenu}
              sx={{ p: 0, color: "white" }}
              endIcon={<KeyboardArrowDownIcon />}
            >
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
              onClose={handleClose}
            >
              <MenuItem key="apwu">
                <Link href="https://www.apwu.org/" target="_blank">
                  APWU.Org
                </Link>
              </MenuItem>
              <MenuItem key="apwuForms">
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
              </MenuItem>
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
              onClose={handleClose}
            >
              <MenuItem key="resource">
                <Link href="/resources">Forms Links</Link>
              </MenuItem>
              <MenuItem key="apwuForms">
                <Link href="" target="_blank">
                  hs
                </Link>
              </MenuItem>
              <MenuItem key="postPress">
                <Link href="" target="_blank">
                  posss
                </Link>
              </MenuItem>
            </Menu>

            <Button sx={{ p: 0, color: "white" }} href="/contact">
              Contact
            </Button>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElAbout}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElAbout)}
              onClose={handleClose}
            >
              <MenuItem key="elect">
                <Link href="/about/elected">Elected Officials</Link>
              </MenuItem>
              <MenuItem key="steward">
                <Link href="/about/stewards">Stewards</Link>
              </MenuItem>
            </Menu>
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
