import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Calender } from "./routes/Calender";
import Main from "./routes/Main";
import { MainPage } from "./routes/MainPage";

function Router() {
   return (
    <BrowserRouter>
       <Switch>
         <Route path="/mainpage">
           <MainPage />
        </Route>
         <Route path="/calendar">
           <Calender />
        </Route>
        <Route path="/">
           <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;