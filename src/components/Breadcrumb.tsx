import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  margin-bottom: 1rem;
  padding: 1rem;
  ol {
    display: flex;
  }
  ol li a {
    display: inline-block;
    margin: 0 1rem;
    padding: 1rem;
    text-transform: capitalize;
    font-size: 1.5rem;
    color: ${(props) => props.theme.mainFontColor};
    background-color: ${(props) => props.theme.backgroundColor};
    border-radius: 0.5rem;
  }
  ol li:first-child a {
    margin-left: 0;
  }
  .currentPage {
    color: ${(props) => props.theme.onActiveColor};
  }
`;

interface IBreadCrumb {
  links: { name: string; path: string }[];
}

function Breadcrumb({ links }: IBreadCrumb) {
  return (
    <Nav aria-label="breadcrumb">
      <ol>
        {links.map((link, idx) => (
          <li key={idx}>
            <Link
              className={idx === links.length - 1 ? "currentPage" : ""}
              to={link.path}
            >
              {link.name} Price
            </Link>
            {idx < links.length - 1 && ">"}
          </li>
        ))}
      </ol>
    </Nav>
  );
}

export default Breadcrumb;
