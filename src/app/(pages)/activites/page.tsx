import activiesData from "@/ui/data/activies";
import LatestActivities from "../../../ui/pages/activites/LatestActivities";
import OtherActivities from "../../../ui/pages/activites/OtherActivities";
import PreviousClass from "../../../ui/pages/activites/PreviousClass";

const ActiviesPage = () => {
  // const data = activiesData();
  // console.log("data :>> ", data);
  return (
    <div className="container bg-custom-gradient">
      <LatestActivities />
      <PreviousClass />
      <OtherActivities />
    </div>
  );
};

export default ActiviesPage;
