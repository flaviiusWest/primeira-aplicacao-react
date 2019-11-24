import React from 'react'
import styled from 'styled-components'

export default function TemplateFlavio() {

    return (
        <TemplateWrapper>
            <div className={'conteudo-da-esquerda'}>
                Aqui vai o conteudo da esquerda
            </div>
            <div className={'contedo-da-direita'}>
                Aqui vai o conteudo  da direita
            </div>
        </TemplateWrapper>
    )

}

const TemplateWrapper = styled.div`

    display: flex;
    height: 100%;
    width: 100%;

    .conteudo-da-esquerda {
        background-color: red; 
        width: 40%;
    }

    .contedo-da-direita {
        background-color: blue; 
        width: 60%;
    }

`