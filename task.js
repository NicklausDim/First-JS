console.log('Hello World');

let fName = prompt ('What is your first name you filthy beast?');

let lName = prompt ('Hello ' + fName + ' , what is your last name?' );

alert('Hey ' + fName + ' ' + lName + '! \nI registered you!');

let age = prompt ('You seem old. How old are you really?').trim();

alert('wow...' + age + '...You seem much older...');

alert('Lets play a game...Can you guess my first name?');

alert('I am gonna give you the first 3 letters!');



alert('First letter is ' + fName.substring(0,1).toUpperCase());
alert('Second letter is ' + fName.substring(1,2).toUpperCase());
alert('Third letter is ' + fName.substring(2,3).toUpperCase());
prompt ('Have you guessed it yet?');
alert('Yes, it is ' + fName.toUpperCase() + ' too! \nCan you believe it?');

let question = prompt ('Wanna ask me anything sugar?');

alert('Really? ' + question + ' Shame on you!!!');
