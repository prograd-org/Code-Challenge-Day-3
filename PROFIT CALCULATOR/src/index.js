//Each Sunday, a newspaper agency sells x copies of a certain newspaper for Rs.a per copy. 
//The cost to the agency of each newspaper is Rs.b . 
//The agency pays a fixed cost for storage, delivery and so on of Rs.100 per Sunday. 
//The newspaper agency wants to calculate the profit obtained on sundays. 
//Can you please help them out by writing a function to compute the profit given x, a and b.


// Write the function to return the profit obtained.
function find_Profit(x,a,b){

    return ((x*a)-((b*x)+100))
}

//Use SpecRunner to check the Test Cases.