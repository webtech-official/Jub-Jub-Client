import { Route, Router, Switch } from "react-router-dom";
import {
  HomeContainer,
  MainContainer,
  MyPageContainer,
  ApplyContainer,
} from "./Container/index";
import { Footer, Header } from "./Components/index";
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory();

const App = () => {
  return (
    <>
      <Router history={browserHistory}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/main" component={MainContainer} />
          <Route path="/Mypage" component={MyPageContainer} />
          <Route path="/Apply" component={ApplyContainer} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
