class VegetableStore {
  constructor(owner, location) {
    (this.owner = owner),
      (this.location = location),
      (this.availableProducts = []),
      (this.uniqueProducts = []);
    this.doubledProducts = [];
  }
  loadingVegetables(vegetables) {
    for (let line of vegetables) {
      let token = line.split(" ");
      let type = token[0];
      let quantity = Number(token[1]);
      let price = Number(token[2]);
      let isAvailable = this.availableProducts.find((a) => a.type === type);

      if (isAvailable === undefined) {
        this.availableProducts.push({ type, quantity, price });
      } else if (isAvailable) {
        isAvailable.quantity += quantity;
        let currentPrice = isAvailable.price;
        if (currentPrice < price) {
          isAvailable.price = price;
        } else {
          this.doubledProducts.push({ type, quantity, price });
        }
      }
    }

    this.availableProducts.map((el) => this.uniqueProducts.push(el.type));

    return `Successfully added ${this.uniqueProducts.join(", ")}`;
  }
  buyingVegetables(selectedProducts) {
    let totalPrice = 0;

    for (let line of selectedProducts) {
      let [type, quantity] = line.split(" ");
      quantity = Number(quantity);

      const targetProduct = this.availableProducts.find(
        (pro) => pro.type == type
      );

      if (!targetProduct) {
        throw new Error(
          `${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      }
      let currentQuantity = targetProduct.quantity;
      let price = targetProduct.price;
      if (currentQuantity < quantity) {
        throw new Error(
          `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      } else {
        targetProduct.quantity -= quantity;
        totalPrice += quantity * price;
      }
    }
    return `Great choice! You must pay the following amount $${totalPrice.toFixed(
      2
    )}.`;
  }
  rottingVegetable(type, quantity) {
    const targetProduct = this.availableProducts.find(
      (prod) => prod.type === type
    );
    if (!targetProduct) {
      throw new Error(`${type} is not available in the store.`);
    }
    let currentQuantity = targetProduct.quantity;
    if (currentQuantity < Number(quantity)) {
      targetProduct.quantity = 0;
      return `The entire quantity of the ${type} has been removed.`;
    } else {
      targetProduct.quantity -= quantity;
      return `Some quantity of the ${type} has been removed.`;
    }
  }
  revision() {
    this.availableProducts.sort((a, b) => a.price - b.price);
    let header = `Available vegetables:\n`;
    header += this.availableProducts
      .map((el) => `${el.type}-${el.quantity}-$${el.price}`)
      .join("\n");
    header += `\nThe owner of the store is Jerrie Munro, and the location is 1463 Pette Kyosheta, Sofia.`;
    return header;
  }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(
  vegStore.loadingVegetables([
    "Okra 2.5 3.5",
    "Beans 10 2.8",
    "Celery 5.5 2.2",
    "Celery 0.5 2.5",
  ])
);
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
