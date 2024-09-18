import Link from "./LinkInterface";

interface Props {
  links: Link[];
  active: number;
}

function Navbar({ links }: Props) {
  return (
    <nav className="nav">
      <div id="apptitle" className="flex jusl alc max">
        <span className="navtitle">fefeclima</span>
      </div>
      <div id="navlinks" className="flex jusr alc max">
        {links.map((link) => (
          <a href={link.url} target={link.target}>
            <button key={link.nome} className="bt border navlink">
              {link.nome} {link.icon}
            </button>
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
