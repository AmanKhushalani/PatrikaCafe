import '../Css/ItemButton.css';
const ItemButton = ({Item , SetProductData}) => {
  return (
    <>
      <div className="ItemButton">
        <div className="QuantityButton" onClick={()=>{

          if (Item.Quantity == 0) return 0;
          SetProductData((PreviousValue)=>{
            return PreviousValue.map(
              (CurrentItem)=> CurrentItem.ItemId == Item.ItemId ? {
                ...CurrentItem , 
                "Quantity" : CurrentItem.Quantity-1,
                "TotalPrice" : CurrentItem.Price * (CurrentItem.Quantity-1)
              } : CurrentItem)
          })
        }}
        >-</div>
        <div>{Item.Quantity}</div>
        <div className="QuantityButton" onClick={()=>{
          SetProductData((PreviousValue)=>{
            return PreviousValue.map(
              (CurrentItem)=> CurrentItem.ItemId == Item.ItemId ? {
                ...CurrentItem , 
                "Quantity" : CurrentItem.Quantity+1,
                "TotalPrice" : CurrentItem.Price * (CurrentItem.Quantity+1)
              } : CurrentItem)
          })
        }} >+</div>
      </div>
    </>
  );
};


export default ItemButton;