//Assignment no 31
/*No users: Add an if test to erercise 30 to make sure the list of users is not empty.
. If the list is empty, print the message .We need to find some users!
. Remove all of the usernames from your array , and make sure the correct message is printed.*/
// non empty array
var userNames = ['admin', 'binish', 'taha', 'aqsa', 'rozi'];
function greetUsers(usernames) {
    if (usernames.length === 0) {
        console.log('We need to find some users!');
        return;
    }
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username.toLocaleLowerCase() === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
console.log("For non empty username:\n");
greetUsers(userNames);
//to make array empty we just assign an empty array to userNames
userNames = [];
console.log("\n\n For empty username;\n");
greetUsers(userNames);
//Assignment no 32
/*Checking Usernames: Do the following to state a program that simulates how websites ensure that everyone
has a unique username.
. Make a list of five or more  usernames called current_users.
. Make another list of five  usernames called new_users.Make sure one or two of the new usernames are also
in the current_users list.
. Loop through the new_users list to see if each new username has already been used .If it has, print a message
that the person will need to enter a new username. If a username has not been used, print a message
saying that the username is available .
. Make sure your comparision is in case sensitive.If 'John' has been used, 'JOHN' should not be accepted.  */
var current_users = ["Kiran", "Rida", "Rubab", "Kanzul", "Juni"];
var new_users = ["rehab", "ridA", "falak", "saher", "juNi"];
function checkUserNames(current_users, new_users) {
    var lowercasedCurrentUsers = current_users.map(function (user) { return user.toLowerCase(); });
    for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
        var newUser = new_users_1[_i];
        var lowercasedNewUsers = newUser.toLowerCase();
        if (lowercasedCurrentUsers.includes(lowercasedNewUsers)) {
            console.log("Username \"".concat(newUser, "\" is already been used. Please enter new username."));
        }
        else {
            console.log("Username \"".concat(newUser, "\" is available."));
        }
    }
}
checkUserNames(current_users, new_users);
//Assignment no 33
/*Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.Most ordinal
numbers end in th except 1,2, and 3.
. Store the numbers 1 through 9 in a array.
. Loop through the array.
. Use an if-else chain inside the loop to print the proper ordinal ending for each number.Your output
should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a seperate line.  */
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    var ordinal = void 0;
    if (number === 1) {
        ordinal = "st";
    }
    else if (number === 2) {
        ordinal = "nd";
    }
    else if (number === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log("".concat(number).concat(ordinal));
}
//Assignment no 34
/*Pizzas: Think of atleast three kind of your favourite pizza. Store these pizzas names in a array , and then
use a for loop to print the name of each pizza.
. Modify your for loop to print a sentence using the name of the pizza instead of printing
just the name of pizza. For each pizza you should have aone line of output containing a simple statement
like I like pepperoni pizza.
. Add a line at the end of your program, outside the for loop, that states how much you like pizza. THe
output should consist  of three or more lines about the kinds of pizza you like and then an additional
sentence, such as I really love pizza!  */
var Pizzas = ['Pepperoni', 'BBQ Chicken', 'Cheesy'];
for (var _a = 0, Pizzas_1 = Pizzas; _a < Pizzas_1.length; _a++) {
    var Pizza = Pizzas_1[_a];
    console.log("I like ".concat(Pizza, " pizza"));
}
console.log("I really like pizza");
//Assignment no 35
/*Animals: Think of atleast three different  animals that have a common characteristics.Store the names of
 these animals in a list, and then use a for loop  to print out the name of each animal.
 . Modify your program to print a satatement about each animal, such as  A dog would make a great pet.
 . Add a line at the end of your program stating what these  animals have in common. You could print
  a sentence such as Any of these animals would make a great pet!*/
var Animalnames = ['Dog', 'Cat', 'Goat'];
for (var _b = 0, Animalnames_1 = Animalnames; _b < Animalnames_1.length; _b++) {
    var Animal = Animalnames_1[_b];
    console.log("A ".concat(Animal, " would make a great pet."));
}
console.log("Any of these animals would make a great pet!");
