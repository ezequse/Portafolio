class gameplay extends Phaser.Scene {
    constructor() {
      super('gameplay');
      
    }
    
    

        
       preload() {
        
            this.load.image('bacteria', 'assets/enemigo_1.png');
            this.load.image('bacteria2', 'assets/enemigo_2.png');
            this.load.image('bacteria3', 'assets/enemigo_3.png');
            this.load.image('barraVida', 'assets/lifebar.png');
            this.load.image('barraVidaR', 'assets/lifebar_red.png');
            this.load.image('boton', 'assets/test_button.png');
            this.load.spritesheet('player', 'assets/player_men_gp.png', { frameWidth: 59, frameHeight: 91 });
            this.load.image('jefe1', 'assets/jefe1.png');
            this.load.image('jefe2', 'assets/jefe2.png');
            this.load.image('ciudad', 'assets/lvl_city.png');
            this.load.image('casa', 'assets/lvl_casa.png');
            this.load.image('background', 'assets/background.png');
            this.load.image('marco','assets/marco_gp.png');
            this.load.image('pasti', 'assets/pasti.png');
            this.load.image('qte_bad1', 'assets/qte_bad1.png');
            this.load.audio('musica_casa', 'assets/audio/hogar.mp3');
            this.load.audio('musica_city', 'assets/audio/ciudad.mp3');
        }
    

    create() { 
        
        var x;
        var vida = 10;
        var maxVida = 10;
        var cont_en = 0;
        var barraVida;
        
        
        //stast player
        var atk = 1;
        var puntos = 0;
        var tiempo;
        var vidaP = 20;
        var maxVidaP = 20;
        var barraVidaPlayer;
        var autoAtk = 1;
        //--------------------------- 
        
        var aa = 0;
        var del = 4000;
        
        var ex = 400;
        var ey = 300;
        

        function cambio (){
            if(cont_en == 14){
            this.scene.start('ganar');
            casaM.stop();
            cityM.stop();
            }
        }
        



        function onEvent (){
            if(aa >= 1){
                if(vida >= 2 && vida > 0){
                    vida = vida - autoAtk;
                    barraVida.setScale(vida/maxVida*2,0.5);
                }
            } 
        }

        function atkP(){
            if(vidaP >=1){
                vidaP--;
                barraVidaPlayer.setScale(vidaP/maxVidaP, 0.5);
                if (vidaP <=0){
                    this.scene.start('perder');
                    casaM.stop();
                    cityM.stop();
                }
            }  
        }

        







        function Qte(){
            var qte = this.add.image(Phaser.Math.FloatBetween(276, 500), 400, 'pasti').setInteractive().setScale(1.2);
            this.physics.world.enable(qte);
            qte.body.setVelocity(0, Phaser.Math.Between(-100, -300));
    
            let pastisR = Phaser.Math.Between(1, 2);
            if(pastisR == 1){
                qte.setTexture('pasti');
            } else {
                qte.setTexture('qte_bad1');
            }
            var clickQTE = qte.on('pointerup', function(pointer){
                if(pastisR == 1){
                    puntos +=1;
                    puntosTxt.setText('Puntos: ' + puntos);
                } else {
                    puntos --;
                    puntosTxt.setText('Puntos: ' + puntos);
                }
                clickQTE.destroy();
            });
        }
       
        
        
        
        
       
        
        var casaM = this.sound.add("musica_casa", {loop: true});
        var cityM = this.sound.add("musica_city", {loop: true});
        casaM.play();

        var bk_Gp = this.add.image(0, 0, 'background').setOrigin(0).setScale(1.92 , 2.5);
        var marco = this.add.image(0, 0, 'marco').setOrigin(0).setScale(1.92 , 2.5);
        var bk_nivel = this.add.image(256.5, 11.5, 'casa').setOrigin(0).setScale(1.92 , 2.5).setInteractive();
        
        //Creacion y pos de sprites
        var bacteria = this.add.image(ex, ey, 'bacteria').setInteractive().setScale(1.5);
        
        
        var txt1 = this.add.text(575, 38, 'Mejora Ataque: $10', {fill: '#fff'});
        var botonAtk = this.add.image(655, 100, 'boton').setInteractive().setScale(1.92 , 2.5);

        var txt2 = this.add.text(555, 230, 'Mejora AutoAtaque: $10', {fill: '#fff'});
        var botonAutoAtk = this.add.image(655, 295, 'boton').setInteractive().setScale(1.92 , 2.5);

        var txt3 = this.add.text(595, 439, 'Curacion: $10', {fill: '#fff'});
        var botonCuracion = this.add.image(655, 500, 'boton').setInteractive().setScale(1.92 , 2.5);
      

        //player stats//
        var player = this.add.sprite(120, 410, 'player').setScale(1.92 , 2.5);
        this.anims.create({
            key: 'player',
            repeat: -1,
            frameRate: 6,
            frames: this.anims.generateFrameNames('player', {Start: 1, end: 4})     
    
          });
          player.play('player');

        var bkVidaPlayer = this.add.image(115, 550, 'barraVidaR').setScale(1, 0.5);
        barraVidaPlayer = this.add.image(115, 550, 'barraVida').setScale(1, 0.5);

                    //textos debbug//
        var vidaText = this.add.text(16, 16, '☠ Vida: '+vida, {fill: '#ffffff' });
        var cant_en = this.add.text(16, 64, 'Enemigos destruidos: 0', {fill: '#ffffff' })
        var puntosTxt = this.add.text(16, 94, 'Puntos: ' + puntos, {fill: '#ffffff' });
        var winTxt = this.add.text(320, 16, '', {fill: '#000' })
                    //------------//
                    
        //barra de vida enemigos
        var backgroundBar = this.add.image(390, 550, 'barraVidaR').setScale(2, 0.5);
        barraVida = this.add.image(390, 550, 'barraVida').setScale(2, 0.5);
       
        var atkText = this.add.text(16, 40, '♆ Atk: ' + atk, {fill: '#ffffff' });

        //ataque enemigo//
        var timeAtk = this.time.addEvent({ delay: del, callback: atkP, callbackScope: this, loop: true });
        var time = this.time.addEvent({ delay: 1, callback: cambio, callbackScope: this, loop: true });
        //auto ataque//
        var tiempo = this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });
        //tiempo crear quicktime
        var timeQTE = this.time.addEvent({ delay: Phaser.Math.FloatBetween(4000, 9000), callback: Qte, callbackScope: this, loop: true });
        
        

        ///Atacar a la bacteria --------------------------------------------------------
        var pointer = bacteria.on('pointerup', function(pointer){ 
            vida = vida-atk;
            vidaText.setText('☠ Vida: ' + vida); //actualiza el contador de la vida
            barraVida.setScale(vida/maxVida*2,0.5);
            bacteria.x = Phaser.Math.Between(348+32, 416+32);
            bacteria.y = Phaser.Math.Between(100, 300);
            
            
            if(vida <= 0){
                vida = 0; 
                //sistema de conteo de enemigos derrotados
                if(cont_en < 5 || cont_en >=6 && cont_en < 12){
                    if(cont_en >= 5){
                        bk_nivel.setTexture('ciudad');
                    }
                    //cambiar  de bacteria
                    var patron = Phaser.Math.FloatBetween(0, 1);
                    if (patron < 0.3){
                        if(cont_en <= 5){
                            vida = 10;
                            maxVida = 10;
                        } else {
                            vida = 10*2;
                            maxVida = 10*2;
                        }
                        bacteria.setTexture('bacteria');
                        winTxt.setText('');
                        del = 4000;
                    } else if (patron > 0.3 && patron < 0.6){
                        if(cont_en <= 5){
                            vida = 20;
                            maxVida = 20;
                        } else {
                            vida = 20*2;
                            maxVida = 20*2;
                        }
                        bacteria.setTexture('bacteria3');
                        winTxt.setText('');
                        del = 4000;
                    } else {
                        if(cont_en <= 5){
                            vida = 16;
                            maxVida = 16;
                        } else {
                            vida = 16*2;
                            maxVida = 16*2;
                        }
                        bacteria.setTexture('bacteria2');
                        winTxt.setText('');
                        del = 4000;
                    } 

                } else if(cont_en == 5){
                    bacteria.setTexture('jefe1'); 
                    winTxt.setText('☠ J E F E ☠');
                    vida = 50;
                    maxVida = 50;
                    del = 2000;
                } else if (cont_en == 12){
                    bacteria.setTexture('jefe2'); 
                    winTxt.setText('☠ J E F E ☠');
                    vida = 100;
                    maxVida = 100;
                    del = 2000;
                    
                } else {
                    
                    
                    timeAtk.paused = true;
                    timeQTE.paused = true;
                    tiempo.paused = true;
                    bacteria.destroy();//cuando la vida llega a 0, la bacteria se destruye 
                    backgroundBar.destroy();
                    
                    
                }

                
                cont_en += 1;
                puntos += 10; 
                barraVida.setScale(vida/maxVida*2,0.5);
                if(cont_en == 7){
                    alert("¡FELICIDADES! PREPARATE PARA EL SEGUNDO NIVEL.");
                }
                if(cont_en == 7){
                    casaM.stop();
                    cityM.play();
                    
                }
                
                
                
                
            } 
            cant_en.setText('Enemigos destruidos: ' + cont_en);
            puntosTxt.setText('Puntos: ' + puntos);
            
         });
        //--- mejoras --//
        var clickBtn = botonAtk.on('pointerup', function(pointer){
            if(puntos >= 10){
                if(atk == 1){
                    atk += 1;
                }else{
                    atk += 2;
                }
                puntos -= 10;
                puntosTxt.setText('Puntos: ' + puntos);
            }
        });
        
        var clickBtnAA = botonAutoAtk.on('pointerup', function(pointer){
            if(puntos >= 10){
                autoAtk++;
                aa++
                puntos -= 10;   
                puntosTxt.setText('Puntos: ' + puntos);              
            }
        });

        //curacion//
        var clickCuracion = botonCuracion.on('pointerup', function(pointer){
            if(puntos >= 10 && vidaP < maxVidaP){
                vidaP = maxVidaP;
                puntos -= 10;
                puntosTxt.setText('Puntos: ' + puntos);
                barraVidaPlayer.setScale(vidaP/maxVidaP, 0.5);
            }
            
        });               
        
        if(x == 1){
            alert("asd");
            this.scene.start('ganar');
         }
         
    }
    
    

    update() {
     
    


        
    }

    
    
    
}






    
