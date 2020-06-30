class Ganar extends Phaser.Scene {
    constructor() {
      super('ganar');
    }

    preload ()
    {
      this.load.spritesheet('player_men_win', 'assets/player_men_win.png',  { frameWidth: 58.5, frameHeight: 92 });
      this.load.image('win_txt', 'assets/win_txt.png');
      this.load.image('background', 'assets/background.png');
      this.load.image('back_button', 'assets/back_button.png');   
      this.load.audio("menu", "assets/audio/menu.mp3");
      
    }

    create() {

      var background = this.add.image( 400, 300, 'background').setDisplaySize(800, 600);
      var win_txt = this.add.image( 400, 100, 'win_txt').setScale(2);      
      var player_men_win = this.add.sprite(400,350, 'player_men_win').setScale(3);      
      var menu = this.sound.add("menu", {loop: true});
      this.anims.create({
        key: 'player_men_win',
        repeat: -1,
        frameRate: 10,
        frames: this.anims.generateFrameNames('player_men_win', {Start: 1, end: 4})     

      });
      player_men_win.play('player_men_win');      
      
      var back_button = this.add.image(80,500, 'back_button').setScale(1.5);
      back_button.setInteractive()
      back_button.on('pointerdown', () => this.scene.start('Menuprincipal'), menu.play() );

      
    }
}
