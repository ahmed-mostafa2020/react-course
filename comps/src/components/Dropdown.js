import { useState, useRef, useEffect } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from "./Panel";

function Dropdown ( {options , value, onChange} ){

    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef(); //divEL returns object so when we use write divEl.current

    // to make dropdown close when we click in anywhere else(new)
    useEffect( () => {
        const handler = (event) =>{
            if(!divEl.current){
                return;
            }
            if(!divEl.current.contains(event.target) ){
                setIsOpen(false);
            }
        };

        /*  
        احنا كتبنا ترو علشان بيحصل ريندر للهندل كليك 
        والقايمه بتتشال قبل ماالبروزر يكاتش الاددايفنت لسنر
        */
        document.addEventListener('click', handler,true);

        // (cleanup) func if devEl deleted or disappeared stop addEventListener
        return () => {
            document.removeEventListener('click', handler);
        };
    },[]) ;

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
    <div ref={divEl} className="w-48 relative">
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