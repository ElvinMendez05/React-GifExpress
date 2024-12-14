import { useState } from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export const AddCategory = ({onNewCategory}) => {
  
    const [inputValue, setInputValue] = useState('Dragon ball');
    
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        setInputValue('');
        onNewCategory(inputValue.trim());
    }
    
    return (
       <div className="contentForm">
           <form onSubmit={onSubmit} aria-label="form"> 
                <input 
                    type="text" 
                    placeholder="Buscar gifs"
                    onChange={onInputChange}   
                />
                <button type="submit" value={inputValue}> Buscar </button>
            </form>   
        </div>
   );
};

AddCategory.PropTypes = {
    onNewCategory: PropTypes.func.isRequired,
};
