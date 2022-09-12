//IIFE -- Immediately Invoked Function Expression
//aka > Self Executing Function
(function()
{

    function Start()
    {
        console.log("App Started!");
    }

    window.addEventListener("load", Start);

})();