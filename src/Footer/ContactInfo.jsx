import { Typography, Stack } from "@mui/material";
import { useRecoilValue } from "recoil";
import { contact } from "../state/contact";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import FaxIcon from "@mui/icons-material/Fax";

export const ContactInfo = () => {
  const address = useRecoilValue(contact);

  return (
    <>
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
    </>
  );
};
