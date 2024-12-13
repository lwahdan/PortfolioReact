function Navbar() {
  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container-fluid d-flex">
          <div className="logo mr-auto"></div>
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#contact">Contact Me</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Navbar;
