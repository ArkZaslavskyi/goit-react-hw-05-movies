import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(NavLink)`
`;

const Navigation = () => {
    return (
        <header>
            <nav style={{ display: 'flex', gap: '16px' }}>
                <Link to='/'>Home</Link>
                <Link to='/movies'>Movies</Link>
            </nav>
        </header>
    );
};
export default Navigation;