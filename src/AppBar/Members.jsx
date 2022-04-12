import { Button, Link, ListItemIcon, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { members } from "./menus";

import { useState } from "react";

export const Members = () => {
  const [anchorElMember, setAnchorElMember] = useState(null);

  return (
    <>
      <Button
        //   size="small"
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
        onClose={() => setAnchorElMember(null)}
      >
        <MenuItem key="forms">
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>

          <Link
            href="/resources"
            underline="none"
            target="_blank"
            color="black"
          >
            Forms and Links
          </Link>
        </MenuItem>
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
    </>
  );
};
