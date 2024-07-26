import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <div className="flex gap-3 items-center content-center justify-center text-2xl
            font-bold text-center pt-3 mb-16 font-nunito underline text-dark-teal w-fit">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/stakeholder">Stakeholder</NavLink>
            </div>
        </>
    );
}

export default NavBar;
