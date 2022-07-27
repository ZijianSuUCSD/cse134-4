/*
 * Zijian Su 7/26/2020 
 * hw4 part 2 Custom Dialogs javascript
 * Note that export is not necessary in my script, 
 * it just doesn't need to be modified because it works.
**/

/*
 * These 3 parameters can be called by external scripts. just in case.
**/ 
export let c_value;
export let uname;
export let uname2;

// button event, enable 4 buttons
export function disable_buttons(){
    document.getElementById("my_alert").disabled = true;
    document.getElementById("my_confirm").disabled = true;
    document.getElementById("my_prompt").disabled = true;
    document.getElementById("my_safer_prompt").disabled = true;
}

// button event, disable 4 buttons
export function enable_buttons(){
    document.getElementById("my_alert").disabled = false;
    document.getElementById("my_confirm").disabled = false;
    document.getElementById("my_prompt").disabled = false;
    document.getElementById("my_safer_prompt").disabled = false;
}

// button event, show the alert dialog
export function show_alert(){
    disable_buttons();
    document.getElementById("dialog_alert").show();
}

// button event, close the alert dialog
export function close_alert(){
    enable_buttons();
    document.getElementById("dialog_alert").close();
}

// button event, show the confirm dialog
export function show_conf(){
    disable_buttons();
    document.getElementById("dialog_confirm").show();
}

/*
 * button event, when clicking the ok button, close the confirm dialog, 
 * and set the parameter c_value to true
 * **/
export function close_conf_true(){
    enable_buttons();
    c_value = true;
    document.getElementById("dialog_confirm").close(); 

    const opt_elem = document.getElementById("opt1");
    opt_elem.textContent = `The value returned by the confirm method is : ${c_value}`;
    opt_elem.style.display = "initial";
    document.getElementById("opt2").style.display = "none";
    document.getElementById("opt3").style.display = "none";  
}

/*
 * button event, when clicking the cancel button,close the confirm dialog, 
 * and set the parameter c_value to false
 * **/
export function close_conf_false(){
    enable_buttons();
    c_value = false;
    document.getElementById("dialog_confirm").close(); 

    const opt_elem = document.getElementById("opt1");
    opt_elem.textContent = `The value returned by the confirm method is : ${c_value}`;
    opt_elem.style.display = "initial";
    document.getElementById("opt2").style.display = "none";
    document.getElementById("opt3").style.display = "none";  
}

// button event, show the prompt dialog
export function show_prompt(){
    disable_buttons();
    document.getElementById("dialog_prompt").show();
}

/*
 * button event, when clicking the ok button, clsoe the prompt dialog 
 * get the value of the input
**/
export function close_prompt_ok(){
    enable_buttons();
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

//button event, when clicking the cancel button, clsoe the prompt dialog 
export function close_prompt_cancel(){
    enable_buttons();
    document.getElementById("dialog_prompt").close();

    const opt_elem = document.getElementById("opt2");
    opt_elem.innerHTML = "User didn't enter anything";
    opt_elem.style.display = "initial";
    document.getElementById("opt1").style.display = "none";
    document.getElementById("opt3").style.display = "none"; 
}

// button event, show the safer prompt dialog
export function show_safer_prompt(){
    disable_buttons();
    document.getElementById("dialog_safer_prompt").show();
}

// button event, when clicking the ok button, close the safer prompt dialog
export function close_safer_prompt_ok(){
    enable_buttons();
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

// button event, when clicking the cancel button, close the safer prompt dialog
export function close_safer_prompt_cancel(){
    enable_buttons();
    document.getElementById("dialog_safer_prompt").close();
    
    const opt_elem = document.getElementById("opt3");
    opt_elem.innerHTML = "User didn't enter anything";
    opt_elem.style.display = "initial";
    document.getElementById("opt1").style.display = "none";
    document.getElementById("opt2").style.display = "none"; 
}

//Bind click event to alert button
document.getElementById("my_alert").addEventListener("click", show_alert);
//Bind click event to alert dailog ok button
document.getElementById("a_button").addEventListener("click", close_alert);

//Bind the event to the confirm button
document.getElementById("my_confirm").addEventListener("click", show_conf);
//Bind the event for ok and cancel button in confirm dialog
document.getElementById("c_ok").addEventListener("click", close_conf_true);
document.getElementById("c_cancel").addEventListener("click", close_conf_false);

//Bind the event to the prompt button
document.getElementById("my_prompt").addEventListener("click",show_prompt);
//Bind the event for ok and cancel button in prompt dialog
document.getElementById("p_ok").addEventListener("click",close_prompt_ok);
document.getElementById("p_cancel").addEventListener("click",close_prompt_cancel);

//Bind the event to the safer prompt button
document.getElementById("my_safer_prompt").addEventListener("click",show_safer_prompt);
//Bind the event for ok and cancel button in safer  prompt dialog
document.getElementById("p_ok2").addEventListener("click",close_safer_prompt_ok);
document.getElementById("p_cancel2").addEventListener("click",close_safer_prompt_cancel);