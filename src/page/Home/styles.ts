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
    height: 200px;
    margin-top: -88px ;
    border-radius: 10px; 
`

export const ImageContainer = styled.div`
    img {
        width: 9rem;
        height: 9rem;
        margin: 2rem 3rem;
        border-radius: 10px; 
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
    /* width: 100%; */
    margin-right: 20px;

`

export const TitleAndLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        gap: rem;
        font-size: 12px;
        font-family: "Nunito", sans-serif;
        color: ${(props) => props.theme.blue};

        a {
            font-size: 12px;
            font-family: "Nunito", sans-serif;
            color: ${(props) => props.theme.blue};
            margin-left: 5px;
        }
    }

    h2 {
        font-family: "Nunito", sans-serif;
    }
`

export const Description = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 20px;
    font-size: 14px;
    font-family: "Nunito", sans-serif;
`
export const DashBoardHub =  styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 3rem;

   a {
        font-size: 14px;
        font-family: "Nunito", sans-serif;
        text-decoration: none;
        color: ${(props) => props.theme['base-subtitle']};;
   }

`

export const PublicacaoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 864PX;
    margin-top: 10px;
    margin-bottom: 200px;
`

export const TitleAndCount = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;

    h2 {
        font-size: 14px;
        font-family: "Nunito", sans-serif;
        color:  ${(props)=> props.theme['base-subtitle']};
    }
    
`


export const CardPublication = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr; /* Cria duas colunas com a mesma largura */
    Link {
        text-decoration: none;
    }
`

export const CardIsseus = styled.div`
    background : ${(props)=> props.theme['base-post']};
    margin-top: 48px;
    padding: 10px;
    border-radius: 5px;
    width: 416px;
    height: 260px;

    
   
`

export const TitleAndTime = styled.div`
     display: flex;
     align-items: center;
     justify-content: space-between;
     margin: 10px;

     span {
        margin: 10px;
        font-size: 10px;
        font-family: "Nunito", sans-serif;
     }
`

export const BodyDescription = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 16px;   

    max-width: 500px;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis; 
    -webkit-line-clamp: 5; // Quantidade de linhas
    -webkit-box-orient: vertical;

    span {
        
        font-size: 14px;
        font-family: "Nunito", sans-serif;
        line-height: 1.6;
       
        
        
     }
`

export const FormPublication =  styled.form`
    input {
        width: 100%;
        padding: 10px;
        /* color: ${(props)=> props.theme['base-label']}; */
        background: ${(props)=> props.theme['base-input']};
        border: solid 2px ${(props)=> props.theme['base-border']};
        border-radius: 5px;

        &::placeholder {
            color: ${props => props.theme['base-label']};
        }
        &:focus{
            color: ${props => props.theme['base-text']};
    }
  }
`
