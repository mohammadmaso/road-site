import Carousel from "./components/carousel";
import Nav from "./components/nav";
import SiteFooter from "./components/footer";
import { Layout } from "antd";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
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
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
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
        </AnimatedSwitch>
      </Content>
      <Footer>
        <SiteFooter />
      </Footer>
    </Layout>
  );
}

export default App;
