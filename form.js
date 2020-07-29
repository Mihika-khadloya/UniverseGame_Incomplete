class Form{
    constructor(){
        this.title = loadImage("SolarSystemSpelling.jpg")
        
        this.name = createInput("Name")
        this.proceed = createButton("FIRST SECTION")
        
        this.part1Correct = createElement("h2")
        this.part1Wrong = createElement("h2")
        this.part1title = createElement("h1")
        this.yellowOption = createButton("YELLOW")
        this.blueOption = createButton("BLUE")
        this.proceedFirstQuestion = createButton("PROCEED TO NEXT QUESTION")
        
        this.part2Title = createElement("h1")
        this.part2redOption = createButton("RED")
        this.part2greenOption = createButton("GREEN")
        this.part2correct = createElement("h2")
        this.part2wrong = createElement("h2")
        this.proceedSecondQuestion = createButton("PROCEED TO NEXT QUESTION")

        this.part3Title = createElement("h1");
        this.part3brownOption = createButton("BROWN")
        this.part3whiteOption = createButton("WHITE")
        this.part3correct = createElement("h2")
        this.part3wrong = createElement("h2")
        this.part3submit = createButton("NEXT SECTION")

        this.title1 = createElement("h2");
        this.firstOption = createElement("h2");
        this.secondOption = createElement("h2");
        this.thirdOption = createElement("h2");
        this.action = createButton("PLAY");
        this.correct = createElement("h2");
        this.wrong = createElement("h2")
        this.nextSectionButton = createButton("NEXT ->");
    }
    hide(){
        
        this.name.hide();
        this.proceed.hide();
    }
    part1hide(){
        this.part1Correct.hide();
        this.part1Wrong.hide();
        this.part1title.hide();
        this.yellowOption.hide();
        this.blueOption.hide();
        this.proceedFirstQuestion.hide();
    }
    part2hide(){
        this.part2Title.hide();
        this.part2redOption.hide();
        this.part2greenOption.hide();
        this.part2correct.hide();
        this.part2wrong.hide();
        this.proceedSecondQuestion.hide();
    }
    part3hide(){
        this.part3Title.hide();
        this.part3brownOption.hide();
        this.part3whiteOption.hide();
        this.part3correct.hide();
        this.part3wrong.hide();
        this.part3submit.hide();
    }
    display(){
        image(this.title,150,70,400,100);
        this.name.position(200,210);
        this.proceed.position(300,250);
        this.proceed.mousePressed(()=>{
            name = this.name.value();
            form.hide();
            form.part1Display();
            gameState = 1
        })
    }
    part1Display(){
        
        this.part1title.html("NEPTUNE");
        this.part1title.position(250,100)
        
        this.yellowOption.position(450,450)
        
        this.blueOption.position(150,450)
        

        this.blueOption.mousePressed(()=>{
            this.part1Correct.html("Correct!")
            this.part1Correct.position(150,370)
            this.yellowOption.hide();
            gameState = 2;
            this.proceedFirstQuestion.position(450,520);
        })
        this.yellowOption.mousePressed(()=>{
            this.blueOption.hide();
            this.part1Wrong.html("Incorrect :(")
            this.part1Wrong.position(450,370)
            gameState = 2;
            this.proceedFirstQuestion.position(450,520);
            
            
        })
        this.proceedFirstQuestion.mousePressed(()=>{
           form.part1hide(); 
           form.part2Display();
           gameState = 3;
        })
        

    }
    part2Display(){
        this.part2Title.html("MARS");
        this.part2Title.position(270,100);

        this.part2redOption.position(450,450);
        this.part2greenOption.position(150,450);

        this.part2redOption.mousePressed(()=>{
            this.part2greenOption.hide();
            this.part2correct.html("Correct!");
            this.part2correct.position(450,370);
            gameState = 4;
            this.proceedSecondQuestion.position(450,520);
        })
        this.part2greenOption.mousePressed(()=>{
            this.part2redOption.hide();
            this.part2wrong.html("Incorrect :(");
            this.part2wrong.position(150,370);
            gameState = 4;
            this.proceedSecondQuestion.position(450,520);
        })
        this.proceedSecondQuestion.mousePressed(()=>{
            gameState = 5;
            form.part3display();
            form.part2hide();
        })
    }
    part3display(){
        this.part3Title.html("VENUS");
        this.part3Title.position(270,100);

        this.part3brownOption.position(150,450);
        this.part3whiteOption.position(450,450);

        this.part3brownOption.mousePressed(()=>{
            this.part3whiteOption.hide();
            this.part3correct.html("Correct!");
            this.part3correct.position(150,370);
            this.part3submit.position(450,520);
            gameState = 6
        })
        this.part3whiteOption.mousePressed(()=>{
            this.part3brownOption.hide();
            this.part3wrong.html("Incorrect :(");
            this.part3wrong.position(450,370);
            this.part3submit.position(450,520);
            gameState = 6
        })
        this.part3submit.mousePressed(()=>{
            form.part3hide();
            form.nextSection();
            gameState = 7
        })
    }
    nextSection(){
        this.title1.html("Drag the square to the position of MARS");
        this.title1.position(120,70);
        this.firstOption.html("1st");
        this.firstOption.position(100,180);
        this.secondOption.html("4th");
        this.secondOption.position(280,180);
        this.thirdOption.html("7th");
        this.thirdOption.position(470,180);
        this.action.position(470,480);
        

        this.action.mousePressed(()=>{
            gameState = 8
        })
        this.nextSectionButton.mousePressed(()=>{
            clear();
            form.nextsectionhide();
            gameState = 10
        })
    }
    nextSectionHide(){
        this.firstOption.hide();
        this.thirdOption.hide();
        this.action.hide();
    }
    nextsectionhide(){
        this.secondOption.hide();
        this.title1.hide();
        this.correct.hide();
        this.wrong.hide();
        this.nextSectionButton.hide();
    }
   
}