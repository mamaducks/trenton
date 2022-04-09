import { MailTo } from "./MailTo";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { makeStyles } from '@mui/styles';

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

export function Social({ color, size, label, ...props }) {
  const classes = useStyles();

  return (
    <div className={classes.social} {...props}>
      <a href="https://www.facebook.com/Home-Inspections-105580485123207/">
        <FacebookIcon color="black" />
      </a>

      <a
        href="https://www.instagram.com/buyerbewarehomeinspections"
        className="instagram social"
      >
        <InstagramIcon color="black" />
      </a>

      <a href="https://www.spectora.com/inspection-request/my-inspection-company-2f689b3a14">
        <TwitterIcon color="black" />
      </a>

      <a href="https://www.spectora.com/inspection-request/my-inspection-company-2f689b3a14">
        <LinkedInIcon color="black" />
      </a>

      {/* <MailTo color="black" /> */}
    </div>
  );
}
