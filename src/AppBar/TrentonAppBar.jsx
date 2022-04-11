import {
  Box,
  Button,
  Tab,
  Tabs,
  Link,
  Menu,
  MenuItem,
  ListItemIcon,
  Stack,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TMAL from "./logoTMAL.svg";

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
    id: "forms",
    label: "Forms and links",
    link: "/resources",
  },
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
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElNation, setAnchorElNation] = React.useState(null);
  const [anchorElMember, setAnchorElMember] = React.useState(null);
  const [anchorElByLaws, setAnchorElByLaws] = React.useState(null);

  const handleOpenNation = (event) => {
    setAnchorElNation(event.currentTarget);
  };

  const handleOpenMember = (event) => {
    setAnchorElMember(event.currentTarget);
  };

  const handleOpenByLaws = (event) => {
    setAnchorElByLaws(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNation = () => {
    setAnchorElNation(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseMember = () => {
    setAnchorElMember(null);
  };

  const handleCloseByLaws = () => {
    setAnchorElMember(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <img src={TMAL} alt="logo" width="100" height="auto" />
          </Link>
          <Box sx={{ flexGrow: 1, pl: 7 }}>
            <Stack direction="row" gap={8}>
              <Button href="/about" sx={{ p: 0, color: "white" }}>
                About
              </Button>
              <Button
                sx={{ p: 0, color: "white" }}
                onClick={handleOpenNation}
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
                onClose={handleCloseNation}
              >
                {national.map((item) => (
                  <MenuItem key={item.id}>
                    <ListItemIcon>
                      <ChevronRightIcon />
                    </ListItemIcon>
                    <Link href={item.link} target="_blank">
                      {item.label}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>

              <Button
                sx={{ p: 0, color: "white" }}
                onClick={handleOpenMember}
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
                onClose={handleCloseMember}
              >
                {members.map((item) => (
                  <MenuItem key={item.id}>
                    <ListItemIcon>
                      <ChevronRightIcon />
                    </ListItemIcon>

                    <Link href={item.link} underline="none" color="black">
                      {item.label}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>

              <Button sx={{ p: 0, color: "white" }} href="/resources/stewards">
                Stewards Corner
              </Button>
              <Button sx={{ p: 0, color: "white" }} href="/contact">
                Contact
              </Button>
            </Stack>

            {/* <SearchBox /> */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}> */}
              <Button sx={{ p: 0, color: "white" }} href="">
                login
              </Button>

              <Button
                sx={{ p: 0, color: "white" }}
                onClick={handleOpenByLaws}
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
                onClose={handleCloseByLaws}
              >
                <MenuItem key="jcmi">
                  <Link href="https://tmal1020.com/jcim-2020/">JCMI 2020</Link>
                </MenuItem>
                <MenuItem key="contract">
                  <Link href="https://tmal1020.com/contract-articles/">Contract Arcticles</Link>
                </MenuItem>
                <MenuItem key="state">
                  <Link href="https://tmal1020.com/state-by-laws/">State Bylaws</Link>
                </MenuItem>
                <MenuItem key="local">
                  <Link href="https://tmal1020.com/local-by-laws-2/">Local Bylaws</Link>
                </MenuItem>
              </Menu>
            {/* </Box> */}

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
