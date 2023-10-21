import React from 'react'
import {Link, Outlet, Route, Routes} from "react-router-dom";
import {NavBar} from "./navBar";

export const MainApp = () => {
    return <>
        <h1>MainScreen</h1>
        <hr/>
        <p>
            This example demonstrates some of the core features of React Router
            including nested <code>&lt;Route&gt;</code>s,{" "}
            <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
            "*" route (aka "splat route") to render a "not found" page when someone
            visits an unrecognized URL.
        </p>
        <hr/>
        <div>
            {/* A "layout route" (MainApp) is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
                <NavBar/>
            <hr/>
            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <Outlet/>
        </div>
    </>
}
