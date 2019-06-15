var submit = document.querySelector("button");
submit.addEventListener("click" , generate);
var copybtn = document.querySelector("click" , copytc);

function generate()
{
    var int = document.querySelector("#int");
    var spint = document.querySelector("#sp-int");
    var tc = parseInt(document.querySelector("#tc").value);

    if(int.checked)
    {
        var from = parseInt(document.querySelector("#intfrom").value),
            to = parseInt(document.querySelector("#intto").value);
    }
    else
    {
        from = null;
        to = null;
    }
    if(spint.checked)
    {
        var spfrom = parseInt(document.querySelector("#spintfrom").value),
            spto = parseInt(document.querySelector("#spintto").value),
            vals = parseInt(document.querySelector("#count-val").value);
    }
    console.log(from , to , spfrom , spto);

    var output = "";
    for(var i=0 ; i<tc ; i++)
    {
        output += randomselect(from , to) + "<br>";
        for(var j=0 ; j<vals ; j++)
            output += randomselect(spfrom , spto) + " ";
        output += "<br>"; 
    }
    if(output)
    {
        var fill = document.querySelector(".fill");
        fill.innerHTML = output;
    }
    else
    {
        var error = "<strong is-danger is-size-3>Cannot generate, check again.</strong>";
        fill.innerHTML = error;
    }
    
}

function copytc()
{
    var testcases = document.getElementsByTagName("pre").value;
    console.log(testcases);
    // testcases.select();
    // testcases.execCommand("copy");
}

function randomselect(min , max)
{
    var rand = Math.floor(Math.random() * (max - min + 1) + min);
    return rand;
}
