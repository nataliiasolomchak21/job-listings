import React, { useState } from 'react';

// Component takes two props: `selectedTags` (list of currently selected tags) 
// and `setSelectedTags` (a function to update the selected tags).
const SearchBar = ({ selectedTags = [], setSelectedTags }) => {
    const [inputValue, setInputValue] = useState('');

    const handleTagRemove = (tagToRemove) => {
        setSelectedTags(selectedTags.filter(tag => tag !== tagToRemove));
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleClearInput = () => {
        setSelectedTags([]);
    };

    return (
        <div className="w-full mx-auto mb-4">
            <form onSubmit={handleSubmit} className="relative w-full">
                {/* Input container for tags and input field */}
                <div className="flex flex-wrap w-[350px] md:w-full items-center bg-white border p-2 rounded-lg shadow-lg">
                    {selectedTags.map((tag, index) => (
                        <span
                            key={index}
                            className="inline-flex items-center px-2 py-1 text-sm font-bold text-primary bg-bgColor rounded mr-2 mb-2"
                        >
                            {tag}
                            <button
                                onClick={() => handleTagRemove(tag)}
                                className="ml-2 text-white bg-primary hover:bg-veryDarkGrayishCyan p-1"
                            >
                                X
                            </button>
                        </span>
                    ))}
                    <input
                        type="text"
                        className="flex-1 max-w-[150px] p-2 focus:outline-none"
                        readOnly
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Clear button */}
                <button
                    type="button"
                    onClick={handleClearInput}
                    className="absolute top-2 right-2 px-3 py-1 text-darkGrayishCyan hover:text-primary hover:underline font-bold rounded-lg"
                >
                    Clear
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
