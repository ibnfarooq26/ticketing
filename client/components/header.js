import Link from "next/link";
const Header = ({ currentUser }) => {
  const links = [
    !currentUser && { label: "sign up", href: "/auth/signup" },
    !currentUser && { label: "sign in", href: "/auth/signin" },
    currentUser && { label: "sign out", href: "/auth/signout" },
  ]
    .filter((configlist) => configlist)
    .map(({ href, label }) => {
      console.log("rendering");
      return (
        <li className="nav-item" key={href}>
          <Link className="nav-link" href={href}>
            {label}
          </Link>
        </li>
      );
    });

  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" href="/">
        GitTix
      </Link>
      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">{links}</ul>
      </div>
    </nav>
  );
};
export default Header;
