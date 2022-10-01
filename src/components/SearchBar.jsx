import styled from "styled-components";
import { ImSearch } from 'react-icons/im';

const SearchForm = styled.form`
    display: flex;
    gap: 4px;
    padding: 8px;
    margin-bottom: 16px;
`;

const Input = styled.input`
    padding: 8px 8px;
    outline: none;
    border: 1px solid navy;
    border-radius: 4px;
`;
const Button = styled.button`
    display: block;
    padding: 8px 12px;
    color: navy;
    border: 1px solid navy;
    border-radius: 4px;
    outline: none;
`;

const SearchBar = ({ query, onChange, onSubmit }) => {

    const handleSubmit = e => {
        e.preventDefault();

        const normalizeValue = e.target.query.value.trim();
        onChange(normalizeValue);
        onSubmit(normalizeValue);
    };

    return (
        <>
            <SearchForm onSubmit={handleSubmit}>
                <Button type="submit"><ImSearch with={20} /></Button>
                <Input type="text"
                    name="query"
                    value={query}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie..."
                    onChange={e => onChange(e.target.value)}
                />
            </SearchForm>
        </>
    );
};

export default SearchBar;
