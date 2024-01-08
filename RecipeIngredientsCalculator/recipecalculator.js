<script>
    "use strict";
    function calculateServingSize() {
        // define constant values (matching those in HTML above) //
        var  = 35;
        cookieAmountvar butterAmount = 125;
        var isugarcookieAmount = 50;
        var eggAmount = 1;
        var vanillaAmount = 1;          
        var flourAmount = 225;
        var isugaricingAmount = 225;
        var waterAmount = 2.5;          
        //calculate total amount//
        var servingInput = document.getElementbyId("servinginput");
        var servingSize = Number(servingInput.value);
        //check the given value is a whole number and warn if not//                                                                                                               
        if (Number.isNaN(servingSize)) {
            alert("Serving size must be a whole number")};
        else {
        //continue with calculations
            var cookies = cookieAmount * servingSize;
            var newButter = butterAmount * servingSize;                                  
            var newisugarCookie = isugarcookieAmount * servingSize;                          
            var newEggs  = eggAmount * servingSize;                                           
            var newVanilla =  vanillaAmount * servingSize;                                          
            var newFlour =   flourAmount * servingSize;                                         
            var newisugarIcing = isugaricingAmount * servingSize;                                          
            var newWater =  waterAmount * servingSize;                                                                                                                                                                                                                            
            //report results//
            document.getElementById("cookies").innerText = cookies;
            document.getElementById("butter").innerText = newButter + "g";                                                                                                            
            document.getElementById("icingsugarcookie").innerText = newisugarCookie + "g";
            document.getElementById("eggs").innerText = newEggs;
            document.getElementById("vanillaextract").innerText = newVanilla + "teaspoon(tsp)";
            document.getElementById("plainflour").innerText = newFlour + "g";
            document.getElementById("icingsugaricing").innerText = newisugarIcing + "g";
            document.getElementById("water").innerText = newWater + "tablespoons(tbsp);
            } 
        }            
</script>