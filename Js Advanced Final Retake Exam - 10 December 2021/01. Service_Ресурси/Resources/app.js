window.addEventListener("load", solve);

function solve() {
  document
    .querySelector("#right form button")
    .addEventListener("click", sendForm);
  const textArea = document.getElementById("description");
  const clientName = document.getElementById("client-name");
  const clientPhone = document.getElementById("client-phone");
  const receivedElement = document.getElementById("received-orders");
  const completedOrders = document.getElementById("completed-orders");

  document.querySelector(".clear-btn").addEventListener("click", () => {
    const divContainer = Array.from(
      document.querySelectorAll("#completed-orders div")
    );
    divContainer.forEach((el) => completedOrders.removeChild(el));
  });


  function sendForm(e) {
    e.preventDefault();
    if (
      clientName.value.length > 0 &&
      clientPhone.value.length > 0 &&
      textArea.value.length > 0
    ) {
      let name = clientName.value;
      let client = clientPhone.value;
      let description = textArea.value;

      const dropDown = document.getElementById("type-product");
      const dropDownOption = dropDown.options[dropDown.selectedIndex].text;
      const h2 = document.createElement("h2");
      const h3 = document.createElement("h3");
      const h4 = document.createElement("h4");
      const startButton = document.createElement("button");
      const finishButton = document.createElement("button");

      const div = document.createElement("div");
      div.classList = "container";
      receivedElement.appendChild(div);

      h2.textContent = `Product type for repair: ${dropDownOption}`;
      div.appendChild(h2);

      h3.textContent = `Client information: ${clientName.value}, ${clientPhone.value}`;
      div.appendChild(h3);

      h4.textContent = `Description of the problem: ${textArea.value}`;
      div.appendChild(h4);

      startButton.textContent = "Start Repair";
      startButton.classList = "start-btn";
      div.appendChild(startButton).addEventListener("click", () => {
        startButton.disabled = true;
        finishButton.disabled = false;
      });

      finishButton.textContent = "Finish Repair";
      finishButton.classList = "finish-btn";
      finishButton.disabled = true;
      div.appendChild(finishButton).addEventListener("click", () => {
        startButton.disabled = true;
        finishButton.disabled = true;
        receivedElement.removeChild(div);
        startButton.disabled = false;
        finishButton.disabled = false;
        const div1 = document.createElement("div");
        div1.classList = "container";
        completedOrders.appendChild(div1);

        h2.textContent = `Product type for repair: ${dropDownOption}`;
        div1.appendChild(h2);

        h3.textContent = `Client information: ${name},${client}`;
        div1.appendChild(h3);

        h4.textContent = `Description of the problem: ${description}`;
        div1.appendChild(h4);
});

      clientName.value = "";
      clientPhone.value = "";
      textArea.value = "";
    }
  }
}
