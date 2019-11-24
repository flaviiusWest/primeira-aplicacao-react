import React from  'react'
import styled from 'styled-components'
import CardDePessoa from './CardDePessoa'

export default function CaixaQueSeguraOsCards() {

    const arrayQueDeveriaVirDoBack = [
        {
            nome: 'Flavio',
            idade: 19,
            coresFavoritas: ['azul', 'vermelho', 'verde']
        },
        {
            nome: 'Lucas',
            idade: 27,
            coresFavoritas: ['Laranja', 'Azul', 'Amarelo']
        }
    ]

    return (
        <div>
            {
                arrayQueDeveriaVirDoBack.map((item) => (
                    <CardDePessoa pessoa={item}/>
                ))
            }
        </div>
    )
}