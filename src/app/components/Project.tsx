import styles from "@/app/assets/page.module.css";
import {ProjectType} from "@/app/data/Projects";



const Project = ({header, description, link, image}: ProjectType) => {
    return <section className={styles.project}>
        <header>
            <h2>{header}</h2>
            <p>
                {description}
            </p>
        </header>
        <a className={styles.project_image}>
            <img src={image.src} alt={image.alt} width={"100%"}/>
        </a>
        <button>
            View Project
        </button>
    </section>
}

export default Project