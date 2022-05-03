import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Calender } from "./routes/Calender";
import Login from "./routes/Login/Login";
import { MainPage } from "./routes/MainPage";

function Router() {
   return (
    <BrowserRouter>
       <Switch>
         <Route path="/mainpage">
           <MainPage />
        </Route>
        <Route path="/">
           <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;