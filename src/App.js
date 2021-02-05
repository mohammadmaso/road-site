import Carousel from "./components/carousel";
import Nav from "./components/nav";
import SiteFooter from "./components/footer";
import { Layout } from "antd";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Contact from "./pages/contact";
import Cooperation from "./pages/cooperation";
import Portfolio from "./pages/portfolio";
import Landing from "./pages/landing";
import "./styles/App.css";


const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Nav />
      <Content className="content">
        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/cooperation">
            <Cooperation />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Content>
      <Footer>
        <SiteFooter />
      </Footer>
    </Layout>
  );
}

export default App;
