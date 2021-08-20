// intro to what types are about
console.log('Greetings!');
// count is of 'type' number
var count = 5;
count = 10;
//count = 'Chelsey' // is a string
// const's type is a literal
var fname = 'Chelsey';
// this makes a variable of type any
// let testing;
var testing;
// not valid as 'Justin' is a string not a num
// testing = 'Justin'
testing = 5;
var student = {
    fname: 'Any',
    lname: 'Anderson',
    grade: 12
};
var student2 = {
    fname: 'Jane',
    lname: 'Adam',
    grade: 12
};
// annoying build up literal here
// function toString(student: {
//    fname: string
//    lname: string
//    grade: number
// }) {
//    return JSON.stringify(student)
// }
// parameter, type, rtn type
function toString(student) {
    return JSON.stringify(student);
}
var toStringArrow = function (student) {
    return JSON.stringify(student);
};
console.log(toString(student));
console.log(add(5, testing));
// showing why type any is bad practice
function add(x, y) {
    var result = x + y;
    return result;
}
console.log(fname);
// Tuples
//  message: string, status: string
function sendMessage() {
    var tmp = Math.round(Math.random());
    if (tmp) {
        return [
            'success',
            {
                fname: 'Chelsey',
                lname: 'T',
                grade: 12
            },
        ];
    }
    else {
        return ['failure', 'Something failed.'];
    }
    //   return new Error('this is bad')
}
for (var i = 0; i < 10; i++) {
    var _a = sendMessage(), statusResult = _a[0], data = _a[1];
    if (statusResult === 'success')
        console.log(data);
}
