
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", (answer1) => {
  console.log(`Nice to meet you ${answer1}!`);

  rl.question("What is an activity that you like doing? ", (answer2) => {
    console.log(`I to enjoy ${answer2}`);
    
    rl.question("What do you listen to while doing that? ", (answer3) => {
      console.log(`That band is awesome! ${answer3}`);
      
      rl.question("Which meal is your favourite? ", (answer4) => {
        console.log(`I like ${answer4} as well`);
        
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          console.log(`I love ${answer5}!`);
          
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            console.log(`${answer6}! I love that sport!`);
          
            rl.question("What is your favorite superpower? ", (answer7) => {
              console.log(`${answer7}! That would be awesome`);

              rl.question("What is your favorite video game? ", (answer8) => {
                console.log(`${answer8}! Thats the best game! `);
                
                setTimeout(() => {
                  console.log(`${answer1} loves listening to ${answer3} while ${answer2}, he also enjoys ${answer5} for ${answer4}. His favorite sport is ${answer6} and wishes he could ${answer7} and his favorite game is ${answer8}`);
                }, 3000);

                rl.close();
              });
            });
          });
        });
      });
    });
  });
});

  