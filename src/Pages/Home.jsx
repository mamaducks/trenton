import { Container } from "@mui/material";
import { HomeImagesCard } from "../Home/HomeImageCard/HomeImagesCard";
import { Latest } from "../Home/Latest";
import { Meetings } from "../Home/Meetings";

export function Home() {
  return (
    <>
    <Container maxWidth="xl">
       <HomeImagesCard />
      
    </Container>
     <Latest />
      <Meetings />
    </>
  );
}
