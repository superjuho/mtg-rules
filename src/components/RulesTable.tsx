import React from 'react'
import { Link } from 'react-router-dom'
import { useAllRules } from '../hooks/RulesHooks'
import '../styles/RulesTable.css'

const RulesTable = () => {

    const rules = useAllRules()
    let n = 1
    

    return (
        <>
            <h1 className="tableContents">Table of Contents</h1>
            <div className="RulesTable">
            {rules.map((x: string) => {
                    if(x.startsWith('\n'+ n + '.')){
                        const line = x.split(/\n/)
                        const ruleLine = <div className="rule"> {line.map((ruleLine: string ) => {
                            if(ruleLine.startsWith(n.toString())) {
                                return <Link className="ruleLine" to={"/rule" + ruleLine}>{ruleLine}</Link>
                            }
                        })  }</div>
                        n++
                        return ruleLine
                    } else {
                        return null
                    }
                    })}
                
            </div>
        </>
    )
}

export default RulesTable