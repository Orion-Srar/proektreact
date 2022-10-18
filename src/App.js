import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {GenreBadge, MovieInfo, MoviesList} from "./components";

function App() {


    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>} >
                    <Route index element={<MoviesList/>}/>
                    <Route path={'movie/:id'} element={<MovieInfo/>} />
                    <Route path={'genre/:id'} element={<GenreBadge/>}/>
                    <Route/>
                </Route>
            </Routes>
        </div>
    );
}

export {App};
