import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { IssueContextProvider } from "./context/IssueContext"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./page/Home"
import { Post } from "./page/Post"
import { Header } from "./components/Header"


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <IssueContextProvider>
        <BrowserRouter>
           <Routes>
                <Route path='/' element={<Home />}> </Route>
                <Route path='/post' element={<Post />}> </Route>
            </Routes>
        </BrowserRouter>
      </IssueContextProvider>
    </ThemeProvider>
  )
}


