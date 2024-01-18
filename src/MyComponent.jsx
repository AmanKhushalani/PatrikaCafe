import { AddTwoNumbers } from "./Main";

export const MyComponent = ({Properties})=>
{
    const a = 10;
    const b = 20;
    console.log(Properties);
    return <>
    <h1>{Properties[0]}</h1>
    <h1>{Properties[1]}</h1>
    <h1>{Properties[2]}</h1>
    <h1>Add tow numbers = {AddTwoNumbers(10,20)}</h1>
    </>
}