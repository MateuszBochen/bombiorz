function Bomba(x, y, z) {
    this.pozycja = { x: x, y: y };
    this.zasieg = z || 1;
    this.zaplon = 3000;
    this.czaswybuchu = 300;
    this.kolor = '#ff8800';
    this.kolorWybuchu = '#0088ff';
    this.sciezkaWybuchu = [];
    this.wybucha = 0;
    this.rysuj = function() {
        context.fillStyle = this.kolor;
        context.fillRect(this.pozycja.x*f_size, this.pozycja.y*f_size, f_size, f_size);
    };

    this.sciezkaBomby = function() {
        var sciezkaWLewo = [];
        for (var xz = this.pozycja.x - 1; xz >= this.pozycja.x - this.zasieg; xz--) {
             sciezkaWLewo.push({ x:xz, y:this.pozycja.y });
        }
        var sciezkaWPrawo = [];
        for (var xz = this.pozycja.x + 1; xz <= this.pozycja.x + this.zasieg; xz++) {
             sciezkaWPrawo.push({ x:xz, y:this.pozycja.y });
        }

        var sciezkaWGore = [];
        for (var yz = this.pozycja.y - 1; yz >= this.pozycja.y - this.zasieg; yz--) {
             sciezkaWGore.push({ x:this.pozycja.x, y:yz });
        }
        var sciezkaWDol = [];
        for (var yz = this.pozycja.y + 1; yz <= this.pozycja.y + this.zasieg; yz++) {
             sciezkaWDol.push({ x:this.pozycja.x, y:yz });
        }

        return {
            lewo: sciezkaWLewo,
            prawo: sciezkaWPrawo,
            gora: sciezkaWGore,
            dol: sciezkaWDol
        };
    }

    this.rysujWybuch = function(){        
        context.fillStyle = this.kolorWybuchu;
        for (kierunek in this.sciezkaWybuchu) {
            for (pozycja in this.sciezkaWybuchu[kierunek]) {
                var cp = this.sciezkaWybuchu[kierunek][pozycja];
                context.fillRect(cp.x * f_size, cp.y * f_size, f_size, f_size);
            }
        }

        this.rysuj();
    };

    this.wybuchnij = function(sciezkaBomby) {
        this.sciezkaWybuchu = sciezkaBomby;        
        this.wybucha = 1;
    };
}