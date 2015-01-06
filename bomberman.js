

var canvas = document.getElementById('canvas');
var body = document.getElementById('body');
document.keyUp = function() {
    alert('Up');
}
var context = canvas.getContext('2d');
console.log(context);

var f_size = 25;
var width = f_size * 33;
var height = f_size * 25;
var odswiezanie = 70;

canvas.width = width;
canvas.height = height;



var grid = (new MyGrid()).init();
var menagerBomb = new MenagerBomb(grid);
var menagerLudzikow = new MenagerLudzikow(grid, menagerBomb);
var klasaRysujaca = new Rysuj();

klasaRysujaca.dodajKlase(grid, 'rysujGrid')
    .dodajKlase(menagerBomb, 'przerysujBomby')
    .dodajKlase(menagerLudzikow, 'przerysuj');


var i = 2;
var j = 1;
var z = 2;
var b1 = (new Bomba(10, 10 + i*j++, z));
b1.zaplon = 3000;
var b2 = (new Bomba(10, 10 + i*j++, z));
b2.zaplon = 5000;
var b3 = (new Bomba(10, 10 + i*j++, z));
b3.zaplon = 7000;
var b4 = (new Bomba(10, 10 + i*j++, z));
b4.zaplon = 7000;
var b5 = (new Bomba(10, 10 + i*j++, z));
b5.zaplon = 7000;

var bomby = [
    /* b1,
    b2,
    b3,
    b4, */
    b5
];

for (var bomba in bomby) {
    menagerBomb.dodajBombe(bomby[bomba]);
}

var ludziki = [
  /*   (new Ludzik(12, 12)),
    (new Ludzik(6, 6, '#ffff00')),
    (new Ludzik(10, 10, '#ff00ff')),
    (new Ludzik(6, 8, '#0f0f0f')), */
    (new Ludzik(0, 0, '#000000'))
];

for (var ludzik in ludziki) {
    menagerLudzikow.dodajLudzika(ludziki[ludzik]);
}

setInterval(function() {
    klasaRysujaca.przerysuj();
}, odswiezanie);

