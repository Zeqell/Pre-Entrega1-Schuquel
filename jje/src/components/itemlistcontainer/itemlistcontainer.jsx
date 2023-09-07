import './itemlistcontainer.css';

const itemlistcontainer = ({greeting}) => {
    return (<>
    <div className='div-item'>
        <h1> {greeting} </h1>
    </div>
    
    </>);
}

export default itemlistcontainer;