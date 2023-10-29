"use client";

import { updateListName } from "@/actions/lists";
import ToggleEditable from "@/components/ToggleEditable";
import { experimental_useOptimistic as useOptimistic } from "react";
import { FiCheck } from "react-icons/fi";
import css from "./index.module.css";

export default function EditableName({ name, listId }) {
    const [optimisticName, setOptimisticName] = useOptimistic(name);

    return (
        <ToggleEditable
            action={(input) => {
                setOptimisticName(input);
                updateListName(input, listId);
            }}
            display={optimisticName}
            submitContent={<FiCheck />}
            displayClass={css.display}
            inputClass={css.input}
            submitClass={css.submit}
            formClass={css.form}
        />
    );
}
