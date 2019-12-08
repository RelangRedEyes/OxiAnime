OpenMenu () function {
        document. getElementById ('sidebar'). classList toggle ('active');
        document. getElementById ('lateral_right'). classList toggle ('active');
    }
    myFunction (x) function {
        x. classList toggle ("change");
    }
    
    var text = document. getElementById ("WARNING");
    
    // When the user presses any key on the keyboard, it executes the function
    document. addEventListener ("keyup", function (event) {
    
      // If "uppercase" is pressed, it shows the warning text
      if (event. getModifierState ("CapsLock")) {
        of text . style. display = "block";
      } plus {
        of text . style. display = "none"
      }
    });
    
    // validations
    
    Validate User function () {
      var pass = document. getElementById ("psw"). value ;
      var Pass_inv = document. getElementById ("pass_error");
    
      var user = document. getElementById ("user"). value ;
      var Inv_user = document. getElementById ("user_error");
    if (user == null || user. length == 0) {
        User_Inv. style. display = "block";
        Pass_inv style. display = "block";
    } plus {
        User_Inv. style. display = "none";
        ValidatePassword ();
      }
    }
    ValidatePassword () function {
      var pass = document. getElementById ("psw"). value ;
      var Pass_inv = document. getElementById ("pass_error");
    if (pass == null || pass. length == 0 || pass. length <8) {
        Pass_inv style. display = "block";
        
    } plus {
        Pass_inv style. display = "none";
        alert ("Successful login");
        
      }
    }