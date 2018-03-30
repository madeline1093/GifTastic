//I need to create a form button and a user input field. once the user puts data into that field, they can push the submit form button. this will take that data and create a button. once the user clicks that button, it will take that user data to make an ajax call to giphy and create an object or array of gifs to display. the gifs will play/stop when clicked

//variables
$(document).ready(function(){
    let food = ["Pizza", "Sushi", "Pasta", "Sandwiches", "Ramen"];

    
    let userInput = $(".js-food-input");

    let foodButton;

    addButton();    

    let foodImageMove;

    function addButton(){
        console.log("adding a button")

        console.log(foodButton);
        console.log(food); 
        $(".js-food-buttons").empty();
        for (i = 0; i< food.length; i++) {
            foodButton = $("<button type='button'>" + food[i] +"</button>").addClass("js-button").attr("data-food", food[i]);
            $(".js-food-buttons").append(foodButton);
            console.log(foodButton.attr("data-food"));
          
        }
        return foodButton.attr("data-food");
    };

/*     function activateGif() {
        let state = $(this).attr("data-state");
        console.log(state);

        if (state === "still") {
            $(this).find("img").attr("src", $(this).find("img").attr("data-animate"));
            $(this).find("img").attr("data-state", "animate");
        } else {
            $(this).find("img").attr("src", $(this).find("img").attr("data-still"));
            $(this).find("img").attr("data-state", "still");
        }
/*         let state = 
        console.log("you clicked a gif");
        let oldSrc = ($(this).attr("src"));
        let newFood = ($(this).attr("id"));
        console.log(newFood);
        console.log($(this).activeImageSrc); */
   // } */
    
//creating buttons
    $("input:submit").on("click",function(){

        event.preventDefault();
        console.log(userInput.val());
        food.push(userInput.val());
        addButton();
        $("form").trigger("reset");
        
    });

   
        //$(".js-food-gifs").empty(); 

    $(document).on("click", '.js-button', function(){
       $(".js-food-gifs").empty();
       // console.log($(this));
        
        let food = ($(this).attr("data-food"));
        console.log(food);
        //console.log(("js-food-buttons").attr("data"));
        //$(".js-food-gifs").empty();
        //let buttonFood = $(this).attr("data");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=c4Imp60ETylPGcXaxmsVUyqAvWwsrNOm&q="+ food + "&limit=25&offset=0&rating=G&lang=en"

        $.ajax({
            url: queryURL,
            method: "GET"
          })
            // After data comes back from the request
            .then(function(response) {
                console.log(food);
              console.log(queryURL);
    
              console.log(response);
              // storing the data from the AJAX request in the results variable
              var results = response.data;
    
              // Looping through each result item
              for (var i = 0; i < results.length; i++) {
                
                    // Creating and storing a div tag
                var foodDiv = $("<div>");
    
                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + results[i].rating);
    
                // Creating and storing an image tag
                var foodImage = $("<img>");
                //var stillImageSrc = results[i].images.fixed_height_still.url;
               // var activeImageSrc= results[i].images.fixed_height.url;

                foodImage.addClass("js-gif " + food);

                // Setting the src attribute of the image to a property pulled off the result item
               
                foodImage.attr("id", food)
                foodImage.attr("src", results[i].images.fixed_height_still.url)
                foodImage.attr("data-still", results[i].images.fixed_height_still.url);
                foodImage.attr("data-animate", results[i].images.fixed_height.url);
                foodImage.attr("data-state", "still");
    
    
                // Appending the paragraph and image tag to the animalDiv
                foodDiv.append(p);
                foodDiv.append(foodImage);
    
                // Prependng the foodDiv to the HTML page in the "#gifs-appear-here" div
                $(".js-food-gifs").prepend(foodDiv);
              }
              
            });
           
    });

    $(document).on('click', '.js-gif', function(){
        console.log('click');
        let state = $(this).attr("data-state");
        console.log(state);

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
            //$(this).find("img").attr("src", $(this).find("img").attr("data-animate"));
            //$(this).find("img").attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
            //$(this).find("img").attr("src", $(this).find("img").attr("data-still"));
            //$(this).find("img").attr("data-state", "still");
        }
        //activateGif();


        //console.log($(this).attr(food));
       /*  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=c4Imp60ETylPGcXaxmsVUyqAvWwsrNOm&q="+ newFood + "&limit=25&offset=0&rating=G&lang=en"
       
        $.ajax({
            url: queryURL,
            method: "GET"
          })

          .then(function(response){
            let results = response.data;
           // for (let i = 0; i < results.length; i++) {
                $(".Pizza").attr("src", results[i].images.fixed_height.url);
            //}
          }) */
          
       // let index = event.target.getAttribute
     
        //let foodImage = this.attr("src", results[i].images.fixed_height.url)
      /*   let state = $(this).attr("data-state");
        if (state === "still" {
            $(this).attr("src", $)
        }) */

    })
    
}); 