
// method #01 ( if-else )

// export default function ConditionalRendering(props) {
//     if (props.isLoggedIn) {

//         return (
//             <>
//                 <p>Welcome {props.userName}</p>
//             </>
//         )
//     }
//     return (
//         <>
//             <p>Please login</p>
//         </>
//     )
// }

// method #02 ( ternary )

// export default function ConditionalRendering(props) {
//     return (
//         <>
//             {props.isLoggedIn ?<p>Welcome {props.userName}</p> : <p>Please login</p>}
//         </>
//     )
// }

// method #02.5

// export default function ConditionalRendering(props) {
//     const greetUser = <p>Welcome {props.userName}</p>;
//     const loginMsg = <p>Please login</p>
//     return (
//         <>
//             {props.isLoggedIn ? greetUser : loginMsg}
//         </>
//     )
// }

// method #03

export default function ConditionalRendering(props) {
    return (
        <>
            {props.isLoggedIn && <p>Welcome {props.userName}</p>}
        </>
    )
}