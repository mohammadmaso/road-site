import "./App.css";
import Carousel from "./components/carousel";
import Nav from "./components/nav";
import SiteFooter from "./components/footer";
import { Layout } from "antd";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const { Header, Footer, Content } = Layout;

function App() {
  return (
<Layout style={{ minHeight: "100vh" }}>
        <Nav />
        <Content>
          <Switch>
            
            <Route path="/portfolio">
              <Users/>
            </Route>
            <Route path="/cooperation">
              <About/>
            </Route>
            <Route path="/contact">
              <h1>contact</h1>
            </Route><Route path="/">
              <Home/>
            </Route>
          </Switch>
        </Content>
      <Footer>
        <SiteFooter />
      </Footer>
    </Layout>    

  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
