
// document.querySelector("h1").innerHTML="hello"
// $("h1").text('hi')
// $("#p1, h1").text('hi')

// $("#p1").html('<b>Goodbye</b>')
// $("#p1").append('Goodbye')
// $("#p1").prepend('Goodbye')

// var myPara = $("<p></p>").text('This is paragraph 1');
// $("#p1").after(myPara)
// $("#p1").before(myPara)

// $("a").attr('href')
// $("a").removeAttr('href')
// $("a").attr('href', "hhtps//www3.com")


// ---------------------tutorial 4--------------------

// $("h1").css("color", "red")
// $("h1").css("font-size", "3rem")
// $("h1").css("font-style", "italic")

// $("h1").css({"color": "green", "font-size": "2rem", "font-style": "italic"})

// document.querySelector("h1").classList.add("style1")
// document.querySelector("h1").classList.remove("style1")

// $("h1").addClass("style1 style2")


// ---------------------- tutorial 5 ---------------------
// ....js....
// document.querySelector('button').addEventListener("click", function(){
//     document.querySelector('h1').innerHTML="you have clicked the button"
// })
// ....jQuery....
// $('button').click(function(){
    // $('h1').text("you have clicked the button")
//     $('h1').toggleClass("style1")
// })

// -------------onek button nia kaj-----------------
// ....js....
// var totalButtons = document.querySelectorAll(".myButton").length;
// for (i=0; i<totalButtons; i++){
//     document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
//         var text = this.innerHTML;
//         document.querySelector("h1").innerHTML = text + " is clicked";
//     })
// }
// ....jQuery....
    // $(".myButton").click(function(){
    //     var value = this.innerHTML;
    //     $("h1").text(value + " is clicked") ;
    // })
    // $(".myButton").on("click",function(){
    //     var value = this.innerHTML;
    //     $("h1").text(value + " is clicked") ;
    // })
    // $(".myButton").on("mouseover",function(){
    //     var value = this.innerHTML;
    //     $("h1").text(value + " is clicked") ;
    // })
    // $(".myButton").on("mouseout",function(){
    //     var value = this.innerHTML;
    //     $("h1").text(value + " is clicked") ;
    // })


    // ---------------------- tutorial 6 ---------------------
    // ....jQuery....

    $("#loginButton").click(function(){

        var pass1 = $("#pass1").val();
        var pass2 = $("#pass2").val();

        if(pass1 != "" && pass2 != ""){

            if(pass1 == pass2){
                alert("Successfully login")
            }
            else{
                alert("Password mismatch")
            }
        }
        else{
            alert("Please Enter The Password!")
        }
    })

    // ---------------------- tutorial 7 ---------------------
    // ....jQuery....
    $("#btn").click(function(){
        // ----------hide & show--------------
        // $("#div1").hide(2000)
        // $("#div1").show(2000)
        // $("#div1").hide(1000).show(1000)
        // $("#div1").toggle(1000)
        // -----------Fade-------------------
        // $("#div1").fadeIn(1000)
        // $("#div1").fadeOut(1000)
        // $("#div1").fadeToggle(1000)
        // $("#div1").fadeTo(1000, 0.7)
        // -------------slide--------------------
        // $("#div1").slideUp(1000)
        // $("#div1").slideDown(1000)
        // $("#div1").slideToggle(1000)
        // -------------Animate--------------
        $("#div1").animate(
            {
                height:"300px", 
                width:"1000",
                marginLeft: "200px"
            },1000)
    })