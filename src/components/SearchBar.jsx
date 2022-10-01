const SearchBar = ({ onSubmit }) => {
    const handleSubmit = e => {
        e.preventDefault();

        // console.log(e.target.query.value);
        onSubmit(e.target.query.value);
        // e.target.reset();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name="query"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie..."
                />
                <button type="submit">Search</button>
            </form>
        </>
    );
};

export default SearchBar;
