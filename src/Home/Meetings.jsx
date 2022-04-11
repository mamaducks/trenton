import {
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Icon,
  Stack,
  Paper,
} from "@mui/material";
import { useRecoilValue } from "recoil";
import { MailTo } from "../Social.jsx/MailTo";
import { meetings } from "../state/meetings";
import GroupsIcon from "@mui/icons-material/Groups";
import EventNoteIcon from "@mui/icons-material/EventNote";

export function Meetings() {
  const meet = useRecoilValue(meetings);

  console.log(meet);
  return (
    <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Grid item sm={10} >
        {/* <Container> */}
          <Card sx={{p: 4, }}>
            <CardContent>
          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            justifyContent="center"
          >
            <Icon>
              <EventNoteIcon color="primary"/>
            </Icon>
            <Typography variant="h5" lineHeight={2} textAlign="center" color="text.primary">
              2022 Union Meeting Notices
            </Typography>
          </Stack>
          <Divider sx={{ mb: 3, borderColor: "#800001"  }} />
          <Typography fontSize="1.1rem" lineHeight={1.2} textAlign="start" alignItems="start" color="text.primary">
            The 2022 General Membership Union Meetings for the Trenton Metro
            Area Local will be held at the Hamilton Township VFW located at 77
            Christine Ave in Mercerville, NJ 08619 and over ZOOM on the
            following dates at 6:00 pm (Executive Board Meeting will begin at
            5:15 pm):
          </Typography>
          <List sx={{textIndent: 40}}>
            {meet.map((item) => (
              <ListItem disableGutters disablePadding sx={{ pl: 15 }}>
                <ListItemText
                  key={item.id}
                  primary={`${item.date}${" "}${item?.location}`}
                  primaryTypographyProps={{ fontSize: "large" }}
                  sx={{ display: "flex", alignItems: "flex-end", color: "text.secondary" }}
                />
              </ListItem>
            ))}
          </List>
          <Typography fontSize="1.1rem" lineHeight={1.2} textAlign="center" >
            If you would like to attend over ZOOM please email Steve Duckworth
            at <MailTo label="stevenduckworthtmal@aol.com" /> with your name,
            tour and job title for an invite.
          </Typography>
          </CardContent>
          </Card>
        {/* </Container> */}
      </Grid>
    </Grid>
  );
}
