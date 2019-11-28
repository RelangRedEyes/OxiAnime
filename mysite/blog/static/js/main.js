window.errors = 0;

$(document).ready(function() {

    $("body").on("click", "#btn_registrar", function() {

        var email = $("exampleInputEmail1").val(),
            pass = $("exampleInputPassword1").val(),
            rePass = $("exampleInputPassword2").val();

        window.errors = 0;

        if (email.trim() == "" || pass.trim() == "" || rePass.trim() == "") {
            window.errors += 1;
        } else {
            if (pass.trim() != rePass.trim()) {
                window.errors += 1;
            }
        }
        alert(email + ' ' + pass + ' ' + rePass);
        alert(window.errors);
        if (window.errors == 0) {

            $("#btn_registrar").attr("data-toggle", "modal");
            $("#btn_registrar").attr("data-target", "#exampleModal");
        }



    });


});