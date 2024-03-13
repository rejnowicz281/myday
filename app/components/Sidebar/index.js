import { getLists } from "@/actions/lists";
import NavLink from "@/components/NavLink";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { AiOutlineUnorderedList } from "@react-icons/all-files/ai/AiOutlineUnorderedList";
import { LiaSunSolid } from "@react-icons/all-files/lia/LiaSunSolid";
import AddList from "./AddList";
import Signout from "./Signout";

export default async function Sidebar() {
    const lists = await getLists();

    return (
        <div className="flex flex-col py-12 pl-8 flex-shrink-0 flex-grow-0 basis-[350px]">
            <Signout />
            <AddList />
            <div className="flex flex-1 relative">
                <div className="absolute overflow-y-auto inset-0">
                    <NavLink
                        href="/lists/my_day"
                        className="hover:text-black flex items-center gap-4 text-lg py-2 text-gray-700 flex-1"
                        activeClassName="font-bold text-black"
                    >
                        <LiaSunSolid />

                        <div className="break-words">My Day</div>
                    </NavLink>
                    <NavLink
                        href="/lists/tasks"
                        className="hover:text-black flex items-center gap-4 text-lg py-2 text-gray-700 flex-1"
                        activeClassName="font-bold text-black"
                    >
                        <AiOutlineHome />

                        <div className="break-words">Tasks</div>
                    </NavLink>
                    {lists.map((list) => (
                        <NavLink
                            key={list.id}
                            href={`/lists/${list.id}`}
                            className="hover:text-black flex items-center gap-4 text-lg py-2 text-gray-700 flex-1"
                            activeClassName="font-bold text-black"
                        >
                            <AiOutlineUnorderedList className="flex-shrink-0" />

                            <div className="break-words">{list.name}</div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
}
