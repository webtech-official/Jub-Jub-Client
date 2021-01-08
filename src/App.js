import { Route, Router, Switch } from "react-router-dom";
import { HomeContainer, MyPageContainer } from "./Container/index";

import { Background, Footer, Header } from "./Components/index";
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
        <Footer/>
      </Router>
    </>
  );
};

export default App;
