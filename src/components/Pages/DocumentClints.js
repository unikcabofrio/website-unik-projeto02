import { useState } from "react"
import Image from "next/image"
import styled from "styled-components"

export default function DocumentClints({id}) {

    const [clints] = useState([
        {title:"Fácil de usar",name:"Anna Jenkins",descript:"Usei todos os aplicativos de finanças pessoais do mercado e descobri que a maioria tem dificuldade em sincronizar minhas diversas contas bancárias e cartões em tempo real, o que às vezes me deixa em dúvida por dias. Blick foi uma grata surpresa! A equipe realmente trabalhou duro para garantir a sincronização instantânea com a maioria dos principais bancos e credores. Impressionado!"},
        {title:"Surpreendido com ótimos resultados!",name:"Danny Lores",descript:"Conto com minha planilha de orçamento, pois ela me ajuda a organizar meus dados de gastos em gráficos e tabelas significativos. É por isso que fui abrangente sobre a mudança para um aplicativo de finanças pessoais, pois descobri que, na melhor das hipóteses, faltava a apresentação de dados. Veja só, Blick foi o único aplicativo que foi selecionado!"}
    ])

    return (
        <DivContainer id={id}>
            <h3>AVALIAÇÕES</h3>
            <h1>O que eles dizem?</h1>
            <div>
                {clints.map((index,key)=>{
                    return(
                        <div key={key}>
                                <Image 
                                    src={`/${index.name}.png`}
                                    alt={"Carregando Imagem"}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                />
                                <div>
                                    <h2>{index.title}</h2>
                                    <p>{index.descript}</p>
                                    <p className="italic">- {index.name}</p>
                                </div>
                        </div>
                    )
                })}
            </div>
            
        </DivContainer>
    )
}

const DivContainer = styled.div`
    width:100%;
    padding:1rem 5rem;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    background-color:${({theme})=>{return theme.colors[1]}};
    color:${({theme})=>{return theme.colors[0]}};
    font-size:1rem;
    text-align:center;

    h3{
        color:${({theme})=>{return theme.colors[3]}};
    }

    h1{
        font-size:4rem;
    }

    div{
        margin-top:1rem;
        display:grid;
        grid-template-columns:repeat(2, auto);

        div {
            display:flex;
            margin-right:1rem;
            align-items: center;

            img{
                width: 40%;
                height: 60%;
                border-radius:.5rem;
                margin-right:1rem;
                object-fit: cover;
            }

            div{
                display:flex;
                flex-direction:column;
                align-items:flex-start;
                text-align:left;

                p{
                    margin-top:1rem;
                }

                .italic{
                    font-weight:300;
                    font-style: italic;
                }
            }

        }
    }

    @media ${({theme})=>{return theme.device.mobileS}} { 
        padding:1rem;

        div{
            width:100%;
            grid-template-columns:repeat(1, auto);

            div {
                flex-direction:column;

                img{
                    margin-top:1.3rem;
                    width: 40%;
                    height: auto;
                }

                div{
                    text-align:justify;
                    align-items:center;
                }
            }
        }
    }
`


