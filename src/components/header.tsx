import React from "react";

interface HeaderProps {
  headerText: string;
}

const Header: React.FC<HeaderProps> = props => {
  return <h1>{props.headerText}</h1>;
};

export default Header;
