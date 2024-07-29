
class human{
    constructor(){
        this.age= 63;
    }
    printAge(){
        console.log(this.age)
    }
}

class person extends human{
    constructor(){
        super()
        this.name="ancb";
        this.age=96
    }

    printName(){
        console.log(this.name)
    }
}

const persons= new person();
persons.printName()
persons.printAge()