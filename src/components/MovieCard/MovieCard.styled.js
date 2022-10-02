import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
    display: block;
    border-radius: 10px;
    text-decoration: none;
    height: 100%;
`;

export const CardWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: flex-start;
    font-weight: ${p => p.theme.fontWeights.medium};
    padding: 16px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: blueviolet;
`;
