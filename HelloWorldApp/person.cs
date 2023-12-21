namespace HR;

public class Person{
 
private int id;
private string firstname;

public string Firstname{

get{
    return this.firstname;
}

set{
   this.firstname=value;
}


}

public Person()
{
    this.id = 100;
    this.firstname = "Akshay";
}


public Person(int id , string fname)
{
   this.id=id;
   this.firstname = fname;   
}

    public override string ToString()
    {
        return  this.id + ", " +this.firstname;
    }

}