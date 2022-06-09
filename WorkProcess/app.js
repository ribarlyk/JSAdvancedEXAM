function solve() {
  const firstname = getIds("fname");
  const lastname = getIds("lname");
  const email = getIds("email");
  const birth = getIds("birth");
  const position = getIds("position");
  const salary = getIds("salary");
  getIds("add-worker").addEventListener("click", add);

  const tBodyContent = document.getElementById("tbody");
  

  let sumSpan = getIds("sum");
  let totalSum = 0;

  function createElement(type, contentText, nameClass) {
    let element = document.createElement(type);
    if (type === "button") {
      element = document.createElement(type);
      element.className = nameClass;
      element.textContent = contentText;
    } else {
      element = document.createElement(type);
      element.textContent = contentText;
    }
    return element;
  }

  function add(e) {
    e.preventDefault();
    if (
      firstname.value.length > 0 &&
      lastname.value.length > 0 &&
      email.value.length > 0 &&
      birth.value.length > 0 &&
      position.value.length > 0 &&
      salary.value.length > 0
    ) {
      const trElement = createElement("tr");
      tBodyContent.appendChild(trElement);

      const tdFirstName = createElement("td", firstname.value);
      trElement.appendChild(tdFirstName);

      const tdLastName = createElement("td", lastname.value);
      trElement.appendChild(tdLastName);

      const tdEmail = createElement("td", email.value);
      trElement.appendChild(tdEmail);

      const tdBirthDate = createElement("td", birth.value);
      trElement.appendChild(tdBirthDate);

      const tdPosition = createElement("td", position.value);
      trElement.appendChild(tdPosition);

      const tdSalary = createElement("td", salary.value);
      trElement.appendChild(tdSalary);

      const tdForBtns = createElement("td");
      trElement.appendChild(tdForBtns);

      const firedBtn = createElement("button", "Fired", "fired");
      firedBtn.addEventListener("click", (e) => {
        trElement.remove()
        totalSum -= Number(tdSalary.textContent);
        sumSpan.textContent = totalSum.toFixed(2);

        e.preventDefault();
      });
      tdForBtns.appendChild(firedBtn);

      const editBtn = createElement("button", "Edit", "edit");
      editBtn.addEventListener("click", (e) => {
        firstname.value = tdFirstName.textContent;
        lastname.value = tdLastName.textContent;
        email.value = tdEmail.textContent;
        birth.value = tdBirthDate.textContent;
        position.value = tdPosition.textContent;
        salary.value = tdSalary.textContent;

        trElement.remove()
        totalSum -= Number(salary.value);
        console.log(totalSum);
        sumSpan.textContent = totalSum.toFixed(2);
        console.log(sumSpan.textContent);

        e.preventDefault();
      });
      tdForBtns.appendChild(editBtn);

      totalSum += Number(tdSalary.textContent);
      sumSpan.textContent = totalSum.toFixed(2);
      firstname.value = "";
      lastname.value = "";
      email.value = "";
      birth.value = "";
      position.value = "";
      salary.value = "";
    } else {
      return;
    }
  }

  function getIds(id) {
    return document.getElementById(id);
  }
}
solve();
