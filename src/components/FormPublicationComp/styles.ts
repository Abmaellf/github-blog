import { styled } from "styled-components"
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