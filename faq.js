
// function displayMenu(){
//     const section = document.getElementById("quetion-menu");
//     const displayValue = window.getComputedStyle(section).getPropertyValue("display");
//     console.log(displayValue);
//     if(displayValue === "block")
//            section.style.display="none";
//      else 
//      section.style.display="block";      
// }
// function toggleMenu(question) {
//     var menu = question.nextElementSibling;
//     question.classList.toggle("question-menu");
//     menu.classList.toggle("question-menu");
// }

function toggleMenu(question) {
    var menu = question.nextElementSibling;
    var symbol = question.querySelector('.material-symbols-outlined');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        symbol.innerHTML = 'arrow_drop_down';
    } else {
        menu.style.display = 'block';
        symbol.innerHTML = 'arrow_drop_up';
    }
}
