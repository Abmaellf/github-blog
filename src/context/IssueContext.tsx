import { createContext, useEffect, useState, type ReactNode } from "react"

// Interface de Tipagem do useState e de um ou mais ITEM TRAFEGADO
interface Issue {
    id: string,
    title: string,
    created_at: string,
    body: string
}

// Interface destinada aos ITENS TRAFEGADOS
interface IssueContextType  {
    issues: Issue[];
}

//Interface destinada para a tipagem do Parametro passado na FUNÇÃO PRINCIPAL DO ARQUIVO  
interface IssueContextProviderType {
    children: ReactNode;
}

//Constante retornada nessa função  e de importação nas paginas
 export const IssueContext = createContext({} as IssueContextType);

 //Função principal
export function IssueContextProvider({children}: IssueContextProviderType ) {

     const [issues, setIssues] = useState<Issue[]>([]);

       async function loadGitHubIssues() {
             const resposta = await fetch(`https://api.github.com/repos/Abmaellf/github-blog/issues`)
             //   const resposta = await fetch(`https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues`)
             const data = await resposta.json();
          console.log(data)
          
          setIssues(data)
        }

         useEffect(() => {
                loadGitHubIssues()
            },[])

     return(
        <IssueContext.Provider value={{issues}}>
            {children}
        </IssueContext.Provider>
     )

}