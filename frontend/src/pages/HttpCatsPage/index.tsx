import { useState, useEffect } from "react";
import { allApis } from "../../services/api";
import {
  Container,
  LoadingContainer,
  Loading,
  Image,
  Form,
  Select,
  Option,
} from "./styles";
import { useRecoilState } from "recoil";
import {
  httpCatsImgRecoil,
  httpCatsRecoil,
  isLoading,
} from "../../store/httpCatsRecoil";

export default function HttpCatsPage() {
  const [httpCats, setHttpCats] = useRecoilState<string>(httpCatsRecoil);
  const [httpCatsCode, setHttpCatsCode] =
    useRecoilState<string>(httpCatsImgRecoil);
  const [loading, setLoading] = useRecoilState<boolean>(isLoading);

  useEffect(() => {
    setLoading(true);
    async function getCats() {
      const results = `https://http.cat/${100}.jpg`;
      setHttpCats(results);
      if (results.length !== 0) setLoading(false);
    }
    getCats();
  }, [setHttpCats, setLoading]);

  async function getCats(statusCode: string) {
    setLoading(true);
    const results = `https://http.cat/${statusCode}.jpg`;
    setHttpCats(results);
    if (httpCats.length !== 0) setLoading(false);
  }

  return (
    <Container>
      {loading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <>
          <Image src={`${httpCats}`} />
          <Form>
            <Select
              name="plataforma"
              value={httpCats}
              onChange={(e) => getCats(e.target.value)}
            >
              <Option value="">Escolha um dos códigos HTTP</Option>
              <Option value="100">100</Option>
              <Option value="102">102</Option>
              <Option value="200">200</Option>
              <Option value="400">400</Option>
              <Option value="401">401</Option>
              <Option value="404">404</Option>
              <Option value="408">408</Option>
              <Option value="429">429</Option>
              <Option value="444">444</Option>
              <Option value="498">498</Option>
              <Option value="500">500</Option>
              <Option value="502">502</Option>
              <Option value="503">503</Option>
              <Option value="522">522</Option>
            </Select>
          </Form>
        </>
      )}
    </Container>
  );
}
