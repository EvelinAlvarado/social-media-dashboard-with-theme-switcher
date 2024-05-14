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
    <section className="max-w-[1440px] flex flex-wrap gap-[30px] place-content-center absolute top-[191px] left-0 right-0 mx-auto xl:px-4 ">
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
    <section className="max-w-[1440px] mx-auto">
      <h2 className="text-2xl font-bold mb-[27px] text-Dark-Grayish-Blue ml-8 dark:text-white">
        Overview - Today
      </h2>
      <div className="flex flex flex-wrap">
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
      </div>
    </section>
  );
};
