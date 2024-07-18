import './Card.css';

function Card(props) {
    const name = props.name;
    const description = props.description;
    return (
        <div className='card-container'>
            <div className="card-title">
                <h1>{name}</h1>
            </div>
            <div className='card-contents'>
                <p>{description}</p>
                <a href='#'>Clique aqui para saber mais</a>
            </div>
        </div>
    );
}

export default Card;