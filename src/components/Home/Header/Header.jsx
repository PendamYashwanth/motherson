import "./index.css";

const navItemsList = [
  {
    id: "#about",
    displayText: "About",
  },
  {
    id: "#projects",
    displayText: "Projects",
  },
  {
    id: "#contacts",
    displayText: "Contacts",
  },
];

const Header = () => {
  return (
    <header className="page-header">
      <section className="container header-section-container">
        <h2 className="website-logo">Yashwanth Pendam</h2>
        <nav>
          <ul className="nav-items-container">
            {navItemsList.map((eachItem) => (
              <li key={eachItem.id}>
                <a href={eachItem.id} className="nav-links">
                  {eachItem.displayText}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
