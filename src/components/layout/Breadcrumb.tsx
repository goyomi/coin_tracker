import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  margin-bottom: 1rem;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const OrderList = styled.ol`
  display: flex;
  & li:first-child a {
    margin-left: 0;
  }
`;

const NavLink = styled(Link)<{ $isAction?: boolean }>`
  display: inline-block;
  margin: 0 1rem;
  padding: 1rem;
  text-transform: capitalize;
  font-size: var(--font-size-web-small);
  color: ${(props) => (props.$isAction ? props.theme.onActiveColor : props.theme.mainFontColor)};
  background-color: ${(props) => props.theme.buttonColor};
  border-radius: 0.5rem;
  @media (max-width: 1024px) {
    font-size: var(--font-size-tablet-small);
    padding: 0.8rem;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-mobile-small);
    margin: 0.5rem;
    padding: 0.5rem;
  }
`;

function Breadcrumb({ links }: { links: { name: string; path: string }[] }) {
  return (
    <Navbar>
      <OrderList>
        {links.map((link, idx) => (
          <li key={idx}>
            <NavLink $isAction={idx === links.length - 1} to={link.path}>
              {link.name} Price
            </NavLink>
            {idx < links.length - 1 && ">"}
          </li>
        ))}
      </OrderList>
    </Navbar>
  );
}

export default Breadcrumb;
