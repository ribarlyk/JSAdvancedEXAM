class CarDealership {
  constructor(name) {
    (this.name = name),
      (this.availableCars = []),
      (this.soldCars = []),
      (this.totalIncome = 0),
      (this.help = {})
  }
  addCar(model, horsepower, price, mileage) {
    if (model == "" || horsepower < 0 || price < 0 || mileage < 0) {
      throw new Error("Invalid input!");
    }
    this.availableCars.push({ model, horsepower, price, mileage });
    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
      2
    )} km - ${price.toFixed(2)}$`;
  }
  sellCar(model, desiredMileage) {
    let soldPrice = 0
    let car = this.availableCars.find((el) => el.model == model);
    if (car == undefined) {
      throw new Error(`${model} was not found!`);
    }
    if(car.mileage <=desiredMileage){
        soldPrice = Number(car.price);
    }else if((car.mileage - desiredMileage)<= 40000){
        soldPrice = car.price * 0.95;
    }else if((car.mileage-desiredMileage)>40000){
        soldPrice = car.price * 0.90;
    }
   let soldCar = this.availableCars.shift()
   let horses = soldCar.horsepower
   this.soldCars.push({model,horses,soldPrice})
   return `${model} was sold for ${soldPrice.toFixed(2)}$`
  }
  currentCar (){
    let header = `-Available cars:\n`
     return header+=(this.availableCars.map(el =>`---${el.model} - ${el.horsepower} HP - ${el.mileage.toFixed(2)} km - ${el.price.toFixed(2)}$`)).join('\n')};

     salesReport (criteria){
        if(criteria != 'horsepower' ){
                      throw new Error('Invalid criteria!');
        }
        if(criteria=== 'horsepower'){
            this.soldCars.sort((a,b)=> )
            
        }
     }   
}
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));