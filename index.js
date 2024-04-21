#! /usr/bin/env node
// word Counter
import inquirer from "inquirer";
// store default condition in variable.
let condition = true;
console.log("\t\t\"Word Counter\"");
// if the condition is true to run this code.
while (condition) {
    // store the word counter in the varaible
    let wordCounter = await inquirer.prompt({
        name: "sentence",
        message: "Select the option you want to perform.",
        type: "list",
        choices: ["Word count", "Letter count", "Sentence count", "Exit"]
    });
    // if the word counter option is = "word count" . operate the word counter
    if (wordCounter.sentence === "Word count") {
        let wordCount = await inquirer.prompt({
            name: "word",
            message: "Enter your sentence:",
            type: "input",
        });
        let words = wordCount.word.trim().split(" ");
        console.log(words);
        console.log(`Your total words is ${words.length}`);
        // if the word counter option is = "letter count" . operate the letter counter
    }
    else if (wordCounter.sentence === "Letter count") {
        let letterCount = await inquirer.prompt({
            name: "letter",
            message: "Enter your sentence:",
            type: "input",
        });
        let words = letterCount.letter.replace(/ +/g, "").trim().split("");
        console.log(words);
        console.log(`Your total letters is ${words.length}`);
        // if the word counter option is = "sentence count" . operate the sentence counter
    }
    else if (wordCounter.sentence === "Sentence count") {
        let sentenceCount = await inquirer.prompt({
            name: "sentence",
            message: "Enter your Paragraph:",
            type: "input",
        });
        let words = sentenceCount.sentence.trim().split(". ");
        console.log(words);
        console.log(`Your total sentences  is ${words.length}`);
    }
    // if the condition is false stop to print the code.
    else if (wordCounter.sentence === "Exit") {
        condition = false;
    }
}
