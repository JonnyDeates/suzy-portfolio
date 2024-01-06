import bank from '../assets/bank_image.png'
import webscraping from '../assets/web-scraping.png'
import tableau from '../assets/tableau.png'

export type ProjectType = {
    header: string,
    description: string,
    image: {src: string, alt: string},
    link: string
}

const ProjectsData: ProjectType[] = [{
    header: "CUSTOMER DATA INSIGHTS WITH PYTHON",
    description: " In this project, we take consumer complaints data on\n" +
        "financial products to gauge its impact on a bank's financial stability.",
    link: "https://github.com/suzy7526/Customer-Complaints-Project/blob/main/Big_Data_Final_Project_GitHub.ipynb",
    image: {src: bank.src, alt: 'bank'}
},
    {
        header: "WEB SCRAPER WITH PYTHON",
        description: "In this project, we scrape data from Wikipedia to extract the list of largest companies in the United States.",
        link: "https://github.com/suzy7526/Web-Scraping/blob/main/Web%20Scraping%20Project_1.ipynb",
        image: {src: webscraping.src, alt: 'web scraping results'}
    },
    {
        header: "TABLEAU DASHBOARDS",
        description: "Tableau Dashboards for projects",
        link: "",
        image: {src: tableau.src, alt: 'Tableau Logo'}
    }


]

export default ProjectsData