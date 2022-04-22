let latinbutt;
let enlgishbutt;
let input;



window.onload = init;

function init()
{   
    console.log("starting");

    /*
        Set up varaibles
    */
    
    latinbutt = document.getElementById("latinbutt");
    englishbutt = document.getElementById("englishbutt");
    input = document.getElementById("input");

    /*
        Remove ghostery tag
    */

    styles = document.getElementsByTagName("style")

    for (let i=0; i<styles.length;i++){
        if (styles[i].innerHTML == '@media print {#ghostery-tracker-tally {display:none !important}}'){
            styles[i].remove()
            console.log("removed")
        }
    }

    /*
        Add event listeners
    */

    latinbutt.addEventListener("click", searchLatin);
    englishbutt.addEventListener("click", searchEnglish);
    input.addEventListener("keypress", function (e) {if (e.key === "Enter") searchLatin();});
    input.addEventListener("keypress", function (e) {if (input.value != '') input.placeholder = "Write Words!"}) ;
    
}

function searchLatin()
{   
    if (input.value == ''){
        input.classList.add("error");
        input.placeholder = "Please type something!";
        input.addEventListener("animationend", () => {input.classList.remove("error")});
        return;
    }
    latinbutt.classList.add("mright");
    englishbutt.classList.add("mfarRight");
    latinbutt.addEventListener("animationend", () => {
    window.location.href = "http://archives.nd.edu/cgi-bin/wordz.pl?keyword=" + input.value;
    })
    
}

function searchEnglish()
{
    if (input.value == ''){
        input.classList.add("error");
        input.placeholder = "Please type something!";
        input.addEventListener("animationend", () => {input.classList.remove("error")});
        return;
    }

    englishbutt.classList.add("mleft");
    latinbutt.classList.add("mfarLeft");
    englishbutt.addEventListener("animationend", () => {
        window.location.href = "http://archives.nd.edu/cgi-bin/wordz.pl?english=" + input.value;
        })
}
