window.addEventListener("load", solve);

function solve() {
  const make = document.getElementById("make");
  const model = document.getElementById("model");
  const year = document.getElementById("year");
  const fuel = document.getElementById("fuel");
  const originalCost = document.getElementById("original-cost");
  const sellingPrice = document.getElementById("selling-price");
  document.getElementById("publish").addEventListener("click", onPublish);
  const tableBody = document.getElementById("table-body");
  const carsList = document.getElementById("cars-list");
  const profit = document.getElementById("profit");

  function onPublish(e) {
    e.preventDefault();
    let makeText = make.value;
    let modelText = model.value;
    let yearText = year.value;
    let fuelText = fuel.value;
    let sellingPriceText = sellingPrice.value
    let originalCostText = originalCost.value
    if (
      make.value === "" ||
      model.value === "" ||
      year.value === "" ||
      fuel.value === "" ||
      Number(sellingPriceText)< Number(originalCostText)
    ) {
      return;
    }

    make.value = "";
    model.value = "";
    year.value = "";
    fuel.value = "";
    sellingPrice.value = "";
    originalCost.value = "";

    let trElement = createEl("tr");
    trElement.classList = "row";
    let tdElement1 = createEl("td");
    tdElement1.textContent = makeText;
    let tdElement2 = createEl("td");
    tdElement2.textContent = modelText;

    let tdElement3 = createEl("td");
    tdElement3.textContent = yearText;

    let tdElement4 = createEl("td");
    tdElement4.textContent = fuelText;

    let tdElement5 = createEl("td");
    tdElement5.textContent = originalCostText;

    let tdElement6 = createEl("td");
    tdElement6.textContent = sellingPriceText;

    let tdElement7 = createEl("td");
    let actnBtn = createEl("button");
    actnBtn.classList = "action-btn edit";
    actnBtn.textContent = "Edit";
    actnBtn.addEventListener("click", function edit() {
      make.value = tdElement1.textContent;
      model.value = tdElement2.textContent;
      year.value = tdElement3.textContent;
      fuel.value = tdElement4.textContent;
      sellingPrice.value = tdElement6.textContent;
      originalCost.value = tdElement5.textContent;

      tableBody.removeChild(trElement);
    });
   
    let sellBtn = createEl("button");
    sellBtn.addEventListener("click", function sell()  {
      let liElement = createEl("li");
      liElement.classList = "each-list";
      let span1 = createEl("span");
      span1.textContent = `${tdElement1.textContent} ${tdElement2.textContent}`;
      let span2 = createEl("span");
      span2.textContent = tdElement3.textContent;
      let span3 = createEl("span");
      let diff =
        Number(tdElement6.textContent) - Number(tdElement5.textContent);
      span3.textContent = `${diff}`;
      liElement.appendChild(span1);
      liElement.appendChild(span2);
      liElement.appendChild(span3);
      carsList.appendChild(liElement);

      
      profit.textContent = (Number(profit.textContent) + Number(diff)).toFixed(
        2
      );

      tableBody.removeChild(trElement);
    });

    sellBtn.classList = "action-btn sell";
    sellBtn.textContent = "Sell";

    trElement.appendChild(tdElement1);
    trElement.appendChild(tdElement2);
    trElement.appendChild(tdElement3);
    trElement.appendChild(tdElement4);
    trElement.appendChild(tdElement5);
    trElement.appendChild(tdElement6);
    tdElement7.appendChild(actnBtn);
    tdElement7.appendChild(sellBtn);
    trElement.appendChild(tdElement7);

    tableBody.appendChild(trElement);
  }

  function createEl(type) {
    let element = document.createElement(type);

    return element;
  }
}
