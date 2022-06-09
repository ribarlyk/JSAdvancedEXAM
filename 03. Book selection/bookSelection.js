const { expect } = require("chai");

const bookSelection = {
  isGenreSuitable(genre, age) {
    if (age <= 12 && (genre === "Thriller" || genre === "Horror")) {
      return `Books with ${genre} genre are not suitable for kids at ${age} age`;
    } else {
      return `Those books are suitable`;
    }
  },
  isItAffordable(price, budget) {
    if (typeof price !== "number" || typeof budget !== "number") {
      throw new Error("Invalid input");
    }

    let result = budget - price;

    if (result < 0) {
      return "You don't have enough money";
    } else {
      return `Book bought. You have ${result}$ left`;
    }
  },
  suitableTitles(array, wantedGenre) {
    let resultArr = [];

    if (!Array.isArray(array) || typeof wantedGenre !== "string") {
      throw new Error("Invalid input");
    }
    array.map((obj) => {
      if (obj.genre === wantedGenre) {
        resultArr.push(obj.title);
      }
    });
    return resultArr;
  },
};
describe("test isGenreSuitable", () => {
  it("testing for Thriller genre", () => {
    expect(bookSelection.isGenreSuitable("Thriller", 11)).to.equal(
      `Books with Thriller genre are not suitable for kids at 11 age`
    );
  });
  it("testing for Horror genre", () => {
    expect(bookSelection.isGenreSuitable("Horror", 12)).to.equal(
      `Books with Horror genre are not suitable for kids at 12 age`
    );
  });
  it("test happy path", () => {
    expect(bookSelection.isGenreSuitable("Comedy", 12)).to.equal(
      `Those books are suitable`
    );
  });

  describe("test isItAffordable", () => {
    it("test less money", () => {
      expect(bookSelection.isItAffordable(13, 12)).to.equal(
        "You don't have enough money"
      );
    });

    it("test invalid param array", () => {
      expect(function () {
        bookSelection.isItAffordable("asd", "12asd");
      }).to.throw("Invalid input");
    });
    it("test invalid param array", () => {
      expect(function () {
        bookSelection.isItAffordable("asd", 12);
      }).to.throw("Invalid input");
    });
    it("test invalid param array", () => {
      expect(function () {
        bookSelection.isItAffordable(12, "12asd");
      }).to.throw("Invalid input");
    });
  });
  describe("test isItAffordable", () => {
    it("test invalid param string", () => {
      expect(function () {
        bookSelection.suitableTitles([], 12);
      }).to.throw("Invalid input");
    });
    it("test invalid param array", () => {
      expect(function () {
        bookSelection.suitableTitles(13, "string");
      }).to.throw("Invalid input");
    });
    it("happy path", () => {
      expect(bookSelection.suitableTitles([], "string")).to.deep.equal([]);
    });
  });
});
