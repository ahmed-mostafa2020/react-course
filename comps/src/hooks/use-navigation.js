import { useContext } from "react";
import NavContext from "../context/navigation";

function useNavigation (){
    return useContext(NavContext);
}

export default useNavigation;