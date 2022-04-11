import { Grid } from "@mui/material";
import {
    Box,
    Card,
    CardContent,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider,
    Icon,
    Stack,
  } from "@mui/material";
  import { useRecoilValue } from "recoil";
  import { FileView } from "../FileView";
  import { news } from "../state/news";
  import { posts } from "../state/posts";
  import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
  import AnnouncementIcon from "@mui/icons-material/Announcement";
  
  import { MailTo } from "../Social.jsx/MailTo";
  import { meetings } from "../state/meetings";
  import GroupsIcon from "@mui/icons-material/Groups";
  import EventNoteIcon from "@mui/icons-material/EventNote";


export function BodyHome() {
    const post = useRecoilValue(posts);

    const meet = useRecoilValue(meetings);

    const currentNews = useRecoilValue(news);

    return (
        <Grid container>
<Grid item sm={6}>
  <Card>
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
            <Typography variant="h5" lineHeight={2} textAlign="center" color="text.secondary">
              2022 Union Meeting Notices
            </Typography>
          </Stack>
          <Divider sx={{ mb: 3, borderColor: "#800001"  }} />
          <Typography variant="h6" textAlign="start" alignItems="start">
            The 2022 General Membership Union Meetings for the Trenton Metro
            Area Local will be held at the Hamilton Township VFW located at 77
            Christine Ave in Mercerville, NJ 08619 and over ZOOM on the
            following dates at 6:00 pm (Executive Board Meeting will begin at
            5:15 pm):
          </Typography>
          <List>
            {meet.map((item) => (
              <ListItem disableGutters disablePadding sx={{ pl: 15 }}>
                <ListItemText
                  key={item.id}
                  primary={`${item.date}${" "}${item?.location}`}
                  primaryTypographyProps={{ fontSize: "large" }}
                  sx={{ display: "flex", alignItems: "flex-end" }}
                />
              </ListItem>
            ))}
          </List>
          <Typography variant="body1">
            If you would like to attend over ZOOM please email Steve Duckworth
            at <MailTo label="stevenduckworthtmal@aol.com" /> with your name,
            tour and job title for an invite.
          </Typography>
          </CardContent>
          </Card>
</Grid>
<Grid item sm={6} display="flex" flexDirection="column" justifyContent="center">


      <Card sx={{ minWidth: 400, maxWidth: 600 }} >
        <CardContent>
          <List>
            <Stack direction="row" alignItems="center">
              <Icon>
                <AnnouncementIcon  />
              </Icon>
              <Typography variant="h5" lineHeight={2} sx={{ textIndent: 12 }}>
                Local News
              </Typography>
            </Stack>
            <Divider sx={{ mb: 3, borderColor: "#800001" }} />
            {currentNews.map((item) => (
              <>
                <ListItem>
                  <ListItemText
                    primary={item.header}
                    primaryTypographyProps={{ fontSize: "large" }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={item.author}
                    secondary={item.date}
                    primaryTypographyProps={{ fontSize: "large" }}
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary={item?.desc}
                    primaryTypographyProps={{ fontSize: "large" }}
                  />
                </ListItem>
              </>
            ))}
          </List>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 400, maxWidth: 600 }}>
        <CardContent>
          <List>
            <Stack direction="row" alignItems="center">
              <Icon>
                <DynamicFeedIcon />
              </Icon>
              <Typography variant="h5" lineHeight={2} sx={{ textIndent: 12 }}>
                Latest Posts
              </Typography>
            </Stack>
            <Divider  />
            {post.map((item) => (
              <ListItem disablePadding>
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{ fontSize: "large" }}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
</Grid>
        </Grid>
    )
}