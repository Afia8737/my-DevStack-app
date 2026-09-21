import Logo from '../assets/logo-text.png'

const productLinks = ["Home", "Technologies", "Projects"];
const companyLinks = ["About", "Contact", "Careers"];
const legalLinks = ["Privacy Policy", "Terms of Service"];
const socialLinks = ["GitHub", "Twitter", "LinkedIn"];

type LinkColumnProps = {
  title: string;
  links: string[];
};

const LinkColumn = ({ title, links }: LinkColumnProps) => (
  <nav>
    <h6 className="footer-title">{title}</h6>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link}><a className="link link-hover text-sm text-gray-500">{link}</a></li>
      ))}
    </ul>
  </nav>
);

const Footer = () => {
  return (
    <footer className="border-t border-base-200 bg-base-100 px-7">
      <div className="container mx-auto px-4 pt-14 pb-8">
        <div className="grid  gap-10 grid-cols-[2fr_1fr_1fr_1fr]">
          <aside>
            <img src={Logo} alt="Dev Stack" className="h-8" />

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <ul className="mt-6 flex items-center gap-5 text-black">
              {socialLinks.map((link) => (
                <li key={link}><a className="link link-hover text-xs font-medium">{link}</a></li>
              ))}
            </ul>
          </aside>

          <LinkColumn title="Product" links={productLinks} />
          <LinkColumn title="Company" links={companyLinks} />
          <LinkColumn title="Legal" links={legalLinks} />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-base-200 pt-6 text-xs text-gray-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <ul className="flex items-center gap-6">
            <li><a className="link link-hover">Privacy</a></li>
            <li><a className="link link-hover">Terms</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;