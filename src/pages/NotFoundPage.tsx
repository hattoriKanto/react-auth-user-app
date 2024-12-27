import { NotFound } from "../components";
import { BackgroundImage, Container } from "../ui";

export const NotFoundPage = () => {
  return (
    <main>
      <BackgroundImage />
      <Container>
        <NotFound />
      </Container>
    </main>
  );
};
