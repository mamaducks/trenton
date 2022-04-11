import { Container, Divider, Icon, Stack, Typography } from "@mui/material";
import { ContactForm } from "../Contact";
import NoteAltIcon from "@mui/icons-material/NoteAlt";

export function Contact() {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={2}
        py={3}
      >
        <Icon color="primary">
          <NoteAltIcon />
        </Icon>
        <Typography variant="h5" textAlign="center" color="text.primary">
          Contact Us
        </Typography>
      </Stack>

      <Container>
        <Divider />

        <ContactForm />
        <Icon></Icon>
      </Container>
    </>
  );
}
