import ConnectIcons from "./ConnectIcons"
import styles from './Footer.module.css'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="flex  justify-around items-center mt-8 bg-[#1F0224D9] py-3">
           <h1>Developed by Rahul Tomar</h1> 
           <h1>Copyright &copy; {year}</h1>
           <ConnectIcons className="small_icons" />

        </div>
    )
}

export default Footer
