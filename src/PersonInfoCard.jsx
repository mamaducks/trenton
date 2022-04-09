import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Grid,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import { Box, Container } from "@mui/material";
import image from "./apuSeal.png";

export function InfoCardContainer({children}) {
    return (
        <Container maxWidth="lg" sx={{ pb: 6 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoFlow: "row",
          }}
        >
            {children}
            </Box>
            </Container>
    );
}


export function InfoCards({ name, email, position, title }) {
  return (
 
          <Card sx={{ minWidth: 375 }}>
            <CardContent
              sx={{
                // backgroundColor: "#f7f7f7",
                //   borderTop: "2px solid ",
                //   borderColor: "#ff9100",
                alignContent: "center",
                // pb: 0
              }}
            >
              <Stack direction="row">
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <img src={image} alt="seal" height="100" />
                    </ListItemAvatar>
                    <ListItemText
                      primary={name}
                      primaryTypographyProps={{ fontSize: "22px" }}
                      secondaryTypographyProps={{ fontSize: "large" }}
                      secondary={title}
                      sx={{pl: 2}}
                    ></ListItemText>
                    {/* <Typography
                      variant="h5"
                      sx={{
                        color: "primary",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        // textOverflow: "ellipsis",
                      }}
                    >
                      {name}
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{
                        color: "primary",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        // textOverflow: "ellipsis",
                      }}
                    >
                      {title}
                    </Typography> */}
                  </ListItem>
                </List>
              </Stack>
              <List>
                <ListItemText
                  primary={position}
                  secondary={email}
                ></ListItemText>
              </List>
              {/* <Typography
                variant="h6"
                sx={{
                  color: "primary",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  // textOverflow: "ellipsis",
                }}
              >
                {position}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "primary",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  // textOverflow: "ellipsis",
                }}
              >
                {email}
              </Typography> */}
            </CardContent>
          </Card>
    //   </Box>
    // </Container>
  );
}
