import { Button, Link, ListItemIcon, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { useState } from "react";

const national = [
  { id: "apwu", label: "APWU", link: "https://www.apwu.org/" },
  {
    id: "manuals",
    label: "Handbooks and Manuals",
    link: "https://www.apwu.org/usps-handbooks-and-manuals",
  },
  { id: "press", label: "Postal Press", link: "http://apwupostalpress.org/" },
];

export const National =() => {
  const [anchorElNation, setAnchorElNation] = useState(null);

  return (
    <>
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
        onClose={() => setAnchorElNation(null)}
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
    </>
  );
}
