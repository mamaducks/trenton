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
} from "@mui/material";
import { useRecoilValue } from "recoil";
import { MailTo } from "../Social.jsx/MailTo";
import { meetings } from "../state/meetings";

export function Meetings() {
  const meet = useRecoilValue(meetings);

  console.log(meet)
  return (
    <Grid container>
      <Grid
        item
        sm={12}
          sx={{ display: "flex", justifyContent: "center" }}
      >
        <Container>
          {/* <CardHeader title="2022 UNION MEETING NOTICE"></CardHeader> */}
          <Typography variant="h5" lineHeight={2} textAlign="center">
            2022 Union Meeting Notices
          </Typography>
          <Divider sx={{ mb: 3 }} />
          {/* <CardContent > */}
          <Typography
            variant="h6"
            textAlign="start"
            alignItems="start"
            // px={8}
            //  sx={{ textIndent: 12, alignItems: "flex-start" }}
          >
            The 2022 General Membership Union Meetings for the Trenton Metro
            Area Local will be held at the Hamilton Township VFW located at 77
            Christine Ave in Mercerville, NJ 08619 and over ZOOM on the
            following dates at 6:00 pm (Executive Board Meeting will begin at
            5:15 pm):
          </Typography>
            <List>
              {meet.map((item) => (
                <ListItem
                disableGutters
                disablePadding
                  sx={{pl: 15}}
                >
                  <ListItemText
                  key={item.id}
                    primary={`${item.date}${" "}${item?.location}`}
                    primaryTypographyProps={{ fontSize: "large" }}
                    //   secondaryTypographyProps={{textAlign: "flex-end"}}
                    sx={{ display: "flex", alignItems: "flex-end" }}
                  />
                </ListItem>
                
              ))}
            </List>
          <Typography >
            If you would like to attend over ZOOM please email Steve Duckworth
            at <MailTo label="stevenduckworthtmal@aol.com"/> with your name, tour and
            job title for an invite.
          </Typography>
          {/* </CardContent> */}
          </Container>
      </Grid>
    </Grid>
  );
}
