function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "hello jack nicholas") {
        return "Hello there! I am your private tutor! You can book a meeting with me. ";
    } else if (input == "hello simon baker") {
        return "Hi! I am your private Math tutor! I'll be happy to answer any questions.";
    } else {
        return "Try asking something else!";
    }
}