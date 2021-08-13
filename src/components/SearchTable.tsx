import React from 'react'
import { useAllRules } from '../hooks/RulesHooks'
import { Link } from 'react-router-dom'

export const SearchTable = ( term: any ) => {

    const searchTerm = term.match.params.searchTerm
    console.log("searchTAble: ", searchTerm)
    const rules = useAllRules()
    let isEmpty = true;


    return (
        <>
            <h1 className="tableContents"> Results for: "{searchTerm}" </h1>
                <div className="SearchTable">
                    {rules.map((x: any) => {
                            if(x.includes(searchTerm)){
                                const line = x.split(/\n/)
                                const ruleLine = line.map((ruleLine:any ) => {
                                    if(ruleLine.length > 3) {
                                        isEmpty = false
                                        if(ruleLine.startsWith(ruleLine.match(/\b[0-9]{3}\b/)) && ruleLine.includes(searchTerm))
                                        return <Link className="ruleLineSearch" to={'/rule' +ruleLine}>{ruleLine}</Link>
                                    }
                                })  
                                return ruleLine 
                            } else {
                                return null
                            }
                        })}
                </div>
                <h3 className="searchFail">
                    {isEmpty
                        ? 
                     "Your search didn't have any magic :( so nothing to see here"
                     : 
                     " "   
                    }
                </h3>

        </>
    )
}
