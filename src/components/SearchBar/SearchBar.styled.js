import styled from "styled-components";

export const SearchForm = styled.form`
    display: flex;
    padding: 8px;
    margin-bottom: 16px;
`;

export const Input = styled.input`
    display: block;
    padding: 8px 8px;

    border: 1px solid navy;
    border-left: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

    outline: none;
`;

export const Button = styled.button`
    padding: 8px 12px;

    border: 1px solid navy;
    border-right: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

    outline: none;
    color: #707070;
    cursor: pointer;

    :hover {
        color: navy;
    };

    :active {
        color: orangered;
    }
`;
