import {
  AppBar,
  Box,
  Button,
  Link,
  Menu,
  MenuItem,
  MenuList,
  Toolbar,
} from "@mui/material";
import { ByLaws } from "./ByLaws";
import { Members } from "./Members";
import { National } from "./National";
import TMAL from "./logoTMAL.svg";

import { useState } from "react";

export function MobileAppBar() {
  const [anchorElSmall, setAnchorElSmall] = useState(null);

  return (
    <AppBar position="static">
      <Toolbar
        disableGutters
        // sx={{ overflow: "hidden" }}
      >
        <Link href="/" sx={{ pl: 5 }}>
          <img src={TMAL} alt="logo" width="auto" height="auto" />
        </Link>
        <Box display="flex" justifyContent="flex-end" flexGrow={1}>
          Search
          <Button
            sx={{ p: 0, color: "white" }}
            onClick={(event) => setAnchorElSmall(event.currentTarget)}
          >
            small
          </Button>
        </Box>

        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElSmall}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElSmall)}
          onClose={() => setAnchorElSmall(null)}
        >
          {/* <Paper sx={{ backgroundColor: "#333366" }}> */}
          <MenuList sx={{ backgroundColor: "#333366" }}>
            <MenuItem>
              <Button href="/about" sx={{ p: 0, color: "white" }}>
                About
              </Button>
            </MenuItem>
            <MenuItem>
              <National />
            </MenuItem>
            <MenuItem>
              <Members />
            </MenuItem>
            <MenuItem>
              <Button sx={{ p: 0, color: "white" }} href="/resources/stewards">
                Stewards Corner
              </Button>
            </MenuItem>
            <MenuItem>
              <Button sx={{ p: 0, color: "white" }} href="/contact">
                Contact
              </Button>
            </MenuItem>
            <MenuItem>
              <ByLaws />
            </MenuItem>
          </MenuList>
          {/* </Paper> */}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}