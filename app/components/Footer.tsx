import siteMetadata from "@/data/siteMetadata";
import SocialIcon from "@/app/components/SocialIcon";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-2 w-fill ">
      <div className="footer-container">
        <div className="footer-section">
          <h4>We hope to see you there</h4>
        </div>

        <div className="footer-section">
          <h4>Get in touch</h4>
          <div className="social-icons">
            <SocialIcon href={siteMetadata.email} size={2} />
          </div>
        </div>
        <div className="footer-section"></div>
      </div>
    </footer>
  );
}
