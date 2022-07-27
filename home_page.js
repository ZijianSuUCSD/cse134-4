/*
 * Zijian Su 7/26/2020 
 * hw4 part 5 portfolio site javascript(home page)
 * This js file is used to support button events for my portfolio site.
**/

/*
 * "survey" button event. When the button is clicked, 
 * the submission is successful, and the submission is unsuccessful.
 * Use a loop to detect if a radio button has an available value.
 * Comments are optional and do not need to be check.
**/
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

/*
 * Used to choose to display my projects.
 * After getting the selected value from html, display the corresponding project.
 * This is achieved by setting the display property.
**/
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

// Show the game window
function showgame(){
    document.getElementById("play").style.display = "initial";
}

// Close the game window
function clsoegame(){
    document.getElementById("play").style.display = "none";
}

/*
 * Change the text of the button to tell the 
 * user whether to open the game or close the game window.
 * And according to the state of the button to open or close the game window
**/
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

// Bind click event for survey button
document.getElementById("subm").addEventListener("click",submit_survey);

// Bind click event for play game button
document.getElementById("go_project").addEventListener("click",read_projects);

// Bind click event for close game button
document.getElementById("show_game").addEventListener("click",s_or_c_game)