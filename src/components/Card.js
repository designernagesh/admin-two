export const Card = ({card}) => {
    return (
        <div className="card">
            <div className="head">
                <div>
                    <h2>{card.value}</h2>
                    <p>{card.label}</p>
                </div>
                <i className={`bx ${card.icon} icon ${card.icon === 'bx-trending-down' ? 'down' : ''}` } ></i>
            </div>
            <span className="progress" style={{ '--value': card.progress }}></span>
            <span className="label">{card.progress}</span>
        </div>
    )
}