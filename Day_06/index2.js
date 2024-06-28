const student =  {
    names : "Ashish",
    printName : function (){
        console.log(this.names);
    }
}

const student2 =  {
    names : "xyz"
}

student.printName();
student.printName.call(student2);
