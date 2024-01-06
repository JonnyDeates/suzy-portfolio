import styles from './assets/page.module.css'
import bank from './assets/bank_image.png'
import Project from "@/app/components/Project";
import Projects from "@/app/data/Projects";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.intro}>
                <h1>SUZY BAE PORTFOLIO</h1>
                <p>Data Analyst skilled in Python, PySpark, SQL, Excel, Power BI, Tableau.
                    LinkedIn: <a href='https://www.linkedin.com/in/seungyeon-bae-3391661bb/'>@Suzy_Bae </a>
                    Github: <a href='https://github.com/suzy7526?tab=projects'>@suzy7526</a>
                </p>
            </div>
            <div className={styles.content}>
                {Projects.map(project => <Project {...project}/>)}
                <footer>
                    <div>ADDRESS
                        <p>1217 Stepp Bend</p>
                    </div>
                    <div>Phone
                        <p>(325) 513-3882</p></div>
                    <div>Email<p>hhm7526@gmail.com</p></div>

                </footer>
            </div>
        </main>
    )
}
