let input=document.getElementById('output');
function display(num){
    input.value+=num;
}
function calculate()
{
    try{
        input.value=eval(input.value);
    }
    catch(err){
alert("invalid");
    }

}
function clear()
{
    input.value='';
}
    function del()
    {
        input.value=0;
    }


