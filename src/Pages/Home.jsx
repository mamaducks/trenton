import { Container } from "@mui/material";
import { HomeImagesCard } from "../Home/HomeImageCard/HomeImagesCard";
import { Latest } from "../Home/Latest";
import { Meetings } from "../Home/Meetings";
import {useMediaQuery} from 'react-responsive';


export function Home() {

  const isWide = useMediaQuery({
    query: '(min-device-width: 600px)',
  });

  return (
    <>
    <Container maxWidth="xl">
    {isWide && (  <HomeImagesCard />)}
      
    </Container>
     <Latest />
      <Meetings />
    </>
  );
}
