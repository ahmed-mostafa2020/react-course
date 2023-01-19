import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from "./Panel";

function Dropdown ( {options , value, onChange} ){

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => { 
        /* it should be updates with functional style
        coz new value of state depends on the old value */
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        // 1) close dropdown
        setIsOpen(false);
        // 2) write selected option value
        onChange(option);
    };

    const renderedOptions = options.map((option,index) => {
        return(
            <div className="hover:bg-sky-100 rounded cursor-pointer p-1"
            onClick={() => handleOptionClick(option)} key={index}>
                {option.label}
            </div>
            );
    });

    //Note
    /* || returns first true value 
    and ? with undefined / null.something returns undefined not an error
    selection?.label || 'select ...' instead of if condition
    */


    // let content = 'select ...';

    // if (selection){
    //     content = selection.label ;
    // }

    return ( 
    <div className="w-48 relative">
        <Panel className="flex justify-between items-center cursor-pointer select-none"  
        onClick={handleClick}
        >
        { value?.label || 'select ...'} 
        { isOpen ? <GoChevronLeft className="text-xl" /> : <GoChevronDown className="text-xl" />}
        </Panel>
        { isOpen && <Panel className="absolute top-full">
                    {renderedOptions}
                    </Panel> 
        }
    </div>
    );
}

export default Dropdown;