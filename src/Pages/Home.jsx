import { Footer } from "../Footer/Footer";
import { HomeImagesCard } from "../Home/HomeImageCard/HomeImagesCard";
import { Latest } from "../Home/Latest";
import { Meetings } from "../Home/Meetings";
import { Samole } from "../pdf/PdfView";

export function Home() {
  return (
    <>
      <HomeImagesCard />
      <Latest />
      <Meetings />
      <Samole />
      <Footer />
    </>
  );
}
