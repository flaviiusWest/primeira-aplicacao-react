import React from 'react'
import styled from 'styled-components'

export default function CardDePessoa({pessoa}) {
    return (
        <WrapperCardPessoa>
            <h4>
                {`Nome: ${pessoa.nome}`}
            </h4>
            <h5>
                {`Idade: ${pessoa.idade}`}
            </h5>
            <div>
                <span>Cores favoritas: </span>
                {
                    pessoa.coresFavoritas.map((cor) => (
                        <span>{cor}</span>
                    ))
                }
            </div>
        </WrapperCardPessoa>
    )
}

const WrapperCardPessoa = styled.div`

    border: 1px solid blue;
    width: 80%;
    height: 300px;
    transition: background-color 0.5s;
    &:hover {
        background-color: lightgray;
    }


`