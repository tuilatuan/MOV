import Course from "@/components/common/Course";
import FlickityCarousel from "@/components/layout/FlickityCarousel";
import ListLayout from "@/components/layout/ListLayout";
import React from "react";

const Activities = () => {
  return (
    <div>
      <ListLayout title="Latest Activities">
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
            image="/imgs/course-3.jpg"
            key="a"
          ></Course>
          <Course
            url="abc"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            slug="asdas"
            image="/imgs/course-1.jpg"
            key="a"
          ></Course>
        </FlickityCarousel>
      </ListLayout>
    </div>
  );
};

export default Activities;
