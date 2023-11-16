import "./card.css"

const Card = (props) => {
    return (
        <div className={props.color === "dark" ? 'barbers__column dark' : 'barbers__column'} onClick={props.onClick}
             key={props.id}>
            <img src={props.avatar} alt=""/>
            <h3 className='barbers__name'>{props.name}</h3>
            <div className='barbers__workingTime'>
                <span>{props.from_to}</span>
            </div>
        </div>
    );
};

export default Card;