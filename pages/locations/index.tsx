import {LocationType, ResponseType} from "../../assets/api/rick-and-morty-api";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {Header} from "../../components/Header/Header";

export const getStaticProps = async () => {
    const locations = await fetch("https://rickandmortyapi.com/api/location", {
        method: "GET"
    }).then(res => res.json())

    return {
        props: {
            locations
        }
    }
}

type PropsType = {
    locations: ResponseType<LocationType>
}

const Locations = (props: PropsType) => {
    const {locations} = props;

    if (!locations) return null;

    return (
        <PageWrapper>
            <Header/>
            {locations.results.map((location) => (
                <div key={location.id}>
                    <h1>{location.name}</h1>
                    {/*<Image src={location.url} alt={location.name} width={300} height={300}/>*/}
                </div>
            ))}
        </PageWrapper>
    )
}

export default Locations