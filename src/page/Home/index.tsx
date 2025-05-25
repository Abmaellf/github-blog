import { TitleAndTime,CardIsseus, CardPublication, DadosProfile, DashBoardHub, Description,  HomeContainer, ImageContainer, ProfileContainer, PublicacaoContainer, TitleAndCount, TitleAndLink, BodyDescription } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FormPublicComp } from "../../components/FormPublicationComp";
import { useContext, useEffect, useState} from "react";
import {  formatDistanceToNow } from 'date-fns';
import { ptBR } from "date-fns/locale";
import { IssueContext } from "../../context/IssueContext";

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

  const { issues } = useContext(IssueContext);

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

    const publishetCount = issues;
    console.log(publishetCount)

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
                    {/* <span> {publishetCount} publicações </span> */}
                </TitleAndCount>

                <FormPublicComp />
                    <CardPublication> 
                        {issues.map((issue) => {
                                const createdAtIssue = formatDistanceToNow(issue.created_at, {
                                    locale: ptBR,
                                    addSuffix: true
                                })
                                    return(

                                        <CardIsseus key={issue.id}>
                                            <TitleAndTime>
                                                
                                                <h4> {issue.title} </h4>

                                                {/* <span> {dateFormatter.format(new Date(issue.created_at))} </span> */}
                                                <span> {createdAtIssue} </span>

                                            </TitleAndTime>

                                            <BodyDescription>
                                                <span> {issue.body} </span>
                                            </BodyDescription>

                                        </CardIsseus>
                                    )
                        })
                     }
                    </CardPublication> 

           </PublicacaoContainer>

        </HomeContainer>
       </>
    )
}