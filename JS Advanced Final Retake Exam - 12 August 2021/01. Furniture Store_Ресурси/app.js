window.addEventListener("load", solve);

function solve() {
  const model = document.getElementById("model");
  const year = document.getElementById("year");
  const description = document.getElementById("description");
  const price = document.getElementById("price");
  document.getElementById("add").addEventListener("click", addToTable);
  const furnitureList = document.getElementById("furniture-list");

  
  function addToTable(e) {
    e.preventDefault();
    let modelText = model.value;
    let yearText = year.value;
    let descriptionText = description.value;
    let priceText = price.value;
    if (
      modelText != "" &&
      descriptionText != "" &&
      priceText > 0 &&
      yearText > 0
    ) {
      let trElement = create("tr");
      trElement.className = "info";

      let tdOne = create("td");
      tdOne.textContent = modelText;
      trElement.appendChild(tdOne);
      let tdTwo = create("td");

      tdTwo.textContent = Number(priceText).toFixed(2);

      trElement.appendChild(tdTwo);
      let tdThree = create("td");
      trElement.appendChild(tdThree);
      let moreBtn = create("button");
      moreBtn.classList = "moreBtn";
      moreBtn.textContent = "More Info";
      moreBtn.addEventListener("click", (e) => {
        moreBtn.textContent = "Less Info";
        secondTrElement.style.display = "contents";
        moreBtn.addEventListener("click", () => {
          //Да се пита това добра практика ли е?
          moreBtn.textContent = "More Info";
          secondTrElement.style.display = "none";
        });
      });

      tdThree.appendChild(moreBtn);
      let buyBtn = create("button");
      buyBtn.classList = "buyBtn";
      buyBtn.textContent = "Buy it";
      buyBtn.addEventListener("click", () => {
        trElement.remove();
        secondTrElement.remove();
        let totalPrice = document.querySelector(".total-price");
        totalPrice.textContent = (
          Number(totalPrice.textContent) + Number(priceText)
        ).toFixed(2);
      });
      tdThree.appendChild(buyBtn);
      furnitureList.appendChild(trElement);

      let secondTrElement = create("tr");
      secondTrElement.className = "hide";
      let tdFour = create("td");
      tdFour.textContent = `Year: ${yearText}`;
      secondTrElement.appendChild(tdFour);
      let tdFive = create("td");
      tdFive.colSpan = 3;
      tdFive.textContent = `Description: ${descriptionText}`;
      secondTrElement.appendChild(tdFive);
      furnitureList.appendChild(secondTrElement);
    }
    model.value = "";
    year.value = "";
    description.value = "";
    price.value = "";
  }

  function create(type) {
    let element = document.createElement(type);

    return element;
  }
}
