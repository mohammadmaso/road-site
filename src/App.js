import './App.css';
import Carousel from './components/carousel'
import Nav from './components/nav';
import SiteFooter from './components/footer';
import { Layout } from 'antd';



const { Header, Footer, Content } = Layout;




function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
    <Header><Nav/></Header>
    <Content></Content>
    <Footer><SiteFooter/></Footer>
    </Layout>
  );
}

export default App;
