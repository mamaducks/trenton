import { Link } from "@mui/material";

export const MailTo = ({ label, icon, color, children, ...props }) => {
  const Mailto = ({ email, subject = "", body = "" }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return (
      <Link href={`mailto:${email}${params}`} {...props}>
        {label}
      </Link>
    );
  };

  return (
    <Mailto
      email="scrubblies@gmail.com"
      subject="add subject"
      body="Enter the details of your message and contact information."
    >
      {children}
    </Mailto>
  );
};
