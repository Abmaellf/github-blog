import { TitleAndTime,CardIsseus, CardPublication, DadosProfile, DashBoardHub, Description,  HomeContainer, ImageContainer, ProfileContainer, PublicacaoContainer, TitleAndCount, TitleAndLink } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FormPublicComp } from "../../components/FormPublicationComp";
import { useEffect, useState} from "react";

interface User{ 
    name: string,
    avatar_url: string,
    html_url: string,
    company: string,
    bio: string,
    login: string,
    followers: number,
}

export function Home () {

    // const [users, setUsers] = useState<User>([]);

   const [gitHubUser, setGitHubUser] = useState<User>();

   async function loadGitHubUser() {
        const resposta = await fetch(`https://api.github.com/users/Abmaellf`)
        const data = await resposta.json();
     console.log(data)
     setGitHubUser(data)
   }

    useEffect(() => {
        loadGitHubUser() 
    },[])

    return(
       <>
         <HomeContainer>
           <ProfileContainer>

                <ImageContainer>
                    <img src={gitHubUser?.avatar_url}/>
                </ImageContainer>

             <DadosProfile>

                <TitleAndLink> 

                        <h2> {gitHubUser?.name} </h2>

                        <div>
                            <span> GITHUB </span>

                            <a href={gitHubUser?.html_url} target="_blank">
                                <FontAwesomeIcon  icon={faArrowUpRightFromSquare} /> 
                            </a>

                        </div>
                </TitleAndLink>

                <Description> 
                        <span> 
                            {gitHubUser?.bio}
                        </span>
                </Description>

                <DashBoardHub> 
                    <div> 
                        <FontAwesomeIcon icon={faGithub} />
                        <a href="github"> {gitHubUser?.login} </a>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faBuilding} />
                        <a href="github"> {gitHubUser?.company} </a>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faUserGroup} />
                        <a href="SEGUIDORES"> {gitHubUser?.followers} Seguidores </a>
                    </div>

                </DashBoardHub>

            </DadosProfile>
           </ProfileContainer>


           <PublicacaoContainer>

                <TitleAndCount> 
                    <h2> Publicações </h2>
                    <span> 6 publicações </span>
                </TitleAndCount>

                <FormPublicComp />

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