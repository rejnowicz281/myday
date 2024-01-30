"use client";

import useModalContext from "@/providers/ModalContext";

export default function Modal() {
    const { closeModal, modalContent } = useModalContext();

    return (
        <>
            <div
                className="fixed inset-0 w-full h-full bg-black bg-opacity-5 backdrop-blur-sm z-[2]"
                onClick={closeModal}
            ></div>
            <div className="shadow max-w-[400px] w-full bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl p-5 overflow-auto z-[2]">
                {modalContent}
            </div>
        </>
    );
}
