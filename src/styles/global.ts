import { createGlobalStyle } from "styled-components";

			export const GlobalStyle = createGlobalStyle`
				* {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
				}

			
			body {
				background-color: ${props => props.theme.white};
				color: ${props => props.theme['base-text']};
				-webkit-font-smoothing: antialiased;
			}

			body, input-security, textarea, button {
				font: 400 1rem Roboto, sans-serif;
			}

			:focus {
				outline: transparent;
				box-shadow: 0 0 0 2px ${(props)=> props.theme.blue};
			}

			`