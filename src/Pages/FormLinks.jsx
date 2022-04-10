import { Divider, Link, List, ListItem, Typography } from "@mui/material";

export function FormLinks() {
  return (
    <div>
      <Typography>SOME USEFUL FORMS FOR DOWNLOAD</Typography>
      <Divider />

      <List>
        <Typography>LEAVE FORMS</Typography>

        <ListItem>
          <Link>PS 3971 Leave Slip</Link>
        </ListItem>

        <ListItem>
          <Link> PS 3189 Schedule Change</Link>
        </ListItem>

        <ListItem>
          <Link>PS 1767 Report Of Hazard, Unsafe Condition Or Practice</Link>
        </ListItem>

        <ListItem>
          <Link>Fact Sheet #2 What You Can Do About Unsafe Conditions</Link>
        </ListItem>
      </List>

      <List>
        <Typography>FMLA FORMS</Typography>
        <ListItem>
          <Link>
            WH-380-E Certification Of Health Care Provider For Employee’s
            Serious Health Condition (PDF)
          </Link>
        </ListItem>

        <ListItem>
          <Link>
            WH-380-F Certification Of Health Care Provider For Family Member’s
            Serious Health Condition (PDF)
          </Link>
        </ListItem>

        <ListItem>
          <Link>
            WH-381 Notice Of Eligibility And Rights & Responsibilities (PDF)
          </Link>
        </ListItem>

        <ListItem>
          <Link>WH-382 Designation Notice (PDF) </Link>
        </ListItem>

        <ListItem>
          <Link> FMLA Short Form (PDF)</Link>
        </ListItem>
      </List>

      <List>
        <Typography>LINKS TO EMPLOYEE BENEFITS</Typography>
        <ListItem>
          <Link>FEHB “Federal Employee Health Benefit Plan”</Link>
        </ListItem>

        <ListItem>
          <Link> FEDVIP “Dental & Vision Plan”</Link>
        </ListItem>

        <ListItem>
          <Link>FSA “Flexible Spending Accounts”</Link>
        </ListItem>

        <ListItem>
          <Link> FEGLI “Life Insurance”</Link>
        </ListItem>

        <ListItem>
          <Link>FLTCIP “Long Term Care Insurance Program” </Link>
        </ListItem>
      </List>
      <List>
        <Typography>POSTAL LINKS</Typography>

        <ListItem>
          <Link>United States Postal Service </Link>
        </ListItem>

        <ListItem>
          <Link>Lite Blue “USPS Extranet”</Link>
        </ListItem>

        <ListItem>
          <Link>Thrift Savings Plan “TSP” </Link>
        </ListItem>

        <ListItem>
          <Link>
            U.S. Postal Inspection Service Family Medical Leave Act “FMLA”
          </Link>
        </ListItem>

        <ListItem>
          <Link>Family Medical Leave Act “FMLA”</Link>
        </ListItem>

        <ListItem>
          <Link> Occupational Safety And Health Administration “OHSA”</Link>
        </ListItem>

        <ListItem>
          <Link>National Labor Relations Board “NLRB”</Link>
        </ListItem>

        <ListItem>
          <Link>National Labor Relations Act “NLRA” </Link>
        </ListItem>

        <ListItem>
          <Link>Merit Systems Protection Board “MSPB”</Link>
        </ListItem>

        <ListItem>
          <Link>Veteran’s Administration “VA”</Link>
        </ListItem>

        <ListItem>
          <Link>Disabled American Veteran’s “DAV” </Link>
        </ListItem>
      </List>
      <List>
        <Typography>OTHER RESOURCES</Typography>

        <ListItem>
          <Link>Employee Labor Relations Manual</Link>
        </ListItem>

        <ListItem>
          <Link>U.S. Equal Employment Opportunity Commission</Link>
        </ListItem>

        <ListItem>
          <Link>Office Of Worker”S Compensation Program (OWCP) </Link>
        </ListItem>
      </List>
    </div>
  );
}
