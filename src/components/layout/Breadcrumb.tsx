import { Link, LinkProps } from "react-router-dom";
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

const NavLink = styled(Link)
  .withConfig({ shouldForwardProp: (prop) => !["isAction"].includes(prop) })
  .attrs<INavLinkProps>(({ theme, isAction }) => ({
    style: {
      color: isAction ? theme.onActiveColor : theme.mainFontColor,
      backgroundColor: theme.buttonColor,
    },
  }))<INavLinkProps>`
  display: inline-block;
  margin: 0 1rem;
  padding: 1rem;
  text-transform: capitalize;
  font-size: 1.5rem;
  border-radius: 0.5rem;
`;

interface IBreadCrumb {
  links: { name: string; path: string }[];
}

interface INavLinkProps extends LinkProps {
  isAction?: boolean;
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