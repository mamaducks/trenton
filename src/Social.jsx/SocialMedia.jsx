import { MailTo } from "./MailTo";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { makeStyles } from "@mui/styles";
import { ButtonBase, Icon, IconButton, Stack } from "@mui/material";

const useStyles = makeStyles(({ spacing }) => ({
  social: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "10px",
    width: "100%",
    fontSize: "2em",
    // "& > a": {
    //   marginLeft: spacing(),
    // },
  },
}));

const social = [
  {
    id: "face",
    icon: FacebookIcon,
    link: "https://www.facebook.com/Home-Inspections-105580485123207/",
  },
  // {id: "", icon: "", link: ""},
  // {id: "", icon: "", link: ""},

  // {id: "", icon: "", link: ""},
];

export function SocialLinkBroke({ id, link, icon }) {
  return (
    <ButtonBase key={id}>
      <IconButton size="large" href={link} sx={{ color: "white" }}>
        <Icon sx={{ color: "white", fontSize: "larger" }}>{icon}</Icon>
      </IconButton>
    </ButtonBase>
  );
}

export function FooterSocial() {
  return (
    <Stack direction="row" justifyContent="center">
      <SocialLinkBroke id="face" link="" icon={<FacebookIcon />} />
      <SocialLinkBroke id="insta" link="" icon={<InstagramIcon />} />
      <SocialLinkBroke id="twit" link="" icon={<TwitterIcon />} />
      <SocialLinkBroke id="linked" link="" icon={<LinkedInIcon />} />
    </Stack>
  );
}

export function SocialLink({ color, size, label, ...props }) {
  const classes = useStyles();

  return (
    <Stack direction="row" justifyContent="center" {...props}>
      {social.map((item) => (
        <ButtonBase key={item.id}>
          <IconButton size="large" href={item.link}>
            <Icon
              icon={item.icon}
              sx={{ color: "white", fontSize: "larger" }}
            />

            <FacebookIcon sx={{ color: "white", fontSize: "larger" }} />
          </IconButton>
        </ButtonBase>
      ))}

      <ButtonBase>
        <IconButton
          size="large"
          href="https://www.facebook.com/Home-Inspections-105580485123207/"
        >
          <InstagramIcon sx={{ color: "white", fontSize: "larger" }} />
        </IconButton>
      </ButtonBase>

      <ButtonBase>
        <IconButton
          size="large"
          href="https://www.facebook.com/Home-Inspections-105580485123207/"
        >
          <TwitterIcon sx={{ color: "white", fontSize: "larger" }} />
        </IconButton>
      </ButtonBase>

      <ButtonBase>
        <IconButton
          size="large"
          href="https://www.facebook.com/Home-Inspections-105580485123207/"
        >
          <LinkedInIcon sx={{ color: "white", fontSize: "larger" }} />
        </IconButton>
      </ButtonBase>
    </Stack>
  );
}
