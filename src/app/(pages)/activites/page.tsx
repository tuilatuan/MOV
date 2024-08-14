import LatestActivities from "./LatestActivities";
import OtherActivities from "./OtherActivities";
import PreviousClass from "./PreviousClass";

const ActiviesPage = () => {
  return (
    <div className="container bg-custom-gradient">
      <LatestActivities />
      <PreviousClass />
      <OtherActivities />
    </div>
  );
};

export default ActiviesPage;
