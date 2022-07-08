import React, {useState} from "react"

export default function accountStorage(val){
    let [value, setValue] = useState(val);

    return [value, setValue]
}