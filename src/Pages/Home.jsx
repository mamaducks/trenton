import { Footer } from "../Footer/Footer";
import { HomeImagesCard } from "../Home/HomeImageCard/HomeImagesCard";
import { Latest } from "../Home/Latest";
import { Meetings } from "../Home/Meetings";

export function Home() {
  return (
    <>
      <HomeImagesCard />
      <Latest />
      <Meetings />
      <Footer />
    </>
  );
}
