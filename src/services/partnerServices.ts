// src/services/movieApi.ts

import { CategoryKnowledges, Partner } from "@/types/definitions";
import { get } from "@/utils/axiosInstansce";

export const getPartner = () => get<Partner[]>("/partners");
