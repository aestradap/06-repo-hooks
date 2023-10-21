import React, {useState} from 'react'
import {Routes, Route, Switch, Outlet, Link} from "react-router-dom";
import {LoginScreen} from "./LoginScreen";
import {HomeScreen} from "./HomeScreen";
import {AboutScreen} from "./AboutScreen";
import {NoMatch} from "./NoMatch";
import {MainApp} from "./MainApp";
import {UserContex} from "./UserContex";

export const AppRouter = () => {

    const [user, setUser] = useState({});


    return <div>
        <UserContex.Provider value={{
            user,
            setUser,
        }}>
            <Routes>
                <Route path="/" element={<MainApp/>}>

                    <Route index element={<HomeScreen/>}/>
                    <Route path="login" element={<LoginScreen/>}/>
                    <Route path="about" element={<AboutScreen/>}/>

                    {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}

                    <Route path="*" element={<NoMatch/>}/>
                </Route>
            </Routes>
        </UserContex.Provider>

    </div>
}
