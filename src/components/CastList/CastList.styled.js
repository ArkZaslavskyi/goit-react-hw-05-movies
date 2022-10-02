import styled from "styled-components";

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 185px);
    gap: 16px;
    justify-content: center;

    padding-top: 16px;
    margin-top: 8px;

    border-top: 1px solid #cccccc;
`;

export const Title = styled.h4`
    color: blueviolet;
    margin-bottom: 4px;
`;

export const SubTitle = styled.h4`
    margin-top: 4px;
`;

export const Img = styled.img`
    width: 133px;
    height: 200px;
`;

export const Patch = styled(Img)`
    background-color: #cccccc;
`;