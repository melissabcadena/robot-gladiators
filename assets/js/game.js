var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
    // Alerts users that they are starting the round
    window.alert("Welcome to Robot Gladiators");

    // Give user option to skip or fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemy's health by subtracting the amt set in the playerAttack var
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so that we know it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!")
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of `enemyAttack` from the value of `playerHealth`
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so that we know it worked.
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    
    // if player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player would like to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");

            //Subtract money from playerMoney - 2
            playerMoney= playerMoney -2;
        }
        // if no (false), ask question again by running fight() again 
        else {
            fight();
        };

    } else {
        window.alert("You need to pick a valid option. Try again!");
    }
};
fight();