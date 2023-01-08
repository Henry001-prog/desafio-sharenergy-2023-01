import React, { useState, useEffect } from "react";
import Pagination from "../../components/Pagination";
import {
  Container,
  SecondContainer,
  LoadingContainer,
  Loading,
  ContainerInput,
  SearchInput,
  Card,
  SmallImage,
  Image,
  NameText,
  EmailText,
  UsernameText,
  AgeText,
  PageText,
} from "./styles";

import { isLoadingRecoil } from "../../store/randomUserRecoil";
import { useRecoilState } from "recoil";

interface Props {
  setShowNav: (value: boolean) => void;
}

const RandomUser = ({ setShowNav }: Props) => {
  const [myApi, setMyApi] = useState([]);
  const [search, setSearch] = useState<any>();
  const [filteredSearch, setFilteredSearch] = useState<any>();
  const [currentPosts, setCurrentPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useRecoilState(isLoadingRecoil);

  let inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //convert input text to lower case
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);

    let resultsFilter = search.filter((el: any) => {
      if (inputText === "") {
        return el;
      } else {
        let name = `${el.name.first} ${el.name.last}`;
        return name.toLowerCase().includes(inputText);
      }
    });

    let resultsMap = resultsFilter.map((item: any, index: React.Key) => {
      return (
        <Card key={index}>
          <SmallImage src={item.picture.thumbnail} alt="" />
          <NameText>
            {item.name.first} {item.name.last}
          </NameText>
          <EmailText>{item.email}</EmailText>
          <UsernameText>{item.login.username}</UsernameText>
          <AgeText>{item.dob.age}</AgeText>
        </Card>
      );
    });
    setFilteredSearch(resultsMap);
  };

  useEffect(() => {
    setShowNav(true);
    setLoading(true);
    fetch("https://randomuser.me/api/?results=50")
      .then((data) => data.json())
      .then((json_result) => {
        let myApi = json_result.results.map((item: any, idx: React.Key) => {
          return (
            <Card key={idx}>
              <Image src={item.picture.thumbnail} alt="" />
              <NameText>
                {item.name.first} {item.name.last}
              </NameText>
              <EmailText>{item.email}</EmailText>
              <UsernameText>{item.login.username}</UsernameText>
              <AgeText>{item.dob.age}</AgeText>
            </Card>
          );
        });
        setMyApi(myApi);
        setSearch(json_result.results);
        setLoading(false);
      });
  }, [setShowNav]);

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  useEffect(() => {
    const indexOfLastPost = currentPage * postsPerPage; // 1 * 5 = 5
    const indexOfFirstPost = indexOfLastPost - postsPerPage; // 5 - 5 = 0
    if (inputText !== "") setCurrentPage(1);
    setCurrentPosts(
      inputText === ""
        ? myApi.slice(indexOfFirstPost, indexOfLastPost)
        : filteredSearch.slice(indexOfFirstPost, indexOfLastPost)
    ); // 0 to 5
  }, [currentPage, myApi, filteredSearch, inputText]);

  return (
    <Container inputText={inputText}>
      {!loading ? (
        <>
          <ContainerInput>
            <SearchInput
              onChange={inputHandler}
              name="search"
              placeholder="Pesquisar"
            />
          </ContainerInput>
          {currentPosts}
          {inputText === "" ? (
            <>
              <PageText>Página {currentPage}</PageText>
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={myApi.length}
                paginate={paginate}
              />
            </>
          ) : null}
        </>
      ) : (
        <SecondContainer>
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        </SecondContainer>
      )}
    </Container>
  );
};

export default RandomUser;
