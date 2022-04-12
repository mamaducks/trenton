import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  MenuList,
  Toolbar,
} from "@mui/material";
import { ByLaws } from "./ByLaws";
import { Members } from "./Members";
import { National } from "./National";
import MenuIcon from "@mui/icons-material/Menu";

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
          <IconButton
            sx={{ p: 0, color: "white" }}
            onClick={(event) => setAnchorElSmall(event.currentTarget)}
          >
            <MenuIcon />
          </IconButton>
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
          <MenuList>
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
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
