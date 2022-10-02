import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const BackLink = styled(NavLink)`
    display: inline-flex;
    align-items: center;
    gap: 4px;

    margin-bottom: 8px;
    padding: 8px 12px;

    border: 1px solid #dddddd;
    border-radius: 4px;
    outline: none;

    color: navy;
    background-color: #dddddd;
    font-weight: ${p=>p.theme.fontWeights.medium};
    text-decoration: none;

    :hover {
        border: 1px solid #cccccc;

        color: orangered;
        background-color: white;
    };
`;

export const AddInfoWrapper = styled.section`
    padding-top: 8px;
    border-top: 1px solid #cccccc;
`;

export const SubTitle = styled.h3`
    margin-top: 8px;
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
