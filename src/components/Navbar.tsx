import Link from "./LinkInterface";

interface Props {
  links: Link[];
}

function Navbar({ links }: Props) {
  return (
    <nav className="nav">
      <div className="flex jusl alc max">
        <span className="navtitle">fefe</span>
      </div>
      <div className="flex jusr alc max">
        {links.map((link) => (
          <a href={link.url} target="_blank">
            <button key={link.nome} className="bt border navlink">
              {link.nome}
            </button>
          </a>
        ))}

        <a href="https://github.com/fe-fe" target="_blank">
          <button className="bt border navlink">
            GitHub <i className="fa fa-github" style={{ color: "white" }}></i>
          </button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
