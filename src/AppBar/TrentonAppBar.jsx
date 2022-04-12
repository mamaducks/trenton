import {
  Box,
  Button,
  Link,
  Menu,
  MenuItem,
  ListItemIcon,
  Stack,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TMAL from "./logoTMAL.svg";

// const tabs = [
//   { value: "home", link: "/", label: "home" },
//   { value: "about", link: "/about", label: "about us" },
//   { value: "stewards", link: "/about/stewards", label: "stewards" },
//   { value: "elected", link: "/about/elected", label: "elected" },
//   { value: "contact", link: "/contact", label: "contact" },
// ];

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

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/" sx={{ pl: 5 }}>
            <img src={TMAL} alt="logo" width="100" height="auto" />
          </Link>
          <Box sx={{ flexGrow: 1, pl: 7 }}>
            <Stack direction="row" gap={8}>
              <Button href="/about" sx={{ p: 0, color: "white" }}>
                About
              </Button>
              <Button
                sx={{ p: 0, color: "white" }}
                onClick={(event) => setAnchorElNation(event.currentTarget)}
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
                onClose={() =>  setAnchorElNation(null)}>
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
                onClick={(event) => setAnchorElMember(event.currentTarget)}
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
                onClose={() => setAnchorElMember(null)}>
                {members.map((item) => (
                  <MenuItem key={item.id}>
                    <ListItemIcon>
                      <ChevronRightIcon />
                    </ListItemIcon>

                    <Link
                      href={item.link}
                      underline="none"
                      target="_blank"
                      color="black"
                    >
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
            <Button sx={{ p: 0, color: "white" }} href="/login">
              login
            </Button>

            <Button
              sx={{ p: 0, color: "white" }}
              onClick={(event) => setAnchorElByLaws(event.currentTarget)}
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
              onClose={() => setAnchorElByLaws(null)}>
              <MenuItem key="jcmi">
                <Link href="https://tmal1020.com/jcim-2020/" target="_blank">
                  JCMI 2020
                </Link>
              </MenuItem>
              <MenuItem key="contract">
                <Link
                  href="https://tmal1020.com/contract-articles/"
                  target="_blank"
                >
                  Contract Arcticles
                </Link>
              </MenuItem>
              <MenuItem key="state">
                <Link
                  href="https://tmal1020.com/state-by-laws/"
                  target="_blank"
                >
                  State Bylaws
                </Link>
              </MenuItem>
              <MenuItem key="local">
                <Link
                  href="https://tmal1020.com/local-by-laws-2/"
                  target="_blank"
                >
                  Local Bylaws
                </Link>
              </MenuItem>
            </Menu>

            <Tooltip title="Open settings">
              <IconButton onClick={(event) => setAnchorElUser(event.currentTarget)} sx={{ p: 0 }}>
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
              onClose={() => setAnchorElUser(null)}>
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => setAnchorElUser(null)}>
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
