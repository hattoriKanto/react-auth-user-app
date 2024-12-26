import { AuthForm } from "../components";
import { BackgroundImage, Container } from "../ui";

export const LoginPage = () => {
  return (
    <main>
      <BackgroundImage />
      <Container>
        <AuthForm type="logIn" />
      </Container>
    </main>
  );
};
