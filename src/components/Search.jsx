import { useState } from "react";
import { useGlobalContext } from "../context";

const Searchs = () => {
    const [text, setText] = useState("");
    const { setSearchTerm, fetchRandomMeal } = useGlobalContext();

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text) {
            setSearchTerm(text);
        }
    }

    const handleRandomMeal = () => {
        setSearchTerm("");
        setText("");
        fetchRandomMeal();
    }

    return (
        <header className="search-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Type Favarite Meal"
                    className="form-input"
                    onChange={handleChange}
                    value={text}
                />
                <button type="submit" className="btn">Search</button>
                <button
                    type="button"
                    className="btn btn-hipster"
                    onClick={handleRandomMeal}
                >
                    Suprise Me
                </button>
            </form>
        </header>
    )
}

export default Searchs;