import { Link, Stack } from "@mui/material";
import { MailTo } from "../Social.jsx/MailTo";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import EmailIcon from "@mui/icons-material/Email";

const IconLink = ({ icon, link, label }) => {
  return (
    <Stack direction="row" gap={2}>
      {icon}
      <Link href={link} color="#fff">
        {label}
      </Link>
    </Stack>
  );
};

export const IconLinks = () => {
  return (
    <Stack gap={2} p={3} mb={4}>
      <IconLink
        icon={<HomeIcon sx={{ color: "white" }} />}
        link={"/"}
        label="home"
      />

      <IconLink
        icon={<ContactSupportIcon sx={{ color: "white" }} />}
        link={"/contact"}
        label="contact"
      />

      <IconLink
        icon={<InfoIcon sx={{ color: "white" }} />}
        link={"/about"}
        label="about"
      />

      <Stack direction="row" gap={2}>
        <EmailIcon sx={{ color: "white" }} />{" "}
        <MailTo label="email" sx={{ color: "#ffffff" }} />
      </Stack>
    </Stack>
  );
};
