const input= document.querySelector(".inp")
const clickbtn= document.querySelector(".click")
const lis= document.querySelector(".lis")


clickbtn.addEventListener('click', function(){
  let paragraph = document.createElement('p');
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = input.value;
  lis.appendChild(paragraph);
  input.value = "";
  paragraph.addEventListener('click', function(){
      paragraph.style.textDecoration = "line-through";
  })
  paragraph.addEventListener('dblclick', function(){
      lis.removeChild(paragraph);
  })
})