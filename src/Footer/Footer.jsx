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
} from "@mui/material";
import { useRecoilValue } from "recoil";
import { MailTo } from "../Social.jsx/MailTo";
import { Social } from "../Social.jsx/SocialMedia";
import { contact } from "../state/contact";

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
        {/* <Box
          display="flex"
          alignItems="center"
          flexWrap="wrap"
          // alignContent="center"
        > */}
        <Grid container direction="row">
          <Grid item sm={4}>
            <Box textAlign="center" flex="auto" paddingTop="10px">
              <Typography
                variant="subtitle1"
                paddingTop="8px"
                paddingBottom="1px"
                gutterBottom
              >
                Trenton Metro Area Local
              </Typography>
              {/* <Typography variant="subtitle2" lineHeight="1.4"> */}

              <Social />
              {/* </Typography> */}
            </Box>
          </Grid>
          <Grid item sm={4}>
            <Box
              // margin="5px"
              display="flex"
              flex="auto"
              alignItems="center"
              style={{ justifyContent: "center" }}
            >
              {/* {isWide && (
              <img
                alt=""
                src={House}
                width="165px"
                maxHeight="100px"
                style={{paddingInline: '5px'}}
              />
            )} */}
              <Box
                display="flex"
                style={{ flexDirection: "column", justifyContent: "center" }}
              >
                QuickLinks


                <List>
                  <ListItem>
                      <Link href="home" color="#fff">home </Link>
                  </ListItem>
                  <ListItem>
                      <Link href="about" color="#fff"> about</Link>
                    
                  </ListItem>
                  <ListItem>
                      <Link href="contact" color="#fff">contact</Link>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Grid>
          <Grid item sm={4}>
 <Box textAlign="center" flex="auto" paddingTop="10px">
            <Typography variant="body1">Get In Touch</Typography>
            <Typography variant="body1">{address.address}</Typography>
            <Typography variant="body1">{address.city}</Typography>

            <Typography variant="body1">{address.phone}</Typography>
            <Typography variant="body1">{address.fax}</Typography>
            <Typography variant="body1"><MailTo label={address.email} /></Typography>
            </Box>

         
          </Grid>
        </Grid>

        {/* </Box> */}
      </AppBar>
    </>
  );
};
