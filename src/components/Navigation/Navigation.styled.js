import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
    padding: ${p=> p.theme.spaces[3]}px;
    margin-bottom: ${p=> p.theme.spaces[4]}px;
    box-shadow: 0px 2px 2px 0px #9E9E9E;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: ${p=> p.theme.spaces[4]}px;
`;

export const Link = styled(NavLink)`
    padding: ${p => p.theme.spaces[3]}px;
    border-radius: 4px;
    font-weight: ${p => p.theme.fontWeights.medium};
    color: navy;
    text-decoration: none;

    &.active {
        background-color: lightgray;
    }
    :hover:not(.active),
    :focus-visible:not(.active) {
        color: orangered;
    }
`;
