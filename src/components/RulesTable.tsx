import React from 'react'
import { Link } from 'react-router-dom'
import { useAllRules } from '../hooks/RulesHooks'
import '../styles/RulesTable.css'

const RulesTable = () => {

    const rules = useAllRules()
    let n = 1
    

    return (
        <div className="RulesTable">
           {rules.map((x: string) => {
                if(x.startsWith('\n'+ n + '.')){
                    const line = x.split(/\n/)
                    n++
                    const rivi = line.map((rivi: string ) => {
                        return <Link className="rivi" to={"/rule" + rivi}>{rivi}</Link>
                    })  
                    return rivi 
                } else {
                    return null
                }
                })}
        </div>
    )
}

export default RulesTable