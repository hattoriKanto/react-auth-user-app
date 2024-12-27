import { Link } from "react-router";
import { Section, Title } from "../../ui";
import { PathsData } from "../../constants";
import "./NotFound.css";

export const NotFound = () => {
  return (
    <Section>
      <div className="not-found">
        <div className="not-found__background" />
        <div className="not-found__wrapper">
          <div className="not-found__text">
            <Title type="h1">Oops! Page Not Found</Title>
            <p className="not-found__description">
              It seems the page you're looking for doesn't exist, has been
              moved, or is taking a break. Don't worry, you can always find your
              way back home or explore other parts of the site.
            </p>
            <Link className="not-found__link" to={PathsData.root}>
              Take Me Home
            </Link>
          </div>
          <div className="not-found__image" />
        </div>
      </div>
    </Section>
  );
};
