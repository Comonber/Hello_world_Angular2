var nom = "Pedro";
var hulk = {
    nom: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nom + " smash!!!"); }, 1500);
    }
};
//setTimeout( function(){
//console.log(this.nombre + " Smash!!"); // this apunta al objeto global (Pedro) cuando se ejecuta un Timeot dentro de un objeto
//}, 1500)
hulk.smash();
