export default function App10()
{
    return(

        <>
        
        <form  method="post" action="http://localhost:5290/Home/InsertEmp">

        ID:   <input type="number" name="id"></input><br></br>
        FIRST NAME:    <input type="text" name="fn"></input><br></br>
        LAST NAME:    <input type="text" name="ln"></input><br></br>
            <button type="submit">Submit</button>
        </form>


        </>
    )
}