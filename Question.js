class Question {
    constructor(){
        this.title = createElement("h2");
        this.question = createElement("h2");
        this.option1 = createElement("h2");
        this.option2 = createElement("h2");
        this.option3 = createElement("h2");
        this.option4 = createElement("h2");
        this.submit = createButton("Submit");
        this.name = createInput("Enter Your Name Here..");
        this.answer = createInput("Enter Correct Option No.");
    }

    hide(){
        this.title.hide();
        this.question.hide();
        this.option1.hide();
        this.option2.hide();
        this.option3.hide();
        this.option4.hide();
        this.name.hide();
        this.answer.hide();
        this.submit.hide();
    }


    display(){
    this.title.html("My Quiz Game");
    this.title.position(340,0);

    this.question.html("What starts and ends with the letter 'E' - but has only one letter?");
    this.question.position(90,30);
    this.option1.html("1: Everyone");
    this.option1.position(140,60);
    this.option2.html("2: Envelope");
    this.option2.position(140,100);
    this.option3.html("3: Estimate");
    this.option3.position(140,140);
    this.option4.html("4: Example");
    this.option4.position(140,180);
    this.input1.position(130,240);
    this.input2.position(330,240)
    this.button.position(290, 300);
    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
       contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });

}}