import { Typography } from "@mui/material";
import { ElectedCards } from "../InfoCards/Elected";
import { InfoCardContainer } from "../PersonInfoCard";

export function Elected() {
    return (
      <>
      <Typography>Elected Officials</Typography>

        <InfoCardContainer>
        <ElectedCards />
      </InfoCardContainer>
      </>
    );
}