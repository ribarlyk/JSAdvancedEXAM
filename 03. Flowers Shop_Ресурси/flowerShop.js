const { expect } = require("chai");

const flowerShop = {
  calcPriceOfFlowers(flower, price, quantity) {
    if (
      typeof flower != "string" ||
      !Number.isInteger(price) ||
      !Number.isInteger(quantity)
    ) {
      throw new Error("Invalid input!");
    } else {
      let result = price * quantity;
      return `You need $${result.toFixed(2)} to buy ${flower}!`;
    }
  },
  checkFlowersAvailable(flower, gardenArr) {
    if (gardenArr.indexOf(flower) >= 0) {
      return `The ${flower} are available!`;
    } else {
      return `The ${flower} are sold! You need to purchase more!`;
    }
  },
  sellFlowers(gardenArr, space) {
    let shop = [];
    let i = 0;
    if (
      !Array.isArray(gardenArr) ||
      !Number.isInteger(space) ||
      space < 0 ||
      space >= gardenArr.length
    ) {
      throw new Error("Invalid input!");
    } else {
      while (gardenArr.length > i) {
        if (i != space) {
          shop.push(gardenArr[i]);
        }
        i++;
      }
    }
    return shop.join(" / ");
  },
};

describe("Flower Shop", () => {
  it("calcPriceOfFlowers happy path", () => {
    expect(flowerShop.calcPriceOfFlowers("hello", 5, 2)).to.equal(
      `You need $10.00 to buy hello!`
    );
  });
  it("calcPriceOfFlowers happy path", () => {
    expect(function () {
      flowerShop.calcPriceOfFlowers(1, 3, 2);
    }).to.throw("Invalid input!");
  });
  it("calcPriceOfFlowers happy path", () => {
    expect(function () {
      flowerShop.calcPriceOfFlowers(1, "3", "2");
    }).to.throw("Invalid input!");
  });
  it("calcPriceOfFlowers happy path", () => {
    expect(function () {
      flowerShop.calcPriceOfFlowers(1, "3", 2);
    }).to.throw("Invalid input!");
  });
  it("calcPriceOfFlowers happy path", () => {
    expect(function () {
      flowerShop.calcPriceOfFlowers("hello", 3, "2");
    }).to.throw("Invalid input!");
  });
  describe("Flower Shop", () => {
    it("checkFlowersAvailable", () => {
      expect(
        flowerShop.checkFlowersAvailable("flower", ["flower,apple,lider"])
      ).to.include("flower");
    });
    it("checkFlowersAvailable", () => {
      expect(
        flowerShop.checkFlowersAvailable("apple", ["flower,apple,lider"])
      ).to.include(`The apple are sold! You need to purchase more!`);
    });

    it("checkFlowersAvailable", () => {
      expect(
        flowerShop.checkFlowersAvailable("Rose", ["Rose", "Lily", "Orchid"])
      ).to.equal(`The Rose are available!`);
    });
  });
  describe("Flower Shop", () => {
    it("sellFlowers", () => {
      expect(function () {
        flowerShop.sellFlowers({}, 1);
      }).to.throw("Invalid input!");
    });
    it("sellFlowers", () => {
      expect(function () {
        flowerShop.sellFlowers([], 1);
      }).to.throw("Invalid input!");
    });
    it("sellFlowers", () => {
      expect(function () {
        flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], "1");
      }).to.throw("Invalid input!");
    });
    it("sellFlowers", () => {
      expect(function () {
        flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1);
      }).to.throw("Invalid input!");
    });
    it("sellFlowers", () => {
      expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1)).to.equal(
        "Rose / Orchid"
      );
    });
  });
});
