// Objects

$(document).ready(function () {
//namespace PAC
var PAC = PAC || {};

PAC.PAObject = function() {
    // var amount = 0;
    // var squareSize = 1;
}
PAC.PAObject.prototype.amount = 0;
PAC.PAObject.prototype.squareSize = 1;
PAC.PAObject.prototype.print = function() {
    document.write();
}

PAObjects = {
    "Cookers": {amount: 0, squareSize: 2, squaresNeeded: 0, type: "kitchen"},
};


}); // end document ready function