class SummerCamp {
  constructor(organizer, location) {
    (this.organizer = organizer),
      (this.location = location),
      (this.priceForTheCamp = { child: 150, student: 300, collegian: 500 }),
      (this.listOfParticipants = []);
  }
  registerParticipant(name, condition, money) {
    if (!this.priceForTheCamp.hasOwnProperty(condition)) {
      throw new Error("Unsuccessful registration at the camp.");
    }
    if (money < this.priceForTheCamp[condition]) {
      return `The money is not enough to pay the stay at the camp.`;
    }

    let targetName = this.listOfParticipants.find((el) => el.name == name);
    if (targetName) {
      return `The ${name} is already registered at the camp.`;
    } else if (!targetName) {
      this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
      return `The ${name} was successfully registered.`;
    }
  }
  unregisterParticipant(name) {
    let targeetName = this.listOfParticipants.find((el) => el.name === name);

    if (this.listOfParticipants.includes(targeetName)) {
      let index = this.listOfParticipants.indexOf(targeetName);
      this.listOfParticipants.splice(index, 1);
      return `The ${name} removed successfully.`;
    }
    if (!targeetName) {
      throw new Error(`The ${name} is not registered in the camp.`);
    }
  }
  timeToPlay(typeOfGame, participant1, participant2) {
    if (typeOfGame === "WaterBalloonFights") {
      let targetNameOne = this.listOfParticipants.find(
        (el) => el["name"] === participant1
      );
      let targetNameTwo = this.listOfParticipants.find(
        (el) => el["name"] === participant2
      );

      if (targetNameOne === undefined || targetNameTwo === undefined) {
        throw new Error("Invalid entered name/s.");
      }
      if (targetNameOne["condition"] != targetNameTwo["condition"]) {
        throw new Error(`Choose players with equal condition.`);
      }
      if (targetNameOne.power > targetNameTwo.power) {
        targetNameOne.wins += 1;
        return `The ${participant1} is winner in the game ${typeOfGame}.`;
      } else if (targetNameOne.power < targetNameTwo.power) {
        targetNameTwo.wins += 1;
        return `The ${participant2} is winner in the game ${typeOfGame}.`;
      } else {
        return `There is no winner.`;
      }
    } else if ("Battleship") {
      let targetNameOne = this.listOfParticipants.find(
        (el) => el["name"] === participant1
      );

      if (!targetNameOne) {
        throw new Error("Invalid entered name/s.");
      } else {
        targetNameOne.power += 20;
        return `The ${participant1} successfully completed the game ${typeOfGame}.`;
      }
    }
  }
  toString() {
    let header = `Jane Austen will take ${this.listOfParticipants.length} participants on camping to Pancharevo Sofia 1137, Bulgaria\n`;
    this.listOfParticipants.sort((a, b) => b.wins - a.wins);
    return (header += this.listOfParticipants
      .map((el) => `${el.name} - ${el.condition} - ${el.power} - ${el.wins}`)
      .join("\n"));
  }
}

const summerCamp = new SummerCamp(
  "Jane Austen",
  "Pancharevo Sofia 1137, Bulgaria"
);
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));

console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(
  summerCamp.timeToPlay(
    "WaterBalloonFights",
    "Petar Petarson",
    "Dimitur Kostov"
  )
);

console.log(summerCamp.toString());
