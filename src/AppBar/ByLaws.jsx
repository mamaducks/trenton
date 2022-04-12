import { Button, Link, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { bylaws } from "./menus";
import { useState } from "react";

export const ByLaws = () => {
  const [anchorElByLaws, setAnchorElByLaws] = useState(null);

  return (
    <>
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
        onClose={() => setAnchorElByLaws(null)}
      >
        {bylaws.map((item) => (
          <MenuItem key={item.id}>
            <Link href={item.link} target="_blank">
              {item.label}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
