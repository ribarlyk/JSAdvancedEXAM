window.addEventListener("load", solution);

function solution() {
  const firstName = document.getElementById("fname");
  const email = document.getElementById("email");
  const phoneNumber = document.getElementById("phone");
  const address = document.getElementById("address");
  const postalCode = document.getElementById("code");
  const infoPreview = document.getElementById("infoPreview");
  const divBlock = document.getElementById("block");

  document.querySelector("#submitBTN").addEventListener("click", submitData);
  const edit1Btn = document.querySelector("#editBTN");
  const continueBtn = document.querySelector("#continueBTN");
  edit1Btn.disabled = true;
  continueBtn.disabled = true;

  function submitData() {
    let first = firstName.value;
    let mail = email.value;
    let phone = phoneNumber.value;
    let adresLine = address.value;
    let post = postalCode.value;

    if (first.length < 1  || mail.length <1 ) {
      return;
    }

    const liOne = createEl("li");
    const liTwo = createEl("li");
    const liThree = createEl("li");
    const liFour = createEl("li");
    const liFive = createEl("li");

    liOne.textContent = `Full Name: ${first}`;
    liTwo.textContent = `Email: ${mail}`;
    liThree.textContent = `Phone Number: ${phone}`;
    liFour.textContent = `Address: ${adresLine}`;
    liFive.textContent = `Postal Code: ${post}`;

    infoPreview.appendChild(liOne);
    infoPreview.appendChild(liTwo);
    infoPreview.appendChild(liThree);
    infoPreview.appendChild(liFour);
    infoPreview.appendChild(liFive);

    let subBtn = document.querySelector("#submitBTN");

    edit1Btn.addEventListener("click", () => {
      subBtn.disabled = false;
      edit1Btn.disabled = true;
      continueBtn.disabled = true;

      firstName.value = first;
      email.value = mail;
      phoneNumber.value = phone;
      address.value = adresLine;
      postalCode.value = post;

      infoPreview.innerHTML = "";
    });

    continueBtn.addEventListener("click", () => {
      divBlock.innerHTML = "<h3>Thank You For Your Reservation!</h3>";
    });

    subBtn.disabled = true;

    firstName.value = "";
    email.value = "";
    phoneNumber.value = "";
    address.value = "";
    postalCode.value = "";

    edit1Btn.disabled = false;
    continueBtn.disabled = false;
  }
  function createEl(type) {
    let element = document.createElement(type);
    return element;
  }
}
