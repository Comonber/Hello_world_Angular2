let nom = "Pedro";


let hulk = {
  nom: "Hulk",
  smash(){
      setTimeout( ()=>  console.log( this.nom + " smash!!!"), 1500);
  }
}
    //setTimeout( function(){
      //console.log(this.nombre + " Smash!!"); // this apunta al objeto global (Pedro) cuando se ejecuta un Timeot dentro de un objeto

    //}, 1500)

hulk.smash();
