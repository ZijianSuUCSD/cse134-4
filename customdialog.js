export let c_value;
export let uname;
export let uname2;

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
    c_value = true;
    document.getElementById("dialog_confirm").close(); 

    const opt_elem = document.getElementById("opt1");
    opt_elem.textContent = `The value returned by the confirm method is : ${c_value}`;
    opt_elem.style.display = "initial";
    document.getElementById("opt2").style.display = "none";
    document.getElementById("opt3").style.display = "none";  
}

export function close_conf_false(){
    c_value = false;
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

    uname = document.getElementById("uid").value;
    const opt_elem = document.getElementById("opt2");
    if(uname != null && uname != ""){
        opt_elem.innerHTML = `Prompt result : ${uname}`;
    }
    else{
        opt_elem.innerHTML = "User didn't enter anything";
    }
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

    let temp = document.getElementById("uid2").value;
    const opt_elem = document.getElementById("opt3");
    uname2 = DOMPurify.sanitize(temp);
    if(uname2 != null && uname2 != ""){
        opt_elem.innerHTML = `Prompt result : ${uname2}`;
    }
    else{
        opt_elem.innerHTML = "User didn't enter anything";
    }
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


document.getElementById("my_alert").addEventListener("click", show_alert);
document.getElementById("a_button").addEventListener("click", close_alert);

document.getElementById("my_confirm").addEventListener("click", show_conf);
document.getElementById("c_ok").addEventListener("click", close_conf_true);
document.getElementById("c_cancel").addEventListener("click", close_conf_false);

document.getElementById("my_prompt").addEventListener("click",show_prompt);
document.getElementById("p_ok").addEventListener("click",close_prompt_ok);
document.getElementById("p_cancel").addEventListener("click",close_prompt_cancel);

document.getElementById("my_safer_prompt").addEventListener("click",show_safer_prompt);
document.getElementById("p_ok2").addEventListener("click",close_safer_prompt_ok);
document.getElementById("p_cancel2").addEventListener("click",close_safer_prompt_cancel);