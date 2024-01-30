<script>
  {/* to go next line without excuting the code inside chrome console = shift + enter */}
  {/* to create and alert */}
  alert("Hello, welcome to PetHouse");
  {/* another way of creating alert */}
  window.alert("What's up?");
  {/*  prompt gives user access to enter their information  */}
  prompt(" Enter your name");
  {/* different types of data types in JS= Numbers, string, boolean,   null, undefined, object, array, symbol */}

  {/* // number */}
  console.log(4 + 8);

  {/* // to know the data types */}
  typeof (9);
  typeof ("Sujon");
  typeof (true);
  console.log(typeof (9));

  {/* // variables var=keyword, myName= Name of the variable, Sujon= value(anything after = is the value of the variables) */}
  var myName = "Sujon";
  console.log(myName);
  {/* returns = Sujon */}

  {/*   // using var as alert field information */}
  alert(myName);

   {/*// to save the information user enter we can use a prompt  */}
  var yourName = prompt("What is your name?");
  alert("Welcome to my website " + yourName);
  console.log(yourName);

  {/* // game level var, each time we declare new value for gamelevel, for example here from 1 to 2, 2 to 3 
  it changes the value of original var */}
  var gameLevel = 1
  gameLevel = 2;
  gameLevel = 3;
  alert("Your level is currently: " + gameLevel);
  {/* /* will return 3 */}
  
  {/*  // change the function in a way that a become 8 and b value will be 3 */}
  function test() {
  var a = 3;
  var b = 8;
  //  to swap the value, we take help of a new empty var, which is c
  // /* a bucket contains water, I pour them down inside the empty c bucket */
  var c = a; 
  // /* now that a is empty, I pour down the b sands inside a bucket */
  a = b;
  /* now that b is null, c water can go inside the b, by doing this I swap the value of the a and b */
  b = c;
  // /* a initial value was 3, but for above code snippet, it's now 8 */
  console.log("a is " + a); 
  // /* b is now 3! */
  console.log("b is " + b); 
}

function changeNumber () {
    var a = 3; 
    var b = 8; 
    var c = a; 
    a = b ; 
    b = c ; 
    console.log("A is " + a);
    console.log("B is " + b);
}
changeNumber();

{/*  
  // variable naming rules 
  // can't name it var
  // can't begin with a number 
  // No space
  // camel casing: first word should be small letter, and begining of the second word fist letter should be capital
  // it can't contain dash - sign 
  // but it can contain underscore _
 */}

  {/* // sting rules and regulations 
  // concatination  */}
  var message = "My name is ";
  var name = "Sujon";
  {/* /* return My name is Sujon */}
  alert(message + name); 

 {/* to find out the length of a string: var+length*/}
  message.length;
 

 {/*  // // twitter example telling user how many character left for them to write ; 
  // 140 character in total  */}
  var twitter = prompt("Write your tweet here: ");

  alert("You have written " + twitter.length + " characters,  you have " +
  (140 - twitter.length) + " charaters left");
  
  {/* // slice and dice 
  // in this example, this function allows to get rid of the additional text more then 140 characters;  */}
  var twitter2 = prompt("Write your tweet here: ");
  {/*  /* slice(0,140) take all the character form positon 0 to 140 and get rid of the rest */}
  alert(twitter2.slice(0, 140));


  {/*   // changing the twitter2 input to upper case  */}
  var twitter2 = prompt("Write your tweet here: ");
  {/* this allows me to change any information given from the user to upper case, by using toLowerCase() we can do the opposite  */}
  twitter2 = twitter2.toUpperCase(); 
  alert(twitter2.slice(0, 140));
{/* 
  // this variales change the first character of the string to upper case and rest of it to the lower case 
  var name = prompt("What is your name?" below alert first take the first letter of the string and turn it to upper case;) */}
  {/* + name.slice(1) add the rest of the message with the first letter except the fisrt letter itself */}
  {/* // name.slice(0,1).toUpperCase() = turns the first letter to Capital */}
  {/* // name.slice(1).toLowerCase() = turns the rest text into lower case, no matter whatever user enter */}
  alert(name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase());


  {/* // different solution for above example  */}
  var name = prompt("What is your name? ")
  var firstchar = name.slice(0, 1);
  var uppperCaseFirstChar = firstchar.toUpperCase();
  var restOfName = name.slice(1, name.length).toLowerCase();
  var capitaliseName = uppperCaseFirstChar + restOfName;
  alert("Hello " + capitaliseName);


  {/* // JS number ex
  // Modulo = % it returns the remainder
  // Dog age to human age formula, let say your dog humanAge = (dogAge -2) *4 +21 */}

  var dogAge = prompt("What is your dog age? ")
  var humanAge = (dogAge - 2) * 4 + 21
  alert("Your dog human age is " + humanAge);

 {/* By end of the 30/01/2024, I am here*/}

  {/* // increment and decrement  */}
  var x = 5;
  var y = 3
  {/* // increment expression */}
  x++ =6;
  {/* // + = add the new number with x */}
  x + = 2;
  {/* // return 8 */}
  x + = y;

  {/* // decrement */}
  x-- = 4;

  {/* // devided  */}
  var num = 12;
  {/* // it takes 12 then devide it by 3; so ans is 4 */}
  num / = 3;
  {/*  modulo example, the remainder of this expression is 0 */}
  var a = 16 % 4;

  {/* // incrementation The post-increment operator ++ does indeed increment the value of x by 1. However, the actual increment occurs after the current value is assigne
  //  to the variable or used in an expression. */}
  var x = 3;
  var y = x++;
  y + = 1;

  {/* // If I want x to be incremented immediately and then assign the updated value to y, I can use the pre-increment operator (++x) instead: */}
  var x = 3;
  var y = ++x;
  y += 1;
  // ========================================================================

  // Function
  // to replace anything all together, shortcut is ctrl + f
  function getMilk() {
    console.log("Get some milk from the shop"); /* console.log is only for coder use */
}
  // calling the function
  getMilk();
  // =======================================================================

  // Karel robot cross line solution, diagnolal line bottom to top
  function main() {
    putBeeper();
  twoMoves();
  threeMoves();
  twoMoves();
  threeMoves();
  twoMoves();
  threeMoves();
  twoMoves();
  threeMoves();
}

  function twoMoves() {
    turnLeft();
  move();
}

  function threeMoves() {
    turnRight();
  move();
  putBeeper();
}

  //  Karel robot a chess board solution
  function main() {

    StraightLine();
  oneTurn();
  threeTurns();
  StraightLine();
  oneTurn();
  threeTurns();
  StraightLine();
}

  function threeTurns() {
    turnRight();
  move();
  turnRight();
}

  function StraightLine() {
    putBeeper();
  move();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
}

  function oneTurn() {
    turnLeft();
  move();
  turnLeft();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
  move();
}
  // =========================================================================
  // updated milk funcition 
  // money is the parameter of the getMilk function
  // 5 is the argument passed to the getMilk function
  function getMilk(money) {
  // to round the figure we can user math.floor,
  // match.round; match.ceil; 
  var bottles = Math.floor(money / 1.5);
  console.log("Here is your " + bottles + " bottles of milk sir");
}
  getMilk(5);
  // =========================================================================
  // life in weeks, days and month left function
  function lifeInWeeks(age) { 
  var myDaysLeft = (90*365 - (age*365) );
  var myWeeksLeft = (90*52 - (age*52));
  var myMonthsLeft =(90*12 - (age*12));
  console.log("You have " + myDaysLeft + " days, " + myWeeksLeft
  + " weeks, " + "and " + myMonthsLeft + " months left."); 
}

  lifeInWeeks(24.4);
  // =================================================================================
  // get milk function with change 
  // updated milk funcition 
  // money is the parameter of the getMilk function
  // 5 is the argument passed to the getMilk function
  function getMilk(money) {
  // to round the figure we can user math.floor,
  // match.round; match.ceil; 
  var bottles = Math.floor(money / 1.5) ;
  console.log("Here is your " + bottles + " bottles of milk sir");
  // this return function return the parent getMilk() function which in her is 1; 
  return money % 1.5 ; /* remainder */
}

  // here this var holds the return value of getMilk function; 
  var change = getMilk(4);
  // now the remainder or the return is the change of the rest of the cost
  console.log("And here is your " + change + "£ change master");
  // we can recall the function to double check
  getMilk(4);
  // =================================================================================
  // using function inside other functions
  function getMilk (money, costPerBottle) {
    // 1.5 is cost per bottle
    // below code use the calBottle function to cal the total number of bottle I can buy; 
    console.log("Buy " + calBottle(money, costPerBottle) + " bottles of milk");
  // this log the change after purchase by using the function calChange; 
  console.log("Here is your " + calChange(money,  costPerBottle) + "£ change master.");
  // return function returns the remaining change here
  return calChange(money, costPerBottle); 
}
  // calling the function 
  getMilk(5 , 1.5);


  // to calculate the number of bottle with a separate function, which I can use inside other function
  function calBottle (startingMoney, costPerBottle) {
  var numberOffBottles = Math.floor(startingMoney / costPerBottle);
  return numberOffBottles; 
}

  console.log(calBottle(12, 2));


  function calChange (startingMoney, costPerBottle) {
  var change = (startingMoney % costPerBottle);
  // return is use to call a function for output, and we can use this return value of this function somewhere else in other function; 
  return change; 
}
</script>
// ==============================================================================
















