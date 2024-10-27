import React from "react";
import { Container } from "./Container";
import { Headings } from "./Headings";
import { bulletPoints } from "../constants";

export const BulletPoint = () => {
  return (
    <>
      <Headings title="Foxart" subtitle="How does it work ?"></Headings>
      <Container>
        <div className="w-full max-w-6xl mx-auto py-5 lg:py-10 space-y-10 lg:space-y-24">
          {bulletPoints.map((bulletPoints) => (
            <div
              key={bulletPoints.id}
              className={`flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-28
                ${
                  bulletPoints.id % 2 === 0 ? "flex-row" : "lg:flex-row-reverse"
                }`}
            >
              <div className="w-full flex justify-center lg:w-7/12">
                <img
                  src={bulletPoints.image}
                  alt={bulletPoints.alt}
                  width={bulletPoints.width}
                  height={bulletPoints.height}
                  className="px-20 lg:px-0"
                />
              </div>
              <div className="w-full lg:w-5/12 space-y-5 text-center lg:text-left">
                <h3 className="h3">{bulletPoints.title}</h3>
                <p className="body-1 text-n-5">{bulletPoints.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};
