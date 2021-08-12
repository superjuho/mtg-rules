import React from 'react'
import { useAllRules } from '../hooks/RulesHooks'

export const RuleTable = ( rule: any ) => {
    
    const ruling = rule.match.params.rule
    console.log(ruling)
    const rules = useAllRules()
    
    return (
        <div className="RulesTable">
           {rules.map((x: string) => {
                if(x.startsWith('\n'+ ruling.substring(0,4))){
                    const line = x.split(/\n/)
                    console.log("ruletable line: ",line)
                    const rivi = line.map((rivi: string ) => {
                        if(rivi.startsWith(ruling.substring(0,1)))
                        return <div className="rivi">{rivi}</div>
                        else 
                            return null
                    })  
                    return rivi 
                } else {
                    return null
                }
                })}
        </div>
    )
}
