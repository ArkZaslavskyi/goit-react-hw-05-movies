import styled from "styled-components";

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 185px);
    gap: 16px;
    justify-content: center;
`;

export const Item = styled.li`
    height: 278px;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 1px 3px 3px 1px #7A7A7A;

    :hover {
        transform: scale(1.025);
    };
`;
