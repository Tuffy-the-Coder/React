import { useMemo, useState } from "react"

const num = new Array(30_000_000).fill(0).map((_, i) => {
    return {
        index: i,
        isMagical: i === 29_000_000
    }
})
export default function UseMemo() {
    const [count, setCount] = useState(0);
    const [numbers, setNumbers] = useState(num);

    // const magical = numbers.find(item => item.isMagical === true);
    const magical = useMemo(() =>
        numbers.find(item => item.isMagical === true)
        , [numbers])

    return (
        <div style={{ textAlign: "center", fontSize: "5rem" }}>
            <h2>{count}</h2>
            <h4>{magical.index}</h4>
            <button onClick={() => {
                setCount(count + 1)
                if (count == 10) {
                    setNumbers(new Array(10_000_000).fill(0).map((_, i) => {
                        return {
                            index: i,
                            isMagical: i === 9_000_000
                        }
                    })

                    )
                }
            }
            }>Count</button>
        </div>
    )
}