const { expect } = require("chai");

const carService = {
  isItExpensive(issue) {
    if (issue === "Engine" || issue === "Transmission") {
      return `The issue with the car is more severe and it will cost more money`;
    } else {
      return `The overall price will be a bit cheaper`;
    }
  },
  discount(numberOfParts, totalPrice) {
    if (typeof numberOfParts !== "number" || typeof totalPrice !== "number") {
      throw new Error("Invalid input");
    }

    let discountPercentage = 0;

    if (numberOfParts > 2 && numberOfParts <= 7) {
      discountPercentage = 15;
    } else if (numberOfParts > 7) {
      discountPercentage = 30;
    }

    let result = (discountPercentage / 100) * totalPrice;

    if (numberOfParts <= 2) {
      return "You cannot apply a discount";
    } else {
      return `Discount applied! You saved ${result}$`;
    }
  },
  partsToBuy(partsCatalog, neededParts) {
    let totalSum = 0;

    if (!Array.isArray(partsCatalog) || !Array.isArray(neededParts)) {
      throw new Error("Invalid input");
    }
    neededParts.forEach((neededPart) => {
      partsCatalog.map((obj) => {
        if (obj.part === neededPart) {
          totalSum += obj.price;
        }
      });
    });

    return totalSum;
  },
};

describe('carService',()=>{
  it ('isItExpensive',()=>{
    expect(carService.isItExpensive("Engine")).to.equal(`The issue with the car is more severe and it will cost more money`)
  })
  it ('isItExpensive',()=>{
    expect(carService.isItExpensive("Transmission")).to.equal(`The issue with the car is more severe and it will cost more money`)
  })
  it ('isItExpensive',()=>{
    expect(carService.isItExpensive("door")).to.equal(`The overall price will be a bit cheaper`)
  })
  

  describe('carService',()=>{
    it ('discount',()=>{
      expect(carService.discount(2,100)).to.equal("You cannot apply a discount")
    })
    it ('discount',()=>{
      expect(carService.discount(3,100)).to.equal(`Discount applied! You saved ${100-85}$`)
    })
    it ('discount',()=>{
      expect(carService.discount(8,100)).to.equal(`Discount applied! You saved ${100-70}$`)
    })
    it ('discount',()=>{
      expect(()=>carService.discount('1',100)).to.throw( "Invalid input")
    })
    it ('discount',()=>{
      expect(()=>carService.discount(1,'111')).to.throw( "Invalid input")
    })
    it ('discount',()=>{
      expect(()=>carService.discount('1','111')).to.throw( "Invalid input")
    })
      })
      describe('carService',()=>{
        it ('partsToBuy',()=>{
          expect(carService.partsToBuy([],[{}])).to.equal(0)
        })
        it ('partsToBuy',()=>{
          expect(()=>carService.partsToBuy('',[])).to.throw("Invalid input")
        })
        it ('partsToBuy',()=>{
          expect(()=>carService.partsToBuy([],{})).to.throw("Invalid input")
        })
        it ('partsToBuy',()=>{
          expect(()=>carService.partsToBuy('','')).to.throw("Invalid input")
        })
        it ('partsToBuy',()=>{
          expect(carService.partsToBuy([{ part: "blowoff valve", price: 145},{ part: "engine", price: 145}],["blowoff valve",'engine'])).to.equal(290)
        })
        it ('partsToBuy',()=>{
          expect(carService.partsToBuy([{ part: "blowoff valve", price: 145}],["blowoff valve"])).to.equal(145)
        })
        it ('partsToBuy',()=>{
          expect(carService.partsToBuy([],[])).to.equal(0)
        })

      })
})