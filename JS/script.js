var input_boxes = document.getElementById("input_boxes");

input_boxes.addEventListener("click" , createInputs);
function createInputs()
{
    var test_case_number = document.getElementById("testcases").value;
    var elements = document.getElementById("elements").value;

    for(var i=0 ; i<elements ; i++)
    {
        var input = document.createElement("input");
        input.setAttribute('type', 'text');
        input.className = "input is-info";
        input.id = "added-boxes"
        var boxlist = document.getElementById("parentDiv");
        boxlist.appendChild(input);
    }
}

var reset_btn = document.getElementById("reset");

reset_btn.addEventListener("click" , removeBoxes);
function removeBoxes()
{
    var rem = document.querySelectorAll("#added-boxes");
    for(var i=0 ; i<rem.length ; i++)
        rem[i].remove();
}