"use strict";

// var bob = {
//     _name: "Bob",
//     _friends: ["Guilherme", "Camilla", "Murillo"],
//     printFriends: function printFiends() {
//         // var self = this;
//         this._friends.forEach(function(f) {
//             return console.log(self._name + " knows " + f);
//         });
//     }
// };

// bob.printFriends();


//CONCEITO DE ARROW FUNCTIONS
// var color = () => console.log("red");

// color();

var bob = {
    _name: "Bob",
    _friends: ["Guilherme", "Camilla", "Murillo"],
    printFriends: function printFiends() {
        var _this = this;

        this._friends.forEach(function (f) {
            return console.log(_this._name + " knows " + f);
        });
    }
};

bob.printFriends();
