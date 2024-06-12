import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import DiscoverNft from './Components/DiscoverNft';
import HotCollections from './Components/HotCollections';
import images from './Components/Data/hotCollections';
import Topcreators from './Components/Topcreators';
import creatorImages from './Components/Data/topCreatorsData';
import liveAuctionData from './Components/Data/liveAuctionData';
import LiveAuction from './Components/LiveAuction';
import addedNfts from './Components/Data/addedNftsData';
import RecentNft from './Components/RecentNft';
import Footer from './Components/Footer'



function App() {
  return (
   <div className='App'>
<Header />
<main>
  <DiscoverNft />
  <HotCollections images={images} />
  <Topcreators creatorImages={creatorImages} />
  <LiveAuction  liveAuctionData={liveAuctionData}/>
  <RecentNft addedNfts={addedNfts}/>
</main>
<Footer />
   </div>
  );
}

export default App;
