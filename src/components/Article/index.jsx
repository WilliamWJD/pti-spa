import { FaArrowRight } from 'react-icons/fa';
import './styles.css';
export function Article(props) {
    return (
        <div className="articleContainer">
            <img src={props.article.image} alt="ovo de pascoa de colher" />
            <strong className="articleTitle">{props.article.title}</strong>
            <p className="descriptionArticle">{props.article.description}</p>
            <div className="buttonReadMore">
                <a href="" className="readMore">Read more </a>
                <FaArrowRight color="#7D7D7D" />
            </div>
        </div>
    )
}