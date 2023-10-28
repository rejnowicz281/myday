import Link from "next/link";
import css from "./index.module.css";

export default function Navbar() {
    return (
        <div className={css.container}>
            <div className={css.left}>
                <Link href="/">Home</Link>
            </div>
            <div className={css.right}>
                <Link href="/api/auth/signout">Sign Out</Link>
            </div>
        </div>
    );
}
