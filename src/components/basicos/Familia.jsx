import React, { cloneElement } from "react";
//retornar o elmento clonado (child) concatenado com o pai (props)
export default (props) => {
    return (
        <div>
            {React.Children.map(props.children, (child) => {
                return cloneElement(child, props)
            })}
        </div>
    )
}

/*export default (props) => {
    return (
        <div>
            {props.children.map((child , i) => {
                return cloneElement(child, { ...props, key: i})
            })}
        </div>
    )
}*/