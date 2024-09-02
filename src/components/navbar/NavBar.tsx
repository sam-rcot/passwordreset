import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <div className="box-border flex items-center justify-center gap-3 py-3 font-nunito text-2xl font-bold text-dark-teal underline">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/stakeholder">Stakeholder</NavLink>
      </div>
    </>
  );
};

export default NavBar;
