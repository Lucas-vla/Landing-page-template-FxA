import React from "react";
import { Container } from "./Container";
import { social } from "../constants";

export const Footer = () => {
  return (
    <div className="bg-n-7 py-5 lg:py-12 mt-5 lg:mt16">
      <Container className="flex flex-col gap-3 lg:flex-row lg:gap-1 items-center body-3 text-n-3 justify-between">
        <div className="flex items-center gap-4">
          {social.map((link) => (
            <a
              key={link.id}
              title={link.alt}
              href={link.link}
              target="_blank"
              rel="noreferrer"
            >
              <img src={link.ico} alt={link.alt} width={20} height={20} />
            </a>
          ))}
        </div>
        <div className="space-x-4">
          <a href="#/" target="_blank" rel="noreferrer">
            Terms & Conditions
          </a>
          <a href="#/" target="_blank" rel="noreferrer">
            Privacy Policy
          </a>
        </div>
        <div>
          2024 All right reserved{" "}
          <a href="#/" target="_blank" rel="noreferrer">
            Lucas Viola
          </a>
        </div>
      </Container>
    </div>
  );
};
