var input_boxes = document.getElementById("input_boxes");

input_boxes.addEventListener("click" , createInputs());
function createInputs()
{
    var test_case_number = document.getElementById("testcases").value;
    var elements = document.getElementById("elements").value;

    console.log(test_case_number);
    console.log(elements);
}