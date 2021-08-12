import React from 'react'
import { useAllRules } from '../hooks/RulesHooks'
import { Link } from 'react-router-dom'

export const SearchTable = ( term: any ) => {

    const searchTerm = term.match.params.searchTerm
    console.log("searchTAble: ",searchTerm)
    const rules = useAllRules()


    return (
            <div className="RulesTable">
           {rules.map((x: any) => {
                if(x.includes(searchTerm)){
                    const line = x.split(/\n/)
                    console.log("Searchtable: ",line)
                    const rivi = line.map((rivi:any ) => {
                        return <Link className="rivi" to={'/rule' +rivi}>{rivi}</Link>
                    })  
                    return rivi 
                } else {
                    return null
                }
                })}
        </div>
    )
}
