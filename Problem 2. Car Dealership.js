class CarDealership {
  constructor(name) {
    (this.name = name),
      (this.availableCars = []),
      (this.soldCars = []),
      (this.totalIncome = 0)
     
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
    let soldPrice = 0;
    let car = this.availableCars.find((el) => el.model == model);
    if (car == undefined) {
      throw new Error(`${model} was not found!`);
    }
    if (car.mileage <= desiredMileage) {
      soldPrice = Number(car.price);
    } else if (car.mileage - desiredMileage <= 40000) {
      soldPrice = car.price * 0.95;
    } else if (car.mileage - desiredMileage > 40000) {
      soldPrice = car.price * 0.9;
    }
    let soldCar = this.availableCars.shift();
    let horsepower = soldCar.horsepower;
    this.soldCars.push({ model, horsepower, soldPrice });
    this.totalIncome += soldPrice;
    return `${model} was sold for ${soldPrice.toFixed(2)}$`;
  }
  currentCar() {
    if(this.availableCars.length === 0){
        return 'There are no available cars'
    }else{
    let header = `-Available cars:\n`;
    return (header += this.availableCars
      .map(
        (el) =>
          `---${el.model} - ${el.horsepower} HP - ${el.mileage.toFixed(
            2
          )} km - ${el.price.toFixed(2)}$`
      )
      .join("\n"));
  }}

  salesReport(criteria) {
    if (criteria != "horsepower" && criteria != "model") {
      throw new Error("Invalid criteria!");
    }
    if (criteria == "horsepower") {
      this.soldCars.sort((a, b) => b[criteria] - a[criteria]);
    } else if (criteria == "model") {
      this.soldCars.sort((a, b) => a[criteria].localeCompare(b[criteria]));
    }
    let header = `-SoftAuto has a total income of ${this.totalIncome.toFixed(
      2
    )}$\n`;
    header += `-${this.soldCars.length} cars sold:\n`;
    header += this.soldCars
      .map(
        (a) => `---${a.model} - ${a.horsepower} HP - ${a.soldPrice.toFixed(2)}$`
      )
      .join("\n");
    return header;
  }
}
let dealership = new CarDealership("SoftAuto");
dealership.addCar("Toyota Corolla", 100, 3500, 190000);
dealership.addCar("Mercedes C63", 300, 29000, 187000);
dealership.addCar("Audi A3", 120, 4900, 240000);
dealership.sellCar("Toyota Corolla", 230000);
dealership.sellCar("Mercedes C63", 110000);
dealership.sellCar("Audi A3", 120,)

console.log(dealership.salesReport("horsepower"));
