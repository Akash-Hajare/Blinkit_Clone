const langList=document.getElementById("list-items");
const lists = document.getElementById("langOpt");
const menu=document.getElementById("menu");

function displayList(){
    let currentStatus=window.getComputedStyle(langList).getPropertyValue("display");
    if(currentStatus === "block" )
        langList.style.display="none";
    else langList.style.display="block";

}

function changeLang(){
    let selectedLanguage = event.target.textContent;
    let currentLang= document.getElementById("currentLang").innerText;
    event.target.textContent=currentLang;
    document.getElementById("currentLang").innerText=selectedLanguage;
}

function displayMenu(){
    let currentStatusofMenu=window.getComputedStyle(menu).getPropertyValue("display");
    if(currentStatusofMenu == "none")
      menu.style.display="block";
    else 
    menu.style.display="none";
}

function closeMenu(){
    menu.style.display="none";
}