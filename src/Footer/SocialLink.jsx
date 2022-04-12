import { ButtonBase, IconButton, Stack } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";



const SocialLink = ({ id, link, icon }) => {
  return (
    <ButtonBase key={id}>
      <IconButton size="large" href={link} sx={{ color: "white" }}>
        {icon}
      </IconButton>
    </ButtonBase>
  );
};

export const SocialLinks = () => {


  return (
    <Stack direction="row" justifyContent="center">
      <SocialLink id="face" link="" icon={<FacebookIcon fontSize="large" />} />
      <SocialLink
        id="insta"
        link=""
        icon={<InstagramIcon fontSize="large" />}
      />
      <SocialLink id="twit" link="" icon={<TwitterIcon fontSize="large" />} />
      <SocialLink
        id="linked"
        link=""
        icon={<LinkedInIcon fontSize="large" />}
      />
    </Stack>
  );
};
