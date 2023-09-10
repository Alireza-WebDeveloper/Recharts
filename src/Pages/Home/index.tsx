import BarCharts from '../../Components/Chart/Bar';
import LineCharts from '../../Components/Chart/Line';
import salesData from '../../data/Product';
const HomePage = () => {
  return (
    <div className="grid grid-cols-1 mx-auto container p-2 gap-2 place-items-center">
      <LineCharts data={salesData} />
      <LineCharts data={salesData} />
    </div>
  );
};

export default HomePage;
