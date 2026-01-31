
export default function ChangeTheme(props) {
    function updateTheme() {
        props.theme === "Light" ? props.setTheme("Dark"): props.setTheme("Light")
       
    }
    return (
        <button onClick={(updateTheme)}>Change Theme</button>
    )
}