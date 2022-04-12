import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
    Link, ListItem, ListItemIcon
} from "@mui/material";
  

export function ResourceList({ linkLabel, href }) {
    return (
      <ListItem sx={{ maxWidth: 650 }}>
        <ListItemIcon>
          <ChevronRightIcon sx={{ color: "#183884" }} />
        </ListItemIcon>
        <Link
          href={href}
          target="_blank"
          fontSize="large"
          color="text.secondary"
          flexWrap="wrap"
        >
          {linkLabel}
        </Link>
      </ListItem>
    );
  }