import { Divider, Stack, Typography } from "@mui/material";
import { ResourceHeader, ResourceList } from "./StewardsResource";

import { benefits } from "./StewardsResource";

const leave = [
  {
    linkLabel: "PS 3971 Leave Slip",
    href: "https://www.wvpwu.org/PS3971.pdf",
  },

  {
    linkLabel: "PS 3189 Schedule Change",
    href: "https://www.wvpwu.org/ps3189%20Schedule%20Change.pdf",
  },
  {
    linkLabel: "PS 1767 Report Of Hazard, Unsafe Condition Or Practice",
    href: "https://d1ocufyfjsc14h.cloudfront.net/sites/default/files/psform_1767-report_safety_hazard.pdf",
  },
  {
    linkLabel: "Fact Sheet #2 What You Can Do About Unsafe Conditions",
    href: "https://d1ocufyfjsc14h.cloudfront.net/sites/default/files/2.fact_sheet-what_you_can_do_about_unsafe_conditions.pdf",
  },
];

const flma = [
  {
    linkLabel:
      "WH-380-E Certification Of Health Care Provider For Employee’s Serious Health Condition (PDF)",
    href: "https://www.dol.gov/sites/dolgov/files/WHD/legacy/files/WH-380-E.pdf",
  },

  {
    linkLabel:
      "  WH-380-F Certification Of Health Care Provider For Family Member’s Serious Health Condition (PDF)",
    href: "https://www.dol.gov/sites/dolgov/files/WHD/legacy/files/WH-380-F.pdf",
  },
  {
    linkLabel:
      "WH-381 Notice Of Eligibility And Rights & Responsibilities (PDF)",
    href: "https://www.dol.gov/sites/dolgov/files/WHD/legacy/files/WH-381.pdf",
  },
  {
    linkLabel: "WH-382 Designation Notice (PDF)",
    href: "https://www.dol.gov/sites/dolgov/files/WHD/legacy/files/WH-382.pdf",
  },
  {
    linkLabel: "FMLA Short Form (PDF)",
    href: "https://apwu.org/sites/default/files/fmla-certification_employees_serious_health_condition_0.pdf",
  },
  {
    linkLabel: "Family Medical Leave Act “FMLA”",
    href: "",
  },
  {
    linkLabel: "Occupational Safety And Health Administration “OHSA”",
    href: "https://www.osha.gov/",
  },
  {
    linkLabel: "National Labor Relations Board “NLRB”",
    href: "https://www.nlrb.gov/",
  },

  {
    linkLabel: "National Labor Relations Act “NLRA”",
    href: "https://www.nlrb.gov/resources/national-labor-relations-act",
  },
  {
    linkLabel: "Merit Systems Protection Board “MSPB”",
    href: "https://www.mspb.gov/",
  },
  {
    linkLabel: "Veteran’s Administration “VA”",
    href: "https://www.va.gov/",
  },
  {
    linkLabel: "Disabled American Veteran’s “DAV”",
    href: "https://www.dav.org/",
  },
];

const postal = [
  {
    linkLabel: "United States Postal Service",
    href: "https://www.usps.com/",
  },

  {
    linkLabel: "Lite Blue “USPS Extranet”",
    href: "https://liteblue.usps.gov/wps/portal/!ut/p/c4/04_SB8K8xLLM9MSSzPy8xBz9CP0os3hnd0cPE3MfAwN_ozADAyM_0-BAg9BgYwNfQ_2CbEdFAHzIONg!/",
  },
  {
    linkLabel: "Thrift Savings Plan “TSP”",
    href: "https://www.tsp.gov/index.shtml",
  },
  {
    linkLabel:
      " U.S. Postal Inspection Service Family Medical Leave Act “FMLA”",
    href: "https://www.uspis.gov/",
  },
];

const other = [
  {
    linkLabel: "Employee Labor Relations Manual",
    href: "https://about.usps.com/manuals/elm/html/welcome.htm",
  },

  {
    linkLabel: "U.S. Equal Employment Opportunity Commission",
    href: "https://www.eeoc.gov/",
  },
  {
    linkLabel: "Office Of Worker”S Compensation Program (OWCP)",
    href: "https://www.dol.gov/agencies/owcp",
  },
];

export function FormLinks() {
  return (
    <div>
      <Typography variant="h5" lineHeight={2} pt={5}>
        SOME USEFUL FORMS FOR DOWNLOAD
      </Typography>
      <Divider />
      <Stack direction="row" justifyContent="space-evenly" flexWrap="wrap">
        <ResourceHeader title="Leave FORMS">
          {leave.map((item) => (
            <ResourceList linkLabel={item.linkLabel} href={item.href} />
          ))}
        </ResourceHeader>

        <ResourceHeader title="FMLA FORMS">
          {flma.map((item) => (
            <ResourceList linkLabel={item.linkLabel} href={item.href} />
          ))}
        </ResourceHeader>

        <ResourceHeader title="LINKS TO EMPLOYEE BENEFITS">
          {benefits.map((item) => (
            <ResourceList linkLabel={item.linkLabel} href={item.href} />
          ))}
        </ResourceHeader>

        <ResourceHeader title="Postal LINKS">
          {postal.map((item) => (
            <ResourceList linkLabel={item.linkLabel} href={item.href} />
          ))}
        </ResourceHeader>

        <ResourceHeader title="OTHER RESOURCES">
          {other.map((item) => (
            <ResourceList linkLabel={item.linkLabel} href={item.href} />
          ))}
        </ResourceHeader>
      </Stack>
    </div>
  );
}
