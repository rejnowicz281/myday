import { AiOutlineLoading } from "@react-icons/all-files/ai/AiOutlineLoading";

export default function Loading() {
    return (
        <div className="flex-1 text-6xl flex items-center justify-center overflow-hidden">
            <AiOutlineLoading className="animate-spin" />
        </div>
    );
}
