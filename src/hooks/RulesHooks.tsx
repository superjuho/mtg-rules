import { useState, useEffect } from "react";
import axios from 'axios'



const useAllRules = () => {
    const[rules, setRules] = useState([])
    const getRules = async () => { 
        try {
            const result = await axios({
                url: 'https://chely.org/magic',
                method: 'GET',
            });
    
            setRules(result.data.split(/\n\r/))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=> {
        getRules()
    },[])

    return rules;
}

export {
    useAllRules,
}