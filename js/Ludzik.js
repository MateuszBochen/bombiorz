function Ludzik(x, y, kolor) {
    this.pozycja = { x: x, y: y};
    this.nowaPozycja = { x: x, y: y};
    this.kolor = kolor || '#ff0000';
    this.index;
    this.stawiamBombe;
    this.umarlem;
    this.czasPodkladaniaBomby = 500;
    this.mogePostawicKolejnaBombe = 0;
    this.speed = 5;
    this.klasaRuchu;
    
    this.ustawPozycje = function(nowaPozycja) {
        this.pozycja.x = (nowaPozycja.x * f_size);// - (f_size/2);
        this.pozycja.y = (nowaPozycja.y * f_size);// - (f_size/2);
       
        return this;
    };

    this.wezPozycje = function() {
        return {
            x: this.pozycja.x / f_size,
            y: this.pozycja.y / f_size,
            x2: (this.pozycja.x + f_size) / f_size,
            y2: (this.pozycja.y + f_size) / f_size,
        };
    };
    
    
    
    this.ustawKlaseRuchu = function(klasa) {
        this.klasaRuchu = klasa;
    };

    this.ustawIndex = function(index) {
        this.index = index;
    };

    this.idzWDol = function() {
        this.nowaPozycja = { x: this.pozycja.x, y: (this.pozycja.y + this.speed)};
    };

    this.idzWGore = function() {
        this.nowaPozycja = { x: this.pozycja.x, y: (this.pozycja.y - this.speed) };
    };

    this.idzWPrawo = function() {
        this.nowaPozycja = { x: (this.pozycja.x + this.speed), y: this.pozycja.y };
    };

    this.idzWLewo = function() {
        this.nowaPozycja = { x: (this.pozycja.x - this.speed), y: this.pozycja.y};
    };
    
    this.wezNowaPozycje = function() {
        return {
            x: this.nowaPozycja.x / f_size,
            y: this.nowaPozycja.y / f_size,
            x2: (this.nowaPozycja.x + f_size) / f_size,
            y2: (this.nowaPozycja.y + f_size) / f_size
        }
    };    
    
    this.rysuj = function() {
        context.fillStyle = this.kolor;
        //context.fillCircle(x*f_size+f_size/2,y*f_size+f_size/2,f_size/2);
        context.fillRect(this.pozycja.x /* + (f_size/2)  */, this.pozycja.y /* + (f_size/2) */, f_size, f_size);
        //console.log(this.pozycja);
        this.mogePostawicKolejnaBombe -= odswiezanie;
    };

    this.podlozBombe = function() {
        if(this.mogePostawicKolejnaBombe <= 0){
            console.log('bomba');
            this.mogePostawicKolejnaBombe = this.czasPodkladaniaBomby;
            var bomba = new Bomba(Math.round(this.wezPozycje().x), Math.round(this.wezPozycje().y), 3);
            this.stawiamBombe = bomba;
            console.log(this.wezNowaPozycje());
        }
    };

    this.umrzyj = function() {
        this.umarlem = true;
    }
}