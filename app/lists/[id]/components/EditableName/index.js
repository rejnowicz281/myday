"use client";

import { updateListName } from "@/actions/lists";
import ToggleEditable from "@/components/ToggleEditable";
import { experimental_useOptimistic as useOptimistic } from "react";

export default function EditableName({ name, listId }) {
    const [optimisticName, setOptimisticName] = useOptimistic(name);

    return (
        <ToggleEditable
            action={(input) => {
                setOptimisticName(input);
                updateListName(input, listId);
            }}
            display={optimisticName}
            displayClass="text-[3.75rem] leading-[inherit] text-left font-bold hover:text-gray-500"
            inputClass="text-[3.75rem] leading-[inherit] w-full font-bold outline-0"
        />
    );
}
