import '../Css/ButtonHolder.css';

const ButtonHolder = ({Count , SetCount , SelectedFoodItems})=>{

    return(
        <div id="ButtonHolder">

            <button className={Count==0 ? "Disable" : "BackButton"} onClick={()=>{
                if (Count==0)
                    return false;
                else
                    SetCount(Count-1)
            }}  >Back</button>

            <button className={Count==1 || SelectedFoodItems.length==0 ? "Disable" : "NextButton"} onClick={()=>{
                if (Count==1 || SelectedFoodItems.length==0)
                    return false;
                else
                    SetCount(Count+1)
            }}  >Next</button>

        </div>
    );

}

export default ButtonHolder;