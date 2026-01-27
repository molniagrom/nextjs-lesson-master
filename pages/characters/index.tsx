import {API} from "../../assets/api/api";
import {CharacterType, ResponseType} from "../../assets/api/rick-and-morty-api";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {Header} from "../../components/Header/Header";
import Image from "next/image";

export const getStaticProps = async () => {
    const characters = await API.rickAndMorty.getCharacters()
    return {
        props: {
            characters
        }
    }
}

type PropsType = {
    characters: ResponseType<CharacterType>
}

const Characters = ({characters}: PropsType) => {
    
    return (
      <PageWrapper>
          <Header/>
          {characters.results.map((character) => (
              <div key={character.id}>
                  <h1>{character.name}</h1>
                  <Image src={character.image} alt={character.name} width={300} height={300}/>
              </div>
          ))}
      </PageWrapper>
    )
}

export default Characters