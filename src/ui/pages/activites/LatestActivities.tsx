"use client";

import ActivitiesItem from "@/components/common/ActivitiesItem";
import ListLayout from "@/components/layout/ListLayout";
import { useApi } from "@/hooks/useApi";
import { getActivities } from "@/services/activitiesServices";
import { Activies } from "@/types/definitions";
import React from "react";

const LatestActivities = () => {
  const { data, loading, error, refetch } = useApi<Activies[]>(getActivities);

  console.log("data :>> ", data);
  return (
    <ListLayout title="Latest Activities">
      <ActivitiesItem />
    </ListLayout>
  );
};

export default LatestActivities;
