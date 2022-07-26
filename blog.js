//const form = document.getElementById("form");
let edit_elem;


document.getElementById("list").innerHTML = load_data();
for_loop();


export function elem(id){
    let a_elem = document.getElementById(id);
    return a_elem;
}

export function show_p(){
    elem("add_dia").show();
}

export function show_c_p(ed_elem){
    elem("add_c_dia").show();
    edit_elem = ed_elem;
}

export function add_li(str){
    let ulist = elem("list");
    let li = document.createElement("li");
    let btn_edit = document.createElement("button");
    btn_edit.innerHTML = "Edit";
    btn_edit.className = "edit_Btn"
    let btn_dele = document.createElement("button");
    btn_dele.innerHTML = "Delete";
    btn_dele.className = "dele_Btn"
    li.innerHTML = str ;
    li.appendChild(btn_edit);
    li.appendChild(btn_dele);
    ulist.appendChild(li);
}

export function edit_li(ed_elem){
    show_c_p(ed_elem);
}

export function delete_li(obj){
    obj.parentNode.remove();
}

function load_data() {
    let get_data = JSON.parse(localStorage.getItem('list_data')) || {};
    if(get_data == "[object Object]"){
        return "";
    }
    else{
        return get_data;
    }
}

function save_data(str) {
    localStorage.setItem('list_data', JSON.stringify(str));
}

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

export function close_ok(){
    let mydate = new Date();
    const title = elem("PT").value;
    const date = mydate.toLocaleDateString() +", "+ mydate.toLocaleTimeString();
    const summary = elem("PS").value;

    if((title != null && title != "")&&(summary != null && summary != "")){
        let list_string = `Title: ${title} | Date: ${date} | Summary: ${summary} `;
        add_li(list_string);
        for_loop();
        //console.log(elem("list").innerHTML);
        //let data_str = elem("list").innerHTML
        //localStorage.setItem('list_data',data_str);
        save_data(elem("list").innerHTML);
    }
    else{
        alert("Title or summary can't be empty");
    }
    elem("add_dia").close();
}

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
        btn_edit.innerHTML = "Edit";
        btn_edit.className = "edit_Btn"
        let btn_dele = document.createElement("button");
        btn_dele.innerHTML = "Delete";
        btn_dele.className = "dele_Btn"
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

export function close_cancel(){
    elem("add_dia").close();
}

export function close_c_cancel(){
    elem("add_c_dia").close();
}



//elem("list").innerHTML = localStorage.getItem('liss_data');
elem("add").addEventListener("click", show_p);
elem("p_ok").addEventListener("click", close_ok);
elem("p_cancel").addEventListener("click", close_cancel);
elem("e_p_ok").addEventListener("click", close_c_ok);
elem("e_p_cancel").addEventListener("click", close_c_cancel);
