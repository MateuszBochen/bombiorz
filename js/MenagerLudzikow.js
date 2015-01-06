function MenagerLudzikow(grid, menagerBomb){
    this.kolekcjaLudzikow = [];

    this.dodajLudzika = function(ludzik) {
        this.kolekcjaLudzikow.push(ludzik);
        ludzik.ustawIndex(this.kolekcjaLudzikow.lenght-1);
        ludzik.ustawKlaseRuchu((new Ruch(ludzik)).init());
    };

    this.usunLudzika = function(ludzik) {
        var nowaKolekcja = [];
        for (i in this.kolekcjaLudzikow) {
           this.kolekcjaLudzikow[i].ustawIndex(i);
           if (ludzik.index != i) {
                nowaKolekcja.push(this.kolekcjaLudzikow[i]);
           }
        }
        this.kolekcjaLudzikow = nowaKolekcja;;
    };

    this.przerysuj = function() {
        for (index in this.kolekcjaLudzikow) {
            var ludzik = this.kolekcjaLudzikow[index];
           /*  if (!lidzik) {
                continue;
            } */

            grid.wezPole(ludzik.wezPozycje()).ustawPuste();

            this.czyLudzikUmarl(ludzik);
            this.czyLudzikStawiaBombe(ludzik);

            var ruch = ludzik.klasaRuchu;
            var ruchLudzika = ruch.ruchLudzika();
            var ruchLudzika2 = ruch.ruchLudzika();
            var rl1 = {x: Math.floor(ruchLudzika.x), y: Math.floor(ruchLudzika.y)};
            var rl2 = {x: Math.ceil(ruchLudzika.x), y: Math.ceil(ruchLudzika.y)};
           
            var pole = grid.wezPole(ruchLudzika);
            var pole2 = grid.wezPole(rl2);
            //console.log(['RL2: ',ruchLudzika2.x, ruchLudzika2.y]);
            ruch.sprawdzCzyLudzikMoze(ruchLudzika2, pole, pole2);            
            ludzik.rysuj();
            grid.wezPole(ludzik.wezPozycje()).ustawLudzika(ludzik);
        }
    };

    this.czyLudzikStawiaBombe = function(ludzik) {
        if (ludzik.stawiamBombe) {
            menagerBomb.dodajBombe(ludzik.stawiamBombe);
            ludzik.stawiamBombe = false;
        }
    }

    this.czyLudzikUmarl = function(ludzik) {
        if (ludzik.umarlem) {
            this.usunLudzika(ludzik);
        }
    }
}