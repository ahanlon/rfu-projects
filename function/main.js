

// $('#myID').text(); // argument is undefined, thus .text() is a getter
// $('@myID').text('hello') // argument is a string, thus .text('...')is a setter

// using typeof operator to enable polymorphic behaviour
// var steve = {
// 	name : 'Steve',
// 	myNameIs : function(name) {  // if no argument is passed, name is undefined
// 		if ( typeof name === 'undefined' ){
// 			return steve.name;
// 		}
// 		else if ( typeof name === 'string' ) {
// 			steve.name = name;
// 		}
// 	}
// }

// console.log(steve.myNameIs()) // logs "Steve"

// steve.myNameIs('Jeff') // Does not console.log or return anything
// console.log(steve.myNameIs())

// typeof {} // 'object'
// typeof [] // 'object'
// [].constructor === Array // true
// falsey values 0, '', null, undefined, false. All other values are truthy

// var myNameIs = function(firstName, height) {
// 	height.feet = height.feet || 5;
// 	height.inches = height.inches || 6;
// 	name = ( firstName || lastName || 'steve' ); // this expression evaluates to the first truthy value, or the last value, if none are truthy
// 	console.log(name);
// }

// myNameIs('', null);

// var whosYourDaddy = function(person){

// 	var dad = 'No dad ... so sad =/'
// 	if ( person && person.parents && person.parents.dad ) {
// 		var dad = person.parents.dad
// 	}
// 	else {
// 		var dad = 'No dad ... so sad =/'
// 	}
// 	return dad
// }

// + is a binary operator - takes two values
// typeof is a unary operator  - takes one value
// ternary operator - takes 3 values

// var whosYourDaddy = function(person){
// 	return ( person && person.parents && person.parents.dad ) ? 
// 		person.parents.dad : 'No dad ... so sad =/'


// var steve = {
// 	name : 'Steve',
// 	// parents : {
// 	// 	dad : 'Jeff',
// 	// 	mom : 'Alice',
// 	// },
// 	siblings : ['carol', 'carlos', 'dan'],
// }

// This is not best practice but an example that you can use an expression here and a ternary operator is an expression.
// for (var i = 0; ('ternary expression goes here'); i++){

// }

// console.log(whosYourDaddy(steve));


// var caller = function(callback){
// 	callback()
// }

// var myNameIs = function(name){
// 	console.log(name)
// }
// caller(myNameIs);

// var myCallback = function(){
// 	console.log('now!');
// }
// setTimeout(myCallback, 2000);
// I never call myCallback. You never see myCallback(). The setTimeout calls it once conditions are met

// setTimeout(function() {
// 	console.log('this is a callback!')
// }, 1500)

// var again = function(){
// 	console.log('again!')
// }

// var intervalID = setInterval(function(){
// 	again()
// }, 400

// setInterval(function(){
// 	clearInterval(intervalID)
// }), 2000)

// var people = ['Bob', 'Janet', 'Alice', 'Steve']
// people.sort()
// console.log(people)

// var people = [1, 8, 11, 234, 92]

// people.sort(function(a, b){
// 	return a - b
// })
// console.log(people)


// var people = [
// 	{
// 		name : 'steve',
// 		age  : 12,
// 	},
// 	{
// 		name : 'alice',
// 		age  : 44,
// 	},
// 	{
// 		name : 'bob',
// 		age  : 32,
// 	},
// ]

// people.sort(function(a, b) {
// 	if (a.age > b.age){
// 		return 1
// 	}
// 	else if (a.age < b.age) {
// 		return -1
// 	}
// 	else if (a.age === b.age) {
// 		return 0
// 	}
// })
// console.log(people)

//-------------------------------------------------------

//--SCOPE LECTURE------

// scope
// a zone in memory where names are defined

// var fullName = 'Steve Stevenson';

// myArray = []
// // Javascript lexical scope - in Javascript, only functions create their own scope
// var getFullName = function(first, last){
// 	var fullName = first + ' ' + last
// 	myArray.push(fullName) // second refernce to fullName : myArray[0]
// 	console.log(fullName)
// 	// return fullName
// }

// var myName = getFullName('Andy', 'Hanlon')
// console.log(fullName) // not accesible in this scope. Throws an error.
// console.log(myName)

// garbage collection: delete variables that we have no references to

// closure : exeption to garbage collection

var counterConstructer = function(){
	var start = 0;
	var counter = function(){
		console.log(start++)
	}
	return counter
}
// the inner counter function has CLOSURE over the start variable, which prevents start from being garbage collected

var myCounter = counterConstructer()


myCounter()
myCounter()
myCounter()
myCounter()
var yourCounter = counterConstructer()
myCounter()
yourCounter()
myCounter()
yourCounter()
myCounter()
yourCounter()
















