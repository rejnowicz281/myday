import Link from "next/link";
import { ImExit } from "react-icons/im";
import css from "./index.module.css";

export default function Signout() {
    return (
        <div>
            <Link className={css.signout} href="/api/auth/signout">
                <ImExit />
            </Link>
        </div>
    );
}
