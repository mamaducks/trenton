import { AppBar, Box, Typography, Grid, Link, Stack } from "@mui/material";
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

export function SocialLink({ id, link, icon }) {
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
                <SocialLink
                  id="face"
                  link=""
                  icon={<FacebookIcon fontSize="large" />}
                />
                <SocialLink
                  id="insta"
                  link=""
                  icon={<InstagramIcon fontSize="large" />}
                />
                <SocialLink
                  id="twit"
                  link=""
                  icon={<TwitterIcon fontSize="large" />}
                />
                <SocialLink
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
              mx={8}
            >
              <Typography variant="h6" paddingTop="8px" paddingBottom="1px">
                Quick Links
              </Typography>
              <Stack gap={2} p={3} mb={4}>
                <Stack direction="row" gap={2}>
                  {" "}
                  <HomeIcon sx={{ color: "white" }} />{" "}
                  <Link href="/" color="#fff">
                    home
                  </Link>
                </Stack>
                <Stack direction="row" gap={2}>
                  {" "}
                  <ContactSupportIcon sx={{ color: "white" }} />{" "}
                  <Link href="/contact" color="#fff">
                    contact
                  </Link>
                </Stack>

                <Stack direction="row" gap={2}>
                  <InfoIcon sx={{ color: "white" }} />{" "}
                  <Link href="/about" color="#fff">
                    about
                  </Link>
                </Stack>

                <Stack direction="row" gap={2}>
                  <EmailIcon sx={{ color: "white" }} />{" "}
                  <MailTo label="email" sx={{ color: "#ffffff" }} />
                </Stack>
              </Stack>
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

              <Stack direction="row" gap={2} pt={3}>
                <LocationOnIcon sx={{ color: "white" }} />
                <Typography>
                  <div style={{ textAlign: "start" }}>
                    <div>{address.address}</div>
                    <div>{address.city}</div>
                  </div>{" "}
                </Typography>
              </Stack>

              <Stack flexDirection="row" flexWrap="wrap" gap={3} pt={3}>
                <Stack direction="row" gap={2}>
                  <PhoneIphoneIcon sx={{ color: "white" }} />
                  <Typography>{address.phone} </Typography>
                </Stack>

                <Stack direction="row" gap={2}>
                  <FaxIcon sx={{ color: "white" }} />
                  <Typography>{address.fax}</Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};
