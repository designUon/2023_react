import { Children, Component } from "react";

class TextComp extends Component{

    render(){

        const prop = this.props;

        const {name, children} = this.props;

        return(
            <div>
            <h1>{children}</h1>
            <p>{name}</p>
            </div>
        )
    }

}

export default TextComp;