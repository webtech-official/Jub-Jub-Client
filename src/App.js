import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import {
  HomeContainer,
  MainContainer,
  MyPageContainer,
  ApplyContainer,
  AllowContainer,
  StudentContainer,
  ManagementContainer,
} from "./Container/index";
import { Footer, Header } from "./Components/index";
import { createBrowserHistory } from "history";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/main" component={MainContainer} />
          <Route path="/Mypage" component={MyPageContainer} />
          <Route path="/Apply/:id" component={ApplyContainer} />
          <Route path="/Allow" component={AllowContainer} />
          <Route path="/Student/:classnum" component={StudentContainer} />
          <Route path="/Management" component={ManagementContainer} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
