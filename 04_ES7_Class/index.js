class human{
    age=63;
    printAge=()=>console.log(this.age)
}

class person  extends human{
    names= "sdhbds";
    age=96
    printName=()=>console.log(this.names)
}

const persons= new person()

persons.printName();
persons.printAge()