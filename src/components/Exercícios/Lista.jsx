import React from "react";
import { Component } from "react";

export default class Lista extends Component {
    render() {
        return (
            <>
                <div>
                    <input></input>
                    <button onClick="" className="add"><h2>Adicionar</h2></button>
                </div>
                <style>{`
                    .add {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color #585858;
                        margin-left: 2rem;                        
                    }
                `}</style>
            </>
        )
    }
}