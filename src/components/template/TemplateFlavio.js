import React from 'react'
import styled from 'styled-components'

export default function TemplateFlavio({sider, content}) {

    return (
        <TemplateWrapper>
            <div className={'conteudo-da-esquerda'}>
                {sider}
            </div>
            <div className={'contedo-da-direita'}>
                {content}
            </div>
        </TemplateWrapper>
    )

}

const TemplateWrapper = styled.div`

    display: flex;
    height: 100%;
    width: 100%;

    .conteudo-da-esquerda {
        /* background-color: red;  */
        width: 40%;
        border-right: 1px solid magenta;
    }

    .contedo-da-direita {
        /* background-color: blue;  */
        width: 60%;
    }

`