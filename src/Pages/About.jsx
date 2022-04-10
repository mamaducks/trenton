import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ElectedCards } from "../InfoCards/Elected";
import { StewardCards } from "../InfoCards/Stewards";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import { Button, IconButton, Stack, Tooltip } from "@mui/material";
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
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
      <Typography variant="h5" lineHeight={2} textAlign="center">
        ABOUT US
      </Typography>
      <Typography variant="h6" textAlign="start" alignItems="start" px={7}>
        The Trenton Metro Area
        Local Represents over 500 members in the Clerk, Maintenance and Motor
        Vehicle Crafts in the Trenton New Jersey area. The Majority of our
        members are employed at the Trenton P&DC and its stations.
      </Typography>
      <ToggleButtons />
      {view ? <ElectedCards /> : <StewardCards />}
      <SimpleAccordion />
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
            color: view ? "#103964" : "#677e99",
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
            color: !view ? "#103964" : "#677e99",
          }}
          onClick={() => setView(false)}
        >
          Our Stewards
        </Button>
      </Stack>
    </>
  );
}
