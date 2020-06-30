class Personaje extends Phaser.Scene {
    constructor() {
      super('personaje');
    }

    preload ()
    {
      this.load.image('background', 'assets/background.png');
      this.load.image('player_woman', 'assets/player_woman.png');
      this.load.image('player_men', 'assets/player_men.png');      
      this.load.image('backboton', 'assets/back_button.png');
      this.load.audio("click", "assets/audio/Boton.mp3");
      this.load.audio("menu", "assets/audio/menu.mp3");
    }

    create() {
      var x = 1;
      var menu = this.sound.add("menu", {loop: true});
     
      var music = this.sound.add("click", {loop: false});
      var background = this.add.image( 400, 300, 'background').setDisplaySize(800, 600);
      var player_woman = this.add.image(550, 300, 'player_woman').setScale(1.50);
      player_woman.setInteractive();
      player_woman.on("pointerdown", () => {
        music.play();
        this.sound.stopAll();
        
        this.scene.start('gameplay');
    });
  
      var player_men = this.add.image(250, 300, 'player_men').setScale(1.50);
      player_men.setInteractive();
      player_men.on("pointerdown", () => {
      menu.stop();
     this.sound.stopAll();
        this.scene.start('gameplay');
    });
      var botonatras = this.add.image( 100, 520, 'backboton').setDisplaySize(150, 80);
      botonatras.setInteractive();
      botonatras.on("pointerdown", () => {
        music.play();
        
        this.scene.start('Menuprincipal');
        
    });
  
  
  }
}
  

