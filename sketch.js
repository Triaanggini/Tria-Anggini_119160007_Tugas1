let a=150;
x = 10;




function setup() {
  //Tria Anggini (119160007)
  // put setup code here
  createCanvas(400,200)


}

function draw() {
  // put drawing code here
  background(255,231,161);


  //warna baground
  fill(245,66,129)
  rect(0,0,400,30)
  fill(255,255,255)
  rect(0,30,400,30)
  fill(143,40,143)
  rect(0,60,400,30)
  fill(245,107,27)
  rect(0,90,400,30)
  fill(69,237,88)
  rect(0,120,400,30)
  fill(235,136,221)
  rect(0,145,400,30)
  fill(207,62,81)
  rect(0,170,400,30)

  //garis tengah
  line(200,0,200,200);

       //gambar robot sebelah kiri

  //tangan kiri
  strokeWeight(1)
  fill(68,253,197)
  ellipse(75,80,13,16)
  ellipse(68,85,10,14)
  ellipse(64,90,9,13)
  ellipse(60,94,7,10)
  fill(243,193,27)
  strokeWeight(2)
  ellipse(57,98,8,8)
  //tangan kanan
  strokeWeight(1)
  fill(68,253,197)
  ellipse(125,80,13,16)
  ellipse(132,85,10,14)
  ellipse(136,90,9,13)
  ellipse(140,94,7,10)
  fill(243,193,27)
  strokeWeight(2)
  ellipse(143,98,8,8)

  //badan 
  strokeWeight(1)
  fill(68,253,197)
  rect(75,75,50,60);
  fill(143,252,219)
  rect(78,77,44,40)
  fill(243,193,27)
  rect(82,85,35,25, radians(300), radians(300))
  fill(243,193,27)
  ellipse(85,125,10,10)
  ellipse(115,125,10,10)
  fill(0,0,0)
  rect(94,122,12,3, radians(100))
  rect(94,127,12,3, radians(100))

  //kaki kiri
  strokeWeight(1)
  fill(68,253,197)
  rect(77,135,20,5,radians(200))
  rect(77,140,20,5,radians(200))
  rect(77,145,20,5,radians(200))
  fill(243,193,27)
  strokeWeight(2)
  arc(97,160,60,25,radians(180),radians(270))
  //kaki kanan
  strokeWeight(1)
  fill(68,253,197)
  rect(103,135,20,5,radians(200))
  rect(103,140,20,5,radians(200))
  rect(103,145,20,5,radians(200))
  fill(243,193,27)
  strokeWeight(2)
  arc(103,160,60,25,radians(270), radians(360))

  //leher
  strokeWeight(1)
  fill(243,193,27)
  rect(85,70,30,5)
  rect(87,65,26,5)

  //kepala
  strokeWeight(1)
  fill(68,253,197)
  rect(68,25,65,40, radians(150), radians(150))

  //mata
  strokeWeight(1)
  fill(246,241,169)
  ellipse(85,40,13,13)
  fill(246,241,169)
  ellipse(115,40,13,13)
  strokeWeight(7)
  point(82,40)
  point(112,40)
  
  //telinga
  strokeWeight(2)
  fill(243,193,27)
  rect(63,35,5,15, radians(200), radians(300))
  rect(133,35,5,15, radians(200), radians(300))

  //mulut
  strokeWeight(1)
  fill(255,0,0)
  arc(100,55,20,10,radians(0), radians(180))

  //gambar robot sebelah kanan animasi
  //tangan kiri
  strokeWeight(1)
  fill(68,253,197)
  ellipse(275,80,13,16)
  ellipse(268,85,10,14)
  ellipse(264,90,9,13)
  ellipse(260,94,7,10)
  fill(243,193,27)
  strokeWeight(2)
  ellipse(257,98,8,8)
  //tangan kanan
  strokeWeight(1)
  fill(68,253,197)
  ellipse(325,80,13,16)
  ellipse(332,85,10,14)
  ellipse(336,90,9,13)
  ellipse(340,94,7,10)
  fill(243,193,27)
  strokeWeight(2)
  ellipse(343,98,8,8)
 
  //badan
  strokeWeight(1)
  fill(68,253,197)
  rect(275,75,50,60);
  rect(278,77,44,40)
  fill(243,193,27)
  rect(282,85,35,25, radians(300), radians(300))
  ellipse(285,125,10,10)
  ellipse(315,125,10,10)
  fill(0,0,0)
  rect(294,122,12,3, radians(100))
  rect(294,127,12,3, radians(100))

  //kaki kiri
  var b = 135+1*Math.sin(radians(90)/10*x)
  var c = 138+2*Math.sin(radians(90)/10*x)
  var d = 141+3*Math.sin(radians(90)/10*x)
  var e = 157+4*Math.sin(radians(90)/10*x)
  x += 1
  strokeWeight(1)
  fill(68,253,197)
  rect(277,b,20,5,radians(200))
  rect(277,c,20,5,radians(200))
  rect(277,d,20,5,radians(200))
  fill(243,193,27)
  strokeWeight(2)
  arc(297,e,60,25,radians(180),radians(270))
  //kaki kanan
  strokeWeight(1)
  fill(68,253,197)
  rect(303,b,20,5,radians(200))
  rect(303,c,20,5,radians(200))
  rect(303,d,20,5,radians(200))
  fill(243,193,27)
  strokeWeight(2)
  arc(303,e,60,25,radians(270), radians(360))

  //leher
  strokeWeight(1)
  fill(243,193,27)
  rect(285,70,30,5)
  rect(287,65,26,5)

  //kepala
  strokeWeight(1)
  fill(68,253,197)
  rect(268,25,65,40, radians(150), radians(150))

  //mata
  strokeWeight(1)
  fill(246,241,169)
  ellipse(285,40,13,13)
  fill(246,241,169)
  ellipse(315,40,13,13)
  strokeWeight(7)
  point(282,40)
  point(312,40)

  //telinga
  strokeWeight(1)
  fill(243,193,27)
  strokeWeight(2)
  rect(263,35,5,15, radians(200), radians(100))
  rect(333,35,5,15, radians(200), radians(100))
  
  //mulut
  strokeWeight(1)
  fill(255,0,0)
  var a = 300+8*Math.sin(radians(90)/10*x)
  x += 1
  arc(a,55,20,10,radians(0), radians(180))

}