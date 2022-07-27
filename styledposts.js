/*
 * Zijian Su 7/26/2020 
 * hw4 part 4 Style My CRUD javascript
 * Note that export is not necessary in my script, 
 * it just doesn't need to be modified because it works.
 * 
 * Note that since if only some new scripts are added here alone, 
 * there may be part3 and part4 reading the same local storage file 
 * at the same time. So I copied the code of part3 here and modified it.
**/

// This element can be used to store the object of the blog currently to be modified
let edit_elem;

// Read locally stored data and output to the screen
document.getElementById("list").innerHTML = load_data();
// After reading the data, bind events to the edit and delete buttons in the data.
for_loop();

// Custom object(get by id) function, shortening a lot of document.getElementById(id)
export function elem(id){
    let a_elem = document.getElementById(id);
    return a_elem;
}

// show input box
export function show_p(){
    elem("add_dia").show();
}

// show edit box 
export function show_c_p(ed_elem){
    elem("add_c_dia").show();
    edit_elem = ed_elem;
}

/*
 * Add the blog to the screen based on the input string.
 * Also add edit and delete buttons.
 * Note that I am using ul, li.
 * 
 * Note that I used emoji instead of text in button
 * 
 * @param {string} [str]
 * 
**/
export function add_li(str){
    let ulist = elem("list");
    let li = document.createElement("li");
    let btn_edit = document.createElement("button");
    btn_edit.innerHTML = "✏️";
    btn_edit.className = "edit_Btn"
    let btn_dele = document.createElement("button");
    btn_dele.innerHTML = "🗑️";
    btn_dele.className = "dele_Btn";
    li.innerHTML = str ;
    li.appendChild(btn_edit);
    li.appendChild(btn_dele);
    ulist.appendChild(li);
}

/*
 * remove the li element specified in ul
 * input as a ul element
 * 
 * @param {ul} [some_ul]
**/
export function edit_li(ed_elem){
    show_c_p(ed_elem);
}

// Get data from local storage
export function delete_li(some_ul){
    some_ul.parentNode.remove();
}

// Get data from local storage
function load_data() {
    let get_data = JSON.parse(localStorage.getItem('style_list_data')) || {};
    if(get_data == "[object Object]"){
        return "";
    }
    else{
        return get_data;
    }
}

// Store the data locally.
function save_data(str) {
    localStorage.setItem('style_list_data', JSON.stringify(str));
}

// This loop is to bind button events to all edit and delete buttons in the ul.
function for_loop(){
    let dele_Btns = elem("list").getElementsByClassName('dele_Btn');
    let edit_Btns = elem("list").getElementsByClassName('edit_Btn');
    for(let i=0; i<dele_Btns.length; i++){
        dele_Btns[i].onclick = function(){
            delete_li(this);
            save_data(elem("list").innerHTML);
        };
    }
    for(let j=0; j<edit_Btns.length; j++){
        edit_Btns[j].onclick = function(){
            edit_li(this);
            save_data(elem("list").innerHTML);
        };
    }
}

/*
 * Button event, when the ok button in the input dialog is pressed, get the input data. 
 * Valid data will be stored locally and displayed. If invalid, a prompt will be given.
**/
export function close_ok(){
    let mydate = new Date();
    const title = elem("PT").value;
    const date = mydate.toLocaleDateString() +", "+ mydate.toLocaleTimeString();
    const summary = elem("PS").value;

    if((title != null && title != "")&&(summary != null && summary != "")){
        let list_string = `Title: ${title} | Date: ${date} | Summary: ${summary} `;
        add_li(list_string);
        for_loop();
        save_data(elem("list").innerHTML);
    }
    else{
        alert("Title or summary can't be empty");
    }
    elem("add_dia").close();
}

/*
 * Button event, when the ok button in the edit dialog is pressed, get the input data. 
 * Valid data will be stored locally and displayed. If invalid, a prompt will be given.
**/
export function close_c_ok(){
    let mydate = new Date();
    const title = elem("e_PT").value;
    const date = mydate.toLocaleDateString() +", "+ mydate.toLocaleTimeString();
    const summary = elem("e_PS").value;

    if((title != null && title != "")&&(summary != null && summary != "")){
        let list_string = `Title: ${title} | Date: ${date} | Summary: ${summary} `;
        let node = edit_elem.parentNode;
        node.innerText=list_string;
        let btn_edit = document.createElement("button");
        btn_edit.innerHTML = "✏️";
        btn_edit.className = "edit_Btn"
        let btn_dele = document.createElement("button");
        btn_dele.innerHTML = "🗑️";
        btn_dele.className = "dele_Btn";
        node.appendChild(btn_edit);
        node.appendChild(btn_dele);
        for_loop();
        save_data(elem("list").innerHTML);
    }
    else{
        alert("Title or summary can't be empty");
    }
    elem("add_c_dia").close();
}

//Btton event, when the cancel button in the input dialog is pressed, closes the dialog.
export function close_cancel(){
    elem("add_dia").close();
}

//Button event, when the cancel button in the edit dialog is pressed, closes the dialog.
export function close_c_cancel(){
    elem("add_c_dia").close();
}

//Bind button event to add button
elem("add").addEventListener("click", show_p);

//Bind button event to input ok button
elem("p_ok").addEventListener("click", close_ok);

//Bind button event to input cancel button
elem("p_cancel").addEventListener("click", close_cancel);

//Bind button event to eidt ok button
elem("e_p_ok").addEventListener("click", close_c_ok);

//Bind button event to eidt cancel button
elem("e_p_cancel").addEventListener("click", close_c_cancel);
