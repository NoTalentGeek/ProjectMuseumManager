/**State class to initiates some initial objects.*/
stateMain = {

    create                                  :function(){

        game.stage.backgroundColor          = 0x222034;

        /*Array to contain all object in the scene.*/
        this.floorObjectArray               = new Array();
        this.roomObjectArray                = new Array();
        this.exhibitionObjectArray          = new Array();
        this.tagObjectArray                 = new Array();
        this.playerObjectArray              = new Array();

        this.offsetXMulNum                  = (5/1024);
        this.offsetYMulNum                  = (5/576);
        this.offsetXNum                     = game.width*this.offsetXMulNum;
        this.offsetYNum                     = game.height*this.offsetYMulNum;
        this.totalRowNum                    = 0;

        /*How many players in the scene initially.*/
        this.playerCountNum                 = 20;

        /*Instead of using for loop I used a counter to update each array one
            by one each tick passed.
        With this method system will not be lagged with countless amount of museum
            objects in the loop.*/
        this.updateCountNum                 = 0;
        this.updateCountTotalNum            = 0;
        this.playerUpdateNum                = 0;

        /*A variable to know whether the museum object is full or not.*/
        this.fullThresholdNum               = 0;

        /*Initial object name for floor.*/
        var floorNameObjectArray                    = [

            new ObjectName('First Floor'            , 'FLR_001'),
            new ObjectName('Second Floor'           , 'FLR_002'),
            new ObjectName('Third Floor'            , 'FLR_003'),
            new ObjectName('Fourth Floor'           , 'FLR_004')

        ];
        /*Initial object name for room.*/
        var roomNameObjectArray                     = [

            new ObjectName('Room Africa'            , 'ROM_AFK'),
            new ObjectName('Room America'           , 'ROM_AME'),
            new ObjectName('Room Asia'              , 'ROM_ASI'),
            new ObjectName('Room Europe'            , 'ROM_EUR')

        ];
        /*Initial object name for exhibition.*/
        var exhibitionNameObjectArray               = [

            new ObjectName('Egyptian Exhibition'    , 'EXH_EGY'),
            new ObjectName('Ethiopian Exhibition'   , 'EXH_ETH'),
            new ObjectName('Morocco Exhibition'     , 'EXH_MOR'),
            new ObjectName('Nigerian Exhibition'    , 'EXH_NIG'),
            new ObjectName('Argentinian Exhibition' , 'EXH_ARG'),
            new ObjectName('Brazillian Exhibition'  , 'EXH_BRA'),
            new ObjectName('Canadian Exhibition'    , 'EXH_CAN'),
            new ObjectName('USA Exhibition'         , 'EXH_USA'),
            new ObjectName('Chinese Exhibition'     , 'EXH_CHN'),
            new ObjectName('Indian Exhibition'      , 'EXH_IND'),
            new ObjectName('Japanese Exhibition'    , 'EXH_JAP'),
            new ObjectName('Korean Exhibition'      , 'EXH_KOR'),
            new ObjectName('Belgian Exhibition'     , 'EXH_BEL'),
            new ObjectName('Dutch Exhibition'       , 'EXH_DUT'),
            new ObjectName('German Exhibition'      , 'EXH_GER'),
            new ObjectName('Russian Exhibition'     , 'EXH_RUS'),

        ];
        /*Initial object name for tag.*/
        var tagNameObjectArray                      = [

            new ObjectName('Agreeable'              , 'TAG_AGR'),
            new ObjectName('Brave'                  , 'TAG_BRA'),
            new ObjectName('Calm'                   , 'TAG_CAL'),
            new ObjectName('Delightful'             , 'TAG_DEL'),
            new ObjectName('Eager'                  , 'TAG_EAG'),
            new ObjectName('Faithful'               , 'TAG_FAI'),
            new ObjectName('Gentle'                 , 'TAG_GEN'),
            new ObjectName('Happy'                  , 'TAG_HAP'),
            new ObjectName('Jolly'                  , 'TAG_JOL'),
            new ObjectName('Kind'                   , 'TAG_KIN'),
            new ObjectName('Lively'                 , 'TAG_LIV'),
            new ObjectName('Nice'                   , 'TAG_NIC'),
            new ObjectName('Obedient'               , 'TAG_OBE'),
            new ObjectName('Proud'                  , 'TAG_PRO'),
            new ObjectName('Relieved'               , 'TAG_REL'),
            new ObjectName('Silly'                  , 'TAG_SIL'),
            new ObjectName('Thankful'               , 'TAG_THA'),
            new ObjectName('Victorious'             , 'TAG_VIC'),
            new ObjectName('Witty'                  , 'TAG_WIT'),
            new ObjectName('Zealous'                , 'TAG_ZEA')

        ];

        //this.totalRowNum                          = 3 + (Math.ceil(this.playerCountNum/this.exhibitionObjectArray.length) + 5);
        this.totalRowNum                            = 3 + (Math.ceil(this.playerCountNum/exhibitionNameObjectArray.length) + 5);


        /*Initiates everything and put everythin in to its corresponding array.*/
        for(var i = 0; i < floorNameObjectArray.length; i ++){

            var floorObject = new ObjectMuseum(

                'XXX_XXX',
                'FLR',
                floorNameObjectArray[i],
                this.offsetXNum,
                this.offsetYNum,
                this.totalRowNum,
                this.floorObjectArray,
                this.roomObjectArray,
                this.exhibitionObjectArray

            );
            this.floorObjectArray.push(floorObject);

            //console.log(floorObject.objectNameAltString);

        }
        for(var i = 0; i < roomNameObjectArray.length; i ++){

            var roomObject = new ObjectMuseum(

                'FLR_001',
                'ROM',
                roomNameObjectArray[i],
                this.offsetXNum,
                this.offsetYNum,
                this.totalRowNum,
                this.floorObjectArray,
                this.roomObjectArray,
                this.exhibitionObjectArray

            );
            this.roomObjectArray.push(roomObject);

            //console.log(roomObject.objectNameAltString);

        }
        for(var i = 0; i < exhibitionNameObjectArray.length; i ++){

            /*Adding the exhibition based on index i that will determine the room location for an exhibition.*/
            if(i < 4 ){

                var exhibitionObject  = new ObjectMuseum(

                    'ROM_AFK', 
                    'EXH', 
                    exhibitionNameObjectArray[i],
                    this.offsetXNum, 
                    this.offsetYNum, 
                    this.totalRowNum, 
                    this.floorObjectArray, 
                    this.roomObjectArray, 
                    this.exhibitionObjectArray

                );

            }
            else if(i < 8 ){

                var exhibitionObject = new ObjectMuseum(

                    'ROM_AME', 
                    'EXH', 
                    exhibitionNameObjectArray[i],
                    this.offsetXNum,
                    this.offsetYNum,
                    this.totalRowNum,
                    this.floorObjectArray,
                    this.roomObjectArray,
                    this.exhibitionObjectArray

                );

            }
            else if(i < 12){

                var exhibitionObject = new ObjectMuseum(

                    'ROM_ASI', 
                    'EXH', 
                    exhibitionNameObjectArray[i],
                    this.offsetXNum,
                    this.offsetYNum,
                    this.totalRowNum,
                    this.floorObjectArray,
                    this.roomObjectArray,
                    this.exhibitionObjectArray

                );

            }
            else if(i < 16){

                var exhibitionObject = new ObjectMuseum(

                    'ROM_EUR', 
                    'EXH', 
                    exhibitionNameObjectArray[i],
                    this.offsetXNum,
                    this.offsetYNum,
                    this.totalRowNum,
                    this.floorObjectArray,
                    this.roomObjectArray,
                    this.exhibitionObjectArray

                );

            }
            this.exhibitionObjectArray.push(exhibitionObject);

            //console.log(exhibitionObject.objectNameAltString);

        }
        for(var i = 0; i < tagNameObjectArray.length; i ++){

            var tagObject = new ObjectMuseum(

                'XXX_XXX',
                'TAG',
                tagNameObjectArray[i],
                this.offsetXNum,
                this.offsetYNum,
                this.totalRowNum,
                this.floorObjectArray,
                this.roomObjectArray,
                this.exhibitionObjectArray

            );
            this.tagObjectArray.push(tagObject);

            //console.log(tagObject.objectNameAltString);

        }
        /*Put tags into exhibition randomly.*/
        for(var i = 0; i < this.exhibitionObjectArray.length; i ++){

            for(var j = 0; j < this.exhibitionObjectArray[i].tagStringArray.length; j ++){

                var indexNum                                = Math.floor((Math.random()*this.tagObjectArray.length) + 0);
                var tagNameString                           = this.tagObjectArray[indexNum].objectNameAltString;
                var loopNum                                 = 0;

                /*Make sure there is no tags with same name within the same exhibition.*/
                while(this.exhibitionObjectArray[i].tagStringArray.indexOf(tagNameString) > -1){

                    loopNum                                     ++;
                    indexNum                                    = Math.floor((Math.random()*this.tagObjectArray.length) + 0);
                    tagNameString                               = this.tagObjectArray[indexNum].objectNameAltString;
                    if(loopNum >= this.tagObjectArray.length)   { break; }


                }

                this.exhibitionObjectArray[i].tagStringArray[j] = tagNameString;

            }

        }

        //console.log(this.floorObjectArray);
        //console.log(this.roomObjectArray);
        //console.log(this.exhibitionObjectArray);
        //console.log(this.FindIndexNum(this.floorObjectArray   , 'FLR_001'));
        //console.log(this.FindObject(this.floorObjectArray     , 'FLR_001').objectNameFullString);

        /*Before we add the graphical user interface we sort all the array.*/
        this.SortArray(this.floorObjectArray        , this.CompareObjectParentNum);
        this.SortArray(this.roomObjectArray         , this.CompareObjectParentNum);
        this.SortArray(this.exhibitionObjectArray   , this.CompareObjectParentNum);

        for(var i = 0; i < this.floorObjectArray.length         ; i ++){ this.floorObjectArray[i]      .CreatePanelVoid(); }
        for(var i = 0; i < this.roomObjectArray.length          ; i ++){ this.roomObjectArray[i]       .CreatePanelVoid(); }
        for(var i = 0; i < this.exhibitionObjectArray.length    ; i ++){ this.exhibitionObjectArray[i] .CreatePanelVoid(); }

        /*Initiate players and generate random exhibition starting point.*/
        for(var i = 0; i < this.playerCountNum; i ++){

            var randomExhibitionIndexNum    = Math.floor((Math.random()*this.exhibitionObjectArray.length) + 0);
            var playerObject                = new ObjectPlayer(

                this.exhibitionObjectArray[randomExhibitionIndexNum].objectNameAltString,
                this.floorObjectArray,
                this.roomObjectArray,
                this.exhibitionObjectArray,
                this.playerObjectArray,
                (i + 1),
                this.offsetYNum

            );
            this.playerObjectArray          .push(playerObject);

            //console.log(playerObject.exhibitionCurrentString);

        }

        this.fullThresholdNum               = Math.ceil(this.playerObjectArray.length/this.exhibitionObjectArray.length);

        /*Loop through all the museum object to set the full threshold number.*/
        for(var i = 0; i < this.floorObjectArray.length         ; i ++){ this.floorObjectArray[i]       .SetFullThresholdNum(this.fullThresholdNum); }
        for(var i = 0; i < this.roomObjectArray.length          ; i ++){ this.roomObjectArray[i]        .SetFullThresholdNum(this.fullThresholdNum); }
        for(var i = 0; i < this.exhibitionObjectArray.length    ; i ++){ this.exhibitionObjectArray[i]  .SetFullThresholdNum(this.fullThresholdNum); }

        this.pointerObject      = undefined;
        this.pointerSaveXNum    = undefined;
        this.pointerSaveYNum    = undefined;
        this.pointerSaveBool    = true;

    },

    update                                  :function(){

        /*Loop through all the museum object to set the full threshold number.*/
        for(var i = 0; i < this.floorObjectArray.length         ; i ++) { this.floorObjectArray[i]       .SetFullThresholdNum(this.fullThresholdNum); }
        for(var i = 0; i < this.roomObjectArray.length          ; i ++) { this.roomObjectArray[i]        .SetFullThresholdNum(this.fullThresholdNum); }
        for(var i = 0; i < this.exhibitionObjectArray.length    ; i ++) { this.exhibitionObjectArray[i]  .SetFullThresholdNum(this.fullThresholdNum); }
        /*Update the player references.*/
        for(var i = 0; i < this.playerObjectArray.length        ; i ++) { this.playerObjectArray[i]      .UpdateVoid(this.floorObjectArray, this.roomObjectArray, this.exhibitionObjectArray, this.playerObjectArray); }

        this.SortArray                                                  (this.playerObjectArray, this.CompareCurrentExhibitionNum);

        /*
        this.playerObjectArray[this.playerUpdateNum]    .AIAutoString();
        <<A console.log() function to return how many tags have been captured during this time.
        Not necessarily to be active all the time due to for loop.>>
        <<
        for(var i = 0; i < this.playerObjectArray[this.playerUpdateNum].tagMixedArray.length; i ++){

            console.log(i + ' ' + this.playerObjectArray[this.playerUpdateNum].tagMixedArray[i][0] + ': ' + this.playerObjectArray[this.playerUpdateNum].tagMixedArray[i][1]);

        }
        >>
        <<Simple loop control, if the value exceed the latest index from player array then reset the
            counter back to 0.>>
        this.playerIndexNum         ++;
        this.playerUpdateNum        = (this.playerUpdateNum < this.playerCountNum - 1) ? (this.playerUpdateNum + 1) : 0;
        */
        for(var i = 0; i < this.playerObjectArray.length; i ++){ this.playerObjectArray[i].AIAutoString(); }


        /*Codes for the panel cards.
        First thing first, we need to know which museum object is hovered.
        So we need to loop to all available museum objects to check the boolean.
        The thing here is that for when ever there will be only one panel card exist.
        So every tick we need to delete the previously created panel card before make a new
            panel card.
        But before hand you need to delete the previously created panel.*/
        /*
        for(var i = 0; i < this.floorObjectArray.length             ; i ++){

            if(this.floorObjectArray[i].panelCardObject             != undefined)   { this.floorObjectArray[i].panelCardObject.destroy();         }
            if(this.floorObjectArray[i].panelHoverObjectBool        == true)   {

                this.floorObjectArray[i].panelCardObject            = game.add.sprite(this.floorObjectArray[i].panelXNum, this.floorObjectArray[i].panelYNum, 'ImagePanelNew5');

            }

        }
        for(var i = 0; i < this.roomObjectArray.length              ; i ++){

            if(this.roomObjectArray[i].panelCardObject              != undefined)   { this.roomObjectArray[i].panelCardObject.destroy();          }
            if(this.roomObjectArray[i].panelHoverObjectBool         == true)        {

                this.roomObjectArray[i].panelCardObject             = game.add.sprite(this.roomObjectArray[i].panelXNum, this.roomObjectArray[i].panelYNum, 'ImagePanelNew5');

            }

        }
        for(var i = 0; i < this.ExhibitionObjectArray.length        ; i ++){

            if(this.exhibitionObjectArray[i].panelCardObject        != undefined)   { this.exhibitionObjectArray[i].panelCardObject.destroy();    }
            if(this.exhibitionObjectArray[i].panelHoverObjectBool   == true)        {

                this.exhibitionObjectArray[i].panelCardObject       = game.add.sprite(this.exhibitionObjectArray[i].panelXNum, this.exhibitionObjectArray[i].panelYNum, 'ImagePanelNew5');

            }

        }
        */
        /*This is a loop to iterate every possible player within the application.
        And then for every player check whether or not mouse pointer is hovered toward the player's
            panel object.*/
        for(var i = 0; i < this.playerObjectArray.length    ; i ++){

            /*Always check whether the object panel card is exist or not.
            If exist then we need to delete it before we create new panel card (or even juts updating it).*/
            if(this.playerObjectArray[i].panelCardObject    != undefined){ this.playerObjectArray[i].panelCardObject.destroy(); }
            if(

                this.playerObjectArray[i].panelHoverBool    == true &&  /*This is a variable that is inside player object to determine whether a mouse pointer is above this object's panel card.*/
                this.pointerSaveBool                        == true     /*A trigger if we need to record new value for panel card object or not.*/

            ){

                /*These are like a temporary variables to hold values of object player.
                We need this because the value of player is changed every tick.
                So we need to capture the last valid one according to above if statement.*/
                this.pointerObject      = this.playerObjectArray[i];                                                            /*Capture the object player of which has a mouse pointer above its panel.*/
                this.pointerSaveXNum    = this.playerObjectArray[i].panelXNum + (this.playerObjectArray[i].panelWidthNum /2);   /*Save the middle postion of object panel x of which has a mouse pointer above its panel.*/
                this.pointerSaveYNum    = this.playerObjectArray[i].panelYNum + (this.playerObjectArray[i].panelHeightNum/2);   /*Save the middle postion of object panel y of which has a mouse pointer above its panel.*/
                this.pointerSaveBool    = false;                                                                                /*Prevent this application to take another temporary variables.*/

            }

        }

        /*After the code above we need to create the panel card.
        Now we need to make sure the reference to the object that is hovered by the mouse pointer is not empty,
            hence this if statement.*/
        if(this.pointerObject != undefined){

            /*This if statement is necessary so that the panel card is not directly deleted in case the object is moved.
            In this application if you hover over the player object you will get the panel card with a lot of information about that
                player object.
            However, the player object moved in every tick, hence like nearly every tick your panel card will be deleted and then
                re - created again for with the new player information (or not).
            This if statement is to prevent that.
            The panel object will be deleted just when the mouse pointer travel exceed the original object target y and x position.
            If the mouse pointer travel exceed object target y and x position reset all value, delete objects, and set the
                this.pointerSaveBool to true so that you can take new reference for a new panel card.*/
            if(

                game.input.mousePointer.x < (this.pointerSaveXNum - (this.pointerObject.panelWidthNum/2))   ||
                game.input.mousePointer.x > (this.pointerSaveXNum + (this.pointerObject.panelWidthNum/2))   ||
                game.input.mousePointer.y < (this.pointerSaveYNum - (this.pointerObject.panelHeightNum/2))  ||
                game.input.mousePointer.y > (this.pointerSaveYNum + (this.pointerObject.panelHeightNum/2)) 
    
            ){

                this.pointerSaveXNum                            = undefined;
                this.pointerSaveYNum                            = undefined;

                if(this.pointerObject.panelCardObject           != undefined){ this.pointerObject.panelCardObject.destroy(); }
                if(this.pointerObject.panelCardLabelObject      != undefined){ this.pointerObject.panelCardLabelObject.destroy(); }
                this.pointerObject                              = undefined;

                this.pointerSaveBool                            = true;
    
            }
            /*If the mouse pointer stay within object target y and x position we just need to delete objects and create new panel card.*/
            else{

                /*Delete objects.*/
                if(this.pointerObject.panelCardObject                   != undefined){ this.pointerObject.panelCardObject.destroy();      }
                if(this.pointerObject.panelCardLabelObject              != undefined){ this.pointerObject.panelCardLabelObject.destroy(); }

                /*Set for the panel card properties like width, height, x position, y position.*/
                this.pointerObject.panelCardWidthNum                    = 200;
                this.pointerObject.panelCardHeightNum                   = 280;

                /*Create the panel card object.*/
                this.pointerObject.panelCardObject                      = game.add.sprite(this.pointerSaveXNum, this.pointerSaveYNum, 'ImagePanelNew6');

                /*Fill in back the reference for future use.*/
                this.pointerObject.panelCardXNum                        = this.pointerObject.panelCardObject.x;
                this.pointerObject.panelCardYNum                        = this.pointerObject.panelCardObject.y;
                this.pointerObject.panelCardObject.width                = this.pointerObject.panelCardWidthNum;
                this.pointerObject.panelCardObject.height               = this.pointerObject.panelCardHeightNum;

                /*These two if statements below is for if the panel card goes beyod the screen.
                If the panel card goes beyond the screen we need to shift either the y position or the x position.
                Shift the x position according to panel card own width.*/
                if((this.pointerObject.panelCardXNum + this.pointerObject.panelCardWidthNum) > game.width){

                    this.pointerObject.panelCardObject.x    = this.pointerObject.panelCardXNum - this.pointerObject.panelCardWidthNum;
                    this.pointerObject.panelCardXNum        = this.pointerObject.panelCardObject.x;

                }
                /*Shift the y position according to panel card own height.*/
                if((this.pointerObject.panelCardYNum + this.pointerObject.panelCardHeightNum) > game.height){

                    this.pointerObject.panelCardObject.y    = this.pointerObject.panelCardYNum - this.pointerObject.panelCardHeightNum;
                    this.pointerObject.panelCardYNum        = this.pointerObject.panelCardObject.y;

                }

                /*With the code above we are done setting with the panel card object.
                Next this is to make the content of that panel card, which basically just a string.
                Below is some local variables to pull information necessary to develop the string
                    we want to put into the panel card object.*/
                var exhibitionCurrentObject                             = this.FindObject   (this.exhibitionObjectArray     , this.pointerObject.exhibitionCurrentString);
                var exhibitionRoomString                                = exhibitionCurrentObject.objectParentNameAltString;
                var exhibitionRoomObject                                = this.FindObject   (this.roomObjectArray           , exhibitionRoomString);
                var exhibitionFloorString                               = exhibitionRoomObject.objectParentNameAltString;
                var exhibitionFloorObject                               = this.FindObject   (this.floorObjectArray          , exhibitionFloorString);

                /*This is the string that we will put into panel card object.*/
                var panelCardLabelString                                = (

                    ('FLR_CUR = ' + exhibitionFloorString                               ) + '\n' +
                    ('ROM_CUR = ' + exhibitionRoomString                                ) + '\n' +
                    ('EXH_CUR = ' + this.pointerObject.exhibitionCurrentString          ) + '\n' +
                    ('EXH_TAR = ' + this.pointerObject.exhibitionTargetStringArray[0]   ) + '\n' +
                    ('EXH_TAR = ' + this.pointerObject.exhibitionTargetStringArray[1]   ) + '\n' +
                    ('EXH_TAR = ' + this.pointerObject.exhibitionTargetStringArray[2]   ) + '\n' +
                    ('EXH_TAG = ' + this.pointerObject.tagMixedArray[0][0]              ) + '\n' +
                    ('EXH_TAG = ' + this.pointerObject.tagMixedArray[1][0]              ) + '\n' +
                    ('EXH_TAG = ' + this.pointerObject.tagMixedArray[2][0]              )

                );

                /*Create the content for panel card object.*/
                this.pointerObject.panelCardLabelObject                 = game.add.text(

                    this.pointerObject.panelCardXNum + (this.pointerObject.panelCardWidthNum/2),
                    this.pointerObject.panelCardYNum + (this.pointerObject.panelCardHeightNum/2),
                    panelCardLabelString,
                    {
                        'align'     : 'center',
                        'fontSize'  : this.pointerObject.fontSizeCardNum
                    }

                );
                this.pointerObject.panelCardLabelObject.anchor          .setTo(0.5, 0.5);

                /*These two iterations below is to make sure the font size of every panel label is the same.
                We will take the smallest possible font size.
                In case the label is bigger than the panel, we will keep redicing the font face
                    until the label is smaller than the panel.*/
                while(

                    (this.pointerObject.panelCardLabelObject.width  > this.pointerObject.panelCardWidthNum)     ||
                    (this.pointerObject.panelCardLabelObject.height > this.pointerObject.panelCardHeightNum)

                ){

                    /*Decrease the panel label font gradually until this panel label is smaller than the panel card itself.*/
                    this.pointerObject.fontSizeCardNum                          --;

                    /*Do not forget to always delete previously created panel.*/
                    if(this.pointerObject.panelCardLabelObject != undefined)    { this.pointerObject.panelCardLabelObject.destroy(); }

                    /*Create the panel label object in the middle of the panel object with additional anchor point to be set also in the middle of the
                        desired position.*/
                    this.pointerObject.panelCardLabelObject                     = game.add.text(

                        this.pointerObject.panelCardXNum + (this.pointerObject.panelCardWidthNum/2),
                        this.pointerObject.panelCardYNum + (this.pointerObject.panelCardHeightNum/2),
                        panelCardLabelString,
                        {
                            'align'     : 'center',
                            'fontSize'  : this.pointerObject.fontSizeCardNum
                        }

                    );
                    this.pointerObject.panelCardLabelObject.anchor          .setTo(0.5, 0.5);

                }

                /*Temporary variable that hold the minimum string.
                Iterate through player array to set the minimum font variable.*/
                var minFontSizeSiblingNum = 0;
                for(var i = 0 ; i < this.playerObjectArray.length; i ++){

                    if(i > 0){ if(this.playerObjectArray[i].fontSizeCardNum < this.playerObjectArray[i - 1].fontSizeCardNum){ minFontSizeSiblingNum = this.playerObjectArray[i].fontSizeCardNum; } }
                    else{ minFontSizeSiblingNum = this.playerObjectArray[i].fontSizeCardNum; }

                }
                /*Iterate through player array the set the minimum font size back to local font size variable.*/
                for(var i = 0 ; i < this.playerObjectArray.length; i ++){ this.playerObjectArray[i].fontSizeCardNum = minFontSizeSiblingNum; }

                /*Delete the panel label card object before we create new one.*/
                if(this.pointerObject.panelCardLabelObject != undefined)    { this.pointerObject.panelCardLabelObject.destroy(); }
                
                /*Create thenew panel label card object with new minumum font size.*/
                this.pointerObject.panelCardLabelObject                     = game.add.text(

                    this.pointerObject.panelCardXNum + (this.pointerObject.panelCardWidthNum/2),
                    this.pointerObject.panelCardYNum + (this.pointerObject.panelCardHeightNum/2),
                    panelCardLabelString,
                    {
                        'align'     : 'center',
                        'fontSize'  : this.pointerObject.fontSizeCardNum
                    }

                );
                this.pointerObject.panelCardLabelObject.anchor              .setTo(0.5, 0.5);
    
            }
        }

        /*Dynamically add total number count for all museum objects within the scene (floors, rooms, exhibitions).
        PENDING: I am not sure whether you can just dynamucally add an object while the loop is running.
            If not then just reset the counter whenever an museum object goes into the array.*/
        this.updateCountTotalNum    = this.floorObjectArray.length + this.roomObjectArray.length + this.exhibitionObjectArray.length;

        if                          (this.updateCountNum < this.floorObjectArray.length){

            var indexNum            = this.updateCountNum;
            //console                 .log(this.floorObjectArray[indexNum].objectNameAltString + ': ' + this.floorObjectArray[indexNum].visitorCurrentNum);

        }
        else if                     (this.updateCountNum < (this.floorObjectArray.length + this.roomObjectArray.length)){

            var indexNum            = this.updateCountNum - this.floorObjectArray.length;
            //console               .log(this.roomObjectArray[indexNum].objectNameAltString + ': ' + this.roomObjectArray[indexNum].visitorCurrentNum);

        }
        else if                     (this.updateCountNum < (this.floorObjectArray.length + this.roomObjectArray.length + this.exhibitionObjectArray.length)){

            var indexNum            = this.updateCountNum - this.floorObjectArray.length - this.roomObjectArray.length;
            /*
            console               .log(

                this.exhibitionObjectArray[indexNum].objectNameAltString + 
                ': ' + 
                this.exhibitionObjectArray[indexNum].tagStringArray +
                ': ' + 
                this.exhibitionObjectArray[indexNum].visitorCurrentNum 

            );
            */

        }

        /*Loop counter controller, it resets back to 0 whenever the counter pass the highest index of object exhibition
            in the whole museum.*/
        this.updateCountNum     = (this.updateCountNum < this.updateCountTotalNum - 1) ? (this.updateCountNum + 1) : 0;

    },

    CompareCurrentExhibitionNum             :function(_1object, _2object){

        /*Argument verification.*/
        if(

            typeof _1object === 'object' &&
            typeof _2object === 'object'

        ){

            if(_1object.exhibitionCurrentString < _2object.exhibitionCurrentString){ return -1; }
            if(_1object.exhibitionCurrentString > _2object.exhibitionCurrentString){ return  1; }
            return 0;

        }
        else{

            console.log((typeof _1object)   + ' is not an object.');
            console.log((typeof _2object)   + ' is not an object.');
            return undefined;

        }

    },

    /*In this case for every museum object we want to compare its parent object alternative name.*/
    CompareObjectParentNum                  :function(_1object, _2object){

        /*Argument verification.*/
        if(

            typeof _1object === 'object' &&
            typeof _2object === 'object'

        ){

            if(_1object.objectParentNameAltString < _2object.objectParentNameAltString){ return -1; }
            if(_1object.objectParentNameAltString > _2object.objectParentNameAltString){ return  1; }
            return 0;

        }
        else{

            console.log((typeof _1object)   + ' is not an object.');
            console.log((typeof _2object)   + ' is not an object.');
            return undefined;

        }
        
    },

    /*A function to find the exhibition in an array of object exhibition, based on exhibition's
    name alt.*/
    FindIndexNum                            :function(_exhibitionNameObjectArray, _exhibitionNameAltString){

        if(

            (typeof _exhibitionNameObjectArray  === 'object') &&
            (typeof _exhibitionNameAltString    === 'string')

        ){

            /*Loop through the array.*/
            for(var i = 0; i < _exhibitionNameObjectArray.length; i ++){

                /*Check the variable name of nameObjectAlt one by one per array element.
                i is the index number when the variable name equals with the variable value.*/
                if(_exhibitionNameObjectArray[i]['objectNameAltString'] == _exhibitionNameAltString){ return i; }

            }
            return undefined;

        }
        else{

            console.log((typeof _exhibitionNameObjectArray)     + ' is not an object.');
            console.log((typeof _exhibitionNameAltString)       + ' is not a string.');
            return undefined;

        }

    },

    /*Using the function to find object index, I created another function to return the object instead of the index.*/
    FindObject                              :function(_exhibitionNameObjectArray, _exhibitionNameAltString){

        if(

            (typeof _exhibitionNameObjectArray  === 'object') &&
            (typeof _exhibitionNameAltString    === 'string')

        ){ return _exhibitionNameObjectArray[this.FindIndexNum(_exhibitionNameObjectArray, _exhibitionNameAltString)]; }
        else{

            console.log((typeof _exhibitionNameObjectArray)     + ' is not an object.');
            console.log((typeof _exhibitionNameAltString)       + ' is not a string.' );
            return undefined;

        }

    },

    /*A function to sort array based on its properties.
    The second argument is a comparison function to select which things should be sorted.*/
    SortArray                               :function(_targetArray, _compareFunction){

        /*Arguments verification.*/
        if(

            typeof _targetArray             === 'object' &&
            typeof _compareFunction         === 'function'

        ){

            _targetArray.sort(_compareFunction);
            return _targetArray;

        }
        else{

            console.log((typeof _targetArray)       + ' is not an object.');
            console.log((typeof _compareFunction)   + ' is not a function.');
            return undefined; 

        }

    }

};