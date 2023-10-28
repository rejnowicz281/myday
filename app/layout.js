import Navbar from "./components/Navbar";
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
                <Navbar />
                <div className={css.container}>
                    <Sidebar />
                    {children}
                </div>
            </body>
        </html>
    );
}
