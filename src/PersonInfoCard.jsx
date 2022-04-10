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

export function InfoCardContainer({ children }) {
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
  const positionLabel = (
    <Typography variant="subtitle1">Current Position</Typography>
  );
  console.log(positionLabel);
  return (
    <Card sx={{ minWidth: 375, m: 1 }}>
      <CardContent
        sx={{
          alignContent: "center",
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
                sx={{ pl: 2 }}
              ></ListItemText>
            </ListItem>
          </List>
        </Stack>
        <List>
          <ListItemText
            primary={position}
            secondary={`Email: ${email}`}
          ></ListItemText>
        </List>
      </CardContent>
    </Card>
  );
}
