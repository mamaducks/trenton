import {
  Divider,
  ListItem,
  Link,
  Stack,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ResourceHeader } from "../Resources/ResourceHeader";
import { ResourceList } from "../Resources/ResourceList";
import { grievance, contracts, benefits } from "../Resources/resources";

export function StewardsCorner() {
  return (
    <div>
      <ListItem sx={{ pl: 30 }}>
        <ListItemIcon sx={{ minWidth: 0, fontSize: "large", pr: 3 }}>
          <ArrowForwardIosIcon color="primary" />
        </ListItemIcon>
        <ListItemText
          primary="Stewards Corner"
          primaryTypographyProps={{ fontSize: "2em", color: "text.primary" }}
        />
      </ListItem>

      <Divider variant="middle" sx={{ mx: 10 }} />
      <Stack direction="row" justifyContent="space-evenly" flexWrap="wrap">
        <ResourceHeader title="GRIEVANCE FORMS">
          {grievance.map((item) => (
            <ResourceList linkLabel={item.linkLabel} href={item.href} />
          ))}
        </ResourceHeader>

        <ResourceHeader title="CONTRACTS AND MANUALS">
          {contracts.map((item) => (
            <ResourceList linkLabel={item.linkLabel} href={item.href} />
          ))}
        </ResourceHeader>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        flexWrap="wrap"
        py={5}
      >
        <ResourceHeader title="LINKS TO EMPLOYEE BENEFITS">
          {benefits.map((item) => (
            <ResourceList linkLabel={item.linkLabel} href={item.href} />
          ))}
        </ResourceHeader>

        <ResourceHeader title="CHECKLISTS">
          <ListItem sx={{ maxWidth: 650 }}>
            <ListItemIcon>
              <ChevronRightIcon sx={{ color: "#183884" }} />
            </ListItemIcon>
            <Link
              href="/resources/stewards/checklist"
              fontSize="large"
              color="text.secondary"
              flexWrap="wrap"
            >
              Time Limits Checklist
            </Link>
          </ListItem>
        </ResourceHeader>
      </Stack>
    </div>
  );
}
