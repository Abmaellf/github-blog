import { DadosProfile, DashBoardHub, Description, HomeContainer, ImageContainer, ProfileContainer, TitleAndLink } from "./styles";
// import iconGitHub from '../../assets/home/iconGitHub.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export function Home () {
    return(
       <>
         <HomeContainer>
           <ProfileContainer>

                <ImageContainer>
                    <img src="https://github.com/Abmaellf.png" />
                </ImageContainer>

             <DadosProfile>

                <TitleAndLink> 
                        <h2> Abmael Ferreira </h2>

                        <a href=""> Github </a>
                </TitleAndLink>

                <Description> 
                        <span> 
                            Me chamo Abmael Ferreira, tenho 37 anos e sou natural de Maracanaú - CE. Sou formado em 
                            sistema de informação. Sou apaixonada por tecnologia e quero logo logo compartilho meu 
                            conhecimento através do meu canal no YouTube "Abmael Ferreira".
                        
                        </span>
                </Description>

                <DashBoardHub> 
                    {/* <img src={iconGitHub} /> */}
                    <FontAwesomeIcon icon={faGithub} />
                    <a href="github"> Abmaellf </a>
                    <a href="github"> EMPRESA </a>
                    <a href="SEGUIDORES"> GITHUB </a>
                </DashBoardHub>

            </DadosProfile>
           </ProfileContainer>


           <p> PUBLICAÇÕES </p>

           <p> PESQUISA </p>

           <p> LISTA DE ISSUS </p>
        </HomeContainer>
       </>
    )
}