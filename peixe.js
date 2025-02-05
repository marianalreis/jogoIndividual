var config = {
    type: Phaser.AUTO, 
    width: 800,
    height: 600,

    scene: {
        preload: preload, 
        create: create, 
        update: update
    }
};

var game = new Phaser.Game(config);

var tartaruga;

function preload () {
    this.load.image('oceano', 'assets/bg_azul-claro.png');

    this.load.image('logo', 'assets/logo-inteli_azul.png');

    this.load.image('tartaruga', 'assets/peixes/tartaruga.png');

    this.load.image('algas', 'assets/algas.png');
}

function create ()  {
    this.add.image(400, 300, 'oceano');
   
    this.add.image(400, 525, 'logo').setScale(0.5);

    this.add.image(400, 525, 'algas').setScale(0.2).setOrigin(1.5,0.5);

   

   tartaruga = this.add.image(400, 300, 'tartaruga');

   tartaruga.setFlip(true, false);
}

function update () {

    tartaruga.x = this.input.x;
    tartaruga.y = this.input.y;
}