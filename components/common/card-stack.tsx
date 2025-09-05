"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";


let interval:  ReturnType<typeof setInterval>;

type Card = {
  id: number;
  title: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
   <div className="relative h-[400px] max-h-[400px] w-full max-w-[400px]">
  {cards.map((card, index) => (
    <motion.div
      key={card.id}
      className="absolute bg-muted h-full w-full rounded-3xl p-4 
                 shadow-xl border border-neutral-200 dark:border-white/[0.1] 
                 shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-start gap-6"
      style={{
        transformOrigin: "top center",
      }}
      animate={{
        top: index * -CARD_OFFSET,
        scale: 1 - index * SCALE_FACTOR,
        zIndex: cards.length - index,
      }}
    >
      <div>
        <p className="text-neutral-500 font-medium dark:text-white">
          {card.title}
        </p>
      </div>
      <div className="font-normal overflow-hidden text-neutral-700 dark:text-neutral-200">
        {card.content}
      </div>
    </motion.div>
  ))}
</div>

  );
};
