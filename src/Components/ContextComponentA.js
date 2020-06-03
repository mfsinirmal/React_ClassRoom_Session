import React from "react"
import ContextComponentB from "./ContextComponentB"
import ContextComponent from './ConextComponent';

class ContentComponentA extends React.Component{    
    render(){
        return(
            <ContextComponent.Provider value="nirmalh">
                <ContextComponentB/>
            </ContextComponent.Provider>
            
        )
    }
}

export default ContentComponentA