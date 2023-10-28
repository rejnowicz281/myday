import css from "./page.module.css";

export default function Home() {
    return (
        <div className={css.container}>
            <p className={css.text}>Welcome to myday. Organize your life.</p>
        </div>
    );
}
