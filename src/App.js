import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import {
  HomeContainer,
  MainContainer,
  MyPageContainer,
} from "./Container/index";

import { Background, Header } from "./Components/index";
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory();

const App = () => {
  return (
    <>
      <Router history={browserHistory}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/Mypage" component={MyPageContainer} />
        </Switch>
        <Background />
      </Router>
    </>
  );
};

export default App;
