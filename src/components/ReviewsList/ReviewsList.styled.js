import styled from "styled-components";

export const List = styled.ul`
    padding-top: 16px;
    margin-top: 8px;
    
    border-top: 1px solid #cccccc;
`;

export const Review = styled.li`
    :not(:first-of-type) {
        margin-top: 24px;
    };
`;

export const Author = styled.h3`
`;

export const AuthorTitle = styled.span`
    color: #707070;
`;

export const Text = styled.p`
    margin-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
`;
