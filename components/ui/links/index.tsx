import Link from "next/link";

const Links = ({ link, isExternalLink, className, children }: any) => (
  <Link href={link}>
    <a
      className={className}
      href={link}
      target={isExternalLink ? "_blank" : "_self"}
      rel="noreferrer"
    >
      {children}
    </a>
  </Link>
);

export default Links;
