import './Css/Global.css';
import NavBar from "./NavBar";
import OrderSummary from './Components/OrderSummary';
import FoodMenu from './Components/FoodMenu';
import ButtonHolder from './Components/ButtonHolder';
import { useState, useEffect } from 'react';
import IdliSambhar from "./Assets/imgs/IdliSambar.jpg";
import SevTamatar from "./Assets/imgs/SevTamatar.jpeg";
import ShahiPaneer from "./Assets/imgs/ShahiPaneer.jpeg";
import ButterRoti from './Assets/imgs/ButterRoti.webp';
import CholeBhature from './Assets/imgs/CholeBhature.jpg';
function App() {

  const [Count , SetCount] = useState(0);

  const ProductData = [
    {
      ItemId : 101,
      Name: "Idli Sambhar",
      Price: "50",
      Image: IdliSambhar,
      Quantity: 0,
      TotalPrice: 0,
    },
    {
      ItemId : 102,
      Name: "Sev Tamatar",
      Price: "70",
      Image: SevTamatar,
      Quantity: 0,
      TotalPrice: 0,
    },
    {
      ItemId : 103,
      Name: "Shahi Paneer",
      Price: "60",
      Image: ShahiPaneer,
      Quantity: 0,
      TotalPrice: 0,
    },
    {
      ItemId : 104,
        Name: "Chole Bhature",
        Price: "40",
        Image: CholeBhature,
        Quantity: 0,
        TotalPrice: 0,
      },
      {
        ItemId : 105,
        Name: "Butter Roti",
        Price: "10",
        Image: ButterRoti,
        Quantity: 0,
        TotalPrice: 0,
      },
  ];

  const [SelectedFoodItems , SetSelectedFoodItems] = useState([]);

  const initialValue = 0;
  const [TotalPrice , SetTotalPrice] = useState(0);
  useEffect(()=>{
    SetTotalPrice(
      SelectedFoodItems.reduce(
        (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue.TotalPrice),
        parseInt(initialValue),
      )
    )
    console.log(TotalPrice)
  } , [SelectedFoodItems]);

  return (
    <>
    <NavBar />
    {
      Count === 0 ?  
      <FoodMenu ProductData={ProductData} SelectedFoodItems={SelectedFoodItems} SetSelectedFoodItems={SetSelectedFoodItems} /> : 
      <OrderSummary ProductData={SelectedFoodItems}  SetProductData={SetSelectedFoodItems} TotalPrice={TotalPrice} />
    }
    <ButtonHolder Count={Count} SetCount={SetCount} SelectedFoodItems={SelectedFoodItems} />

    </>
  );
}
export default App;