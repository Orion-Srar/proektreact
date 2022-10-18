import {Outlet} from "react-router-dom";

import {Header} from "../components";
import css from './MainLayout.module.css';


function MainLayout() {

    return (
        <div className={css.MainLayout} id={css.MainLayout}>


            <Header/>
            <Outlet/>




        </div>
    );
}

export {MainLayout};
