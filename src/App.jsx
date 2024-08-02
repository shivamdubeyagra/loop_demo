import Banner from "./components/banner/Banner"
import Carosuel from "./components/banner/Carosuel"
import Discount from "./components/banner/Discount"
import Footer from "./components/banner/Footer"
import Offers from "./components/banner/Offers"
import Order from "./components/banner/Order"
import OrderNotes from "./components/banner/OrderNotes"
import Payment from "./components/banner/Payment"
import Product from "./components/banner/Product"
import Saving from "./components/banner/Saving"
import ShipingAdd from "./components/banner/ShipingAdd"
import Sky from "./components/banner/Sky"
import Subcription from "./components/banner/Subcription"


function App() {
  return (
    <div className="bg-[#FCFCCF] h-full">
      <Banner />
      <section className="md:max-w-[95%] lg:max-w-[70%] md:m-auto lg:m-auto">
        <Order />
        <Sky />
        <Carosuel />
        <hr className="h-[2px] bg-[#1a541d]" />
        <Saving />
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 m-2">
          <Product />
          <Product />
          <OrderNotes />
          <Discount />
          <Subcription />
          <ShipingAdd />
          <Payment />
        </section>
        <Offers />
      </section>
      <Footer />
    </div>
  )
}

export default App
