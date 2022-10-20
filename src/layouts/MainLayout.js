import {Outlet} from "react-router-dom";

import css from './MainLayout.module.css';
import {HeaderPage} from "../pages";


function MainLayout() {

    return (
        <div className={css.mainLayout} id={css.mainLayout}>

            <HeaderPage/>
            <Outlet/>

        </div>
    );
}

export {MainLayout};
