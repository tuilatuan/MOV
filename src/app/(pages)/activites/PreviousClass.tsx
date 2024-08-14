import ActivitiesItem from "@/components/common/ActivitiesItem";
import Course from "@/components/common/Course";
import FlickityCarousel from "@/components/layout/FlickityCarousel";
import ListLayout from "@/components/layout/ListLayout";
import React from "react";

const PreviousClass = () => {
  return (
    <ListLayout title="Previous Class ">
      <FlickityCarousel>
        <Course
          url="abc"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          slug="asdas"
          image="/imgs/course-1.jpg"
          key="a"
        ></Course>
        <Course
          url="abc"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          slug="asdas"
          image="/imgs/course-2.jpg"
          key="a"
        ></Course>
        <Course
          url="abc"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          slug="asdas"
          image="/imgs/course-1.jpg"
          key="a"
        ></Course>
        <Course
          url="abc"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          slug="asdas"
          image="/imgs/course-3.jpg"
          key="a"
        ></Course>
      </FlickityCarousel>
    </ListLayout>
  );
};

export default PreviousClass;
