import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";

function App() {
    return( 
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4" >
            <Sidebar />
            <div className="col-span-4">
                <Route path='/Accordion'>
                    <AccordionPage />
                </Route>
                <Route path='/Dropdown'>
                    <DropdownPage />
                </Route>
                <Route path='/Button'>
                    <ButtonPage />
                </Route>
                <Route path='/Modal'>
                    <ModalPage />
                </Route>
                <Route path='/Table'>
                    <TablePage />
                </Route>
                <Route path='/'>
                    <TablePage />
                </Route>
            </div>

        </div>
    );
}

export default App;