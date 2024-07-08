import { Typography } from "antd";
import './AppFooter.css'; // Import the CSS file

function AppFooter() {
  return (
    <div className="appFooter">
      <Typography.Link href="https://www.google.com" target="_blank" className="footerLink">
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target="_blank" className="footerLink">
        Terms & Conditions
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target="_blank" className="footerLink">
        Return Policy
      </Typography.Link>
      <Typography.Link href="tel:+123456789" target="_blank" className="footerLink">
        +923495074463
      </Typography.Link>
    </div>
  );
}

export default AppFooter;
