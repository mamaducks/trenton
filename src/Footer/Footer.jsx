import { AppBar, Box, Typography, Grid, Stack } from "@mui/material";

import { SocialLinks } from "./SocialLink";
import { IconLinks } from "./IconLink";
import { ContactInfo } from "./ContactInfo";

export const Footer = () => {
  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Grid container direction="row" justifyContent="center">
          <Grid item sm={4}>
            <Box
              textAlign="center"
              flex="auto"
              paddingTop="10px"
              height="100%"
              m={4}
            >
              <Typography
                variant="h6"
                paddingTop="8px"
                paddingBottom="1px"
                gutterBottom
              >
                Trenton Metro Area Local
              </Typography>
              <Stack direction="row" justifyContent="center">
                <SocialLinks />
              </Stack>
            </Box>
          </Grid>
          <Grid item sm={4}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              flex="auto"
              paddingTop="10px"
              mx={8}
            >
              <Typography variant="h6" paddingTop="8px" paddingBottom="1px">
                Quick Links
              </Typography>

              <IconLinks />
            </Box>
          </Grid>
          <Grid item sm={4}>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              paddingTop="10px"
              alignItems="center"
              textAlign="center"
            >
              <Typography
                variant="h6"
                paddingTop="8px"
                paddingBottom="1px"
                textAlign="center"
              >
                Get In Touch
              </Typography>
              <ContactInfo />
            </Box>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};
