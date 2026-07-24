import ConnectIcons from './ConnectIcons'
import styles from './FindMe.module.css'


function FindMe() {
    return (
        <div className={`flex flex-col items-center justify-center text-center`}>
            <h1 className={`${styles.head1}`}>Find Me On</h1>
            <h1 className={`${styles.head2}`}>Feel free to <span>connect</span> with me</h1>
            <ConnectIcons />

        </div>
    )
}

export default FindMe
