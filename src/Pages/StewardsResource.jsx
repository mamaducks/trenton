import {
  Divider,
  List,
  ListItem,
  Link,
  Stack,
  ListItemIcon,
  ListSubheader,
  ListItemText,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArticleIcon from "@mui/icons-material/Article";

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

export function ResourceHeader({ title, children }) {
  return (
    <List>
      <ListItem sx={{ pb: 0 }}>
        <ListItemIcon sx={{ minWidth: 10, color: "#1e2f4d" }}>
          <ArticleIcon />
        </ListItemIcon>
        <ListSubheader
          sx={{
            fontSize: "larger",
            textDecoration: "underline",
            color: "text.primary",
            px: 3,
          }}
        >
          {title}
        </ListSubheader>
      </ListItem>

      {/* <Divider variant="middle" /> */}
      {children}
    </List>
  );
}

export function ResourceList({ linkLabel, href }) {
  return (
    <ListItem sx={{ maxWidth: 650 }}>
      <ListItemIcon>
        <ChevronRightIcon sx={{ color: "#183884" }} />
      </ListItemIcon>
      <Link
        href={href}
        target="_blank"
        fontSize="large"
        color="text.secondary"
        flexWrap="wrap"
      >
        {linkLabel}
      </Link>
    </ListItem>
  );
}

export function StewardsCorner() {
  return (
    <div>
      <ListItem sx={{ pl: 30 }}>
        <ListItemIcon sx={{ minWidth: 0, fontSize: "large", pr: 3 }}>
          <ArrowForwardIosIcon color="primary" />
        </ListItemIcon>
        <ListItemText
          primary="Stewards Corner"
          primaryTypographyProps={{ fontSize: "2em", color: "text.primary" }}
        />
      </ListItem>

      <Divider variant="middle" sx={{ mx: 10 }} />
      <Stack direction="row" justifyContent="space-evenly" flexWrap="wrap">
        <ResourceHeader title="GRIEVANCE FORMS">
          {grievance.map((item) => (
            <ResourceList linkLabel={item.linkLabel} href={item.href} />
          ))}
        </ResourceHeader>

        <ResourceHeader title="CONTRACTS AND MANUALS">
          {contracts.map((item) => (
            <ResourceList linkLabel={item.linkLabel} href={item.href} />
          ))}
        </ResourceHeader>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        flexWrap="wrap"
        py={5}
      >
        <ResourceHeader title="LINKS TO EMPLOYEE BENEFITS">
          {benefits.map((item) => (
            <ResourceList linkLabel={item.linkLabel} href={item.href} />
          ))}
        </ResourceHeader>

        <ResourceHeader title="CHECKLISTS">
          <ListItem sx={{ maxWidth: 650 }}>
            <ListItemIcon>
              <ChevronRightIcon sx={{ color: "#183884" }} />
            </ListItemIcon>
            <Link
              href="/resources/stewards/checklist"
              fontSize="large"
              color="text.secondary"
              flexWrap="wrap"
            >
              Time Limits Checklist
            </Link>
          </ListItem>
        </ResourceHeader>
      </Stack>
    </div>
  );
}
