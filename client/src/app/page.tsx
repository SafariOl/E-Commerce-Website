'use client'
import TitleBlock from "./components/TitleBlock";
import Bunner from "./components/Bunner";
import BrowseDressStyleBunner from "./components/BrowseDressStyleBunner";
import ReviewsBunner from "./components/ReviewsBunner";
import HomeItemSec from "./components/HomeItemSec";
import { Provider } from "react-redux";
import { store } from "./lib/store";
import GenderItemsSelection from "./components/GenderItemsSelection";

const utilsForItemsSections = [
  {
    slice: [0, 3],
    title: "NEW ARRIVALS"
  },
  {
    slice: [3, 6],
    title: "TOP SELLINGS"
  },
]

export default function Home() {

  return (
    <Provider store={store}>
      <GenderItemsSelection />
      <main>
        <TitleBlock />
        <Bunner />
        {utilsForItemsSections.map(info =>
          <div key={info.title}>
            <HomeItemSec slice={info.slice} title={info.title} />
          </div>
        )}
        <BrowseDressStyleBunner />
        <ReviewsBunner />
      </main>
    </Provider>
  );
}
