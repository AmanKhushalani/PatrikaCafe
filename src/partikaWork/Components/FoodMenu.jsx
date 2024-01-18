import "../Css/FoodMenu.css";

const FoodMenu = ({ProductData , SelectedFoodItems , SetSelectedFoodItems}) => {
    // console.log(SelectedFoodItems)

    function CheckIfMappingExists(SelectedProducts , CurrentProduct){
      let All_SelectedProductsId = SelectedProducts.map((Item)=>{
        return Item.ItemId
      });

      return All_SelectedProductsId.includes(CurrentProduct.ItemId);
    }

  function handleChange(e , args) {
    if (e.target.checked) {
      SetSelectedFoodItems([...SelectedFoodItems, 
        {
          ...args , 
          "Quantity" : 1,
          "TotalPrice" : args.Price
        }
      ]);
    } else {
      SetSelectedFoodItems(SelectedFoodItems.filter((item) => item.ItemId !== args.ItemId));
    }
}

  return (
    <div id="MenuContainer">

        <div id="Menu">

            <div className="heading">Today's Menu</div>
            
            <div id="MenuList">
                
                
                {
                    ProductData.map((item , index)=>{
                        return <div className="MenuRow" key={index}>
                            <div className="DishCheckBox">
                                <input defaultChecked={CheckIfMappingExists(SelectedFoodItems , item)} type="checkbox" id={index} name="FoodItem" value={item.Name}
                                onClick={
                                  (event)=>{
                                    handleChange(event , {...item})
                                  }
                                } />
                                <label htmlFor={item.Name}></label>
                            </div>
                            <div className="DishImage">
                                <img src={item.Image} alt="" />
                            </div>
                            <div className="DishName">
                                {item.Name}
                            </div>
                            <div className="DishPrice">
                                {item.Price} /-
                            </div>
                        </div>

                    })
                }
            </div>

        </div>

    </div>
    
  );
};

export default FoodMenu;
