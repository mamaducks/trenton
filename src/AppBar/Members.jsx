import { Button, Link, ListItemIcon, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { useState } from "react";

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

export const Members = () => {
  const [anchorElMember, setAnchorElMember] = useState(null);

  return (
    <>
      <Button
    //   size="small"
        sx={{ p: 0, color: "white", }}
        onClick={(event) => setAnchorElMember(event.currentTarget)}
        endIcon={<KeyboardArrowDownIcon  />}
        
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
