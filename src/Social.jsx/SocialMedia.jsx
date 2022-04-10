import { MailTo } from "./MailTo";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { makeStyles } from "@mui/styles";
import { ButtonBase, IconButton, Stack } from "@mui/material";

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

export function SocialLink({ color, size, label, ...props }) {
  const classes = useStyles();

  return (
    <Stack direction="row" justifyContent="center" {...props}>
      <ButtonBase>
        <IconButton
          size="large"
          href="https://www.facebook.com/Home-Inspections-105580485123207/"
        >
          <FacebookIcon color="black" fontSize="2em" />
        </IconButton>
      </ButtonBase>

      <ButtonBase>
        <IconButton
          size="large"
          href="https://www.facebook.com/Home-Inspections-105580485123207/"
        >
          <InstagramIcon color="black" fontSize="larger" />
        </IconButton>
      </ButtonBase>

      <ButtonBase>
        <IconButton
          size="large"
          href="https://www.facebook.com/Home-Inspections-105580485123207/"
        >
          <TwitterIcon color="black" fontSize="larger" />
        </IconButton>
      </ButtonBase>

      <ButtonBase>
        <IconButton
          size="large"
          href="https://www.facebook.com/Home-Inspections-105580485123207/"
        >
          <LinkedInIcon color="black" fontSize="larger" />
        </IconButton>
      </ButtonBase>
    </Stack>
  );
}
