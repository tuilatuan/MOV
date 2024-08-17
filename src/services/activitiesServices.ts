import { Activies } from "@/types/definitions";
import { get } from "@/utils/axiosInstansce";

export const getActivities = () => get<Activies[]>("/activities");
