import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary-light text-accent-muted py-16" id="footer">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* First Column: Logo & Story */}
        <div className="text-center md:text-left">
          <img
            className="mx-auto md:mx-0"
            width="124"
            height="30"
            src="//reformation-mono.myshopify.com/cdn/shop/files/footer-logo.png?crop=center&height=4&v=1663578613&width=20"
            alt="Logo"
          />
          <div className="rte text-sm mt-4">
            <p className="leading-relaxed">
              &quot;I am not interested in the past, except as the road to the
              future. I get ideas about what&apos;s essential when packing my
              suitcase.&quot;
            </p>
          </div>
          <a
            href="/pages/about"
            className="text-button mt-4 block text-secondary-dark hover:text-secondary-dark transition-colors duration-200"
          >
            Our Story
          </a>
        </div>

        {/* Second Column: Contact Info & Social Links */}
        <div className="text-center md:text-left">
          <div className="rte text-lg mb-4">
            <p>Get in touch</p>
            <p className="mt-2 text-sm">
              8212 E. Glen Creek Street Orchard Park, NY 14127,
              <br />
              United States of America
              <br />
              +1 310 499 7700
            </p>
          </div>
          <ul className="social-links flex justify-center md:justify-start gap-6 mt-6">
            <li>
              <a
                href="https://facebook.com/shopify"
                className="social facebook text-accent hover:text-secondary-dark transition-colors duration-200"
                target="_blank"
                rel="noreferrer"
                title="Facebook"
              >
                <FaFacebook size={28} />
                <span className="sr-only">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/shopify"
                className="social twitter text-accent hover:text-secondary-dark transition-colors duration-200"
                target="_blank"
                rel="noreferrer"
                title="Twitter"
              >
                <FaTwitter size={28} />
                <span className="sr-only">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/shopify"
                className="social instagram text-accent hover:text-secondary-dark transition-colors duration-200"
                target="_blank"
                rel="noreferrer"
                title="Instagram"
              >
                <FaInstagram size={28} />
                <span className="sr-only">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://tiktok.com/@shopify"
                className="social tiktok text-accent hover:text-secondary-dark transition-colors duration-200"
                target="_blank"
                rel="noreferrer"
                title="TikTok"
              >
                <FaTiktok size={28} />
                <span className="sr-only">TikTok</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Third Column: Additional Widgets (Optional) */}
        <div className="text-center md:text-left">
          {/* You can add additional widgets like links, newsletter signup, etc. */}
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-accent">
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
