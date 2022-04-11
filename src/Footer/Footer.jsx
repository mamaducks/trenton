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
import { Social, SocialLink } from "../Social.jsx/SocialMedia";
import { contact } from "../state/contact";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import EmailIcon from "@mui/icons-material/Email";

// import {FooterButtons} from './FooterButtons';
// import {FooterRight} from './FooterRight';

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
            <Box textAlign="center" flex="auto" paddingTop="10px">
              <Typography
                variant="h6"
                paddingTop="8px"
                paddingBottom="1px"
                gutterBottom
              >
                Trenton Metro Area Local
              </Typography>

              <SocialLink />
            </Box>
          </Grid>
          <Grid item sm={4}>
        
         
              <Box
                display="flex"
                flexDirection="column"
                textAlign="center" flex="auto" paddingTop="10px"
              >
                {/* <List> */}
                  <Typography
                    variant="h6"
                    paddingTop="8px"
                    paddingBottom="1px"
                    gutterBottom
                  >
                    Quick Links
                  </Typography>

                  <ListItem>
                    <ListItem>
                      <ListItemIcon sx={{minWidth: "30px"}}>
                        <HomeIcon sx={{color:"white"}} />
                      </ListItemIcon>
                      <Link href="/" color="#fff">
                        home
                      </Link>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon sx={{minWidth: "30px"}}>
                        <InfoIcon sx={{color:"white"}}/>
                      </ListItemIcon>
                      <Link href="/about" color="#fff">
                        about
                      </Link>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon sx={{minWidth: "30px"}}>
                        <ContactSupportIcon sx={{color:"white"}}/>
                      </ListItemIcon>
                      <Link href="/contact" color="#fff">
                        contact
                      </Link>
                    </ListItem>

                    <ListItem>
                      <ListItemIcon sx={{minWidth: "30px"}}>
                        <EmailIcon sx={{color:"white"}}/>
                      </ListItemIcon>
                      <MailTo label="email" sx={{color:"white"}}/>
                      {/* <Link href="/contact" color="#fff">
                        email
                      </Link> */}
                    </ListItem>
                  </ListItem>
                {/* </List> */}
              </Box>
          </Grid>
          <Grid item sm={4}>
            <Box textAlign="center" flex="auto" paddingTop="10px">
              <Typography
                variant="h6"
                paddingTop="8px"
                paddingBottom="1px"
                gutterBottom
              >
                Get In Touch{" "}
              </Typography>
              <Typography variant="body1">{address.address}</Typography>
              <Typography variant="body1">{address.city}</Typography>
              <Stack direction="row" justifyContent="center" gap={4}>
                <Typography variant="body1">{address.phone}</Typography>
                <Typography variant="body1">{address.fax}</Typography>
              </Stack>

              {/* <Typography variant="body1">
                <MailTo label={address.email} />
              </Typography> */}
            </Box>
          </Grid>
        </Grid>

        {/* </Box> */}
      </AppBar>
    </>
  );
};
