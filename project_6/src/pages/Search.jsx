import React, { useContext } from 'react';
import { MovieContext } from '../MovieContext';

function Search() {
    const { query, setQuery, isError, isLoading } = useContext(MovieContext);

    let showError;
    if (!query) {
        showError = 'Please search for any movie';
    } else {
        showError = isError.show && isError.msg;
    }

    return (
        <>
            <div className='search_controal'>
                <form action="" onSubmit={(e) => e.preventDefault()} className="input_group">
                    <input type="text"
                        placeholder='Search movies here'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
                <h1>{showError}</h1>
                {isLoading ? <h1>Loading...</h1> : ""}
            </div>
        </>
    );
}

export default Search;
