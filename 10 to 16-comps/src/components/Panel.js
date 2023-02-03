import classNames from 'classnames';

// reusable presentation component :
/* it is just comp returns a div with specific class names and content = children 
and you can pass through more classnames and props
*/

function Panel ({children, className, ...rest} ){

    const finalClassNames = classNames (
        'border rounded p-3 shadow bg-white w-full' , 
        className
    );

    return (
    <div {...rest} className={finalClassNames} >
        {children}
    </div>
    );
};

export default Panel;