import styled from "styled-components"

function WaveSmall() {
    
    return (
        <Wavesmall>
            <svg viewBox="0 0 500 200">
                <path d="M 0 50 C 150 150 300 0 500 80 L 500 0 L 0 0" fill="#FFFFFF"></path>
                <path d="M 0 50 C 150 150 330 -30 500 50 L 500 0 L 0 0" fill="#FFFFFF" opacity="0.8"></path>
                <path d="M 0 50 C 215 150 250 0 500 100 L 500 0 L 0 0" fill="#FFFFFF" opacity="0.5"></path>
            </svg>
        </Wavesmall>
    )
}

const Wavesmall = styled.div`
    margin-top:-30rem;
    width: 100%;
    transform:rotateX(180deg);
`

export {WaveSmall}

