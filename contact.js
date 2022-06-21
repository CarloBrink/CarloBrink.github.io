function contact() {
    var script_url = "https://script.google.com/macros/s/AKfycbxlsj7Gm_qq_tWjrBGlIDGvdxml-V49ApiCm8w31HezTpj-xAFPh7LCPmu5VhASGPLJmA/exec"
    //get data from form
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
    //send data
    var url = script_url + "?callback=thanks&name=" + encodeURIComponent(name) + "$email=" + encodeURIComponent(email) + "$subject=" + encodeURIComponent(subject) + "$message=" + encodeURIComponent(message);
      jQuery.ajax({ 
          crossDomain: true,
          url: url,
          method: "GET",
          dataType: "jsonp"
      });
    }

    function thanks(e) {
        //conformation
        alert("Thank you, I will get back to you as soon as possible.");
    }


    