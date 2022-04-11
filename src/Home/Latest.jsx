import {
  Box,
  Grid,
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

export function Latest() {
  const post = useRecoilValue(posts);

  const currentNews = useRecoilValue(news);

  return (
    <Grid container p={5} justifyContent="center" gap={6}>
      <Card sx={{ minWidth: 400, maxWidth: 640, px: 5  }}>
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

      <Card sx={{ minWidth: 400, maxWidth: 640, px: 5 }}>
        <CardContent>
          <List>
            <Stack direction="row" alignItems="center">
              <Icon>
                <AnnouncementIcon />
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
                    primaryTypographyProps={{ fontSize: "large", fontWeight: "bold", color: "#1e2f4d" }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={item.author}
                    secondary={item.date}
                    primaryTypographyProps={{ fontSize: "large", color: "#1e2f4d", fontWeight: 500 }}
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary={item?.desc}
                    primaryTypographyProps={{ fontSize: "large", color: "#1e2f4d" }}
                  />
                </ListItem>
              </>
            ))}
          </List>
        </CardContent>
      </Card>
    </Grid>
  );
}
