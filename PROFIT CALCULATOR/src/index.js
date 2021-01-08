//Each Sunday, a newspaper agency sells x copies of a certain newspaper for Rs.a per copy. 
//The cost to the agency of each newspaper is Rs.b . 
//The agency pays a fixed cost for storage, delivery and so on of Rs.100 per Sunday. 
//The newspaper agency wants to calculate the profit obtained on sundays. 
//Can you please help them out by writing a function to compute the profit given x, a and b.


// Write the function to return the profit obtained.
function find_Profit(x,a,b){
          //total sold price to agency for "a" rupees
          sold_price=x*a;
          //original sold price "b" rupees
          original_price=x*b;
          //gain
          gain=sold_price - original_price - 100;
          return gain
  
    return null;
}
find_Profit(100,10,5)

//Use SpecRunner to check the Test Cases.