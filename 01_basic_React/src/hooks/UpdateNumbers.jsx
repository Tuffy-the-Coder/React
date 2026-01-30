import { useEffect, useState } from "react"

export default function UpdateNumbers({ data }) {

    const [nums, setNums] = useState([]);

    useEffect(() => {
        setNums(data());
        console.log("Rendering Numbers...")
    }, [data]);
    return (
        nums.map(item => <div key={item}>{item}</div>)
    )
}