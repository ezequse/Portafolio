class Score extends Phaser.Scene {
  constructor() {
    super('score');
  }

  preload ()
  {
    
    this.load.image('score', 'assets/Ranking.png')
    this.load.audio("click", "assets/audio/Boton.mp3");
    this.load.image('backboton', 'assets/back_button.png');
    
  }
  create() {
      var Score = this.add.image( 400, 300, 'score').setDisplaySize(800, 600);
      var atras = this.add.image( 145, 385, 'backboton').setDisplaySize(90, 110);
      var music = this.sound.add("click", {loop: false});
      atras.setInteractive();
      atras.on("pointerdown", () => {
        music.play();
        
        this.scene.start('Menuprincipal');
      });
    }
}