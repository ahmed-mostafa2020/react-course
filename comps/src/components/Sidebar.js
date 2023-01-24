import Link from "./Link";

function Sidebar() {

    const links = [
        {label: 'Buttons' , path: '/Button'},
        {label: 'Accordion' , path: '/Accordion'},
        {label: 'Dropdown' , path: '/Dropdown'},
        {label: 'Modal' , path: '/Modal'},
        {label: 'Table' , path: '/Table'},
    ];

    const renderedLinks = links.map((link) => {

        return (
        <Link key={link.label} to={link.path} className='mb-3 font-400 hover:text-blue-700'
        activeClassName='font-bold border-l-4 border-blue-700 pl-2 '>
            {link.label}
        </Link>
        );
    });

    return(
    <div className="sticky top-0 flex flex-col items-start">
        {renderedLinks}
    </div>
    );
}

export default Sidebar ;