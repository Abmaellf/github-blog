import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Home } from "./page/Home"
import { IssueContextProvider } from "./context/IssueContext"


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <IssueContextProvider>
        <Home />  
      </IssueContextProvider>
    </ThemeProvider>
  )
}


