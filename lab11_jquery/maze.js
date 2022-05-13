$(document).ready(function(){
    var gameStart = false;
    $("#maze").mouseleave(function(){ loss() });

    $("#start").click(function(){
        $("#status").text('You still wining !');

        gameStart = true;
        if($(".boundary").hasClass('youlose')){
            $(".boundary").removeClass('youlose');
        }
        $(".boundary").mousemove(function(){ loss(); })
    });

    $("#end").mousemove(function(){
        if(gameStart == true) won();
        else if(!gameStart && $(".boundary").hasClass('youlose')) {
            alert("Sorry, You lost! :[");
           loss();

        }
    });

    function won(){
        alert("You Won ! :]");
        $("#status").text('You win !');
        gameStart = false;
    }

    function loss(){
        if(gameStart){
            gameStart = false;
            $(".boundary").addClass('youlose');
            $("#status").text('You Lose !');
        }
    }
})