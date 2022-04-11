// import {useMediaQuery} from 'react-responsive';
import {
  AppBar,
  Box,
  Typography,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Stack,
  ListItemIcon,
} from "@mui/material";
import { useRecoilValue } from "recoil";
import { MailTo } from "../Social.jsx/MailTo";
import { contact } from "../state/contact";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import EmailIcon from "@mui/icons-material/Email";

import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import FaxIcon from "@mui/icons-material/Fax";
import { ButtonBase, IconButton } from "@mui/material";

// import {FooterButtons} from './FooterButtons';
// import {FooterRight} from './FooterRight';

export function SocialLinkBroke({ id, link, icon }) {
  return (
    <ButtonBase key={id}>
      <IconButton size="large" href={link} sx={{ color: "white" }}>
        {icon}
      </IconButton>
    </ButtonBase>
  );
}

export const Footer = () => {
  const address = useRecoilValue(contact);
  //   const isWide = useMediaQuery({
  //     query: '(min-device-width: 700px)',
  //   });

  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Grid container direction="row">
          <Grid item sm={4}>
            <Box textAlign="center" flex="auto" paddingTop="10px" height="100%">
              <Typography
                variant="h6"
                paddingTop="8px"
                paddingBottom="1px"
                gutterBottom
              >
                Trenton Metro Area Local
              </Typography>
              <Stack direction="row" justifyContent="center">
                <SocialLinkBroke
                  id="face"
                  link=""
                  icon={<FacebookIcon fontSize="large" />}
                />
                <SocialLinkBroke
                  id="insta"
                  link=""
                  icon={<InstagramIcon fontSize="large" />}
                />
                <SocialLinkBroke
                  id="twit"
                  link=""
                  icon={<TwitterIcon fontSize="large" />}
                />
                <SocialLinkBroke
                  id="linked"
                  link=""
                  icon={<LinkedInIcon fontSize="large" />}
                />
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
            >
              <Typography variant="h6" paddingTop="8px" paddingBottom="1px">
                Quick Links
              </Typography>
              <List sx={{ pt: 0 }}>
                <ListItem>
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: "30px" }}>
                      <HomeIcon sx={{ color: "white" }} />
                    </ListItemIcon>
                    <Link href="/" color="#fff">
                      home
                    </Link>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: "30px" }}>
                      <ContactSupportIcon sx={{ color: "white" }} />
                    </ListItemIcon>
                    <Link href="/contact" color="#fff">
                      contact
                    </Link>
                  </ListItem>
                </ListItem>
                <ListItem>
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: "30px" }}>
                      <InfoIcon sx={{ color: "white" }} />
                    </ListItemIcon>
                    <Link href="/about" color="#fff">
                      about
                    </Link>
                  </ListItem>

                  <ListItem>
                    <ListItemIcon sx={{ minWidth: "30px" }}>
                      <EmailIcon sx={{ color: "white" }} />
                    </ListItemIcon>
                    <MailTo label="email" sx={{ color: "#ffffff" }} />
                  </ListItem>
                </ListItem>
              </List>
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
                Get In Touch{" "}
              </Typography>
              <List sx={{ textAlign: "center", pt: 0 }}>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: "32px" }}>
                    <LocationOnIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <div style={{ textAlign: "start" }}>
                        <div>{address.address}</div>
                        <div>{address.city}</div>
                      </div>
                    }
                    primaryTypographyProps={{ textAlign: "center" }}
                  ></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <PhoneIphoneIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary={address.phone} />

                  <ListItemIcon sx={{ minWidth: "30px", pl: 6 }}>
                    <FaxIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary={address.fax} />
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};
