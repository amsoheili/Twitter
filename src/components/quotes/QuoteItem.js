import classes from "./QuoteItem.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { highlightedQuoteActions } from "../../store/highlighted-quote";

const QuoteItem = (props) => {
  const dispatch = useDispatch();
  const viewFullscreenHandler = () => {
    dispatch(
      highlightedQuoteActions.setHighlightedQuote({
        author: props.author,
        text: props.text,
      })
    );
  };

  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link
        to={`/quotes/${props.id}`}
        // onClick={viewFullscreenHandler}
        className="btn"
      >
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
