function Rysuj() {
    this.kolekcjaKlas = [];
    /**
     *
     * @param obiekt
     * @param srring metoda  
    */ 
    this.dodajKlase = function(klasa, metoda) {
        this.kolekcjaKlas.push({klasa: klasa, metoda: metoda});
        return this;
    };

    this.przerysuj = function() {
        context.fillStyle = '#00ff00';
        context.fillRect(0,0,width,height);

        for (i in this.kolekcjaKlas) {
            var klasa = this.kolekcjaKlas[i].klasa;
            klasa[this.kolekcjaKlas[i].metoda]();
        }
    };
}