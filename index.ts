#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.italic.blueBright (" \n \t Wellcome to Adventure Game \n"));


class player {

    name: string

    health: number = 100

    constructor(name: string) {

        this.name = name
    }

    fuelDecrease () {

        let fuel = this.health - 25

        this.health = fuel

    }

    fuelIncreare () {

        this.health = 100

    }

}

class opposite {

    name: string

    health: number = 100

    constructor(name: string) {

        this.name = name

    }

    fuelDecrease () {

        let health = this.health - 25

        this.health = health

    }

}

let Player = await inquirer.prompt ([

    {

        name: "name",

        type: "input",

        message: "Enter your Name: "

    },

])



let Opposition = await inquirer.prompt ([

    {

        name: "select",

        type: "list",

        message: "Select your opponent",

        choices: ["Aliens" , "Zombies" , "Skeleton"]

    }

])



let p1 = new player (chalk.red (Player.name))

let o1 = new opposite (Opposition.select)



do {

    // Applying Aliens

    if (Opposition.select == "Aliens") {

        let ask = await inquirer.prompt ([

            {

                name: "opt",

                type: "list",

                message: "What would you like to do ?",

                choices: ["Attack" , "Regenerate health" , "Run for your life"]

            }

        ])

        if (ask.opt == "Attack") {

            let num = Math.floor (Math.random() *2)

            if (num > 0) {

                p1.fuelDecrease()
                
                console.log(` \n ${chalk.blueBright (p1.name)} your health is ${chalk.yellowBright (p1.health)}`);

                console.log(` \n ${chalk.blueBright (o1.name)} health is ${chalk.yellowBright (o1.health)} \n`);

                if (p1.health <= 0) {

                    console.log(`${chalk.blueBright (p1.name)}`, chalk.bgMagenta (`You loose , Better luck next time`));

                    process.exit()

                }

            }

            if (num <= 0) {

                o1.fuelDecrease()

                console.log(` \n ${chalk.blueBright (p1.name)} your health is ${chalk.yellowBright (p1.health)}`);

                console.log(` \n ${chalk.blueBright (o1.name)} health is ${chalk.yellowBright (o1.health)} \n`);

                if (o1.health <= 0) {

                    console.log(chalk.bgMagenta ( "\n Congratulations! You win \t"));

                    process.exit()

                }

            }

        }


        
        if (ask.opt == "Regenerate health") {
        
            p1.fuelIncreare() 
        
            console.log(chalk.blueBright (` \n You regenerate your current health & your health is`),`${chalk.yellowBright (p1.health)} \n`);
        
        }
    

        
        if (ask.opt == "Run for your life") {
        
            console.log(` \n ${chalk.blueBright (p1.name)}`,`You loose , Better luck next time \n`);
        
            process.exit()
        
        }
    }



    
    // Applying Zombies 
    
    if (Opposition.select == "Zombies") {
    
        let ask = await inquirer.prompt ([
    
            {
    
                name: "opt",
    
                type: "list",
    
                message: "What would you like to do ?",
    
                choices: ["Attack" , "Regenerate health" , "Run for your life"]
    
            }
    
        ])
    
        if (ask.opt == "Attack") {
    
            let num = Math.floor (Math.random() *2)
    
            if (num > 0) {
    
                p1.fuelDecrease()
    
                console.log(` \n ${chalk.blueBright (p1.name)} your health is ${chalk.yellowBright (p1.health)}`);
    
                console.log(` \n ${chalk.blueBright (o1.name)} health is ${chalk.yellowBright (o1.health)} \n`);
    
                if (p1.health <= 0) {
    
                    console.log(`${chalk.blueBright (p1.name)}`, chalk.bgMagenta (`You loose , Better luck next time`));
    
                    process.exit()
    
                }
    
            }


            if (num <= 0) {
            
                o1.fuelDecrease()
            
                console.log(` \n ${chalk.blueBright (p1.name)} your health is ${chalk.yellowBright (p1.health)}`);
            
                console.log(` \n ${chalk.blueBright (o1.name)} health is ${chalk.yellowBright (o1.health)} \n`);
            
                if (o1.health <= 0) {
            
                    console.log(chalk.bgMagenta ( "\n Congratulations! You win \t"));
            
                    process.exit()
            
                }
            
            }
        }



        
        if (ask.opt == "Regenerate health") {
        
            p1.fuelIncreare() 
        
            console.log(chalk.blueBright (` \n You regenerate your current health & your health is`),`${chalk.yellowBright (p1.health)} \n`);
        
        }
    

        
        if (ask.opt == "Run for your life") {
        
            console.log(` \n ${chalk.blueBright (p1.name)}`,`You loose , Better luck next time \n`);
        
            process.exit()
        
        }
    }



    
    // Applying Skeleton
    
    if (Opposition.select == "Skeleton") {
    
        let ask = await inquirer.prompt ([
    
            {
    
                name: "opt",
    
                type: "list",
    
                message: "What would you like to do ?",
    
                choices: ["Attack" , "Regenerate health" , "Run for your life"]
    
            }
    
        ])
    
        if (ask.opt == "Attack") {
    
            let num = Math.floor (Math.random() *2)
    
            if (num > 0) {
    
                p1.fuelDecrease()
    
                console.log(` \n ${chalk.blueBright (p1.name)} your health is ${chalk.yellowBright (p1.health)}`);
    
                console.log(` \n ${chalk.blueBright (o1.name)} health is ${chalk.yellowBright (o1.health)} \n`);
    
                if (p1.health <= 0) {
    
                    console.log(`${chalk.blueBright (p1.name)}`, chalk.bgMagenta (`You loose , Better luck next time`));
    
                    process.exit()
    
                }
    
            }


            
            if (num <= 0) {
            
                o1.fuelDecrease()
            
                console.log(` \n ${chalk.blueBright (p1.name)} your health is ${chalk.yellowBright (p1.health)}`);
            
                console.log(` \n ${chalk.blueBright (o1.name)} health is ${chalk.yellowBright (o1.health)} \n`);
            
                if (o1.health <= 0) {
            
                    console.log(chalk.bgMagenta ( "\n Congratulations! You win \t"));
            
                    process.exit()
            
                }
            }
        }



        
        if (ask.opt == "Regenerate health") {
        
            p1.fuelIncreare() 
        
            console.log(chalk.blueBright (` \n You regenerate your current health & your health is`),`${chalk.yellowBright (p1.health)} \n`);
        
        }
    

        
        if (ask.opt == "Run for your life") {
           
            console.log(` \n ${chalk.blueBright (p1.name)}`,`You loose , Better luck next time. \n`);
           
            process.exit()
     
        }
    
    
    }

}   

while (true)
    
    

    