import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 1440px;
    height: 296px;
    min-height: 300px;
    /* height: 50x; */
    background: ${(props => props.theme['base-profile'])};
`

export const ImageAndTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
    gap: 2rem;

    h2 {
        font-family: "Coda", system-ui;
        font-weight: 400;
        font-style: normal;
        color: ${(props) => props.theme['blue']};
    }
`
export const ImageCenter = styled.div`
   width: 45px;
   height: 4opx;
`





