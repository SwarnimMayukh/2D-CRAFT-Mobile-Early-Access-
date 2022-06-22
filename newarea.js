var canvas = new fabric.Canvas('myCanvas');
portal = "design1.png";
player_x = 10;
player_y = 10;
var block_img_object = "";
block_img_width = 50;
block_img_height = 50;
var player_object = "";
function player_update() {
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        player_object.scaleWidth(150);
        player_object.scaleHeight(140);
        player_object.set({
            top: player_y,
            left:player_x

        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_img_object.scaleHeight(block_img_height);
        block_img_object.scaleWidth(block_img_width);
        block_img_object.set({
            top: player_y,
            left:player_x
        });
        canvas.add(block_img_object);
    });
}

function red() {
    new_image("roof.jpg");
}
 
function unique() {
    new_image("unique_png");
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
}




































































//setTimeout(function() {
  //  document.getElementById("div8").innerHTML = "Temp is kind a hot but i can't wait for the next update !!";
    //setTimeout(function(){
    //console.log("Next update is going to be cool !!");
    //window.location = "index.html";
//},3000);
//},5000);
