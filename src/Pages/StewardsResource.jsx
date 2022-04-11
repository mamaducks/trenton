import {
  Divider,
  List,
  ListItem,
  Typography,
  Link,
  Stack,
  ListItemIcon,
  ListSubheader,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const grievance = [
  {
    linkLabel: "Request For Information Form (DOT)",
    href: "https://tmal1020.com/stewards-forms/RFI-Blank.pdf",
  },

  {
    linkLabel: "Step 1 Grievance Form",
    href: "https://tmal1020.com/stewards-forms/step1grievance.pdf",
  },
  {
    linkLabel: "Step 2 Grievance Appeal Form",
    href: "https://tmal1020.com/stewards-forms/step2grievanceappeal.pdf",
  },
  {
    linkLabel: "Step 2 Appeal Arbitration Form",
    href: "https://tmal1020.com/stewards-forms/appealtoarbitrationfromstep2form.pdf",
  },

  {
    linkLabel: "Step 3 Grievance Appeal Form",
    href: "https://tmal1020.com/stewards-forms/step3grievanceappealform.pdf",
  },
  {
    linkLabel: "Settlement Form With ID#",
    href: "https://tmal1020.com/stewards-forms/Settlement-Form-With-ID.pdf",
  },
];

const contracts = [
  {
    linkLabel: "JCIM - 2017 (PDF)",
    href: "https://tmal1020.com/pdf-books/",
  },

  {
    linkLabel: "Contract 2018-2021 (PDF)",
    href: "https://tmal1020.com/pdf-books/",
  },
  {
    linkLabel: "Local MOU (PDF)",
    href: "https://tmal1020.com/pdf-books/",
  },
  {
    linkLabel: "Stewards Training Manual (PDF)",
    href: "https://tmal1020.com/pdf-books/",
  },
];

export const benefits = [
  {
    linkLabel: 'FEHB “Federal Employee Health Benefit Plan"',
    href: "https://www.opm.gov/healthcare-insurance/healthcare/",
  },

  {
    linkLabel: "FEDVIP “Dental & Vision Plan”",
    href: "https://www.opm.gov/healthcare-insurance/dental-vision/",
  },
  {
    linkLabel: "FSA “Flexible Spending Accounts”",
    href: "https://www.opm.gov/healthcare-insurance/flexible-spending-accounts/",
  },
  {
    linkLabel: "FEGLI “Life Insurance”",
    href: "https://www.opm.gov/healthcare-insurance/life-insurance/",
  },
  {
    linkLabel: "FLTCIP “Long Term Care Insurance Program”",
    href: "https://www.opm.gov/healthcare-insurance/long-term-care/",
  },
];

const checklist = [
  {
    linkLabel: "Time Limits Checklist",
    href: "/resources/stewards/checklist",
  },
];

export function ResourceHeader({ title, children }) {
  return (
    <List>
      <ListSubheader sx={{ fontSize: "larger" }}>{title}</ListSubheader>
      {children}
    </List>
  );
}

export function ResourceList({ linkLabel, href }) {
  return (
    <ListItem>
      <ListItemIcon>
        <ChevronRightIcon />
      </ListItemIcon>
      <Link href={href} target="blank">
        {linkLabel}
      </Link>
    </ListItem>
  );
}

export function StewardsCorner() {
  return (
    <div>
      <Typography variant="h5" lineHeight={2} pt={5}>
        Stewards Corner
      </Typography>
      <Divider />
      <Stack direction="row" justifyContent="space-evenly" flexWrap="wrap">
        <ResourceHeader title="GRIEVANCE FORMS">
          {grievance.map((item) => (
            <ResourceList linkLabel={item.linkLabel} href={item.href} />
          ))}
        </ResourceHeader>

        <ResourceHeader title="CONTRACT AND MANUAL">
          {contracts.map((item) => (
            <ResourceList linkLabel={item.linkLabel} href={item.href} />
          ))}
        </ResourceHeader>

        <ResourceHeader title="LINKS TO EMPLOYEE BENEFITS">
          {benefits.map((item) => (
            <ResourceList linkLabel={item.linkLabel} href={item.href} />
          ))}
        </ResourceHeader>

        <ResourceHeader title="Checklists">
          {checklist.map((item) => (
            <ResourceList linkLabel={item.linkLabel} href={item.href} />
          ))}
        </ResourceHeader>
      </Stack>
    </div>
  );
}
