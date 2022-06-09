const { expect } = require("chai");

const rentCar = {
  searchCar(shop, model) {
    let findModel = [];
    if (Array.isArray(shop) && typeof model == "string") {
      for (let i = 0; i < shop.length; i++) {
        if (model == shop[i]) {
          findModel.push(shop[i]);
        }
      }
      if (findModel.length !== 0) {
        return `There is ${findModel.length} car of model ${model} in the catalog!`;
      } else {
        throw new Error("There are no such models in the catalog!");
      }
    } else {
      throw new Error("Invalid input!");
    }
  },
  calculatePriceOfCar(model, days) {
    let catalogue = {
      Volkswagen: 20,
      Audi: 36,
      Toyota: 40,
      BMW: 45,
      Mercedes: 50,
    };

    if (typeof model == "string" && Number.isInteger(days)) {
      if (catalogue.hasOwnProperty(model)) {
        let cost = catalogue[model] * days;
        return `You choose ${model} and it will cost $${cost}!`;
      } else {
        throw new Error("No such model in the catalog!");
      }
    } else {
      throw new Error("Invalid input!");
    }
  },
  checkBudget(costPerDay, days, budget) {
    if (
      !Number.isInteger(costPerDay) ||
      !Number.isInteger(days) ||
      !Number.isInteger(budget)
    ) {
      throw new Error("Invalid input!");
    } else {
      let cost = costPerDay * days;
      if (cost <= budget) {
        return `You rent a car!`;
      } else {
        return "You need a bigger budget!";
      }
    }
  },
};

describe("test rentCar.searchCar", () => {
    it("test happy path", () => {
      expect(rentCar.searchCar(["BMW",'OPELL'], "BMW")).to.equal(
        `There is 1 car of model BMW in the catalog!`
      );
    });
    it("test invalid input of array", () => {
      expect(function () {
        rentCar.searchCar("bmw", "BMW");
      }).to.throw(`Invalid input!`);
    });
    it("test invalid input of string", () => {
      expect(function () {
        rentCar.searchCar(["bmw"], ["BMW"]);
      }).to.throw(`Invalid input!`);
    });
    it("test invalid input of both", () => {
      expect(function () {
        rentCar.searchCar("bmw", ["BMW"]);
      }).to.throw(`Invalid input!`);
    });
    it("test the model", () => {
      expect(function () {
        rentCar.searchCar(["BMW", "BMW"], "OPEL");
      }).to.throw(`There are no such models in the catalog!`);
    });
    describe("rentCar.calculatePriceOfCar", () => {
      it("test input params", () => {
        expect(function () {
          rentCar.calculatePriceOfCar(1, 11);
        }).to.throw("Invalid input!");
      });
      it(" test input params", () => {
        expect(function () {
          rentCar.calculatePriceOfCar('BMW', 1.1);
        }).to.throw("Invalid input!");
      });
      it("test input params", () => {
        expect(function () {
          rentCar.calculatePriceOfCar("BMW", "11");
        }).to.throw("Invalid input!");
      });
      
      
      it("happy path", () => {
        expect(rentCar.calculatePriceOfCar("BMW", 1)).to.equal(
          `You choose BMW and it will cost $45!`
        );
      });
      it("happy path", () => {
        expect(rentCar.calculatePriceOfCar("BMW", 0)).to.equal(
          `You choose BMW and it will cost $0!`
        );
      });
      it("test input params", () => {
          expect(function () {
            rentCar.calculatePriceOfCar("BMW", "11");
          }).to.throw("Invalid input!");})
  
          it("test input params", () => {
              expect(function () {
                rentCar.calculatePriceOfCar("BaMW", 11);
              }).to.throw('No such model in the catalog!');})
    });
    describe("test rentCar.checkBudget", () => {
      it("test input params", () => {
        expect(function () {
          rentCar.checkBudget(1, 11, "1");
        }).to.throw("Invalid input!");
      });
      it("test input params", () => {
        expect(function () {
          rentCar.checkBudget(1, "1", 1);
        }).to.throw("Invalid input!");
      });
      it("test input params", () => {
        expect(function () {
          rentCar.checkBudget("1", 11, 1);
        }).to.throw("Invalid input!");
      });
      it("test input params", () => {
          expect(function () {
            rentCar.checkBudget(1, 1, 1.1);
          }).to.throw("Invalid input!");
        });
        it("test input params", () => {
            expect(function () {
              rentCar.checkBudget(1, 1.1, 1);
            }).to.throw("Invalid input!");
          });
          it("test input params", () => {
            expect(function () {
              rentCar.checkBudget(1.1, 1, 1);
            }).to.throw("Invalid input!");
          });
      it("test input params", () => {
          expect(function () {
            rentCar.checkBudget("1", [11], {});
          }).to.throw("Invalid input!");
        });
      it("happy path", () => {
        expect(rentCar.checkBudget(20, 1, 21)).to.equal("You rent a car!");
      });
      it("happy path", () => {
          expect(rentCar.checkBudget(20, 1, 20)).to.equal("You rent a car!");
        });
      it("budget param to be bigger", () => {
        expect(rentCar.checkBudget(22, 1, 21)).to.equal(
          "You need a bigger budget!"
        );
      });
    });
  });