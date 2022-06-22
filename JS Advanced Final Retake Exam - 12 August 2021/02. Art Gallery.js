class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }
  addArticle(articleModel, articleName, quantity) {
    articleModel = articleModel.toLowerCase();
    if (!this.possibleArticles[articleModel]) {
      throw new Error("This article model is not included in this gallery!");
    }
    let targetName = this.listOfArticles.find(
      (el) => el.articleName === articleName
    );

    if (targetName && targetName.articleModel === articleModel) {
      targetName.quantity += Number(quantity);
    } else {
      this.listOfArticles.push({ articleModel, articleName, quantity });
    }
    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
  }
  inviteGuest(guestName, personality) {
    let personalities = {
      Vip: 500,
      Middle: 250,
      Normal: 50,
    };
    let targetName = this.guests.find((el) => el.guestName === guestName);
    if (targetName) {
      throw new Error(`${guestName} has already been invited.`);
    }
    this.guests.push({
      guestName,
      points: personalities[personality],
      purchaseArticle: 0,
    });
    return `You have successfully invited ${guestName}!`;
  }
  buyArticle(articleModel, articleName, guestName) {
    let targetName = this.listOfArticles.find(
      (el) => el.articleName === articleName
    );

    if (targetName === undefined || targetName.articleModel != articleModel) {
      throw new Error('"This article is not found."');
    }

    if (targetName.quantity === 0) {
      return `The ${articleName} is not available.`;
    }
    let targetGuest = this.guests.find((el) => el.guestName === guestName);

    if (!targetGuest) {
      return "This guest is not invited.";
    }

    if (this.possibleArticles[articleModel] <= targetGuest.points) {
      targetGuest.points -= this.possibleArticles[articleModel];
      targetName.quantity--;
      targetGuest.purchaseArticle++;
      return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
    } else {
      return `You need to more points to purchase the article.`;
    }
    
  }
  showGalleryInfo(criteria) {
    if (criteria === "article") {
      let header = "Articles information:\n";
      header += this.listOfArticles
        .map((el) => `${el.articleModel} - ${el.articleName} - ${el.quantity}`)
        .join("\n");
      return header;
    } else if (criteria === "guest") {
      let header = "Guests information:\n";
      header += this.guests
        .map((el) => `${el.guestName} - ${el.purchaseArticle}`)
        .join("\n");
      return header;
    }
  }
}
const artGallery = new ArtGallery("Curtis Mayfield");
console.log(artGallery.addArticle("picture", "Mona Liza", 3));
console.log(artGallery.addArticle("Item", "Ancient vase", 0));
console.log(artGallery.addArticle("picture", "Mona Liza", 1));
console.log(artGallery.inviteGuest("John", "Vip"));
console.log(artGallery.inviteGuest("Peter", "Middle"));
console.log(artGallery.buyArticle("picture", "Mona Liza", "John"));
console.log(artGallery.buyArticle("item", "Ancient vase", "Peter"));
console.log(artGallery.showGalleryInfo("article"));
console.log(artGallery.showGalleryInfo("guest"));
