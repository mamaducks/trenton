import { Typography } from "@mui/material";
import { StewardCards } from "../InfoCards/Stewards";
import { InfoCardContainer } from "../PersonInfoCard";

export function Stewards() {
  return (
    <>
      <Typography>Our Stewards</Typography>
      <InfoCardContainer>
        <StewardCards />
      </InfoCardContainer>
    </>
  );
}
