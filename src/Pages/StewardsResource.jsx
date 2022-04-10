import { Divider, List, ListItem, Typography, Link } from "@mui/material";

export function StewardsCorner() {
  return (
    <div>
        <Typography>
            Stewards Corner
        </Typography>
        <Divider/>
      <Typography>GRIEVANCE FORMS</Typography>
      <List>
        <ListItem>
          <Link>Request For Information Form (DOT)</Link>
        </ListItem>
        <ListItem>
          <Link> Step 1 Grievance Form</Link>
        </ListItem>
        <ListItem>
          <Link>Step 2 Grievance Appeal Form</Link>
        </ListItem>
        <ListItem>
          <Link>Step 2 Appeal Arbitration Form </Link>
        </ListItem>
        <ListItem>
          <Link> Step 3 Grievance Appeal Form </Link>
        </ListItem>
        <ListItem>
          <Link> Settlement Form With ID#</Link>
        </ListItem>
      </List>
      <Typography>CONTRACT AND MANUAL</Typography>
      <List>
        <ListItem>
          <Link>JCIM - 2017 (PDF) </Link>
        </ListItem>
        <ListItem>
          <Link> Contract 2018-2021 (PDF) </Link>
        </ListItem>
        <ListItem>
          <Link> Local MOU (PDF)</Link>
        </ListItem>
        <ListItem>
          <Link> Stewards Training Manual (PDF)</Link>
        </ListItem>
      </List>
      <Typography>LINKS TO EMPLOYEE BENEFITS</Typography>
      <List>
        <ListItem>
          <Link>FEHB “Federal Employee Health Benefit Plan” </Link>
        </ListItem>
        <ListItem>
          <Link> FEDVIP “Dental & Vision Plan” </Link>
        </ListItem>
        <ListItem>
          <Link>FSA “Flexible Spending Accounts”</Link>
        </ListItem>
        <ListItem>
          <Link> FEGLI “Life Insurance”</Link>
        </ListItem>
        <ListItem>
          <Link>FLTCIP “Long Term Care Insurance Program”</Link>
        </ListItem>
      </List>

      <Typography>CHECK LISTS</Typography>
      <List>
        <ListItem>
          <Link>Time Limits Checklist</Link>
        </ListItem>
      </List>
    </div>
  );
}
