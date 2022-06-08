function solve() {
  let recipient = document.getElementById("recipientName");
  let title = document.getElementById("title");
  let text = document.getElementById("message");
  document.getElementById("add").addEventListener("click", add);
  document.getElementById("reset").addEventListener("click", reset);

  let ulDivMails = document.getElementById("list");
  let ulTrash = Array.from(document.getElementsByClassName("delete-list"))[0];
  let ulSentList = Array.from(document.getElementsByClassName("sent-list"))[0];


  function add(event) {
    if (
      recipient.value.length > 0 &&
      title.value.length > 0 &&
      text.value.length > 0
    ) {
      let liE = document.createElement("li");

      ulDivMails.appendChild(liE);
      let h4Title = document.createElement("h4");
      h4Title.textContent = `Title: ${title.value}`;
      liE.appendChild(h4Title);

      let h4Recipient = document.createElement("h4");
      h4Recipient.textContent = `Recipient Name: ${recipient.value}`;
      liE.appendChild(h4Recipient);

      let spanText = document.createElement("span");
      spanText.textContent = text.value;
      liE.appendChild(spanText);

      let divElement = document.createElement("div");
      divElement.id = "list-action";
      liE.appendChild(divElement);

      let buttonInDiv = document.createElement("button");
      buttonInDiv.type = "submit";
      buttonInDiv.id = "send";
      buttonInDiv.textContent = "Send";
      divElement.appendChild(buttonInDiv);
      buttonInDiv.addEventListener("click", () => {
        let li = document.createElement("li");
        let spanRecepient = document.createElement("span");
        spanRecepient.textContent = `To: ${recipient.value}`;
        li.appendChild(spanRecepient);

        let spanRecepient1 = document.createElement("span");
        spanRecepient1.textContent = `Title: ${title.value}`;
        li.appendChild(spanRecepient1);

        let divElement = document.createElement("div");
        divElement.className = "btn";
        li.appendChild(divElement);

        let buttonDelete = document.createElement("button");
        buttonDelete.type = "submit";
        buttonDelete.className = "delete";
        buttonDelete.textContent = "Delete";
        divElement.appendChild(buttonDelete);
        ulDivMails.removeChild(liE);
        buttonDelete.addEventListener("click", (e) => {
          let liElement = document.createElement("li");
          ulTrash.appendChild(liElement);
          let spanElementus = document.createElement("span");
          spanElementus.textContent = `To: ${recipient.value}`;
          liElement.appendChild(spanElementus);
          let spanElementus1 = document.createElement("span");
          spanElementus1.textContent = `Title: ${title.value}`;
          liElement.appendChild(spanElementus1);
          ulSentList.removeChild(li);
        });
        ulSentList.appendChild(li);
      });

      let buttonInDiv1 = document.createElement("button");
      buttonInDiv1.type = "submit";
      buttonInDiv1.id = "delete";
      buttonInDiv1.textContent = "Delete";
      divElement.appendChild(buttonInDiv1);
      buttonInDiv1.addEventListener("click", () => {
        let liElement = document.createElement("li");
        ulTrash.appendChild(liElement);
        let spanElementus = document.createElement("span");
        spanElementus.textContent = `To: ${recipient.value}`;
        liElement.appendChild(spanElementus);
        let spanElementus1 = document.createElement("span");
        spanElementus1.textContent = `Title: ${title.value}`;
        liElement.appendChild(spanElementus1);
        ulDivMails.removeChild(liE);
      });

      event.preventDefault();
    }
    title.value = "";
    recipient.value = "";
    text.value = "";
  }

  function reset(event) {
    title.value = "";
    recipient.value = "";
    text.value = "";
    event.preventDefault();
  }
}
solve();
