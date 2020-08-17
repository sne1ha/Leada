let images = [];
let imgIndex = 0;

let names = [];
let namesIndex = 0;

let learned = [];

let prev;
let prevL;
let prevI;

let started = false;

let img0 = "round.png";
let img1 = "a.png";
let img2 = "b.png";
let img3 = "c.png";
let img4 = "d.png";
let img5 = "e.png";
let img6 = "f.png";
let img7 = "g.png";
let img8 = "h.png";
let img9 = "i.png";
let img10 = "j.png";
let img11 = "k.png";
let img12 = "l.png";
let img13 = "m.png";
let img14 = "n.png";
let img15 = "o.png";
let img16 = "p.png";
let img17 = "q.png";
let img18 = "r.png";
let img19 = "s.png";
let img20 = "t.png";
let img21 = "u.png";
let img22 = "v.png";
let img23 = "w.png";
let img24 = "x.png";
let img25 = "y.png";
let img26 = "z.png";




function preload() {

  // put everything in their arrays
  images[0] = loadImage(img0);
  names[0] = "";

  images[1] = loadImage(img1);
  names[1] = "a";

  images[2] = loadImage(img2);
  names[2] = "b";

  images[3] = loadImage(img3);
  names[3] = "c";
  
  images[4] = loadImage(img4);
  names[4] = "d";

  images[5] = loadImage(img5);
  names[5] = "e";

  images[6] = loadImage(img6);
  names[6] = "f";
  
  images[7] = loadImage(img7);
  names[7] = "g";

  images[8] = loadImage(img8);
  names[8] = "h";

  images[9] = loadImage(img9);
  names[9] = "i";
  
  images[10] = loadImage(img10);
  names[10] = "j";

  images[11] = loadImage(img11);
  names[11] = "k";

  images[12] = loadImage(img12);
  names[12] = "l";
  
  images[13] = loadImage(img13);
  names[13] = "m";

  images[14] = loadImage(img14);
  names[14] = "n";

  images[15] = loadImage(img15);
  names[15] = "o";
  
  images[16] = loadImage(img16);
  names[16] = "p";

  images[17] = loadImage(img17);
  names[17] = "q";

  images[18] = loadImage(img18);
  names[18] = "r";
  
  images[19] = loadImage(img19);
  names[19] = "s";

  images[20] = loadImage(img20);
  names[20] = "t";

  images[21] = loadImage(img21);
  names[21] = "u";
  
  images[22] = loadImage(img22);
  names[22] = "v";

  images[23] = loadImage(img23);
  names[23] = "w";

  images[24] = loadImage(img24);
  names[24] = "x";
  
  images[25] = loadImage(img25);
  names[25] = "y";

  images[26] = loadImage(img26);
  names[26] = "z";

  


}



function setup() {
  createCanvas(400, 400);
  
  
  for (i = 0; i < 26; i++) {
    
    learned[i] = 0;
    
  }



}


function testIt(input) {

  if (input == names[namesIndex]) {
    return true;
  } else {
    return false;
  }

}

function next() {




  //then..
  
  prevL = learned[imgIndex];
  prevI = imgIndex;


  // increase the image by 1, loop
  if (imgIndex >= images.length - 1) {
    imgIndex = 0;
  } else {
    imgIndex = floor(random(1, images.length-1));
  }

  // increase the name by 1, loop
  if (namesIndex >= images.length - 1) {
    namesIndex = 0;
  } else {
    print(names[namesIndex] + " was just shown.")
    namesIndex = imgIndex; 
    print(names[namesIndex] + " now showing");
  }
  
  
  // if that's the 3rd time u got it right.. REMOVE

  //if it's any besides the last one, check next and splice
  if (namesIndex < images.length - 1) {

    if (prevL > 2) {
      learned.splice(prevI, 1)
      names.splice(prevI, 1)
      images.splice(prevI, 1)
    }


    // otherwise if the next image is the first one then check the first and splice
  } else {
    
    print("uh oh");

    if (learned[0] > 2) {
      learned.splice(0, 1)
      names.splice(0, 1)
      images.splice(0, 1)
    }
    
    print(learned);

  }
  
  
  

}

function mousePressed() {

  print(learned);
  started = true;

}

function keyPressed() {


  if (key == names[namesIndex]) {
    print(key + " is CORRECT!");

    if (learned[namesIndex] > 0) {

      learned[namesIndex]++;

    } else {
      learned[namesIndex] = 1;
    }

    prev = names[namesIndex];
    next();
  } else {
    print(key + " is wrong!");

      if (learned[namesIndex] > 0) {

      learned[namesIndex]--;

    } else {
      learned[namesIndex] = 0;
    }

    prev = names[namesIndex];
    next();
  }
  

  
}


function draw() {
  background(220);
  if (images.length > 2) {
    image(images[imgIndex], 130, 50, 150, 200);
    
  text("(cheating!) the answer is: " + names[namesIndex], 0, 10);
  text("this letter correct: " + learned[namesIndex], 120, 320);
  text("press [space] to skip", 120, 340);
    
  } else {
    text("learning finished! good job!", 100, 150);
  }
  
  if (!started){
    text("click here to load app", 150, 30);
  } else {
    
  }
  
  if (namesIndex > 1){
    text("the previous answer was " + prev, 0, 50);
  } else {
    
  }

}
