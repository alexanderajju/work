$(document).ready(function(){
    jQuery.validator.addMethod("alphanumeric", function (value, element) {
        return this.optional(element) || /^[\w.]+$/i.test(value);
    }, "Letters, numbers, and underscores only please");

    jQuery.validator.addMethod("specialChars", function (value, element) {
        var regex = new RegExp("^[a-zA-Z0-9]+$");
        var key = String.fromCharCode(event.charCode ? event.which : event.charCode);

        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    }, "please use only alphanumeric or alphabetic characters");
   

    $("#contact").validate({
        rules:{
            name:{
                required:true,
                minlength:5,
                
            },
            
            mail:{
                required:true,
                email:true,
            },
            subject:{
                required:true,
            },
            message:{
                required: true,

            },
            mobile:{
                required: true,
                number: true,
                minlength:10,
            }

            
                
                
           
        
        },
        messages:{
            name:{
                required:"enter firstname"
            }
            
        }
       
    })
})