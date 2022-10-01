const SearchBar = ({ query, onChange, onSubmit }) => {

    const handleSubmit = e => {
        e.preventDefault();

        const normalizeValue = e.target.query.value.trim();
        onChange(normalizeValue);
        onSubmit(normalizeValue);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name="query"
                    value={query}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie..."
                    onChange={e => onChange(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </>
    );
};

export default SearchBar;
