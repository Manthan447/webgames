var background_img= "racing track.jpg";
var car_1_height = 100;
var car_1_width= 50;
var car_1_x = 0;
var car_1_y = 0;
var car_1_img= "car.jpg"
var car_2_height = 100;
var car_2_width= 50;
var car_2_x = 0;
var car_2_y = 50;
var car_2_img= "car2.png"
canvas = document.getElementById("image_canvas");
ctx = canvas.getContext("2d");
function add(){
    background_imgTag= new Image();
    background_imgTag.onload = upload_background;
    background_imgTag.src= background_img;
    car_1_imgTag= new Image();
    car_1_imgTag.onload = upload_car;
    car_1_imgTag.src= car_1_img;
    car_2_imgTag= new Image();
    car_2_imgTag.onload = upload_car_2;
    car_2_imgTag.src= car_2_img;
}
function upload_background(){
    ctx.drawImage(background_imgTag , 0, 0, canvas.width, canvas.height);
}
function upload_car(){
    ctx.drawImage(car_1_imgTag , car_1_x, car_1_y , car_1_width, car_1_height);
}
function upload_car_2(){
    ctx.drawImage(car_2_imgTag , car_2_x, car_2_y , car_2_width, car_2_height);
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e){
    keypress= e.keyCode;
    if(keypress == "38"){
        up()
        console.log("UP")
    }
    if(keypress == "39"){
        right()
        console.log("right")
    }
    if(keypress == "37"){
        left()
        console.log("Left")
    }
    if(keypress == "40"){
        down()
        console.log("Down")
    }
    if(keypress == 87){
        W
        console.log("W_up")
    }
    if(keypress == 83){
        S
        console.log("S_down")
    }
    if(keypress == 65){
        A
        console.log("A_left")
    }
    if(keypress == 68){
        D
        console.log("D_right")
    }
}
function up(){
    if(car_1_y > 0){
        car_1_y = car_1_y - 10;
        upload_background();
        upload_car();
    }
}
function down(){
    if(car_1_y < 500){
        car_1_y= car_1_y + 10;
        upload_background();
        upload_car();
    }
}
function right(){
    if(car_1_x < 700){
        car_1_x = car_1_x + 10;
        upload_background();
        upload_car();
    }
}
function left(){
    if(car_1_x > 0){
        car_1_x = car_1_x - 10;
        upload_background();
        upload_car();
    }
}
function W(){
    if(car_2_y > 0){
        car_2_y = car_2_y - 10;
        upload_background();
        upload_car_2();
    }
}
function S(){
    if(car_2_y < 500){
        car_2_y = car_2_y + 10;
        upload_background();
        upload_car_2();
    }
}
function A(){
    if(car_2_x < 500){
        car_2_x= car_2_x + 10;
        upload_background();
        upload_car_2();
    }
}
function D(){
    if(car_2_x < 500){
        car_2_x= car_2_x + 10;
        upload_background();
        upload_car_2();
    }
}