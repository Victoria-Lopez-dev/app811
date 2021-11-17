
import React from "react";
import { Login } from "../Componentes/Auth/Login";
import { Calendario } from "../Componentes/Calendario/Calendario";
import {
    BrowserRouter as Router,
   /*  Switch, */
    Routes,
    Route,
} from "react-router-dom";


export default function AppRouter() {
    return (
    <Router>
        <div>

            {/* Funciona hasta la versión 5.23.0 con component*/}
            {/*  <Switch>
                <Route exact path="/login" component={ Login } />  
                <Route exact path="/" component={ Calendar } />  
            </Switch> */}


            {/* Funciona con la nueva versión de React-router-dom con element */}
            <Routes>
                {/* <Route exact path="/"> <Home /> </Route> */}

                <Route exact path="/login" element={ <Login /> } />  
                <Route exact path="/" element={ <Calendario /> } />  
            </Routes>
        </div>
    </Router>
    );
}

// You can think of these components as "pages"
// in your app.


