import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  margin-bottom: 1rem;
  padding: 1rem;
`;

const OrderList = styled.ol`
  display: flex;
  & li:first-child a {
    margin-left: 0;
  }
`;

const NavLink = styled(Link).attrs<{ isAction: boolean }>(({ isAction, theme }) => ({
  style: {
    color: isAction ? theme.onActiveColor : theme.mainFontColor,
  },
}))<{ isAction: boolean }>`
  display: inline-block;
  margin: 0 1rem;
  padding: 1rem;
  text-transform: capitalize;
  font-size: 1.5rem;
  background-color: ${(props) => props.theme.buttonColor};
  border-radius: 0.5rem;
`;

interface IBreadCrumb {
  links: { name: string; path: string }[];
}

function Breadcrumb({ links }: IBreadCrumb) {
  return (
    <Navbar>
      <OrderList>
        {links.map((link, idx) => (
          <li key={idx}>
            <NavLink isAction={idx === links.length - 1} to={link.path}>
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
