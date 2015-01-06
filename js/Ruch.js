function Ruch(ludzik) {
    
   
    this.gdzie = -1;
    this.podlozBombe = 0;
    
    this.onKeyPress = function(event){   
       
        this.gdzie = event.keyCode;
    };

    this.onKeyUp = function(event){
        this.gdzie = -1;
    };
    
    this.init = function() {
        var self = this;
        
        document.onkeydown = function(e) {
            self.onKeyPress(e);
        };

        document.onkeyup = function(e) {
            self.onKeyUp(e);
        };
        
        return self;
    }

    this.ruchLudzika = function() {
        /* var podlozBombe = Math.floor(Math.random() * 18);
        var gdzie = Math.floor(4 * Math.random()); */
        var nowaPozycja;
        
        if (this.gdzie == 32) {
            ludzik.podlozBombe();
        }
        
        if (this.gdzie == 40) {
            ludzik.idzWDol();
        }
        else if (this.gdzie == 38) {
            ludzik.idzWGore();
        }
        else if (this.gdzie == 39) {
            ludzik.idzWPrawo();
        }
        else if (this.gdzie == 37) {
            ludzik.idzWLewo();
        } 
        else {
            return ludzik.wezPozycje();
        }

        return nowaPozycja = ludzik.wezNowaPozycje();
    }

    this.sprawdzCzyLudzikMoze = function(nowaPozycja, pole, pole2) {
        
        if ((pole.jestPuste() || pole.zawartosc == ludzik)) {            
            ludzik.ustawPozycje(nowaPozycja);
        }
        else if(pole.jestWybuch()) {
            ludzik.umrzyj();
        }
    }
}