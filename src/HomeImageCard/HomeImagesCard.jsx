import ImageGallery from "react-image-gallery";
import { Box, Grid, Card, CardMedia, Stack, Typography } from "@mui/material";
import bldg from "./bldg.png";
import eagle from "./eagle.png";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

export function HomeImagesCard() {
  return (
    <>
      <Grid container sx={{ bgcolor: "#7aabc2" }}>
        <Grid item sm={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <img
            alt="bldg"
            src={bldg}
            width={750}
            height="auto"
            style={{
              // alignSelf: "flex-end",
              minWidth: 350,
              flexGrow: 0,
              // marginInline: 10,
            }}
          />
        </Grid>

        <Grid item sm={6} alignSelf="center">
          <Typography textAlign="center" variant="h4">
            TRENTON METRO AREA LOCAL
          </Typography>
        </Grid>
      </Grid>

      <Grid container sx={{ bgcolor: "#cab46e" }}>
        <Grid item sm={6} alignSelf="center">
          <Typography variant="h5" px={20} maxWidth={580} textAlign="start">
            The Trenton Metro Area Local represents over 500 members in the
            Clerk, Maintenance and Motor Vehicle Crafts in the Trenton New
            Jersey area. The majority of our members are employed at the Trenton
            P&DC and its stations.
          </Typography>
        </Grid>

        <Grid
          item
          sm={6}
          sx={{ display: "flex", justifyContent: "flex-start" }}
        >
          <img
            alt="bldg"
            src={eagle}
            width={750}
            height="auto"
            style={{
              // alignSelf: "flex-start",
              minWidth: 350,
              flexGrow: 0,
              // marginInline: 10,
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
