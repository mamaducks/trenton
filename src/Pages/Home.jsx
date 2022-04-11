import { Container } from "@mui/material";
import { BodyHome } from "../Home/BottomHome";
import { HomeImagesCard } from "../Home/HomeImageCard/HomeImagesCard";
import { Latest } from "../Home/Latest";
import { Meetings } from "../Home/Meetings";
import { Samole } from "../pdf/PdfView";

export function Home() {
  return (
    <>
    <Container maxWidth="xl">
       <HomeImagesCard />
      
    </Container>
     <Latest />
      <Meetings />
      <Samole />
      <BodyHome />
    </>
  );
}
