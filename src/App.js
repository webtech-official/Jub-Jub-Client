import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import {
  HomeContainer,
  MainContainer,
  MyPageContainer,
  ApplyContainer,
  AllowContainer,
  StudentContainer,
  ManagementContainer,
  AdminMainContainer,
} from "./Container/index";
import { Footer, Header } from "./Components/index";
import { RecoilRoot } from "recoil";
import { GlobalStyle } from "./Styles";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <Router>
          <GlobalStyle />
          <Header />
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/main" component={MainContainer} />
            <Route path="/MyPage" component={MyPageContainer} />
            <Route path="/Apply/:id" component={ApplyContainer} />
            <Route path="/Allow" component={AllowContainer} />
            <Route path="/Student/:classnum" component={StudentContainer} />
            <Route path="/Management" component={ManagementContainer} />
            <Route path="/Admin/Main" component={AdminMainContainer} />
          </Switch>
          <Footer />
        </Router>
      </RecoilRoot>
    </>
  );
};

export default App;
