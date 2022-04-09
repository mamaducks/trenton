// import { FiMail } from "react-icons/fi";
import EmailIcon from '@mui/icons-material/Email';

export const MailTo = ({ label, icon, color, children, ...props }) => {
  const Mailto = ({ email, subject = "", body = "" }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return (
      <a href={`mailto:${email}${params}`} {...props}>
        {/* <EmailIcon color={color} /> */}
        {label}
      </a>
    );
  };

  return (
    <Mailto
    //   email="stevenduckworthtmal@aol.com"
      email="scrubblies@gmail.com"
      subject="add subject"
      body="Enter the details of your message and contact information."
    >
      {children}
     
    </Mailto>
  );
};