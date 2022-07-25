import * as dia_fun from "/js/customdialog.js";
document.getElementById("my_alert").addEventListener("click", dia_fun.show_alert);
document.getElementById("a_button").addEventListener("click", dia_fun.close_alert);

document.getElementById("my_confirm").addEventListener("click", dia_fun.show_conf);
document.getElementById("c_ok").addEventListener("click", dia_fun.close_conf_true);
document.getElementById("c_cancel").addEventListener("click", dia_fun.close_conf_false);

document.getElementById("my_prompt").addEventListener("click",dia_fun.show_prompt);
document.getElementById("p_ok").addEventListener("click",dia_fun.close_prompt_ok);
document.getElementById("p_cancel").addEventListener("click",dia_fun.close_prompt_cancel);

document.getElementById("my_safer_prompt").addEventListener("click",dia_fun.show_safer_prompt);
document.getElementById("p_ok2").addEventListener("click",dia_fun.close_safer_prompt_ok);
document.getElementById("p_cancel2").addEventListener("click",dia_fun.close_safer_prompt_cancel);
