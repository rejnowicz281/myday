import Link from "next/link";
import { ImExit } from "react-icons/im";

export default function Signout() {
    return (
        <Link className="hover:text-stone-400 text-4xl cursor-pointer transition-colors" href="/api/auth/signout">
            <ImExit />
        </Link>
    );
}
