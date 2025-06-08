import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BackAndGitHubButton, DashBoardHub, Description, PostBody, PostContainer, ProfileContainer } from "./styles";
import { faArrowUpRightFromSquare,  faCalendarWeek, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import arrowLeft from '../../assets/post/arrow-legt.svg';
import { useContext, useEffect } from "react";
import { IssueContext } from "../../context/IssueContext";

export function Post() {

    const { gitHubUser, fetchGitHubUser } = useContext(IssueContext);

     useEffect(() => {
            fetchGitHubUser()
     },[fetchGitHubUser])

    return(
        <PostContainer> 
          <ProfileContainer>
                <BackAndGitHubButton>
                    <div>
                        <img src={arrowLeft} />
                        <button> VOLTAR </button>
                    </div>

                    <div>
                        <span> VER NO GITHUB </span>
                        {/* href={gitHubUser?.html_url}  ADICIONAR AO CONTEXT */}
                        <a href={gitHubUser?.html_url} target="_blank">
                            <FontAwesomeIcon  icon={faArrowUpRightFromSquare} /> 
                        </a>
                    </div>

                </BackAndGitHubButton>

                <Description> 
                        <span> 
                            {/* {gitHubUser?.bio} */}
                            JavaScript data types and data structures
                        </span>
                </Description>
          
                <DashBoardHub> 
                    <div> 
                        <FontAwesomeIcon icon={faGithub} />
                        {/* {gitHubUser?.login} */}
                        <span> {gitHubUser?.login} </span>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faCalendarWeek} />
                        <a href="github"> Há 1 dia </a>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faUserGroup} />
                        {/* {gitHubUser?.followers} */}
                        <a href="SEGUIDORES"> 5 Commentários </a>
                    </div>
              
          </DashBoardHub>
          </ProfileContainer>

          <PostBody>

          </PostBody>
        </PostContainer>
    )
}