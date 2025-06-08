import styled from "styled-components";

export const PostContainer = styled.div`
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
    flex-direction: column;
    justify-content: center;
    background: ${(props) => props.theme['base-profile']};

    filter :drop-shadow(500mm 500mm 1200mm ${(props) => props.theme.blue});
    box-shadow: 10px 10px 30px ${(props)=> props.theme['base-input']};
    width: 864PX;
    height: 200px;
    margin-top: -100px ;
    border-radius: 10px; 
    padding: 10px;
`

export const BackAndGitHubButton = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 30px;
         color: ${(props)=> props.theme.blue};
        div {
           img {
            margin-right: 5px;
           } 
        }
        button {
            border: 0;
            background: transparent;
            color: ${(props)=> props.theme.blue};
        }
        div {       
           a {color: ${(props)=> props.theme.blue};}

        }
`

export const Description = styled.div`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        margin-bottom: 30px;
        span {
            font-size: 24px;
            font-weight: bold;
            font-family: "Nunito", sans-serif;
            color: ${(props) => props.theme.white};
            margin-left: 5px;
        }
`

export const DashBoardHub = styled.div`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        margin-bottom: 30px;
        gap: 2rem;

        a {
            text-decoration: none;
            color: ${(props) => props.theme["base-span"]};

        }
`

export const PostBody = styled.div`
    
`