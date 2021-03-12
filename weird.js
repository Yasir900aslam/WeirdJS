// I don't have any explanation for this shit ass cold fucking freezing mind fuck code.
var f = (function f(){ return "1"; }, function g(){ return 2; })();
console.log(typeof f)


// whoever wrote this the first time, you need to goto therapy.
// I mean why do you need this?
// Whyyy?
var foo = {
    bar: function(){ return this.baz; },
    baz: 1
};
console.log(typeof (f = foo.bar)());



var x = 1;
if (function f(){}) {
    x += typeof f;
}
x;
