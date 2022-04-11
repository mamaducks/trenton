import { Container, Divider, Icon, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { ContactForm } from "../Contact";
import { contact } from "../state/contact";

export function Contact() {
  const info = useRecoilValue(contact);
  return (
    <>
      <Typography variant="h5" lineHeight={2} pt={5} textAlign="center">Get in Touch</Typography>
      
      <Container>
<Divider />
     
      <ContactForm />
      <Icon></Icon>
      {/* <Typography>Address</Typography>
      <Typography>
        {info.address}
        {info.city}
      </Typography>
      <Icon></Icon>
      <Typography>phone</Typography>
      <Typography>{info.phone}</Typography>
      <Icon></Icon>
      <Typography>fax</Typography>
      <Typography>{info.fax}</Typography>
      <Icon></Icon>
      <Typography>Email</Typography>
      <Typography>{info.email}</Typography> */}
      </Container>
    </>
  );
}
