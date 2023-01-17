import './simpsons.css'
function Simpsons(props) {
    let {simpsonName, picture, desc} = props;
    console.log(props);
    return (
        <div className={'simpsonCard'}>
            <h2 className={'header'}>{simpsonName}</h2>
            <img className={'pic'} src={picture} alt={'simpsonName'}/>
            <p className={'someText'}>{desc}</p>

        </div>

    )
}
 export default Simpsons