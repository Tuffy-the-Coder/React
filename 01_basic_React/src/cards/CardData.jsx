
function BgPicker() {
    const colors = ["#ff5050","#ff9966","#ff6699","#9966ff","#ccff99","#3366ff"]
    // console.log(colors[Math.floor(Math.random()*7)]);
    return colors[Math.floor(Math.random()*7)];
}
export default function CardData(props) {
    
    const enteries = props.data;
    // console.log(enteries);
    const renderingData = enteries.map(data => 
                <div className="card" key = {data.id} style={{background: BgPicker()}}>
                    <h4>{data.title.slice(0,10)}</h4>
                    <p className="description">{data.body}</p>
                    <p className="description">{data.body}</p>
                    <p className="description">{data.body}</p>
                </div>
    )
    return (
        <>
            <div className="container">
                {renderingData}
            </div>
        </>
    )
}