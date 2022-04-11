import ImageGallery from "react-image-gallery";
import { Box, Grid, Card, CardMedia, Stack, Typography } from "@mui/material";
import bldg from "./bldg.png";
import eagle from "./eagle.png";

export function HomeImagesCard() {
  return (
    <>
      <Grid container sx={{ bgcolor: "#62a9db",  }}>
        <Grid item sm={7} sx={{ display: "flex", justifyContent: "flex-end"}}>
          <img
            alt="bldg"
            src={bldg}
            // width="auto"
            // height={460}
            style={{
              // alignSelf: "flex-end",
              minWidth: 350,
              flexGrow: 0,
              // marginInline: 10,
            }}
          />
        </Grid>

        <Grid item sm={5} alignSelf="center">
          <Typography textAlign="center" variant="h4" color="text.primary">
            TRENTON METRO AREA LOCAL
          </Typography>
        </Grid>
      </Grid>

      <Grid container sx={{ bgcolor: "#d8a76e" }}>
        <Grid item sm={5} alignSelf="center">
          <Typography variant="h5" px={20} maxWidth={580} textAlign="start" color="text.primary">
            The Trenton Metro Area Local represents over 500 members in the
            Clerk, Maintenance and Motor Vehicle Crafts in the Trenton New
            Jersey area. The majority of our members are employed at the Trenton
            P&DC and its stations.
          </Typography>
        </Grid>

        <Grid
          item
          sm={7}
          sx={{ display: "flex", justifyContent: "flex-start" }}
        >
          <img
            alt="bldg"
            src={eagle}
            // width="auto"
            // height={460}
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
