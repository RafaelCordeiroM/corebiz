import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import Products from './components/Products/Products'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'

const App = () => {
    return ( 
    <div className = "App" >
          <Header />
          <Slider />
          <Products />
          <Form />
          <Footer />
        </div>
    );
}

export default App;