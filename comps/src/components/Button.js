// import PropTypes from 'prop-types';
import className from 'classnames';


function Button ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {

    const classes = className (rest.className, 'flex items-center px-3 py-1.5 border m-0.5',{ 
        //make the constant style first alone
        // we must put the style bet '' because - exists

        'border-blue-500 bg-blue-500 text-white': primary, 
        /* this value(primary) by default === true , so if i make prop = primary  == 
        i write this style = true 
        brief.... primary = true => achieve this style
           */
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,

        'rounded-full': rounded,
        'bg-white': outline,

        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-400': outline && warning,
        'text-red-500': outline && danger,
    });


    return <button {...rest} className={classes} >{children}</button>;
}


// to prevent user to add more than one color to the button
Button.propTypes = {
    checkVariationValue : ({primary ,secondary, success, warning, danger}) =>{
        const count = 
        Number(!!primary) +
        Number(!!secondary) +
        Number(!!success) +
        Number(!!warning) +
        Number(!!danger) ;

        if(count > 1){
            return new Error (
                'Only one of primary, secondary, success, warning, danger can be true'
            );
        }
    },
};


export default Button ;