import React from "react";

export default function (props) {
    const { max, min } = props
    const aleatorio = parseInt(Math.random() * (max - min) + min)
    return (
        <div>
            <h2> Valor aleatório</h2>
            <strong>{min}</strong>
            <strong>{max}</strong>
            <strong>{aleatorio}</strong>
        </div>
    )
}

