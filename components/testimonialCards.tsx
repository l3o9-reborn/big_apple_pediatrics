"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/common/infinite-moving-cards";
import {testimonials} from "@/lib/data"
export function InfiniteMovingCardsTestimonials() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
