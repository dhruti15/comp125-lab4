/**
 * @ author : DHRUTI PATEL
 * @ student number : 300857555
 * @ fileName : app.js
 * @ Lab4
 * @ comp125
 * @ summer 2016, centennial college
 */

/**
 * This is an self executing function
 *
 * 
 */
(function () {
    /**
     * Hooking needed elements on the webpage using javascript
     */
    var h1 = document.getElementById("h1");
    h1.innerHTML = "form verification";
    var firstParagraph = document.getElementById("firstParagraph");
    /**
     * addEventListener mouseover
     * 
     */
    firstParagraph.innerHTML = "HELLO,WELCOME TO COMP125";
    
    firstParagraph.addEventListener("mouseover", firstParagraphHover);
    var firstParagraphWasHovered = false;
     function firstParagraphHover() {
        if (firstParagraphWasHovered) {
            firstParagraph.style.color = "#000000";

            firstParagraphWasHovered = false;

        } else {

            firstParagraph.style.color = "#00FF00";

            firstParagraphWasHovered = true;

        }


    }
    /**
     * object orientation creating variables
     * 
     */
    var form = document.getElementById("form");
    var username;
    var password;
    var submitButton = document.getElementById("submitButton");
    submitButton.innerHTML = "Login";
    
    form.addEventListener('submit', function (e) {

        //prevent the normal submission of the form
        e.preventDefault();
        console.log("App Started");
        /**
         * @ creating object UserObject
         */
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

		function Newuser(username, password){
			this.username = username;
			this.password = password;
		}
		Newuser.prototype.info = function(){
			console.log("username = " + this.username);
			console.log("password = " + this.password);
		}

 		var user_a = new Newuser(username, password);
		user_a.info();
        document.getElementById("form").reset();
    });
})();