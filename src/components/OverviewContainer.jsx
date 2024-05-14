import data from "../../data/data.json";
import { OverviewCard } from "./OverviewCard";

// console.log(data.overview);
export const OverviewContainer = () => {
  return (
    <section className="absolute top-[191px] left-0 right-0">
      {data.overview.map((object) => (
        <OverviewCard
          key={object.id}
          user={object.user}
          audience={object.audience}
          audienceType={object.audienceType}
          today={object.today}
          network={object.network}
          isUp={object.isUp}
        />
      ))}
    </section>
  );
};
