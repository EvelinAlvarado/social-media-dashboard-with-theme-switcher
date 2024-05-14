import data from "../../data/data.json";
import { OverviewCard, OverviewTodayCard } from "./OverviewCard";

const convertNumberToK = (number) => {
  if (number % 1000 === 0) {
    return `${number / 1000}k`;
  } else {
    return number;
  }
};

// console.log(data.overview);
export const OverviewContainer = () => {
  return (
    <section className="absolute top-[191px] left-0 right-0">
      {data.overview.map((object) => (
        <OverviewCard
          key={object.id}
          user={object.user}
          audience={convertNumberToK(object.audience)}
          audienceType={object.audienceType}
          today={object.today}
          network={object.network}
          isUp={object.isUp}
        />
      ))}
    </section>
  );
};

// console.log(data["overview-today"]);
export const OverviewTodayContainer = () => {
  return (
    <section>
      <h1>Overview - Today</h1>
      {data["overview-today"].map((object) => (
        <OverviewTodayCard
          key={object.id}
          network={object.network}
          statsType={object.statsType}
          stats={convertNumberToK(object.stats)}
          percentage={object.percentage}
          isUp={object.isUp}
        />
      ))}
    </section>
  );
};
