import StatCard from "components/StatCard";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

const stats = [
  { label: "Today's Total Income", value: 100, icon: <MonetizationOnIcon /> },
  { label: "Today's Total Income", value: 100, icon: <MonetizationOnIcon /> },
  { label: "Today's Total Income", value: 100, icon: <MonetizationOnIcon /> },
];
function Dashboard() {
  return (
    <div>
      <StatCard stats={stats} />
    </div>
  );
}

export default Dashboard;
