import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar({ githubLink, portfolioLink }) {

    //sticky navbar
    // const [sticky, setSticky] = useState(false);
  
    // useEffect(() => {
    //   const handleScroll = () => {
    //     setSticky(window.scrollY > 200)
    //   }
    //   window.addEventListener('scroll', handleScroll)
    //   return () => window.removeEventListener('scroll', handleScroll)
    // })  
  
  
    //hamburger icon for responsive layout
    // const [clicked, setClicked] = useState(false);
    // function handleClick() {
    //   setClicked(!clicked);
    // }
  
    //navbar component
    return (
      <nav /*id={`${sticky ? "sticky" : ""}`} */ className="nav">
        <Link>Mortgage Manager</Link>
  
        <ul id="navbar" /*className={clicked ? "#navbar active" : "#navbar"}*/>
          <CustomLink to="/">🌮Home</CustomLink>
          <CustomLink to="/solve">🌮Solve</CustomLink>
          <CustomLink to="/code">🌮Code</CustomLink>
          <Link
            id="githubLink"
            // githubLink={githubLink}
            // onClick={() => openInNewTab(githubLink)}
          >
            🌮Github
          </Link>
          <Link
            id="portfolioLink"
            // portfolioLink={portfolioLink}
            // onClick={() => openInNewTab(portfolioLink)}
          >
            🌮Portfolio
          </Link>
        </ul>
        <div id="mobile">
          <i
            id="bar"
            // className={clicked ? "fas fa-times" : "fas fa-bars"}
            // onClick={() => handleClick()}
          ></i>
        </div>
      </nav>
    );
  }

  const CustomLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  };

  export default Navbar;