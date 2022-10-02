import { Header, Nav, Link } from "./Navigation.styled";
import { Box } from "../Box";

const Navigation = () => {
    return (
        <Header>
            <Box width={900} paddingLeft={16} paddingRight={16}>
                <Nav>
                    <Link to='/' end>Home</Link>
                    <Link to='/movies'>Movies</Link>
                </Nav>
            </Box>
        </Header>
    );
};
export default Navigation;