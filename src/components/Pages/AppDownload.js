import styled from "styled-components"
import Image from "next/image"

import { ButtonSmall } from "@/utils/Button"
import PhotoCell from '@/assets/mockup_5-YrDBLMo533Cg2KkG.png'

export default function AppDownload({id}) {
    return (
        <DivContainer id={id}>
            <Image 
                src={PhotoCell}
                alt={"Carregando Imagem"}
                width={0}
                height={0}
                sizes="100vw"
            />
            <div>
                <h2>O que você está esperando?</h2>
                <p>
                    Não há melhor momento para assumir o controle de suas finanças. 
                    Com as poderosas ferramentas de categorização e visualização do Blick, 
                    você realmente cumprirá seu orçamento.
                </p>
                <div>
                    <ButtonSmall text="Google Play" BgColor={'#7634bf'} color={"#FFFFFF"}/>
                    <ButtonSmall text="App Store" BgColor={'#e03584'} color={"#FFFFFF"}/>
                </div>
            </div>
        </DivContainer>
    )
}

const DivContainer = styled.div`
    width:100%;
    padding:5rem 5rem 20rem 5rem;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    background: rgb(0,0,0);
    background: linear-gradient(140deg, rgba(0,0,0,1) 0%, rgba(118,52,191,1) 100%);

    img{
        width:40%;
        height:auto;
    }

    div {
        width:100%;
        color:${({theme})=>{return theme.colors[0]}};

        h2{
            font-size:5rem;
            color:${({theme})=>{return theme.colors[3]}};
        }

        p{
            font-size:1.2rem;
            font-weight:300;
            margin:1rem 0;
            width:80%;

        }

        div{
            button{
                margin-right:2rem;
            }
        }
    }

    @media ${({theme})=>{return theme.device.mobileS}} { 
        padding:1rem 1rem 25rem 1rem;
        flex-direction:column-reverse;

        img{
            margin-top:2rem;
            width:100%;
            height:auto;
        }


        div {
            text-align:center;
            align-items:center;

            h2{
                font-size:3rem;
            }

            p{
                width:100%;
            }

            div{
                padding: 0 2rem;

                button{
                    width:100%;
                    margin-right:0;
                    margin-top:1rem;
                }
            }
        }
    }
`


