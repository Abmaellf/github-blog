import { createContext, useEffect, useState, type ReactNode } from "react"
import { api } from "../lib/axios";

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
    fetchIssuesChange: (pesquisa?: string) => Promise<void>;
}

//Interface destinada para a tipagem do Parametro passado na FUNÇÃO PRINCIPAL DO ARQUIVO  
interface IssueContextProviderType {
    children: ReactNode;
}

//Constante retornada nesta função com Provider RETURN(<IssueContext.Provider value={{ }}>  </IssueContext.Provider>)  
//E de importação nas paginas que utiliza o context
 export const IssueContext = createContext({} as IssueContextType);

 //Função principal que deve ser utilizada no component App envolvendo todos os componentes que utiliza o context
export function IssueContextProvider({children}: IssueContextProviderType ) {

    const [issues, setIssues] = useState<Issue[]>([]);

    async function fetchIssuesChange(pesquisa?: string) {
        
        setIssues([])

        if(!pesquisa){
            const resposta =  await api.get('repos/Abmaellf/github-blog/issues', {

            });
            // const data = await resposta.json();
            console.log(resposta.data, "query")
            setIssues(resposta.data)

        } else {
            const resposta = await fetch(`https://api.github.com/search/issues?q=${pesquisa}%20repo:Abmaellf/github-blog`);
            const data = await resposta.json();
            console.log(data.items, "query")
            setIssues(data.items)
        }
    }

    useEffect(() => {
        fetchIssuesChange()
    },[])

     return(
        <IssueContext.Provider value={{issues, fetchIssuesChange}}>
            {children}
        </IssueContext.Provider>
     )

}