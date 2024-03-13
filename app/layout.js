import NextTopLoader from "nextjs-toploader";
import Sidebar from "./components/Sidebar";
import "./globals.css";

export const metadata = {
    title: "My Day",
    description: "Organize your life",
};

export default function RootLayout({ children }) {
    return (
        <html className="h-full" lang="en">
            <body className="min-h-full flex flex-col">
                <NextTopLoader showSpinner={false} height={4} />
                <div className="flex-1 flex">
                    <Sidebar />
                    {children}
                </div>
            </body>
        </html>
    );
}
