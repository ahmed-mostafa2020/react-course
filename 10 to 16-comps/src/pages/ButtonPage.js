import { GoBell,GoBook,GoCircuitBoard } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
    
    const handleClick = () => {
        console.log("clicked");
    };

    return( 
    <div>
        <div>
            <Button primary rounded onClick={handleClick} className='mb-5'>
                <GoBell className="mr-1" /> click me! 
            </Button>
        </div>
        <div>
            <Button danger outline rounded> <GoBook className="mr-1" /> Buy Now ! </Button>
        </div>
        <div>
            <Button warning> <GoCircuitBoard className="mr-1" /> See Deals! </Button>
        </div>
        <div>
            <Button success  rounded> Hide Ads! </Button>
        </div>
        <div>
            <Button secondary rounded outline> something! </Button>
        </div>
    </div>
    );
}


export default ButtonPage;