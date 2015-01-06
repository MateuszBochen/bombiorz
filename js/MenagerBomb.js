function MenagerBomb(grid) {
    this.bomby = [];

    this.dodajBombe = function(bomba) {
        this.bomby.push(bomba);
        grid.wezPole(bomba.pozycja).ustawBombe(bomba);
    };

    this.usunBombe = function() {
        var bomba = this.bomby.shift()
        grid.wezPole(bomba.pozycja).ustawPuste();
        
        for (kierunek in bomba.sciezkaWybuchu) {
            for (pozycja in bomba.sciezkaWybuchu[kierunek]) {
                var cp = bomba.sciezkaWybuchu[kierunek][pozycja];
                grid.wezPole(cp).ustawPuste();
            }
        }
        
    };

    this.przerysujBomby = function() {
        var bombyDoUsuniecia = 0;

        for (var i in this.bomby) {
            //console.log([this.bomby[i].zaplon, i]);
            if (this.bomby[i].wybucha == 0 && this.bomby[i].zaplon <= 0) {
                var sciezkaBomby = this.bomby[i].sciezkaBomby();
                sciezkaBomby = this.palWszystko(sciezkaBomby);
                this.bomby[i].wybuchnij(sciezkaBomby);
                console.log('palWszystko');
                //bombyDoUsuniecia++;
            } if(this.bomby[i].czaswybuchu <= 0 ) {
                bombyDoUsuniecia++;
            } if(this.bomby[i].wybucha == 1) {
                this.bomby[i].rysujWybuch();
                this.bomby[i].czaswybuchu -= odswiezanie;
            }
            else {
                this.bomby[i].zaplon -= odswiezanie;
                this.bomby[i].rysuj();
            }
        }
        for (var i=0; i<bombyDoUsuniecia; i++) {
            this.usunBombe();
        }
        //console.log('---');
    };

    this.palWszystko = function(sciezkaBomby) {
        var wypalonaSciezka = {
            prawo: [],
            lewo: [],
            gora: [],
            dol: []
        };

        for (kierunek in sciezkaBomby) {
            for (pozycja in sciezkaBomby[kierunek]) {
                var cp = sciezkaBomby[kierunek][pozycja];
                if(cp.x < 0 || cp.y < 0 || cp.x > width || cp.y > height) {
                    continue;
                }
                //console.log(cp);
                var pole = grid.wezPole(cp);
                if (pole.jestPuste()) {
                    wypalonaSciezka[kierunek].push(cp);
                    pole.ustawWybuch();
                }
                else if (pole.jestBeton()) {
                    break;
                }
                else if (pole.jestMurek()) {
                    wypalonaSciezka[kierunek].push(cp);
                    pole.ustawWybuch();
                    break;
                }
                else if (pole.jestLudzik()) {
                    wypalonaSciezka[kierunek].push(cp);
                    pole.zawartosc.umrzyj();
                    pole.ustawWybuch();
                }
                else if (pole.jestBomba()) {
                    //wypalonaSciezka[kierunek].push(cp);
                    pole.zawartosc.zaplon = 0;
                    pole.ustawPuste();
                    break;
                }
            }
        }
        return wypalonaSciezka;
    };
}