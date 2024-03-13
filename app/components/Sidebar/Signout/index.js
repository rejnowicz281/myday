import { ImExit } from "@react-icons/all-files/im/ImExit";
import Link from "next/link";

export default function Signout() {
    return (
        <Link className="hover:text-stone-400 text-4xl cursor-pointer transition-colors" href="/api/auth/signout">
            <ImExit />
        </Link>
    );
}
