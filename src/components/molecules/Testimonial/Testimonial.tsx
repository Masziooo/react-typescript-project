import React from "react";
import Quote from "../../atoms/Quote/Quote";
import { TestimonialProps } from "./Testimonial.models";
import "./Testimonial.styles.scss";
import { data as quoteData } from "../../atoms/Quote/assets/Quote.data";

const Testimonial = ({ title }: TestimonialProps) => {
  return (
    <article>
      <div className="testimonial">
        <div className="testimonial__header">
          <h2>{title}</h2>
        </div>
        <div className="testimonial__quote">
          <Quote data={quoteData} />
        </div>
      </div>
    </article>
  );
};

export default Testimonial;
