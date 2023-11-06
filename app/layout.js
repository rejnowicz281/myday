import { ModalProvider } from "@/providers/ModalContext";
import Sidebar from "./components/Sidebar";
import "./globals.css";
import css from "./layout.module.css";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ModalProvider>
                    <div className={css.container}>
                        <Sidebar />
                        {children}
                    </div>
                </ModalProvider>
            </body>
        </html>
    );
}
