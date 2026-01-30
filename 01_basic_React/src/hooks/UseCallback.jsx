import { useEffect, useState } from "react"
import UpdateNumbers from "./UpdateNumbers";
import { useCallback } from "react";

export default function UseCallback() {

    const [number, setNumber] = useState(1);
    // const [data, setData] = useState([]);
    const [count, setCount] = useState(0)

    const numberRender = useCallback(() => {
        return [number, number+1, number+2]
    },[number])

    return (
        <div style={{ textAlign: "center" }}>
            <input
                type="number"
                placeholder="Enter Number"
                style={{ fontSize: "4rem" }}
                onChange={e => setNumber(parseInt(e.target.value))} value={number}
            />
            <div style={{ fontSize: "4rem" }}>
                <UpdateNumbers data={numberRender} />
            </div>
            <button onClick={() => setCount(count + 1)} style={{ fontSize: "4rem" }}>{count}</button>
        </div>
    )
}