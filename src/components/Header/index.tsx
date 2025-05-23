import {  HeaderContainer, ImageAndTitle, ImageCenter} from "./styles";
import efecct1 from '../../assets/header/effect1.svg'
import efecct2 from '../../assets/header/effect2.svg'
import terminal from '../../assets/header/terminal-solid.svg'

export function Header() {
    return(
       
         <HeaderContainer> 

            <img src={efecct1} alt=""/>

            <ImageAndTitle>
                <ImageCenter>
                    <img src={terminal} />
                </ImageCenter>
                <h2> GITHUB BLOG </h2>
            </ImageAndTitle>
            
            <img src={efecct2} alt=""/>
            
        </HeaderContainer>

    )
}