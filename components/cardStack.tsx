"use client";
import { CardStack } from "@/components/common/card-stack";
import { drWardBio } from "@/lib/data";
export function CardStackDemo() {
  return (
    <div className="h-full w-full max-w-[400px]">
      <CardStack items={drWardBio} />
    </div>
  );
}


