import { Component }from "react";


const TableHeader=()=>{
     
    return(
        <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
            <th>batch</th>
            <th>Qualification</th>
        </tr>
    </thead>
    )

}

const TableBody=()=>{
    return(
        <tbody>
        <tr>
            <td>Person1</td>
            <td>software Engg</td>
            <td>-</td>
            <td>-</td>
          
        </tr>
        <tr>
            <td>person2</td>
            <td>Civil Engg</td>
            <td>-</td>
            <td>-</td>
            

        </tr>
    </tbody>
    )
}

class Table extends Component{

    render(){
        return(
         
            <table>
               
               <TableHeader/>
               <TableBody/>
                
            </table>
            
        )
    }
}



export default Table;