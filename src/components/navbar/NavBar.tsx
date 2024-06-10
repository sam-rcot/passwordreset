import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <div className="flex gap-3 items-center content-center justify-center">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/stakeholder">Stakeholder</NavLink>
            </div>
        </>
    );
}

export default NavBar;
