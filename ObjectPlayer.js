ObjectPlayer                        = function(_x, _y, _width, _height, _playerName){

    this.exhibitionSelected         = 0;
    this.exhibitionSelectedPrev     = this.exhibitionSelected;

    this.player                     = new ObjectButton      (_x + (_width/2)                      , _y + (_height/2) , 'SsButton2', function(){}                              , _width                      , _height                  , _playerName                                    );
    var xPos                        = _x + ((this.player.button.width/3)/2);
    var yPos                        = this.player.button.y + this.player.button.height;
    this.playerButtonDecrease       = new ObjectButton      (xPos + (this.player.button.width/3)*0, yPos, 'SsButton1', function(){ this.exhibitionSelected --; } , (this.player.button.width/3), this.player.button.height, '<'                                            );
    this.playerButtonExhibition     = new ObjectButton      (xPos + (this.player.button.width/3)*1, yPos, 'SsButton1', function(){}                              , (this.player.button.width/3), this.player.button.height, 'Go to exhibition: ' + this.exhibitionSelected );
    this.playerButtonIncrease       = new ObjectButton      (xPos + (this.player.button.width/3)*2, yPos, 'SsButton1', function(){ this.exhibitionSelected ++; } , (this.player.button.width/3), this.player.button.height, '>'                                            );

};
ObjectPlayer.prototype.constructor  = ObjectPlayer;
ObjectPlayer.prototype.Update       = function(_minExhibition, _maxExhibition){

    if(this.exhibitionSelected                          != this.playerButtonDecrease.exhibitionSelected){

        if(this.playerButtonDecrease.exhibitionSelected >= _maxExhibition){ this.playerButtonDecrease.exhibitionSelected = _maxExhibition;}
        if(this.playerButtonDecrease.exhibitionSelected <= _minExhibition){ this.playerButtonDecrease.exhibitionSelected = _minExhibition; }
        this.exhibitionSelected                         =  this.playerButtonDecrease.exhibitionSelected;
        this.playerButtonIncrease.exhibitionSelected    =  this.playerButtonDecrease.exhibitionSelected;

    }
    if(this.exhibitionSelected                          != this.playerButtonIncrease.exhibitionSelected){

        if(this.playerButtonIncrease.exhibitionSelected >= _maxExhibition){ this.playerButtonIncrease.exhibitionSelected = _maxExhibition;}
        if(this.playerButtonIncrease.exhibitionSelected <= _minExhibition){ this.playerButtonIncrease.exhibitionSelected = _minExhibition; }
        this.exhibitionSelected                         =  this.playerButtonIncrease.exhibitionSelected;
        this.playerButtonDecrease.exhibitionSelected    =  this.playerButtonIncrease.exhibitionSelected;

    }
    this.playerButtonExhibition.label.text              =  'Go to exhibition: ' + this.exhibitionSelected;

};