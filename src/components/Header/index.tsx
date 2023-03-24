import { HeaderContainer } from "./styles";
import logo from "../../assets/logo-ignite.svg";
import { Timer, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Dois triângulos que representam o logo do Ignite" />
      <nav>
        <NavLink to="/" title="Home">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};
