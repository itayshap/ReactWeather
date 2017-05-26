var name = ['yossi', 'danny', 'itay'];

name.forEach(function(name){
  console.log('for each', name);
});

name.forEach((name) => {
    console.log('arrowFunc', name);
});

name.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';

console.log(returnMe('itay'));

var addStatement = (a, b) => { return a+b};
var addExpression = (a, b) => console.log(a+b);
