import ArticleIcon from "@mui/icons-material/Article";
import {
    List,
    ListItem, ListItemIcon,
    ListSubheader
} from "@mui/material";

export function ResourceHeader({ title, children }) {
    return (
      <List>
        <ListItem sx={{ pb: 0 }}>
          <ListItemIcon sx={{ minWidth: 10, color: "#1e2f4d" }}>
            <ArticleIcon />
          </ListItemIcon>
          <ListSubheader
            sx={{
              fontSize: "larger",
              textDecoration: "underline",
              color: "text.primary",
              px: 3,
            }}
          >
            {title}
          </ListSubheader>
        </ListItem>
  
        {/* <Divider variant="middle" /> */}
        {children}
      </List>
    );
  }