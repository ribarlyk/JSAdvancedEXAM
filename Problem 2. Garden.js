class Garden {
  constructor(spaceAvailable) {
    (this.spaceAvailable = spaceAvailable),
      (this.plants = []),
      (this.storage = []);
  }
  addPlant(plantName, spaceRequired) {
    if (this.spaceAvailable < spaceRequired) {
      throw new Error("Not enough space in the garden.");
    } else {
      this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
      this.spaceAvailable -= spaceRequired;
    }
    return `The ${plantName} has been successfully planted in the garden.`;
  }
  ripenPlant(plantName, quantity) {
    let targetPlant = this.plants.find((el) => el.plantName == plantName);

    if (!targetPlant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
    if (targetPlant.ripe == true) {
      throw new Error(`The ${plantName} is already ripe.`);
    }
    if (quantity <= 0) {
      throw new Error(`The quantity cannot be zero or negative.`);
    }

    if (quantity == 1) {
      targetPlant.ripe = true;
      targetPlant.quantity += quantity;
      return `${quantity} ${plantName} has successfully ripened.`;
    }
    if (quantity > 1) {
      targetPlant.ripe = true;
      targetPlant.quantity += quantity;
      return `${quantity} ${plantName}s have successfully ripened.`;
    }
  }
  harvestPlant(plantName) {
    let targetPlant = this.plants.find((el) => el.plantName == plantName);
    if (!targetPlant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
    if (targetPlant.ripe === false) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`
      );
    }
    let index = this.plants.indexOf(targetPlant);
    this.plants.splice(index, 1);
    this.storage.push({ plantName, quantity: targetPlant.quantity });

    this.spaceAvailable += targetPlant.spaceRequired;
    return `The ${plantName} has been successfully harvested.`;
  }
  generateReport() {
    let result = [];

    let header = `The garden has ${this.spaceAvailable} free space left.\n`;
    header += `Plants in the garden: ${this.plants
      .sort((a, b) => a.plantName.localeCompare(b.plantName))
      .map((e) => e.plantName)
      .join(", ")}\n`;

    return header += this.storage.length === 0 ?"Plants in  storage: The storage is empty.":`Plants in storage: ${this.storage.map(
        (a) => `${a.plantName} (${a.quantity})`
      ).join(', ')}`

  
    
  }
}
const myGarden = new Garden(250);
console.log(myGarden.addPlant("apple", 20));
console.log(myGarden.addPlant("orange", 200));
console.log(myGarden.addPlant("raspberry", 10));
console.log(myGarden.ripenPlant("apple", 10));
console.log(myGarden.ripenPlant("orange", 1));
console.log(myGarden.harvestPlant("orange"));
console.log(myGarden.generateReport());
