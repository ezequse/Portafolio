class Menuprincipal extends Phaser.Scene {
  constructor() {
    super('Menuprincipal');
  }

  preload() {
    this.load.image('carga', 'assets/teaser.png');
    this.load.image('neumo', 'assets/neumoclicker.png');
    this.load.image('jugar', 'assets/boton_jugar.png');
    this.load.image('informacion', 'assets/boton_info.png');
    this.load.image('botonayuda', 'assets/boton_ayuda.png');
    this.load.image('rank', 'assets/boton_rank.png');
    this.load.audio("menu", "assets/audio/menu.mp3");
    this.load.audio("click", "assets/audio/Boton.mp3");
  }

  create() {
    
    var fondo = this.add.image( 400, 300, 'fondo').setDisplaySize(800, 600);
    var neumo = this.add.image( 400, 130, 'neumo').setDisplaySize(400, 50);
    var jugar = this.add.image( 400, 330, 'jugar').setDisplaySize(200, 60);
    var informacion = this.add.image( 680, 330, 'informacion').setDisplaySize(200, 60);
    var ayuda = this.add.image( 120, 330, 'botonayuda').setDisplaySize(200, 60);
    var rank = this.add.image( 400, 460, 'rank').setDisplaySize(200, 60);
    var menu = this.sound.add("menu", {loop: true},);
    var music = this.sound.add("click", {loop: false});
    var x = 1
    console.log(x)
    //menu.play();
    jugar.setInteractive();
      jugar.on("pointerdown", () => {
        music.play();
        
        this.scene.start('personaje');
        
    });
    ayuda.setInteractive();
      ayuda.on("pointerdown", () => {
        music.play();
        this.scene.start('help');
        
    });
    informacion.setInteractive();
      informacion.on("pointerdown", () => {
        music.play();
        this.scene.start('informacion');
    });
    rank.setInteractive();
      rank.on("pointerdown", () => {
        music.play();
        this.scene.start('score');
    });
  }
  
  

}

