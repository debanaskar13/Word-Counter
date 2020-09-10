
document.querySelector('#stats').addEventListener('click',function(){
    let userInput=document.querySelector('#user_input').value;
    let numCharacters = userInput.length;
    let numWords = userInput.split(' ').length;
    document.querySelector('#characters').textContent=numCharacters;
    document.querySelector('#words').textContent=numWords;
    document.querySelector('#user_input').value='';

})