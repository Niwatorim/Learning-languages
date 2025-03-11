import PropTypes from 'prop-types'
function CardProps(props){
    const styles={ //make an object
        borderRadius:"10px",
        border: "1px solid hsla(0, 1%, 64%, 0.473)",
        boxShadow: "5px 5px 5px hsla(0,0,0.1)",
        padding:"20px",
        margin: "10px",
        textAlign: "center",
        maxWidth:"250px",
        display: "inline-block",
    }
    


    

    return( props.title === "Mimimi" ? <p>Potatoes</p> :
        <div style={styles}>
            <p>Name: {props.Name}</p>
            <p>title: {props.title}</p>
            <p>Age: {props.age}</p>
        </div>);
}

CardProps.propTypes={
    Name: PropTypes.string,
    title: PropTypes.string,
    age: PropTypes.number
};

CardProps.defaultProps={
    Name: "Guest mimi",
    title: "unknown mimi",
    age: 0
};

export default CardProps