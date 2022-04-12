import { leave, postal, benefits, flma, other } from "../Resources/resources";

import {
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import { ResourceList } from "../Resources/ResourceList";
import { ResourceHeader } from "../Resources/ResourceHeader";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export function Resource() {
  return (
    <div>
      <ListItem sx={{ pl: 30 }}>
        <ListItemIcon sx={{ minWidth: 0, fontSize: "large", pr: 3 }}>
          <ArrowForwardIosIcon color="primary" />
        </ListItemIcon>
        <ListItemText
          primary=" Resources "
          primaryTypographyProps={{ fontSize: "2em", color: "text.primary" }}
        />
      </ListItem>

      <Divider variant="middle" sx={{ mx: 10 }} />

      <Stack
        direction="row"
        justifyContent="space-evenly"
        flexWrap="wrap"
        pb={3}
      >
        <div>
          <ResourceHeader title="Leave FORMS">
            {leave.map((item) => (
              <ResourceList linkLabel={item.linkLabel} href={item.href} />
            ))}
          </ResourceHeader>
          <br />
          <ResourceHeader title="Postal LINKS">
            {postal.map((item) => (
              <ResourceList linkLabel={item.linkLabel} href={item.href} />
            ))}
          </ResourceHeader>
          <br />
          <ResourceHeader title="LINKS TO EMPLOYEE BENEFITS">
            {benefits.map((item) => (
              <ResourceList linkLabel={item.linkLabel} href={item.href} />
            ))}
          </ResourceHeader>
        </div>
        <div>
          <ResourceHeader title="FMLA FORMS">
            {flma.map((item) => (
              <ResourceList linkLabel={item.linkLabel} href={item.href} />
            ))}
          </ResourceHeader>
          <br />
          <ResourceHeader title="OTHER RESOURCES">
            {other.map((item) => (
              <ResourceList linkLabel={item.linkLabel} href={item.href} />
            ))}
          </ResourceHeader>
        </div>
      </Stack>
    </div>
  );
}
