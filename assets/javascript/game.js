
var questions = [
    { 
        question:"Who sang the song September?",
        answer:"Earth Wind and Fire",
        option1:"Kool and the Gang",
        option2:"The Beatles",
        option3:"The Rolling Stones",},
    {
        question:"Who sang the song Mr. Blue Sky?",
        answer:"Electric Light Orchestra",
        option1:"The Beatles",
        option2:"Simon and Garfunkle",
        option3:"The Who",},
    {
        question:"Who sang the song I Will Survive?",
        answer:"Gloria Gaynor",
        option1:"The Beatles",
        option2:"Maraiah Carey",
        option3:"Whitney Houston",},
    {
        question:"Who sang the song Lets Get It On?",
        answer:"Marvin Gaye",
        option1:"Barry White",
        option2:"The Beatles",
        option3:"Barry Manilow"},
    {
        question:"Who sang the song Baby Come Back?",
        answer:"Player",
        option1:"The BeeGees",
        option2:"The Beatles",
        option3:"Earth Wind and Fire",},
    {
        question:"Who sang the song Aint No Sunshine When Shes Gone?",
        answer:"Bill Withers",
        option1:"The Beatles",
        option2:"Bob Dylan",
        option3:"AJ Green",},
    {
        question:"Who sang the song Freebird",
        answer:"Lynard Skynryd",
        option1:"Led Zeppelin",
        option2:"The Beatles",
        option3:"Creedence Clearwater Revival",},
    {
        question:"Who sang the song I Wanna Be Your Lover?",
        answer:"Prince",
        option1:"Eath Win And Fire",
        option2:"Kool and the Gang",
        option3:"The Beatles",},
    {
        question:"Who sang the song Get Down On It",
        answer:"Kool & The Gang",
        option1:"The Beatles",
        option2:"Jurassic5",
        option3:"KC and the Sunshine Band",},
    {   
        question:"Who sang the original version of the song I'm Every Woman?",
        answer:"Chaka Kahn",
        option1:"Whitney Houston",
        option2:"Aretha Franklin",
        option3:"The Beatles"}];


var img = ["https://media.giphy.com/media/3ohhwCno35uEry35u0/giphy.gif", "https://78.media.tumblr.com/0620322e373262c8068815c5ac193053/tumblr_ohbackgSM41ue80lso1_400.gif", "https://media.giphy.com/media/10tF1wRoKJVFzq/giphy.gif","https://media.giphy.com/media/xT1Ra5k2jw5sLIGCCA/giphy.gif","https://media.giphy.com/media/pcQU9508PJU3u/giphy.gif","https://media.giphy.com/media/F1GPAMt15vBZK/giphy.gif","https://78.media.tumblr.com/tumblr_mak5mespZM1ralgs8o1_400.gif","https://media.giphy.com/media/l2JHZKNio4EjY6iqY/giphy.gif","https://media.giphy.com/media/xT1Ra3oY0J2xLT8YTK/giphy.gif","https://media.giphy.com/media/13XLywJufZKe9q/giphy.gif"];
var counter = 0;

var number = 20;

var intervalId;

var score = 0;

function decrement(){
    number--;
    $("#show-number").html("<h2>" + number + "</h2>");
    if(number===0){
        stop();
    }
}
function run(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function run2(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 200);
    }

function stop(){
    clearInterval(intervalId);
}

function correct(){
    $("#quizArea").empty();
    $("#quizArea").append("<div>That is Correct!</div>");
    $("#quizArea").append("<img src='"+img[counter]+"'>");
    run2();
}

function wrong(){
    $("#quizArea").append("<div>That is Incorrect...</div>");
    $("#quizArea").append("<p>The correct answer was "+questions[counter].answer+"!</p>");
    $("#quizArea").append("<img src='"+img[counter]+"'>");
    
}

function time(){
    $("#quizArea").empty();
    $("#quizArea").append("<div>TIMES UP!</div>");
    $("#quizArea").append("<p>The correct answer was "+questions[counter].answer+"!</p>");
    $("#quizArea").append("<img src='"+img[counter]+"'>");
}

function renderQuestion(){
    $(".button").hide(".button");
    $("#quizArea").empty();
    $("#quizArea").append("<div id='show-number'></div>");
    $("#quizArea").append("<div>"+questions[counter].question+"</div>");
    $("#quizArea").append("<button class='button2' type='button'>"+questions[counter].answer+"</button>");
    $("#quizArea").append("<button class='button2' type='button'>"+questions[counter].option1+"</button>");
     $("#quizArea").append("<button class='button2' type='button'>"+questions[counter].option2+"</button>");
    $("#quizArea").append("<button class='button2' type='button'>"+questions[counter].option3+"</button>");
    run();
    }

    
$(".button").on("click", function(){
    renderQuestion();
    });


$(document).on("click",".button2", function(){
    if(($(this).text()) === questions[counter].answer){
        $("#quizArea").empty();
        stop();
        correct();
        counter++
    }

    else if(($(this).text()) !== questions[counter].answer){
        console.log("incorrect");
        $("#quizArea").empty();
        stop();
        setTimeout(wrong, 5000);
        wrong();
        counter++
        };
   if(number === 0){
    console.log("hi");       
   }
});