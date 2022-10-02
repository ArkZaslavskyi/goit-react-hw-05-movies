import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const InfoWrapper = styled.section`
    display: flex;
    gap: 16px;
    padding-bottom: 8px;
    margin-bottom: 8px;
`;

export const MovieInfo = styled.div`
    /* padding-left: 8px; */
`;

export const Title = styled.h2`
    color: blueviolet;
`;

export const SubTitle = styled.h3`
    margin-top: 8px;
`;

export const Text = styled.p`
    margin-top: 4px;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: ${p => p.theme.spaces[4]}px;
    padding: 8px;
`;

export const Link = styled(NavLink)`
    padding: ${p => p.theme.spaces[3]}px;
    border-radius: 4px;
    font-weight: ${p => p.theme.fontWeights.medium};
    color: navy;
    text-decoration: none;

    &.active {
        background-color: #dddddd;
    }
    :hover:not(.active),
    :focus-visible:not(.active) {
        color: orangered;
    }
`;

export const Img = styled.img`
    width: 185px;
`;