
import CountrySearch from '../customComponents/CountrySearchBar';
import '../App.css';
import CountryCard from '../customComponents/CountryCard';

function Home() {



    return (
        <>
            <CountrySearch />
            <main>
          <CountryCard />
            </main>
        </>
    );
}

export default Home;
