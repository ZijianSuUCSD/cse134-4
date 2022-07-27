function submit_survey(){
    let radio = document.getElementsByName("feeling");
    let radio_value;
    for(let i = 0; i<radio.length;i++){
        if(radio[i].checked == true) {
            radio_value = radio[i].value;
            break;
        }
    }
    if(radio_value !=null && radio != ""){
        alert("Submitted successfully\nThanks for your review!")
    }
    else{
        alert("Submit failed\nNeed to choose one of the radio buttons.\nComments can be empty.");
    }
}

function read_projects(){
    let select_value = document.getElementById("projects").value;
    if(select_value == "c++ project 1"){
        document.getElementById("c++1").style.display = "initial";
        document.getElementById("c++2").style.display = "none";
        document.getElementById("python1").style.display = "none";
        document.getElementById("python2").style.display = "none";
    }
    else if(select_value == "c++ project 2"){
        document.getElementById("c++1").style.display = "none";
        document.getElementById("c++2").style.display = "initial";
        document.getElementById("python1").style.display = "none";
        document.getElementById("python2").style.display = "none";
    }
    else if(select_value == "Python project 1"){
        document.getElementById("c++1").style.display = "none";
        document.getElementById("c++2").style.display = "none";
        document.getElementById("python1").style.display = "initial";
        document.getElementById("python2").style.display = "none";
    }

    else if(select_value == "Python project 2"){
        document.getElementById("c++1").style.display = "none";
        document.getElementById("c++2").style.display = "none";
        document.getElementById("python1").style.display = "none";
        document.getElementById("python2").style.display = "initial";
    }
    else{
        document.getElementById("c++1").style.display = "none";
        document.getElementById("c++2").style.display = "none";
        document.getElementById("python1").style.display = "none";
        document.getElementById("python2").style.display = "none";
    }
}

function showgame(){
    document.getElementById("play").style.display = "initial";
}
function clsoegame(){
    document.getElementById("play").style.display = "none";
}

function s_or_c_game(){
    if(document.getElementById("show_game").innerText == "Play Game"){
        showgame();
        document.getElementById("show_game").innerText = "Close Game";
    }
    else{
        clsoegame();
        document.getElementById("show_game").innerText = "Play Game";
    }
    
}

document.getElementById("subm").addEventListener("click",submit_survey);
document.getElementById("go_project").addEventListener("click",read_projects);
document.getElementById("show_game").addEventListener("click",s_or_c_game)