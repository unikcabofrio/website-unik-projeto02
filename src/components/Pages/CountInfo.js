import styled from "styled-components"
import { useEffect, useState } from "react"

export default function CountInfo({id}) {

    const [numbers, setNumbers] = useState([0, 0, 0]);
    const targetValues = [15, 230, 340];
    const duration = 500;

    const Increment = () =>{
        const steps = 10;
        const delays = duration / steps;

        const updateNumbers = () => {
            setNumbers((prevNumbers) => {
                return prevNumbers.map((prevNumber, index) => {
                const stepValue = targetValues[index] / steps;
                return Math.min(Math.round(prevNumber + stepValue), targetValues[index]);
                });
            });
        };

        const intervalId = setInterval(updateNumbers, delays);

        // Limpa o intervalo após 5 segundos
        setTimeout(() => {
        clearInterval(intervalId);
        }, duration);

        // Limpa o intervalo se o componente for desmontado
        return () => clearInterval(intervalId);
    }

    useEffect(() => {
        Increment()
        setInterval(() => {
            setNumbers([0,0,0])
            Increment()
            }, 50000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <DivContainer id={id}>
            <div>
                <h1>{numbers[0]}</h1>
                <p>Membros do time</p>
            </div>
            <div>
                <h1>{numbers[1]}k</h1>
                <p>Usuários satisfeitos</p>
            </div>
            <div>
                <h1>{numbers[2]}+</h1>
                <p>Credores apoiados</p>
            </div>
        </DivContainer>
    )
}

const DivContainer = styled.div`
    width:100%;
    padding:3rem 5rem;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    background-color:${({theme})=>{return theme.colors[4]}};
    color:${({theme})=>{return theme.colors[0]}};
    font-size:1.5rem;
    text-align:center;

    div {
        h1{
            font-size:6rem;
        }
    }

    @media ${({theme})=>{return theme.device.mobileS}} { 
        padding:1rem;
        flex-direction:column;

        div {
            padding:1rem 0 ;
        }
    }
`


