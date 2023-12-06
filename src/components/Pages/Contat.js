import styled from "styled-components"
import Image from "next/image"
import Link from "next/link"

import {ButtonSmall} from "@/utils/Button"

import Logo from '@/assets/logo_black-AE0xqKEXpLtVQXnM.png'

export default function Contact({id}) {
    
    return (
      <DivContainer id={id}>
        <DivInfo>
            <Image
                src={Logo}
                alt={"Carregando Imagem"}
                width={0}
                height={0}
                sizes="100vw"
            />
            <h3>Facilitando suas finanças.</h3>
            <Link href={""}>Política de Privacidade</Link>
            <Link href={""}>Termos e Condições</Link>
            <div>
                <Link href={""}><i className="fi fi-brands-facebook"></i></Link>
                <Link href={""}><i className="fi fi-brands-instagram"></i></Link>
                <Link href={""}><i className="fi fi-brands-twitter"></i></Link>
            </div>
        </DivInfo>
        <DivForm>
            <h3>Assine a nossa newsletter</h3>
            <form onSubmit={()=>{}}>
                <div>
                    <p>Endereço de email</p>
                    <input type="email" placeholder="Seu endereço de email" required/>
                    <p id={'fieldRequired'}>Este campo é obrigatório</p>
                </div>
                <div className="button">
                    <ButtonSmall text="Submit" BgColor={'#7634bf'} color={"#FFFFFF"}/>
                </div>
            </form>
        </DivForm>
      </DivContainer>
    )
}


const DivContainer = styled.div`
    width:100%;  
    padding:0 5rem 5rem 5rem;
    display:flex;
    align-items:center;
    flex-direction: row;
    justify-content: space-between;
    background-color:${({theme})=>{return theme.colors[0]}};
    color:${({theme})=>{return theme.colors[1]}};
    transition: all .1s;

    @media ${({theme})=>{return theme.device.mobileS}} { 
        padding:1rem;
        flex-direction: column;
    }
`

const DivInfo = styled.div`
    display:flex;
    flex-direction: column;

    img, h3{
        margin-bottom:1rem;
    }

    a{
        color:${({theme})=>{return theme.colors[1]}};
        text-decoration: underline;

        &:hover{
            color:${({theme})=>{return theme.colors[2]}}
        }
    }

    div{
        margin-top:2rem;

        a{
            text-decoration: none;
            font-size:1.3rem;
            margin-right:1rem;
        }
    }

    @media ${({theme})=>{return theme.device.mobileS}} { 
        width:100%; 
        align-items:center;
        margin:2rem 0;

        div{
            a{
                font-size:2rem;
            }
        }
    }
`

const DivForm = styled.div`
    width:60%;  

    h3{
        margin-bottom:1rem;
    }

    form{
        div{
            margin-bottom:1rem;
            
            input{
                width:100%;
                border:0;
                background-color:${({theme})=>{return theme.colors[5]}};
                padding:1rem;
                border-radius:.2rem;
                margin-top:.5rem;

                &:focus-visible{
                    outline: -webkit-focus-ring-color auto 0;
                    box-shadow:0 0 1px 1px ${({theme})=>{return theme.colorsTrans[0]}}
                }
            }

            #fieldRequired{
                opacity:0;
            }
        }

        .button{
            width:100%;
        }
    }

    @media ${({theme})=>{return theme.device.mobileS}} { 
        width:100%;

        h3{
            text-align:center;  
        }

        form{
            .button{
                padding:0 2rem;
                Button{
                    width:100%;
                }
            }
        }
    }
`
