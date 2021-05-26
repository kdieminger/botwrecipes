import React, { useState } from 'react';

function RecipeListComponent(){
    //state for search feature
    const [input, setInput] = useState('');
    //state for filter feature?

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    return(
        <div>
            <input 
                type="search"
                onChange={handleChange}
                value={input}
                placeholder="Search"
                className="input"
            />
        </div>
    )
}

export default RecipeListComponent;