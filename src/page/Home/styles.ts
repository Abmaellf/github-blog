import { styled } from "styled-components"

export const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    margin: 0 auto;
    width: 1440px;
    background: ${(props) => props.theme['base-background']};
    gap: 2rem;
`

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme['base-profile']};

    filter :drop-shadow(500mm 500mm 1200mm ${(props) => props.theme.blue});
    box-shadow: 10px 10px 30px ${(props)=> props.theme['base-input']};
    width: 864PX;
    height: 212px;
    margin-top: -88px ;
    border-radius: 8px; 
`

export const ImageContainer = styled.div`

    img {
        width: 8rem;
        height: 8rem;
        margin: 2rem 3rem;
        border-radius: 8px; 
        
}
   
`

export const DadosProfile = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
     /* align-items: center;  NÃO PODE ALINHAR A COLUNA AO CENTRO
        POIS ALIMINA O JUSTIFY-CONTENT DE SEUS FILHOS
     */
    justify-content: center;
    width: 100%;
    margin-right: 20px;

`

export const TitleAndLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* max-width: 100%; */

`

export const Description = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 24px;
`
export const DashBoardHub =  styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 3rem;
    width: 16px;
    height:16px;
  
`