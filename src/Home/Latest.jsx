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
} from "@mui/material";
import { useRecoilValue } from "recoil";
import { FileView } from "../FileView";
import { news } from "../state/news";
import { posts } from "../state/posts";

export function Latest() {
  const post = useRecoilValue(posts);

  const currentNews = useRecoilValue(news);

  return (
    <Grid container p={5} justifyContent="space-evenly">
      {/* <Grid item sm={6} sx={{ display: "flex", justifyContent: "center" }}> */}
      <Card sx={{ minWidth: 400 }}>
        <CardContent>
          <List>
            <Typography variant="h6" lineHeight={2} sx={{ textIndent: 12 }}>
              Latest Posts
            </Typography>
            <Divider sx={{ mb: 3 }} />
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
      {/* </Grid> */}

      {/* <Grid item sm={6} alignSelf="center"> */}
      <Card sx={{ minWidth: 400, maxWidth: 600 }}>
        <CardContent>
          <List>
            <Typography variant="h6" lineHeight={2} sx={{ textIndent: 12 }}>
              Local News
            </Typography>
            <Divider sx={{ mb: 3 }} />
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
      {/* </Grid> */}
    </Grid>
  );
}
