import { Button, Link, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useState } from "react";

const bylaws = [
  {
    id: "jcmi",
    label: "JCMI 2020",
    link: "https://tmal1020.com/jcim-2020/",
  },
  {
    id: "contract",
    label: "Contract Arcticles",
    link: "https://tmal1020.com/contract-articles/",
  },
  {
    id: "state",
    label: "State Bylaws",
    link: "https://tmal1020.com/state-by-laws/",
  },
  {
    id: "local",
    label: "Local Bylaws",
    link: "https://tmal1020.com/local-by-laws-2/",
  },
];

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
