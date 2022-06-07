window.addEventListener("load", solve);

function solve() {
  let title = document.querySelector("#post-title");

  let category = document.querySelector("#post-category");

  let content = document.querySelector("#post-content");

  document.querySelector("#publish-btn").addEventListener("click", publish);
  let ulElement = document.getElementById("review-list");
  let clearButton = document
    .getElementById("clear-btn")
    .addEventListener("click", clear);
  function publish() {
    if (
      title.value.length > 0 &&
      content.value.length > 0 &&
      category.value.length > 0
    ) {
      let liElement = document.createElement("li");
      liElement.className = "rpost";
      let articleElement = document.createElement("article");
      liElement.appendChild(articleElement);
      let h4Element = document.createElement("h4");
      h4Element.textContent = title.value;
      articleElement.appendChild(h4Element);
      let pCategory = document.createElement("p");
      pCategory.textContent = `Category: ${category.value}`;
      articleElement.appendChild(pCategory);
      let pContent = document.createElement("p");
      pContent.textContent = `Content: ${content.value}`;
      articleElement.appendChild(pContent);
      let editButton = document.createElement("button");

      editButton.className = "action-btn edit";
      editButton.textContent = "Edit";
      liElement.appendChild(editButton);
      editButton.addEventListener("click", edit);
      let approveButton = document.createElement("button");

      approveButton.className = "action-btn approve";
      approveButton.textContent = "Approve";
      liElement.appendChild(approveButton);
      approveButton.addEventListener("click", approve);
      ulElement.appendChild(liElement);
      title.value = "";
      category.value = "";
      content.value = "";
    }
  }
  function edit() {
    let liElement = document.querySelector(".rpost");
    let h4Element = document.getElementsByTagName("h4")[0];

    let pCategory = document.querySelector("article p");

    let pContent = document.querySelector("article p:nth-child(3)");

    title.value = h4Element.textContent;
    let splitted = pCategory.textContent.split("Category: ");
    category.value = splitted[1];
    let splitted1 = pContent.textContent.split("Content: ");

    content.value = splitted1[1];

    ulElement.removeChild(liElement);
  }
  function approve() {
    let publishedList = document.getElementById("published-list");
    let liElement = document.querySelector(".rpost");
    let [editButton, approveButton] =
      document.querySelectorAll(".rpost button");

    publishedList.appendChild(liElement);
    liElement.removeChild(editButton);
    liElement.removeChild(approveButton);
  }
  function clear() {
    let ulElement = document.querySelector("#published-list");
    let parent = Array.from(ulElement.children);

    parent.forEach((el) => ulElement.removeChild(el));
  }
}
