// button for input box addition
var input_boxes = document.getElementById("input_boxes");

// creating the boxes dyanamically
input_boxes.addEventListener("click" , createInputs);
function createInputs()
{
    // getting number of boxes to ceate
    var elements = parseInt(document.getElementById("elements").value);
    // error handler
    if(!(elements))
        errorMsg;
    
    var test_case_number = parseInt(document.getElementById("testcases").value);
    // error handler    
    if(!(test_case_number))
        errorMsg();

    for(var i=0 ; i<elements ; i++)
    {
        // creating input element
        var input = document.createElement("input");
        // adding attributes, class names and id
        input.setAttribute('type', 'text');
        input.className = "input is-info";
        input.id = "added-boxes"
        // the parent element to place created boxes
        var boxlist = document.getElementById("parentDiv");
        boxlist.appendChild(input);
    }
}

// to remove all boxes in case of error
var reset_btn = document.getElementById("reset");

reset_btn.addEventListener("click" , removeBoxes);
function removeBoxes()
{
    // selecting all boxes and iterating
    var rem = document.querySelectorAll("#added-boxes");
    for(var i=0 ; i<rem.length ; i++)
        rem[i].remove();
}

// generating testcases
var submit = document.getElementById("submit");
submit.addEventListener("click" , generate);
function generate()
{
    // final testcases string declaration
    var testcases = "";

    // total number of testcases needed
    var test_case_number = parseInt(document.getElementById("testcases").value);

    // for errors, reset
    var reset_btn = document.getElementById("reset");

    // getting info from all created boxes
    var newBoxes = document.querySelectorAll("#added-boxes");
    for(var i=0 ; i<newBoxes.length ; i++)
    {
        // text inserted as per format converted to lowercase
        // and making a list by splitting
        var code = newBoxes[i].value.toLowerCase().split(" ");
        console.log(code);

        // getting all elements by value
        var type = code[0],
            lowerBound = parseInt(code[1]) || -1,
            upperBound = parseInt(code[2])+1 || -1,
            times = parseInt(code[3]) || 0;

        // debug
        console.log(type , lowerBound , upperBound , times);

        // to paste testcases here
        var answer = document.getElementById("answer");
        answer.value = "";
        
        // test_case_number times generation
        for(var test=0 ; test<test_case_number ; test++)
        {
            // used to add stuff to final testcases
            var add;
            if(type === "int")
            {
                // error handler
                if(lowerBound == -1 || upperBound == -1 || times != 0)
                {
                    errorMsg();
                    return;    
                }
                add = String(getRandomNumber(lowerBound , upperBound));
            }
            else if(type === "char")
            {
                // error handler
                if(lowerBound != -1 || upperBound != -1 || times != 0)
                {
                    errorMsg();
                    return;
                }
                add = String(getRandomChar());
            }
            else if(type === "sp-int")
            {
                // error handler
                if(lowerBound == -1 || upperBound == -1 || times == 0)
                {
                    errorMsg();
                    return;
                }
                // element for space separated integers
                var intelt = "";
                for(var j=0 ; j<times ; j++)
                    intelt += (String(getRandomNumber(lowerBound , upperBound)) + " ");
                add = (intelt + "\n");
            }
            else if(type === "string")
            {
                // error handler
                if(lowerBound == -1 || upperBound == -1 || times != 0)
                {
                    errorMsg();
                    return;
                }
                // for individual characters
                var strelt = "",
                    len = getRandomNumber(lowerBound , upperBound);
                for(var j=0 ; j<len ; j++)
                    strelt += getRandomChar();
                add = (strelt + "\n");
            }
            else
            {
                errorMsg();
                reset_btn.click();
                return;
            }
            testcases += (add + "\n");
        }
    }
    // debug
    console.log(testcases);
    
    // show on the page
    answer.value += (testcases + "\n");
}

// handling errors
function errorMsg()
{
     // Error
     console.log("Error");
     alert("There seems to be an error in your input, please check Format tab for more info.")
}

// for a random integer in [min , max]
function getRandomNumber(min, max)
{
    var random_number = Math.floor(Math.random() * (max - min) + min);
    return random_number;
}

// for a random character
function getRandomChar()
{
    var alpha = "qwertyuiopasdfghjklzxcvbnm";
    var random_index = getRandomNumber(0 , 25);
    var random_char = alpha.charAt(random_index);
    return random_char;
}