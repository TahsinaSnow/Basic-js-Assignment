// problem-1

function seerToMon(seer){
    // error message
    if(typeof seer != 'number'){
        return 'Please enter a number';
    }
    let mon = seer / 40;
    return mon;
    }
    const result = seerToMon(120);
    console.log(result);

// problem-2

   function totalSales(shirtQuantity, pantQuantity, shoeQuantity){
   const perShirtPrice = 100;
   const perPantPrice = 200;
   const perShoePrice = 500;
   const ShirtPriceQuantity = shirtQuantity * perShirtPrice;
   const PantPriceQuantity = pantQuantity * perPantPrice;
   const ShoePriceQuantity = shoeQuantity * perShoePrice;
   const totalPrice = ShirtPriceQuantity + PantPriceQuantity + ShoePriceQuantity;
   return totalPrice;
}
const firstOption = totalSales ( 5, 3, 2);
console.log(firstOption);

// problem-3

function deliveryCost(TShirtCost){
    const firstDeliveryCost = 100;
    const secondDeliveryCost = 80;
    const thirdDeliveryCost = 50;
    if (TShirtCost <= 100){
        const count = TShirtCost * firstDeliveryCost;
        return count;
    }
    else if(TShirtCost > 100 && TShirtCost < 200){
        const firstDelivery = 100* firstDeliveryCost ;
         thirdCost = TShirtCost - 100;
        const secondDelivery = thirdCost * secondDeliveryCost;
        const totalCost = firstDelivery + secondDelivery;
        return totalCost;
    }
    else{
        const firstDelivery = 100 * firstDeliveryCost;
        const secondDelivery = 100 * secondDeliveryCost;
        const thirdCost = TShirtCost - 200;
        const thirdDelivery = thirdCost * thirdDeliveryCost;
        const totalCost = firstDelivery + secondDelivery + thirdDelivery;
        return totalCost;
    }
}
const costs  = deliveryCost(150);
console.log(costs);


// problem-4
function perfectFriend(friendList ){
    for( const friends of friendList){
        let bondhu = friends.length;
        if(bondhu == 5){
            return friends;
        }
    }
}
let friendName = ['Tahsina', 'Laboni', 'Lebuu', 'Tanvir', 'Anikk'];
let BestFriend = perfectFriend(friendName);
console.log(BestFriend);
