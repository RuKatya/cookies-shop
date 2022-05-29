import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from '../Components/App';

function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;