const app = new function(){

    this.myAllData = document.getElementById("product");  // tbody => the container stored data
    this.product = [];  // Array empty

    // method use to fetch my elements
    this.FetchAll = function(){
        let data = ''; // data is a variable empty
        if (this.product.length > 0) {
            for (let i = 0; i < this.product.length; i++) {
                data +=
                `
                    <tr>
                        <td>${i + 1} - ${this.product[i][0]}</td>
                        <td>${this.product[i][1]}</td>
                        <td><i class="fas fa-edit" onclick="app.Edit(${i})" style="color:#3ba720"></i></td>
                        <td><i class="fa fa-trash" onclick="app.Delete(${i})"></i></td>
                    </tr>
                `
            }
        }
        return this.myAllData.innerHTML = data;  // return (add data in myAllData)
    };
    // method use to add products
    this.Add = function(){
        let productName = document.getElementById("prod-inp");
        let productPrice = document.getElementById("price-inp");
        let myValue =  [ productName.value , productPrice.value ];
    
        if(myValue){
            // Add the new value
            this.product.push(myValue);
            // Reset input value
            productName.value = '';
            productPrice.value = '';
            // Dislay the new list
            this.FetchAll();
        }
    };

    // method use to edit in a product
    this.Edit = function(item){
        let ele1 = document.getElementById('edit-todo1');
        let ele2 = document.getElementById('edit-todo2');
        // set value in the field
        ele1.value = this.product[item][0];  // index zero in array => first element
        ele2.value = this.product[item][1];  // index one in array  => second element
        // Display fields
        document.getElementById('edit-data').style.display = 'block';
        self = this;
        document.getElementById("update-edit").onsubmit = function(){
            let myValue =  [ele1.value , ele2.value];
            if (myValue) {
                // Edit value
                self.product.splice(item, 1, myValue);
                // Display the new list
                self.FetchAll();
                // Hide fields
                app.CloseInput();
            }
        }
    };

    // method use to delete  product
    this.Delete = function(item){        // item [index of row]  ==>> first row = [0]
        this.product.splice(item , 1);  // Delete the current row 
        this.FetchAll();
        // console.log(item);
    };
    // method use to close (edit-data) box
    this.CloseInput = function(){
        document.getElementById('edit-data').style.display = 'none';
    }
}

app.FetchAll();  // call method FetchAll()


























// // find all elements
// const studentData = document.getElementById("students-data");
// const yourId = document.getElementById("id-inp");
// const firstName = document.getElementById("firstName-inp");
// const lastName = document.getElementById("lastName-inp");
// const yourAge = document.getElementById("age-inp");
// const addNewStudent = document.getElementById("add-new-student");
// const btnFun = document.getElementById("cls-btn");
// const btnClear = document.querySelector(".cls-btn button");
// const students = document.querySelector("#students tbody");
// const myAlert = document.getElementById("sweet-alert");
// const myAlertBtn = document.getElementById("hide-sweet");

// // stdArr = []; // array empty

// class FetchData {
//     constructor(yourId, firstName, lastName, yourAge) {
//         this.yourId = yourId,
//         this.firstName = firstName,
//         this.lastName = lastName,
//         this.yourAge = yourAge;
//     }
// }

// addNewStudent.addEventListener('click' , function(e){
//     e.preventDefault();
//     if (yourId.value = '' || firstName.value == '' || lastName.value == '' || yourAge.value == '') {
//         myAlert.style.display = 'flex';
//         myAlertBtn.onclick = function(){
//             myAlert.style.display = 'none';
//         }
//     } 
//     else
//     {
//     students.innerHTML +=
//         `
//         <tr>
//             <td>${yourId.value}</td>
//             <td>${firstName.value}</td>
//             <td>${lastName.value}</td>
//             <td>${yourAge.value}</td>
//             <td><i class="fas fa-edit" data-id=""></i></td>
//             <td><i class="fa fa-trash" data-id=""></i></td>
//         </tr>
//         `
//     }
// })









// // this function to clear input value
// clearInput = () => {
//     yourId.value = '';
//     firstName.value = '';
//     lastName.value = '';
//     yourAge.value = '';
// };

// // this function to delete one student from html
// function DeleteStudents(){
//     document.querySelector("#students tbody tr").remove();
// };

// // this function to delete all students
// showBtnClearAll = () => {
//     var btn = document.createElement("button");
//     var btnText = document.createTextNode("Clear All Students");
//     btn.appendChild(btnText);
//     btn.className = 'btn-cls';
//     btnFun.appendChild(btn);
//     btnAttr = document.createAttribute("onclick");
//     btnAttr.value = 'BtnClearAll()';
//     btn.setAttributeNode(btnAttr);
// };

// // this function to delete clear All button
// BtnClearAll = () => {
//     document.querySelector("#students tbody").remove();
// };







// if (yourId.value = '' || firstName.value == '' || lastName.value == '' || yourAge.value == '') {
//         myAlert.style.display = 'flex';
//         myAlertBtn.onclick = function(){
//             myAlert.style.display = 'none';
//         }
//     } 
//     else
//     {
//     students.innerHTML +=
//     `
//         <tr>
//             <td>${yourId}</td>
//             <td>${firstName}</td>
//             <td>${lastName}</td>
//             <td>${yourAge}</td>
//             <td><i class="fas fa-edit Edit" data-id=""></i></td>
//             <td><i class="fa fa-trash delete" data-id=""></i></td>
//         </tr>
//     `
// }