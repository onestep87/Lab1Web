let table_3 = document.getElementById("aside1");
let table_6 = document.getElementById("aside3");
let table_5 = document.getElementById("article");
let table_7 = document.getElementById("story");
let boxThreeContainer = document.getElementById("task-three")
let boxOneContainer = document.getElementsByClassName('subcontainer')[0];
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
// Task 4
document.querySelector('.top-left').addEventListener('blur', () =>  {
    applyAndSaveColor()
})

document.querySelector('.top-left').style.borderColor =
    localStorage.getItem('t4-color') ?? document.querySelector('.top-left').style.borderColor

function applyAndSaveColor() {
    let color = document.querySelector('#t4-color-selector').value
    
    document.getElementById("aside1").style.borderColor = color
    document.getElementById("aside3").style.borderColor = color
    document.getElementById("subcontainer").style.borderColor = color
    localStorage.setItem('t4-color', color)
}
//Task 5
function task5() {
    let selectText = document.createElement("p")
    selectText.innerText = "Menu: "
    
    let enterTagInput = document.createElement("input")
    enterTagInput.setAttribute("class", "input-tag")
    
    center = document.getElementById("story")
    center.appendChild(document.createElement("br"))
    center.appendChild(document.createElement("br"))
    
    let enterTagLabel = document.createElement("p")
    enterTagLabel.innerText = "Enter tag and stylesheet: "
    center.appendChild(enterTagLabel)
    center.appendChild(enterTagInput)

    // add area to enter the text
    center.appendChild(document.createElement("br"))
    let styleText = document.createElement("textarea")
    styleText.setAttribute("class", "style-sheet-text")
    styleText.setAttribute("cols", "40")
    styleText.setAttribute("rows", "10")
    center.appendChild(styleText)

    // set button to set style
    center.appendChild(document.createElement("br"))
    let setBtn = document.createElement("button")
    setBtn.innerText = "set"
    setBtn.onclick = () => {
        let tag = document.querySelector('.input-tag').value;
        let styles = document.querySelector(".style-sheet-text").value

        if(tag != "" && styles != "") {
            // get arr from storage
            let arr = []
            if(window.localStorage.getItem("tags") != "" && window.localStorage.getItem("tags") != undefined) {
                arr = JSON.parse(window.localStorage["tags"])
            } else {
                arr = []
            }
            
            // push to arr new elem or not push if it exists
            if(!arr.includes(tag)) {
                arr.push(tag)
            }
            window.localStorage.setItem("tags", JSON.stringify(arr))
            
            // save new styles in storage
            window.localStorage.setItem(tag, styles);

            // set new styles
            let elems = document.getElementsByTagName(tag)
            for (let i = 0; i < elems.length; i++) {
                elems[i].style.cssText = styles
            }
        }

        console.log(tag)
    }
    center.appendChild(setBtn)

    let clearBtn = document.createElement("button")
    clearBtn.innerText = "clear"
    clearBtn.onclick = () => {
        let tag = document.querySelector('.input-tag').value;
        let styles = document.querySelector(".style-sheet-text").value


        let arr = []
        if(window.localStorage["tags"] != "" && window.localStorage["tags"] != undefined) {
            arr = JSON.parse(window.localStorage["tags"])
        } else {
            arr = []
        }
        
        // clear here styles
        for(let i = 0; i < arr.length; i++) {
            let tag = arr[i]
            window.localStorage.removeItem(tag)
            
            let elems = document.getElementsByTagName(tag)
            for (let i = 0; i < elems.length; i++) {
                elems[i].style.cssText = ""
            }
        }
        arr = []

        location.reload()
    }
    center.appendChild(clearBtn)
}