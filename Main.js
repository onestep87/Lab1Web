let table_3 = document.getElementById("aside1");
let table_6 = document.getElementById("aside3");
let table_5 = document.getElementById("article");
let table_7 = document.getElementById("story");
let boxThreeContainer = document.getElementById("task-three")
var cout = 0;
var sw_cou = 2;
//1-st task
table_3.onclick = function(event){
    Swarp();
}
table_6.onclick = function(event){
    Swarp();
}
function Swarp(){
    sw_cou++;
    let n3_container = document.getElementById("aside1");
    let n3_content = document.getElementById("aside1").innerHTML;
    let n6_container = document.getElementById("aside3");
    let n6_content = document.getElementById("aside3").innerHTML;
    let temp_content = n3_content;
    n3_container.innerHTML=n6_content;
    n6_container.innerHTML=temp_content;

    if(sw_cou%2==1)
    {
        n3_container.style.overflow = "auto";
        let nones = document.getElementById("1").childNodes[3];
        nones.style.fontSize="14px";
    }
    else{
        n3_container.style.overflow = "hidden";
        let nones = document.getElementById("aside3").childNodes[3];
        console.log(nones);
        nones.style.fontSize="16px";
    }    
}
//Task 2
table_7.childNodes[1].onclick = function(event){
    if(cout<5)
    {
        FindArea();
    }
    else{
        alert("stop it!");
    }
}
function FindArea() {
    cout++;
	let s = 4;
    let n = 5;
    let area = (Math.pow(s,2) * Math.sqrt (25 + 10 * Math.sqrt(5)))/4;
    var tag = document.createElement("li");
    var local_text ="s="+s+" n="+n+"; S = "+ area.toString();
    //var local_text ="a="+a+" b="+b+", h="+h+"; S = "+ result.toString();
    var text = document.createTextNode(local_text);
    tag.appendChild(text);
    var element = document.getElementById("article").childNodes[1];
    element.appendChild(tag);    
}
//Task 3
function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function deleteCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function reverseString(str) {
    return str.split("").reverse().join("");
}

function getElementById(parentContainer, elementId) {
    let elm = {};
    let elms = parentContainer.getElementsByTagName("*");
    for (var i = 0; i < elms.length; i++) {
        if (elms[i].id === elementId) {
            elm = elms[i];
            break;
        }
    }
    return elm;
}

function drawTaskThreeInput(condition) {
    if (condition) {
        getElementById(boxThreeContainer, "task-three").style.display = "block";
    }
    else {
        getElementById(boxThreeContainer, "task-three");
    }
}

// deleteCookie("reversed_text");

if (document.cookie != "") {
    if (getCookie("reversed_text") != undefined) {
        drawTaskThreeInput(false);
    }

    let cookieDesision = window.confirm("Your current cookies are: \n" + document.cookie + "\nDo you want to keep them?");

    if (!cookieDesision) {
        let cookies = document.cookie.split(";");

        for (var i = 0; i < cookies.length; i++) {
            let cookieName = cookies[i].split("=")[0];
            deleteCookie(cookieName);
        }

        drawTaskThreeInput(true);
    }
}
else {
    window.alert("You dont have any cookies!");
}

function taskThree() {
    let input = boxThreeContainer.getElementsByTagName('input')[0];
    let text = input.value;

    let reversedText = reverseString(text);

    let decision = window.confirm("Reversed text: " + reversedText + "\nDo you want to save this to cookies?");

    if (decision) {
        setCookie("reversed_text", reversedText,1);
        drawTaskThreeInput(false);
    }
} 