import { Box, Button, Link, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import * as React from "react";
import Toolbar from "@mui/material/Toolbar";

import TMAL from "./logoTMAL.svg";
import { National } from "./National";
import { Members } from "./Members";
import { ByLaws } from "./ByLaws";

// const tabs = [
//   { value: "home", link: "/", label: "home" },
//   { value: "about", link: "/about", label: "about us" },
//   { value: "stewards", link: "/about/stewards", label: "stewards" },
//   { value: "elected", link: "/about/elected", label: "elected" },
//   { value: "contact", link: "/contact", label: "contact" },
// ];

// const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const FullAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar disableGutters sx={{ overflow: "hidden" }}>
        <Link href="/" sx={{ pl: 5 }}>
          <img src={TMAL} alt="logo" width="auto" height="auto" />
        </Link>

        <Box sx={{ flexGrow: 1, pl: 7 }}>
          <Stack direction="row" gap={8}>
            <Button href="/about" sx={{ p: 0, color: "white" }}>
              About
            </Button>
            <National />

            <Members />

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

          <ByLaws />

          {/* <Tooltip title="Open settings">
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
            </Menu> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
