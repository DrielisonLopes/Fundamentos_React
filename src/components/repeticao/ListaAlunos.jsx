import React from "react";
import alunos from "../../data/alunos";

export default (props) => {
    const listaAlunos = alunos.map((aluno) => {
        return (
            <div>
                {aluno.id}) {aluno.nome} -> {aluno.nota}
            </div>
        )
    })
    return (
        <div>
            {listaAlunos}
        </div>
    )
}
/* 
export default (props) => {
    const alunosLI = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} -> {aluno.nota}
            </li>
        );
    });

    return (
        <div>
            <ul style={{ listStyle: "none" }}>{alunosLI}</ul>
        </div>
    );
};
*/