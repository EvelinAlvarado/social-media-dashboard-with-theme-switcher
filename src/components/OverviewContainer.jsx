import data from "../../data/data.json";
import { OverviewCard } from "./OverviewCard";

const convertAudienceToK = (number) => {
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
          audience={convertAudienceToK(object.audience)}
          audienceType={object.audienceType}
          today={object.today}
          network={object.network}
          isUp={object.isUp}
        />
      ))}
    </section>
  );
};
