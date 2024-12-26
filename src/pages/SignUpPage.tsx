import { AuthForm } from "../components";
import { BackgroundImage, Container } from "../ui";

export const SignUpPage = () => {
  return (
    <main>
      <BackgroundImage />
      <Container>
        <AuthForm type="signUp" />
      </Container>
    </main>
  );
};
