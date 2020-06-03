import React from "react"
import FragmentColumn from "./FragmentColumn"

class FragmentTable extends React.Component{
    render(){
        return(
            <table>
                <tr>
                    <FragmentColumn/>
                </tr>
            </table>

        )
    }

}

export default FragmentTable