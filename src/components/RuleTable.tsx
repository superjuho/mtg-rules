import React from 'react'
import { useAllRules } from '../hooks/RulesHooks'

export const RuleTable = ( rule: any ) => {
    
    const ruling = rule.match.params.rule
    console.log(ruling)
    const rules = useAllRules()
    
    return (
        <div className="RulesTable">
            <div className="ruleTable"> 
            {rules.map((x: string) => {
                    if(x.startsWith('\n'+ ruling.substring(0,4))){
                        const line = x.split(/\n/)
                        const ruleLine = line.map((ruleLine: string ) => {
                            if(ruleLine.startsWith(ruling.substring(0,1)))
                            return <div className="ruleLineN">{ruleLine}</div>
                            else 
                                return null
                        })  
                        return ruleLine
                    } else {
                        return null
                    }
                    }
                )}
            </div>
        </div>
    )
}
