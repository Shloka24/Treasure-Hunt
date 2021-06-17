class Security {

    constructor(){
      this.access1 = createInput("Answer");
      this.access2 = createInput("Answer");
      this.access3 = createInput("Answer");
        
      this.button1 = createButton('Check');
      this.button2 = createButton('Check');
      this.button3 = createButton('Check');
      


    }

    display(){

        this.access1.position(windowWidth/2 - 600, 180);
        this.access1.style('background', 'pink');
        this.access1.size(200);

        this.access2.position(windowWidth/2 - 600, 580);
        this.access2.style('background', 'pink');
        this.access2.size(200);

        this.access3.position(windowWidth/2 , 380);
        this.access3.style('background', 'pink');
        this.access3.size(200);

        this.button1.position(windowWidth/2 - 600, 220);
        this.button2.position(windowWidth/2 - 600, 620);
        this.button3.position(windowWidth/2 , 420);

        this.button1.mousePressed(() => {
             if(system.authenticate(accessCode1, this.access1.value())){
                this.button1.hide();
                this.access1.hide();
               score =  score + 1;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode3, this.access2.value())){
               this.button2.hide();
               this.access2.hide();
              score =  score + 1;
           }
       });

       this.button3.mousePressed(() => {
        if(system.authenticate(accessCode2, this.access3.value())){
           this.button3.hide();
           this.access3.hide();
          score =  score + 1;
       }
   });


    }
}