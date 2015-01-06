function MyGrid() {
    this.pola = [];

    this.kolorBetonu= '#fafafa';

    this.kolorMurku = '#dadada';

    this.init = function() {
        for (var i=0; i<width/f_size; i++) {
            this.pola[i] = [];
            for (var j=0; j<height/f_size; j++) {
                this.pola[i][j] = new Pole(i,j);
                this.ustawPole(i,j);
            }
        }

        return this;
    }

    this.rysujGrid = function() {
        for (x in this.pola) {
            for (y in this.pola[x]) {
                if (this.pola[x][y].jestBeton()) {
                    context.fillStyle = this.kolorBetonu;
                    context.fillRect(x*f_size, y*f_size, f_size, f_size);
                }
                else if (this.pola[x][y].jestMurek()) {
                    context.fillStyle = this.kolorMurku;
                    context.fillRect(x*f_size, y*f_size, f_size, f_size);
                }
            }
        }
    };

    this.wezPole = function(pozycja) {
        var n = pozycja;
        n.x = Math.round(n.x);
        n.y = Math.round(n.y);
       
        return this.pola[n.x][n.y];
    };
    
    this.wezPoleZPunktow = function(punkty) {
        
    };

    this.ustawPole = function(i, j) {
        if((+i+1) % 2 == 0 && (+j+1) % 2 == 0) {
            this.pola[i][j].ustawBeton();
        }
        else {
            var rand = Math.floor(Math.random() * 5);
            if (rand == 1) {
                this.pola[i][j].ustawMurek();
            }
        }
    };

}