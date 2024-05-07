import { SiPuma } from "react-icons/si";
import { NavLink } from "react-router-dom";

export const Header_logo = () => {
  return (
    <>
      <NavLink to={"/"} style={{color: "#fff", fontSize: "2.5rem", display: "flex", paddingRight: "10px"}}>
        <SiPuma/>
      </NavLink>
    </>
  )
}
