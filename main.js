var canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;
pet_x = 20;
pet_y = 20;
jadoo_x = 50;
jadoo_y = 50;
block_img_width = 50;
block_img_height = 50;
new_area_height = 100;
new_area_width = 150;
var player_object = "";
var pet_object = "";
var jadoo_object = "download (1).jpeg";
var block_img_object = "";
var obi_img_object = "obi..png";
var new_area = "design1.png";
var obi_count = obi_img_object;
const music = new Audio('Recording.m4a');
var array_1 = ["To Move The Player Press The Up,Down,Left and Right Buttons on your screen.","To Place A Block Just Press The Image Of The Block, Team 2D CRAFT."];
var array_4 = ["2 Questions of Jadoo is in undertesting for mobile version.","For Any Further Info Please Visit 2D CRAFT Info/Support website,Team 2D CRAFT."]
var block = "";
var array_2 = ["The 2 question of Jadoo feature has been delayed."];

function player_update() {
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);

    });
}

function pet_update() {
    fabric.Image.fromURL("pet(1)..jpg",function(Img){
        pet_object = Img;
        pet_object.scaleToWidth(110);
        pet_object.scaleToHeight(100);
        pet_object.set({
            top:pet_y,
            left:pet_x
        });
        canvas.add(pet_object);

    });
}

function new_image(get_image) 
   {
    fabric.Image.fromURL(get_image, function(Img) { 
        block_img_object = Img; 
        block_img_object.scaleToWidth(block_img_width); 
        block_img_object.scaleToHeight(block_img_height); 
        block_img_object.set({ 
            top:player_y, 
            left:player_x 
        }); 
        canvas.add(block_img_object); 
    });
}

function new_area_image() 
   {
    fabric.Image.fromURL("design1.png", function(Img) { 
        new_area = Img; 
        new_area.scaleToWidth(new_area_width); 
        new_area.scaleToHeight(new_area_height); 
        new_area.set({ 
            top:player_y, 
            left:player_x 
        }); 
        canvas.add(new_area); 
    });
}

function obi_image() 
   {
    fabric.Image.fromURL("obi..png", function(Img) { 
        obi_img_object = Img; 
        obi_img_object.scaleToWidth(block_img_width); 
        obi_img_object.scaleToHeight(block_img_height); 
        obi_img_object.set({ 
            top:player_y, 
            left:player_x 
        }); 
        canvas.add(obi_img_object); 
    });
}

function jadoo_update() {
    fabric.Image.fromURL("download (1).jpeg",function(Img){
        jadoo_object = Img;
        jadoo_object.scaleToWidth(110);
        jadoo_object.scaleToHeight(100);
        jadoo_object.set({
            top:jadoo_y,
            left:jadoo_x
        });
        canvas.add(jadoo_object);

    });
}

function grass() {
    new_image("ground.png");
}

function red() {
    new_image("roof.jpg");
}

function light() {
    new_image("unique.png");
}

function yellow() {
    new_image("yellow_wall.png");
}

function stone() {
    new_image("cloud.jpg");
}

function wall() {
    new_image("wall.jpg");
}

function trunk() {
    new_image("trunk.jpg");
}

function ice() {
    new_image("ice-cube-block-500x500.jpg")
}


function pasta() {
    new_image("download (2).jpeg");
    div2.style.display = "block";
      document.getElementById("div2").innerHTML = "Yummy Yummy In My Tummy.";
    setTimeout(function(){
      canvas.remove(block_img_object);
      div2.style.display = "none";
    }, 3000);
}

function bat() {
    new_image("bat..jpg");
    canva.remove(player_object);
    setTimeout(function(){
        canvas.remove(block_img_object);
    }, 3000);
    
}

function tame() {
    pet_x = player_x;
    pet_y = player_y;
    div2.style.display = "block";
    document.getElementById("div2").innerHTML = "Aww you got your self a little friend.";
    setTimeout(function() {
        div2.style.display = "none";
    },5000);
}

function remove() {
    div2.style.display = "block";
    document.getElementById("div2").innerHTML = "sad movement";
    canvas.remove(pet_object);
        setTimeout(function(){
            canvas.add(pet_object);
            div2.style.display = "block";
            document.getElementById("div2").innerHTML = "What's Up, I am Back !!";
            console.log("Pet:😎😎.");
            console.log("Player: I think i just refresh the page.");
            console.log("Pet: Wait wait you can do that, thats cheating.");
            console.log("Player: I WILL, I DON'T CARE I AM THE PLAYER BY THE WAY.😎😎.");
            console.log("Pet: OK FINE I LOSE.");
            console.log("Player: but i will still refresh the page coz of some error.ok.");
            console.log("refreshs the page.");
            console.log("Pet: Hello new player, how are you wanna tame me.");
            setTimeout(function(){
                div2.style.display = "none";
            },3000);
    },5000);
}

function pizza() {
 new_image("pizza..jpeg");
 setTimeout(function(){
    canvas.remove(block_img_object);
    div2.style.display = "block";
    document.getElementById("div2").innerHTML = "Yes pizza.";
    setTimeout(function(){
        div2.style.display = "none";
    }, 3000);
}, 3000);
}

function remove_block() {
    canva.remove(block_img_object);
}

function sus() {
    canvas.remove(player_object);
    setTimeout(function(){
        canvas.add(player_object);
        div2.style.display = "block";
        document.getElementById("div2").innerHTML = "Plz don't press that button again. ok.";
        console.log("That was sus !!.");
        setTimeout(function(){
            div2.style.display = "none";
        },3000);
    },5000)
}

function obi() {
    obi_image();
    if (obi_count = 5){
        light_it_up1.style.display = "block";
    }
}

function light_it_up() {
    canvas.remove(obi_img_object);
    new_area_image();
    light_it_up1.style.display = "none";
    enter1.style.display = "block";
}

function enter() {
    enter1.style.display = "none";
    window.location = "newarea.html";
    console.log("WOW This looks new!!");
    canvas.remove(pet_object);
    setTimeout(function(){
        div2.style.display = "none";
        back1.style.display = "block";
    },5000);
}

function back() {
    div2.style.display = "block";
    document.getElementById("div2").innerHTML = "I am back now. Man what is that place, the temp was so high !!";
    canvas.add(new_image());
    myCanvas.style.backgroundImage = "url(2D(1).png)";
    setTimeout(function(){
        div2.style.display = "none";
    },5000);
}

function up() {
    if(player_y>=0){
        player_y = player_y - block_img_height;
        console.log("block image height ="+block_img_height);
        console.log("when up key is pressed, x="+player_x+"y="+player_y);
        canvas.remove(player_object);
        player_update();
        document.getElementById("div2").innerHTML="Thanks For Playing 2D CRAFT (I will try my best to make it more better).";
        setTimeout(function(){
            div2.style.display = "none";
        }, 10000);
        H_4.style.display = "none";
    }
    if(pet_y>= 0){
        pet_y = Math.floor(Math.random() * 450) + 1;
        canvas.remove(pet_object);
        pet_update();
    }
}

function down() {
    if(player_y<=500){
        player_y = player_y + block_img_height;
        console.log("block image height ="+block_img_height);
        console.log("when up key is pressed, x="+player_x+"y="+player_y);
        canvas.remove(player_object);
        player_update();
        document.getElementById("div2").innerHTML="Thanks For Playing 2D CRAFT (I will try my best to make it more better).";
        setTimeout(function(){
            div2.style.display = "none";
        }, 10000);
        H_4.style.display = "none";
    }
    if(pet_y<=500){
        pet_y = Math.floor(Math.random() * 450) + 1;
        canvas.remove(pet_object);
        pet_update();
    }
}

function left() {
    if(player_x>=0){
        player_x = player_x - block_img_height;
        console.log("block image height ="+block_img_height);
        console.log("when up key is pressed, x="+player_x+"y="+player_y);
        canvas.remove(player_object);
        player_update();
        document.getElementById("div2").innerHTML="Thanks For Playing 2D CRAFT (I will try my best to make it more better).";
        setTimeout(function(){
            div2.style.display = "none";
        }, 10000);
        H_4.style.display = "none";
    }
    if(pet_x>=0){
        pet_x = Math.floor(Math.random() * 840) + 1;
        canvas.remove(pet_object);
        pet_update();
    }
}

function right() {
    if(player_x<=550){
        player_x = player_x + block_img_height;
        console.log("block image height ="+block_img_height);
        console.log("when up key is pressed, x="+player_x+"y="+player_y);
        canvas.remove(player_object);
        player_update();
        document.getElementById("div2").innerHTML="Thanks For Playing 2D CRAFT (I will try my best to make it more better).";
        setTimeout(function(){
            div2.style.display = "none";
        }, 10000);
        H_4.style.display = "none";
    }
    if(pet_x<=850){
        pet_x = Math.floor(Math.random() * 840) + 1;
        canvas.remove(pet_object);
        pet_update();
    }
}
setTimeout(function(){;
    jadoo_update()
    div2.style.display = "block";
    document.getElementById("div2").innerHTML = "What's up, its me jadoo !!";
    console.log("Let's goo jadoo is here too !! Whoooooooo woooooooo !!");
    setTimeout(function(){
        div2.style.display  = "none";
        setTimeout(function(){
            div2.style.display = "block";
            document.getElementById("div2").innerHTML = "So, shall I start asking questions ?";
            console.log("Only 2 qusetions are there come on answer it !!");
            B15.style.display = "block";
            B16.style.display = "block";
        })
    })
},60000);
 
function yep() {
document.getElementById("div2").innerHTML = "So, your first question is What has to be broken before you can use it?"
    B17.style.display = "block";
    B18.style.display = "block";
    B19.style.display = "block";
    B16.style.display = "none";
    B15.style.display = "none";

}

function no() {
    div2.style.display = "block";
    document.getElementById("div2").innerHTML = "Oh, ok i think i have to come again later.";
    canvas.remove(jadoo_object);
    B15.style.display = "none";
    B16.style.display = "none";
}

function ans1() {
    document.getElementById("div2").innerHTML = "Yep thats correct, fun fact there is another ans too its coconut."
    setTimeout(function(){
        B20.style.display = "block";
        B21.style.display = "block";
        B22.style.display = "block";
        B19.style.display = "none";
        B18.style.display = "none";
        B17.style.display = "none";
        B16.style.display = "none";
        B15.style.display = "none";

        document.getElementById("div2").innerHTML = " So, your next question is  What question can you never answer yes to?";
        document.getElementById("B20").innerHTML = "A.Are you asleep yet?"
        document.getElementById("B21").innerHTML = "B.Did you do your homework?"
        document.getElementById("B22").innerHTML = "C.Is the school close today?"
      }, 5000);
}

function ans2() {
    
    document.getElementById("div2").innerHTML = "You got it wrong , (did break box before opening it ? no right).";
    setTimeout(function(){
        document.getElementById("div2").innerHTML = "Sayonara";
        canvas.remove(block_img_object);
        setTimeout(function(){

            B24.style.display = "block";
            B25.style.display = "block";
            B17.style.display = "none";
            B18.style.display = "none";
            B19.style.display = "none";
            B16.style.display = "none";
            B15.style.display = "none";
        
          div2.style.display = "none";
      }, 5000);
      }, 5000);
}

function ans3() {

    document.getElementById("div2").innerHTML = "ahmm no.(But that option is funny.(Who put that option ? Hmm you did. Jadoo: Never mind)) ";
    setTimeout(function(){
      document.getElementById("div2").innerHTML = "Later (Bye).";
      canvas.remove(block_img_object);
      setTimeout(function(){
          B17.style.display = "none";
          B18.style.display = "none";
          B19.style.display = "none";
          B16.style.display = "none";
          B15.style.display = "none";
      
        div2.style.display = "none";
    }, 5000);
    }, 5000);
}

function ans4() {
    document.getElementById("div2").innerHTML = "place 5 obi blocks and then see what happens. Till then Ciao";
    enter1.style.display = "block";
    canvas.remove(jadoo_object);
    setTimeout(function(){
        document.getElementById("div2").innerHTML = "Thanks For Playing 2D CRAFT AND WE WILL MEET AGAIN WITH A DIFFRENT CHALLENGE.";
        div2.style.display = "none";
        enter1.style.display = "none";
        
      }, 10000);
    B22.style.display = "none";
    B21.style.display = "none";
    B20.style.display = "none";
    B19.style.display = "none";
    B18.style.display = "none";
    B17.style.display = "none";
    B16.style.display = "none";
    B15.style.display = "none";

}

function ans5() {

    document.getElementById("div2").innerHTML = "No, that's wrong.(Wait min do you don't do your homework? you should always do your homework. Players: Do you do your homework jadoo huh ? Jadoo: Look Free Robux. Players: Where where. look jadoo is runing away catch him !!)."
    setTimeout(function(){
        document.getElementById("div2").innerHTML = "adiós";
        div2.style.display = "none";
        canvas.remove(block_img_object);

        B24.style.display = "block";
        B25.style.display = "block";
        B22.style.display = "none";
        B21.style.display = "none";
        B20.style.display = "none";
        B19.style.display = "none";
        B18.style.display = "none";
        B17.style.display = "none";
        B16.style.display = "none";
        B15.style.display = "none";

      }, 5000);
}

function ans6() {

    document.getElementById("div2").innerHTML = "No, that's wrong too (The one kid who always forgets when is the school day and when is holiday.)."
    setTimeout(function(){
       document.getElementById("div2").innerHTML = "alavida.";
       setTimeout(function(){
        div2.style.display = "none";
        canvas.remove(block_img_object);
    B22.style.display = "none";
    B21.style.display = "none";
    B20.style.display = "none";
    B19.style.display = "none";
    B18.style.display = "none";
    B17.style.display = "none";
    B16.style.display = "none";
    B15.style.display = "none";

      }, 5000);
      }, 5000);
}

function show() {
    document.getElementById("div22").innerHTML=array_1;
    div22.style.display = "block";
    B1.style.display = "none";
    B2.style.display = "block";
}

function hide() {
    div22.style.display = "none";
    B2.style.display = "none";
    B1.style.display = "block";
}

function total() {
    document.getElementById("div24").innerHTML=block;
    B12.style.display= "none";
    B14.style.display= "block";
    div24.style.display = "block";
}

function hide_total() {
    div24.style.display= "none";
    B14.style.display= "none";
    B12.style.display= "block";
}

function delayed() {
    div2.style.display = "block";
    document.getElementById("div2").innerHTML = array_2;
  delayed_1.style.display = "none";
  delayed_2.style.display = "block";
}

function hide2() {
    div2.style.display = "none";
    delayed_1.style.display = "block";
    delayed_2.style.display = "none";
}

function reviewsupport() {
    window.location = "reviewsupport.html";
}

function  testing_features() {
   div2.style.display = "block";
   document.getElementById("div2").innerHTML = array_4;
}

function instruction() {
    window.location = "video.html"
}

function back() {
    window.location = "index.html";
}

function click() {
    window.location = "index.html";
}

function click2() {
    document.getElementById("div90").innerHTML = "Ans of jadoos questions - in every question the first (option a.) option is correct."
    setTimeout(function() {
        window.location = "index.html";
    },4000);
}

function click1() {
    window.location = "index2.html";
}

function start() {
    window.location = "game.html";
}
