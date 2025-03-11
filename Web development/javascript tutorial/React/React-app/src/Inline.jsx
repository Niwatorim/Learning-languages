
function Inline(){

    const styles={ //make an object
        backgroundColor:'hsl(12, 72.40%, 46.90%)',
        color:'white',
        padding: '10px 20px',
        borderRadius:'5px',
        border: 'none',
        cursor:'pointer',
    }

    return(<button style={styles}className='inline'>INLINE CSS</button>);
}

export default Inline