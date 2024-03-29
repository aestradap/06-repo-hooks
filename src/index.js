import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {CounterWithCustomHooks} from "./components/01-useState/CounterWithCustomHooks";
import {HookApp} from "./HookApp";
import {CounterApp} from "./components/01-useState/CounterApp";
import {SimpleForm} from "./components/02-useEffect/SimpleForm";
import {FormWithCustomHook} from "./components/02-useEffect/FormWithCustomHook";
import {MultipleCustomHooks} from "./components/03-examples/multipleCustomHooks";
import {FocusScreen} from "./components/04-useRef/FocusScreen";


import {RealExampleRef} from "./components/04-useRef/RealExampleRef";
import {Layout} from "./components/05-useLayoutEffect/Layout";

import {Memorice} from "./components/06-memos/Memorice";
import {MemoHook} from "./components/06-memos/MemoHook";
import {CallbackHook} from "./components/06-memos/CallbackHook";
import {Padre} from "./components/07-tarea-memo/Padre";
import {TodoApp} from "./components/08-useReducer/TodoApp";
import {AppRouter} from "./components/09-useContext/AppRouter";
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
            <AppRouter/>
    </BrowserRouter>
);



