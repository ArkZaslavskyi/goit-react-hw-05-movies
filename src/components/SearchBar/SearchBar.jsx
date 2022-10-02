import { ImSearch } from 'react-icons/im';
import { SearchForm, Input, Button } from "./SearchBar.styled";

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
