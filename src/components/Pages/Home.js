import styled from "styled-components"
import Image from "next/image"

import { ButtonSmall } from "@/utils/Button"
import PhotoCell from '@/assets/mockup_1-AzGzyBl0Grt0gagr.png'
import Logo from '@/assets/logo-dOq0Xev8QECl4yxO.png'

export default function Home({id}) {
    return (
        <DivContainer id={id}>
            <Image 
                src={Logo}
                alt={"Carregando Imagem"}
                width={0}
                height={0}
                sizes="100vw"
            />
            <div className="infor">
                <Image 
                    src={PhotoCell}
                    alt={"Carregando Imagem"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority={true}
                />
                <div>
                    <h2>Uma maneira de controlar suas finanças</h2>
                    <p>
                        A maneira fácil de manter o controle de suas finanças, não importa onde você esteja.
                    </p>
                    <div>
                        <ButtonSmall text="Baixe Agora" BgColor={'#7634bf'} color={"#FFFFFF"}/>
                    </div>
                </div>
            </div>
        </DivContainer>
    )
}

const DivContainer = styled.div`
    width:100%;
    padding:5rem 5rem 15rem 5rem;
    display:flex;
    flex-direction:column;
    background: rgb(0,0,0);
    background: linear-gradient(140deg, rgba(0,0,0,1) 0%, rgba(118,52,191,1) 100%);

    img{
        width:15%;
        height:auto;
        margin-bottom:3rem;
    }

    .infor{
        width:100%;
        display:flex;
        flex-direction:row-reverse;
        justify-content: space-between;

        img{
            width:80%;
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
    }

    @media ${({theme})=>{return theme.device.mobileS}} { 
        padding:1rem 1rem 22rem 1rem;
        align-items:center;

        img{
            width:30%;
        }

        .infor{
            align-items:center;
            flex-direction:column-reverse;
            text-align:center;

            img{
                width:100%;
                height:auto;
            }

            div {

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
                    }
                }
            }
        }
    }
`


