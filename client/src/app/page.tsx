'use client'
import TitleBlock from "./components/TitleBlock";
import Bunner from "./components/Bunner";
import BrowseDressStyleBunner from "./components/BrowseDressStyleBunner";
import ReviewsBunner from "./components/ReviewsBunner";
import HomeItemSec from "./components/HomeItemSec";
import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "./lib/hooks";
import { refresh } from "./lib/thunks/customerThunks";

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
  const dispatch = useAppDispatch()
  useLayoutEffect(() => {
    dispatch(refresh())
  })
  return (
    <>
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
    </>
  );
}
