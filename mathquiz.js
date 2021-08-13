question_turn = "player_1";
answer_turn = "player_2";

function Send1(){
number1 = document.getElementById("number1").value;
number2 = document.getElementById("number2").value;
actual_answer = parseInt(number1) * parseInt(number2);

question_number = "<h4>" + number1 + "X" + number2 +"</h4>";

 input_box = "<br>Answer : <input type='text' id='input_check_box'>";
 check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
 row = question_number + input_box + check_button ;
 document.getElementById("output").innerHTML = row;
 document.getElementById("number1").value = "";
 document.getElementById("number2").value = "";
}

function check(){
    get_answer = document.getElementById("input_check_box").value;

    if(get_answer == actual_answer){

     if(answer_turn == "player1"){
         player_update_1 = player_1Score+1;
         document.getElementById("player_1Score").innerHTML = player_update_1;
      
     }
     else{
         player_2Score=player_2Score+1;
         document.getElementById("player_2score").innerHTML = player_2Score;
     }
    }
    if(question_turn == "player1"){
        question_turn="player2";
        document.getElementById("QuestionPlayer").innerHTML="Question Turn - "+Player_2;
    }
    else{
        question_turn = "player1";
        document.getElementById("QuestionPlayer").innerHTML="Question Turn - "+Player_1;
    }
}