export function show_alert(){
    document.getElementById("dialog_alert").show();
}

export function close_alert(){
    document.getElementById("dialog_alert").close();
}

export function show_conf(){
    document.getElementById("dialog_confirm").show();
}

export function close_conf_true(){
    let c_value = true;
    document.getElementById("dialog_confirm").close(); 

    const opt_elem = document.getElementById("opt1");
    opt_elem.textContent = `The value returned by the confirm method is : ${c_value}`;
    opt_elem.style.display = "initial";
    document.getElementById("opt2").style.display = "none";
    document.getElementById("opt3").style.display = "none";  
}

export function close_conf_false(){
    let c_value = false;
    document.getElementById("dialog_confirm").close(); 

    const opt_elem = document.getElementById("opt1");
    opt_elem.textContent = `The value returned by the confirm method is : ${c_value}`;
    opt_elem.style.display = "initial";
    document.getElementById("opt2").style.display = "none";
    document.getElementById("opt3").style.display = "none";  
}

export function show_prompt(){
    document.getElementById("dialog_prompt").show();
}

export function close_prompt_ok(){
    document.getElementById("dialog_prompt").close();

    let uname = document.getElementById("uid").value;
    const opt_elem = document.getElementById("opt2");
    opt_elem.innerHTML = `Prompt result : ${uname}`;
    opt_elem.style.display = "initial";
    document.getElementById("opt1").style.display = "none";
    document.getElementById("opt3").style.display = "none"; 
}

export function close_prompt_cancel(){
    document.getElementById("dialog_prompt").close();

    const opt_elem = document.getElementById("opt2");
    opt_elem.innerHTML = "User didn't enter anything";
    opt_elem.style.display = "initial";
    document.getElementById("opt1").style.display = "none";
    document.getElementById("opt3").style.display = "none"; 
}



export function show_safer_prompt(){
    document.getElementById("dialog_safer_prompt").show();
}

export function close_safer_prompt_ok(){
    document.getElementById("dialog_safer_prompt").close();

    let uname = document.getElementById("uid2").value;
    let clean = DOMPurify.sanitize(uname);
    
    const opt_elem = document.getElementById("opt3");
    opt_elem.innerHTML = `Prompt result : ${clean}`;
    opt_elem.style.display = "initial";
    document.getElementById("opt1").style.display = "none";
    document.getElementById("opt2").style.display = "none"; 
}

export function close_safer_prompt_cancel(){
    document.getElementById("dialog_safer_prompt").close();
    
    const opt_elem = document.getElementById("opt3");
    opt_elem.innerHTML = "User didn't enter anything";
    opt_elem.style.display = "initial";
    document.getElementById("opt1").style.display = "none";
    document.getElementById("opt2").style.display = "none"; 
}
