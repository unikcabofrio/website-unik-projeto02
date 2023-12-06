import styled from "styled-components"

function ButtonSmall({text,BgColor,color}) {    
    return (
        <Buttonsmall 
            style={{
                backgroundColor: BgColor,
                color:color
            }}
        >
        {text}
        </Buttonsmall>
    )
}

const Buttonsmall = styled.button`
    width:30%;
    padding:.8rem;
    font-size:1.2rem;
    border:0;
    border-radius:1.5rem;
    cursor:pointer;
    transition: all .2s;

    &:hover{
        box-shadow:2px 2px 1px 1px ${({theme})=>{return theme.colorsTrans[1]}}
    }
`

export {ButtonSmall}

