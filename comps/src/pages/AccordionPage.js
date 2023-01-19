import Accordion from "../components/Accordion";

function AccordionPage(){

    const items = [
        {
            id : '1',
            label : 'Can I Use React?',
            content : 'Yes, You can use react on any project Yes, You can use react on any project Yes, You can use react on any project Yes, You can use react on any project',
        },
        {
            id : '2',
            label : 'Can I Use JS?',
            content : 'Yes, You can use JS on any project Yes, You can use JS on any projectYes, You can use JS on any projectYes, You can use JS on any project',
        },
        {
            id : '3',
            label : 'Can I Use CSS?',
            content : 'Yes, You can use CSS on any project Yes, You can use CSS on any projectYes, You can use CSS on any projectYes, You can use CSS on any project',
        },
    ];

    return <Accordion items={items}/>;
}


export default AccordionPage ;