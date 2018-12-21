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
    //document.write();
}

PAObjects = {
    "Cookers": {amount: 0, squareSize: 2, squaresNeeded: 0, type: "kitchen"},
};

calculate_cell(); //calculate default values

// cell calculation
$('.cell-calc').on('change', function() {
    switch($(this).attr('id')) {
        case 'cells-per-row':
            if( parseInt($(this).val()) > 2) $('#cells-per-column').val('2');
            break;
        case 'cells-per-column':
            if( parseInt($(this).val()) > 2) $('#cells-per-row').val('2');
            break;
        case 'corridor-vertical-width': 
            if($(this).val() == 0) $('#corridor-vertical').val('0');
            break;
        case 'corridor-vertical': 
            if($(this).val() == 0) $('#corridor-vertical-width').val('0');
            else {
                if( parseInt($('#corridor-vertical-width').val()) == 0 )
                    $('#corridor-vertical-width').val('1')
            }
            break;
        case 'corridor-horizontal-width': 
            if($(this).val() == 0) $('#corridor-horizontal').val('0');
            break;
        case 'corridor-horizontal': 
            if($(this).val() == 0) $('#corridor-horizontal-width').val('0');
            else {
                if( parseInt($('#corridor-horizontal-width').val()) == 0 )
                    $('#corridor-horizontal-width').val('1')
            }
            break;
        
    }
    calculate_cell();
})


function calculate_building() {

}

// per defintion a cell block has no corridors so far
function calculate_block() {

}

function calculate_cell() {
    // first calculate a cell
    var width = parseInt($('#cell-width').val());
    var height = parseInt($('#cell-height').val());

    // now we calculate a block (no corridors, just cells and the walls)
    var rowCells = parseInt($('#cells-per-row').val());
    var colCells = parseInt($('#cells-per-column').val());
    var wallsHrzntl = colCells + 1;
    var wallsVrtcl = rowCells + 1;

    // now calculate multiple cell blocks divided by corridors
    var corrHrzntl = parseInt($('#corridor-horizontal').val());
    var corrVrtcl = parseInt($('#corridor-vertical').val());
    var corrVrtclWidth = parseInt($('#corridor-vertical-width').val());
    var corrHrzntlWidth = parseInt($('#corridor-horizontal-width').val());


    // finally we calculate the needed space for the foundation of the building
    var groundWidth = width*colCells+wallsHrzntl+(corrVrtclWidth*corrVrtcl);
    var groundHeight = height*rowCells+wallsVrtcl+(corrHrzntlWidth*corrHrzntl);
    


    $('#foundation-width').html(groundWidth);
    $('#foundation-height').html(groundHeight);
}

}); // end document ready function