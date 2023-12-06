import styled from "styled-components"
import Link from "next/link";

export default function Footer() {
    const date = new Date();
    return (
      <DivContainer>
        <p>Copyright &copy; <Link href={""}>Unik Cabo Frio</Link> Ano {date.getFullYear()}</p>
      </DivContainer>
    )
}


const DivContainer = styled.div`
    width:100%;  
    padding:.5rem 1rem;
    display:flex;
    align-items:center;
    flex-direction: column;
    background-color:${({theme})=>{return theme.colors[0]}};
    color:${({theme})=>{return theme.colors[4]}};

    a{
      color:${({theme})=>{return theme.colors[4]}};
      text-decoration: underline;
    }
`
