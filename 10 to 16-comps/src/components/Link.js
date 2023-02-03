import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

// use this comp instead of using a 
function Link ({children , to, className, activeClassName}){

    //destruction
    const {navigate, currentPath} = useNavigation();

    const classes = classNames('text-blue-500', className,
    currentPath === to && activeClassName // if without else
    );

    const handleClick = (e) => {

        // to open a new window when press in 'a' with holding ctrl key (new)
        if(e.metaKey || e.ctrlKey ){ 
            return;
        }

        e.preventDefault();
        
        navigate(to);
    };

    return <a className={classes} href={to} onClick={handleClick}>{children}</a>;
        
}

export default Link;