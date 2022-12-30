function talk(){
    var know = {
    "Who are you?" : "Hello, I'm Nga's AI.",
    "How are you?" : "I'm doing well!",
    "Will I pass this course?" : "Only if you commit to working hard, submit all of your coursework on time, and earn passing grades.",
    "Does Nga accept bribes for passing grades?" : "The only bribe she accepts is your completed assignment submissions.",
    "Is Nga mean?" : "The meanest. She sweetens her coffee with the tears of her students.",
    "ok" : "Thank You So Much ",
    "Bye" : "Okay! Will meet soon.."
    };
    var user = document.getElementById('userInput').value;
    
    if (user in know) {
    document.getElementById('chatMessage').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatMessage').innerHTML = "Sorry,I didn't understand <br>";
    }
}