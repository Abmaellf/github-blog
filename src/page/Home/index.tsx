import { TitleAndTime,CardIsseus, CardPublication, DadosProfile, DashBoardHub, Description,  FormPublication,  HomeContainer, ImageContainer, ProfileContainer, PublicacaoContainer, TitleAndCount, TitleAndLink } from "./styles";
// import iconGitHub from '../../assets/home/iconGitHub.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

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

                        <div>
                            <span> GITHUB </span>

                            <a href="https://github.com/Abmaellf">
                                <FontAwesomeIcon  icon={faArrowUpRightFromSquare} /> 
                            </a>

                        </div>
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
                    <div> 
                        <FontAwesomeIcon icon={faGithub} />
                        <a href="github"> Abmaellf </a>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faBuilding} />
                        <a href="github"> AbmaelFerreira </a>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faUserGroup} />
                        <a href="SEGUIDORES"> 100 Seguidores </a>
                    </div>

                </DashBoardHub>

            </DadosProfile>
           </ProfileContainer>


           <PublicacaoContainer>

                <TitleAndCount> 
                    <h2> Publicações </h2>
                    <span> 6 publicações </span>
                </TitleAndCount>

                <FormPublication> 
                    <input placeholder="Buscar conteúdo"/>
                </FormPublication>

                <CardPublication> 

                    <CardIsseus>
                        <TitleAndTime>
                            
                            <h4> JavaScript data types and data structures</h4>
                            <span>Há 1 dia</span>

                        </TitleAndTime>
                        <span> Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in </span>
                    </CardIsseus>

                    <CardIsseus>
                        <TitleAndTime>
                            
                            <h4> JavaScript data types and data structures</h4>
                            <span>Há 1 dia</span>

                        </TitleAndTime> 
                        <span> Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in </span>
                    </CardIsseus>
            
                     <CardIsseus>
                          <TitleAndTime>
                            
                            <h4> JavaScript data types and data structures</h4>
                            <span>Há 1 dia</span>

                        </TitleAndTime> 
                        <span> Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in </span>
                    </CardIsseus>

                     <CardIsseus>
                        <TitleAndTime>
                            
                            <h4> JavaScript data types and data structures</h4>
                            <span>Há 1 dia</span>

                        </TitleAndTime> 
                        <span> Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in </span>
                    </CardIsseus>

                    <CardIsseus>
                       <TitleAndTime>
                            
                            <h4> JavaScript data types and data structures</h4>
                            <span>Há 1 dia</span>

                        </TitleAndTime>
                        <span> Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in </span>
                    </CardIsseus>

                    <CardIsseus>
                        <TitleAndTime>
                            
                            <h4> JavaScript data types and data structures</h4>
                            <span>Há 1 dia</span>

                        </TitleAndTime> 
                        <span> Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in </span>
                    </CardIsseus>
             </CardPublication> 

           </PublicacaoContainer>
        </HomeContainer>
       </>
    )
}