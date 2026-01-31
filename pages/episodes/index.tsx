import {API} from "../../assets/api/api";
import {EpisodeType, ResponseType} from "../../assets/api/rick-and-morty-api";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {Header} from "../../components/Header/Header";

export const getServerSideProps = async () => {
    const episodes = await API.rickAndMorty.getEpisodes()

    if (!episodes) return {notFound: true}

    return {
        props: {
            episodes
        }
    }
}

type PropsType = {
    episodes: ResponseType<EpisodeType>
}

const Episodes = ({episodes}: PropsType) => {
    
    return (
      <PageWrapper>
          <Header/>
          {episodes.results.map((episode) => (
              <div key={episode.id}>
                  <h1>{episode.name}</h1>
              </div>
          ))}
      </PageWrapper>
    )
}

export default Episodes