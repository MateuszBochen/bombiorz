function Pole(x, y) {
    this.pozycja = { x: x, y: y };
    this.typyPol = {
        'puste': 0,
        'beton': 1,
        'murek': 2,
        'bomba': 3,
        'ludzik': 4,
        'wybuch': 5
    };

    this.zawartosc;

    this.typPola = this.typyPol.puste;

    this.ustawBeton = function() {
        this.typPola = this.typyPol.beton;
    };

    this.jestBeton = function() {
        return this.typPola == this.typyPol.beton ? 1 : 0;
    };

    this.ustawMurek = function() {
        this.typPola = this.typyPol.murek;
    };

    this.jestMurek = function() {
        return this.typPola == this.typyPol.murek ? 1 : 0;
    };

    this.ustawPuste = function() {
        this.typPola = this.typyPol.puste;
        this.zawartosc = false;
    };

    this.jestPuste = function() {
        return this.typPola == this.typyPol.puste ? 1 : 0;
    };

    this.ustawLudzika = function(ludzik) {
        this.typPola = this.typyPol.ludzik;
        this.zawartosc = ludzik;
    };

    this.jestLudzik = function() {
        return this.typPola == this.typyPol.ludzik ? 1 : 0;
    };

    this.ustawBombe = function(bomba) {
        this.typPola = this.typyPol.bomba;
        this.zawartosc = bomba;
    };

    this.jestBomba = function() {
        return this.typPola == this.typyPol.bomba ? 1 : 0;
    };
    
    this.ustawWybuch = function() {
        this.typPola = this.typyPol.wybuch;        
    };

    this.jestWybuch = function() {
        return this.typPola == this.typyPol.wybuch ? 1 : 0;
    };
}