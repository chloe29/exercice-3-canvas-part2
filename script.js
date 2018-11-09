var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
  // tête
ctx.beginPath();
ctx.fillStyle="DarkGoldenRod";
ctx.arc(175,70,30,0,Math.PI*2,true);
ctx.fill();
  // yeux de la tête
ctx.beginPath();
ctx.strokeStyle = "white";
ctx.fillStyle="white";
ctx.arc(165,65,5,0,Math.PI*2,false);
ctx.stroke();
ctx.fill();
ctx.beginPath();
ctx.arc(185,65,5,0,Math.PI*2,false);
ctx.stroke();
ctx.fill();
  // sourcils de la tête
ctx.beginPath();
ctx.arc(165,55,4,0,Math.PI,true);
ctx.strokeStyle = "white";
ctx.stroke();
ctx.beginPath();
ctx.arc(185,55,4,0,Math.PI,true);
ctx.strokeStyle = "white";
ctx.stroke();
  // bouche lèvre du bas
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth=1;
ctx.moveTo(190,80);
ctx.quadraticCurveTo(175,95,160,80,160,80);
ctx.stroke();
  // bouche lèvre du haut
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth=1;
ctx.moveTo(190,80);
ctx.quadraticCurveTo(170,85,160,80,160,80);
ctx.stroke();
  // ligne des bras
ctx.beginPath();
ctx.strokeStyle="DarkGoldenRod";
ctx.lineWidth=20;
ctx.lineCap="round";
ctx.moveTo(100,100);
ctx.lineTo(250,100);
ctx.fill();
ctx.stroke();
  // corps
ctx.fillStyle="DarkGoldenRod";
ctx.fillRect(150,100,50,90);
  // boutons sur le corps
ctx.beginPath();
ctx.strokeStyle = "purple";
ctx.fillStyle="purple";
ctx.arc(175,125,0,0,Math.PI*2,false);
ctx.stroke();
ctx.fill();
ctx.beginPath();
ctx.arc(175,150,0,0,Math.PI,false);
ctx.stroke();
ctx.fill();
  // lignes des jambres
ctx.beginPath();
ctx.strokeStyle="DarkGoldenRod";
// épaisseur des contours
ctx.lineWidth=20;
// permet d'arrondir les lignes dessinées
ctx.lineCap="round";
ctx.moveTo(160,180);
ctx.lineTo(160,230);
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="DarkGoldenRod";
ctx.lineWidth=20;
ctx.lineCap="round";
ctx.moveTo(190,180);
ctx.lineTo(190,230);
ctx.fill();
ctx.stroke();
