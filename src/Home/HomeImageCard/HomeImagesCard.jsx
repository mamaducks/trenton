import { Grid, Typography } from "@mui/material";
import bldg from "./bldg.png";
import eagle from "./eagle.png";

export function HomeImagesCard() {
  return (
    <>
      <Grid
        container
        sx={{
          bgcolor: "#e7ebee",
          flexDirection: "row-reverse",
          justifyContent: "center",
        }}
      >
        <Grid item sm={5} alignSelf="center">
          <Typography textAlign="center" variant="h4" color="text.primary">
            TRENTON METRO AREA LOCAL
          </Typography>
        </Grid>
        <Grid item sm={7} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <img
            alt="bldg"
            src={bldg}
            width="100%"
            max-width="400"
            height="auto"
          />
        </Grid>
      </Grid>

      <Grid container sx={{ bgcolor: "#a7bac8" }}>
        <Grid item sm={5} alignSelf="center">
          <Typography
            variant="h5"
            px={20}
            maxWidth={580}
            textAlign="start"
            color="text.primary"
          >
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
            width="100%"
            max-width="400"
            height="auto"
          />
        </Grid>
      </Grid>
    </>
  );
}
