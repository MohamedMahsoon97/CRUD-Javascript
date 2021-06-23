// find all elements
const studentData = document.getElementById("students-data");
const myInputs = document.querySelectorAll("input");
const yourId = document.getElementById("id-inp");
const firstName = document.getElementById("firstName-inp");
const lastName = document.getElementById("lastName-inp");
const yourAge = document.getElementById("age-inp");
const btnFun = document.getElementById("cls-btn");
const btnClear = document.querySelector(".cls-btn button");
const students = document.querySelector("#students tbody");
const myAlert = document.getElementById("sweet-alert");
const myAlertBtn = document.getElementById("hide-sweet");

stdArr = []; // array empty

// this function add Object of Array
studentData.onsubmit = function(e) {
    e.preventDefault();
    function MyData(yourId , firstName , lastName , yourAge){
        this.yourId = yourId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.yourAge = yourAge;
    }       
    const student = new MyData(yourId.value , firstName.value , lastName.value , yourAge.value);

    // var student = {
    //     yourId : yourId.value,
    //     firstName : firstName.value,
    //     lastName : lastName.value,
    //     yourAge : yourAge.value
    // }
    stdArr.push(student);

    if (yourId.value = '' || firstName.value == '' || lastName.value == '' || yourAge.value == '') {
        myAlert.style.display = 'flex';
        myAlertBtn.onclick = function(){
            myAlert.style.display = 'none';
        }
    } 
    else
    {
    students.innerHTML +=
    `
        <tr>
            <td>${student.yourId}</td>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.yourAge}</td>
            <td><i class="fa fa-trash" onclick="DeleteStudents()"></i></td>
        </tr>
    `
    // clearInput();
    }
    if(stdArr.length == 1){
        showBtnClearAll();
    }
};

// this function to clear input value
clearInput = () => {
    yourId.value = '';
    firstName.value = '';
    lastName.value = '';
    yourAge.value = '';
};

// this function to delete one student
function DeleteStudents(){
    document.querySelector("#students tbody tr").remove();
};

// this function to delete all students
showBtnClearAll = () => {
    var btn = document.createElement("button");
    var btnText = document.createTextNode("Clear All Students");
    btn.appendChild(btnText);
    btn.className = 'btn-cls';
    btnFun.appendChild(btn);
    btnAttr = document.createAttribute("onclick");
    btnAttr.value = 'BtnClearAll()';
    btn.setAttributeNode(btnAttr);
};

// this function to delete clear All button
BtnClearAll = () => {
    document.querySelector("#students tbody").remove();
};