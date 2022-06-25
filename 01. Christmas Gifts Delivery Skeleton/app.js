function solution() {
  const addGift = document.querySelector('.card div input');
  const addButton = document.querySelector('.card div button').addEventListener('click' , parseToList);
  let arr = []
  const ulList = document.getElementsByTagName('ul')[0];
  const ulSent = document.getElementsByTagName('ul')[1];
  const ulDiscrad = document.getElementsByTagName('ul')[2];
  
  function parseToList(){
      let gift =  addGift.value
      const giftClass = Array.from(document.getElementsByClassName('gift').textContent).sort((a,b)=> a.localCompare(b))
      
     
      addGift.value = '';
  
   let ulElOne = createEl('li','gift');
   ulElOne.textContent += gift
   
   
   let sendBtn = createEl('button','sendButton');
   sendBtn.textContent = 'Send';

   let discardBtn = createEl('button','discardButton');
   discardBtn.textContent = 'Discard'

ulElOne.appendChild(sendBtn)

ulElOne.appendChild(discardBtn)


ulList.appendChild(ulElOne)



   
  }


  function createEl(type,cla){
let element = document.createElement(type)
element.classList = cla
return element;
  }
}