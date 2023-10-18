import Link from 'next/link';
import classes from './Header.module.css';

export default function Header(){
    return(
        <div>
            <h1 className={classes.title}>Online Megazine for Gallery.</h1>
            <Link href="/">
            <span className={classes.menu}>Home</span>
            </Link>
            <Link href="about">
            <span className={classes.menu}>About</span>
            </Link>
            <Link href="gallery">
            <span className={classes.menu}>Gallery</span>
            </Link>
        </div>
    )
}