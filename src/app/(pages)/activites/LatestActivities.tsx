import ActivitiesItem from "@/components/common/ActivitiesItem";
import ListLayout from "@/components/layout/ListLayout";
import React from "react";

const LatestActivities = () => {
  return (
    <ListLayout title="Latest Activities">
      <ActivitiesItem />
    </ListLayout>
  );
};

export default LatestActivities;
