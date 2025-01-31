import React from "react";
import { Container } from "./Container";
import { Button } from "./Button";
import { icoArrowRight } from "../assets";

export const CallToAction = ({ minify = false }) => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto py-5 lg:py-10">
        <div
          className={`
            rounded-xl lg:rounded-3xl bg-gradient-to-tl from-p-3 top-4 p-6 lg:p-16 gap-8
            ${
              !minify
                ? "flex flex-col items-center"
                : "flex flex-col items-center justify-between lg:flex lg:flex-row lg:items-center"
            }`}
        >
          <div
            className={
              minify
                ? "space-y-1 to-center lg:text-start"
                : "space-y-4 text-center"
            }
          >
            <div className="caption-1 text-n-1/50">Ready to start ?</div>
            <h3 className="h3">Start your free trial today !</h3>
          </div>
          <Button
            theme="primary"
            className="flex items-center justify-center gap-1"
          >
            <span>Get Started</span>
            <img src={icoArrowRight} alt="Arrow Right" width={24} height={24} />
          </Button>
        </div>
      </div>
    </Container>
  );
};
