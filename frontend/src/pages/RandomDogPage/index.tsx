import { useEffect } from "react";
import {
  Button,
  ButtonContainer,
  Container,
  Image,
  TextButton,
  LoadingContainer,
  Loading,
} from "./styles";
import { useRecoilState } from "recoil";
import { dogsRecoil, isLoading } from "../../store/RandomDogRecoil";

import { allApis } from "../../services/api";

export default function RandomDog() {
  const [dogs, setDogs] = useRecoilState<string>(dogsRecoil);
  const [loading, setLoading] = useRecoilState<boolean>(isLoading);

  const { apiRandomDog } = allApis;

  async function getDogs() {
    setLoading(true);
    const results = await apiRandomDog.get("/woof.json?include=jpg");
    setDogs(await results.data.url);
    setLoading(false);
  }

  useEffect(() => {
    getDogs();
  }, []);
  return (
    <Container>
      {dogs && !loading ? (
        <>
          <Image src={dogs} alt="dogs" />
          <ButtonContainer>
            <Button onClick={() => getDogs()}>
              <TextButton>Exibir outra imagem</TextButton>
            </Button>
          </ButtonContainer>
        </>
      ) : (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      )}
    </Container>
  );
}
