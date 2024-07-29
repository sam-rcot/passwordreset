import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <div className="flex gap-3 items-center justify-center
            text-2xl font-bold py-3 font-nunito underline text-dark-teal">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/stakeholder">Stakeholder</NavLink>
            </div>
        </>
    );
}

export default NavBar;
