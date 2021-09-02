import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ReviewItem from "../Components/ReviewItem";

function ReviewsSection() {
  return (
    <ReviewsSectionStyled>
      <Title title={"Reviews"} span={"Reviews"} />
      <InnerLayout>
        <div className="reviews">
          <ReviewItem
            text={
              "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length"
            }
          />
          <ReviewItem
            text={
              "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length"
            }
          />
        </div>
      </InnerLayout>
    </ReviewsSectionStyled>
  );
}

const ReviewsSectionStyled = styled.section`
  .reviews {
    display: flex;
  }
`;

export default ReviewsSection;
