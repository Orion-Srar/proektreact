import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MovieInfoPage, MoviesListPage} from "./pages";

function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>} >
                    <Route index element={<MoviesListPage/>}/>
                    <Route path={'movie/:id'} element={<MovieInfoPage/>} />
                </Route>
            </Routes>
        </div>
    );
}

export {App};
