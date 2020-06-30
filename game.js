var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
        
    },
    scene: [Inicio, Teaser, Menuprincipal, Informacion, Score, Help, Personaje, gameplay,Ganar, Perder]
};
var game = new Phaser.Game(config);

//----variables globales----
        //stats enemigos
