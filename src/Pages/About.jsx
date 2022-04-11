import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ElectedCards } from "../InfoCards/Elected";
import { StewardCards } from "../InfoCards/Stewards";
import {
  Button,
  Container,
  Divider,
  Stack,
} from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { viewMode } from "../state/data/toggleView";

export function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Elected</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5" lineHeight={2} pt={5} textAlign="center">
            Elected Officials
          </Typography>
          <ElectedCards />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Stewards</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5" lineHeight={2} pt={5} textAlign="center">
            Our Stewards
          </Typography>
          <StewardCards />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export function About() {
  const view = useRecoilValue(viewMode);

  return (
    <div>
      <Container maxWidth="xl">
        <Typography variant="h5" lineHeight={2} pt={5} textAlign="center" color="text.primary">
          ABOUT US
        </Typography>
        <Divider variant="middle" />
        <Typography variant="h6" textAlign="start" alignItems="start" px={10} color="text.primary">
          The Trenton Metro Area Local Represents over 500 members in the Clerk,
          Maintenance and Motor Vehicle Crafts in the Trenton New Jersey area.
          The Majority of our members are employed at the Trenton P&DC and its
          stations.
        </Typography>
        <SimpleAccordion />
      </Container>

      <ToggleButtons />
      {view ? <ElectedCards /> : <StewardCards />}
    </div>
  );
}

export default function ToggleButtons() {
  const [view, setView] = useRecoilState(viewMode);

  return (
    <>
      <Stack direction="row" gap={3} justifyContent="center" py={5}>
        <Button
          size="large"
          aria-label="elected view"
          sx={{
            borderRadius: "10px",
            border: "2px solid",
            color: view ? "#183884" : "#1e2f4d",
          }}
          onClick={() => setView(true)}
        >
          Elected Officials
        </Button>
        <Button
          size="large"
          aria-label="steward view"
          sx={{
            borderRadius: "10px",
            border: "2px solid",
            color: !view ? "#183884" : "#1e2f4d",
          }}
          onClick={() => setView(false)}
        >
          Our Stewards
        </Button>
      </Stack>
    </>
  );
}
