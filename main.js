// #1 #2
var userObj = {
    firstName: 'John',
    lastName: 'Connor',
    age: 14,
    fullName: function(){
      return userObj.firstName+' '+userObj.lastName
    }
};

console.log(userObj.fullName());

// #3
function defUpperStr (text) {
return (text || 'default text').toUpperCase()   
 };

console.log(defUpperStr('какой-то текст'));
console.log(defUpperStr());

// #4
function evenFn(n) {
  var arr = [];
  for (var i=0; i<=n; i=i+2) {if (i>0) arr.push (i);}
  return arr;
  
};

console.log(evenFn(19));


// #5
function weekFn(n) {
  var dayNumber = n, dayName;
    switch (dayNumber){
      case 1: dayName = 'Понедельник'; break;
      case 2: dayName = 'Вторник'; break;
      case 3: dayName = 'Среда'; break;
      case 4: dayName = 'Четверг'; break;
      case 5: dayName = 'Пятница'; break;
      case 6: dayName = 'Суббота'; break;
      case 7: dayName = 'Воскресенье'; break;
      default: dayName = null;
    }
   return dayName;
}

console.log(weekFn(5)); //Friday

// #6

 function ageClassification(n) {
   n>122 ? text = null: n>90? text = 'долгожители': n>75? text = 'старческий возраст':
   n>65 ? text ='пожилой возраст': n>44 ? text = 'средний возраст':
   n>24 ? text ='молодой возраст': n>=0 ? text = 'детский возраст': text = null;
   
   return text;
 };

console.log('66.2 :',ageClassification(66.2));

// #7

function oddFn(n) {
  var arr = [];
  var i = 0;
  while (i++ < n) if (i % 2 > 0) {arr.push(i)};
  return arr;
}

console.log(oddFn(10));

// #8

function mainFunc(a, b, cb){

  if (typeof cb === 'function') { return cb(a, b)}
  else { return false};
}

function cbRandom (a,b){
  return Math.round(Math.random() * (b - a) + a);
}

function cbPow (a,b) {
  return Math.pow (a,b);
}

function cbAdd (a,b) {
  return (a+b);
}


 console.log (mainFunc(2,5, cbRandom));
 console.log (mainFunc(2,5, cbPow));
 console.log (mainFunc(2,5, cbAdd));
 console.log (mainFunc(2,5, 'not a func'));

