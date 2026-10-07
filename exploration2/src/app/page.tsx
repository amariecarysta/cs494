'use client';

import mtgData from "./data/mtg_cards.json"

import {mtgCard, mapMtgCard} from "./types/mtgCard";

export default function Home() {

  const cards = mtgData.map((data)=>mapMtgCard(data))

  console.log(cards)
  return (
    <div> 
      Hellooo World
    </div>
  );
}
