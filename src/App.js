import logo from './logo.svg';
import './App.css';
import ProductsList from './components/ProductsList';
// import { Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  const itemArray =
  [
  {
    imgSrc: 'https://sbsinformatique.com/6356-large_default/pc-portable-msi-gf65thin-156-i7-10750h-16go-512go-ssd-rtx-3060-tunisie.jpg',
    name: 'PC PORTABLE MSI GF65THIN 15.6 - I7-10750H - 16Go 512Go SSD - RTX 3060',
    price: '4 659 TND',
  },
  {
    imgSrc: 'https://sbsinformatique.com/2013-large_default/pc-portable-msi-gaming-gf63-thin-9sc-897xfr-tunisie.jpg',
    name: 'PC PORTABLE MSI GAMING GF63 THIN 9SC-897XFR',
    price: '2 645 TND',
  },
  {
    imgSrc: 'https://sbsinformatique.com/7523-large_default/pack.jpg',
    name: 'PACK I3-10TH GEN - GTX 1660 DUAL',
    price: '2 990 TND',
  },
  {
    imgSrc: 'https://sbsinformatique.com/7425-large_default/pack-gaming-i5-10400f-rtx-2060-8go.jpg',
    name: 'PACK GAMING : I5-10400F - RTX 2060 - 8GO',
    price: '3 290 TND',
  },
];
  return (
    <div className="App">
      <NavBar />
     <ProductsList list={itemArray}/>
     <Footer message={"This is a footer"}>
This is a Child footer
       </Footer>
    </div>
  );
}

export default App;
