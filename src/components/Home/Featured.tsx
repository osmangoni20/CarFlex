"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { featuredData } from "@/FakeData/fakeData";

const Featured = () => {
  return (
    <div className="my-10 flex flex-wrap justify-center items-center gap-3 ">
      {featuredData.map((feature) => {
        return (
          <div key={feature.id}>
            <div className="card bg-white  w-[300px] h-[350px] shadow-xl">
              <figure className="px-10 pt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#4E6D7D"
                  className="size-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={feature.imageUrl}
                  />
                </svg>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-[#4E6D7D]">{feature.title}</h2>
                <p>{feature.description}</p>
                <div className="card-actions">
                  <Link href={feature.cta.url}>
                    <Button variant={"default"} className="rounded-full">
                      {feature.cta.text}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Featured;
