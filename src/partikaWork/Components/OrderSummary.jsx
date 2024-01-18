import "../Css/OrderSummary.css";

import ItemButton from "./ItemButton";
const OrderSummary = ({ProductData , SetProductData , TotalPrice}) => {
  
  
  return (
    <div id="OrderSummaryHolder">
      <div id="OrderSummary">
        <div className="heading">Order Summary</div>

        <div id="SummaryList">
          {ProductData.map((item, index) => {
            return (
              <div className="row" key={index}>
                <div className="ItemImg">
                  <img src={item.Image} alt="" />
                </div>
                <div className="ItemName">{item.Name}</div>
                <div className="ItemCount">
                  <ItemButton Item={item}  SetProductData={SetProductData} />
                </div>
                <div className="ItemPrice">{item.TotalPrice}/-</div>
              </div>
            );
          })}

          <div className="row" >
            <div className="ItemImg"></div>
            <div className="ItemName"></div>
            <div className="ItemCount">Total = </div>
            <div className="ItemPrice">{TotalPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
