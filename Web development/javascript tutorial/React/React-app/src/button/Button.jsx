import styles from './Button.module.css' //import the styles from style sheet
//using this method means that there is no naming errors, the modules name (the div) is unique via hashing algorithm. keeps everything private ig


function Button(){
    return(
        <button className={styles.button}>Module CSS</button>
        //styles.className (referring to the css style sheet)
    );
}

export default Button