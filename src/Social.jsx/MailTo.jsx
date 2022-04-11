import EmailIcon from '@mui/icons-material/Email';

export const MailTo = ({ label, icon, color, children, ...props }) => {
  const Mailto = ({ email, subject = "", body = "" }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return (
      <a href={`mailto:${email}${params}`} {...props} style={{color: {color}}}>
        {label}
      </a>
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