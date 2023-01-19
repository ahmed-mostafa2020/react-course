
import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";


function Accordion ({items}){

    const [expandedIndex, setExpandedIndex] = useState(0); // -1 to make all collapsed

    const handleClick = (theIndex) => {
        // to collapse this item if it is clicked when it is expanded
        // so advanced trick page 23(conditional update state)
        //current = current value of theIndex

        setExpandedIndex((current) => {
            if(current === theIndex){
                return -1 ;
            }
            else {
                return theIndex ;
            }
        });

    };

    const renderedItems = items.map( (item, index) => {

        //the next step looks like if condition
        const isExpanded =   (index === expandedIndex) ; // return true or false (new)
        //if true show content else don't show anything

        const icon = (
            <span className="text-2xl">
                { isExpanded ? <GoChevronDown /> : <GoChevronLeft /> }
            </span>
            );

        return (
            <div key={item.id}>

                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
                onClick = {() => handleClick(index)} >
                    {item.label}
                    {icon}
                </div>
                
                { isExpanded && <div className="border-b p-5">{item.content}</div> }

            </div>
        );
    });


    return (
    <div className="border-x border-t rounded">
        {renderedItems}
    </div>
    );
}

export default Accordion;