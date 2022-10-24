import {useEffect, useState} from "react";

import {userService} from "../../services";
import css from './UserInfo.module.css'
import {urls} from "../../configs";

function UserInfo() {

    const [user, setUser] = useState({});

    const {username, avatar} = user;

    useEffect(() => {
        userService.getAll.then(({data}) => setUser(data))
    }, [])


    return (
        <div className={css.UserInfo}>
            <div>
                {avatar?.tmdb.avatar_path && <img src={urls.img + avatar.tmdb.avatar_path} alt={username}/>}
            </div>
            <div>
                {username}
            </div>


        </div>
    );
}

export {UserInfo};
