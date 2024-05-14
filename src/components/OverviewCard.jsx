import facebookLogo from "../assets/images/icon-facebook.svg";
import twitterLogo from "../assets/images/icon-twitter.svg";
import instagramLogo from "../assets/images/icon-instagram.svg";
import youtubeLogo from "../assets/images/icon-youtube.svg";
import iconUp from "../assets/images/icon-up.svg";
import iconDown from "../assets/images/icon-down.svg";

const networksLogos = {
  Facebook: facebookLogo,
  Twitter: twitterLogo,
  Instagram: instagramLogo,
  Youtube: youtubeLogo,
};

const networkColors = {
  /* it must replace all class, cant be use temple string */
  Facebook: "bg-Facebook",
  Twitter: "bg-Twitter",
  Instagram: "bg-Instagram-Gradient",
  Youtube: "bg-Youtube",
};

export const OverviewCard = ({
  user,
  audience,
  audienceType,
  today,
  network,
  isUp,
}) => {
  return (
    <article className="bg-Light-Grayish-Blue w-[326px] h-[216px] mb-10 rounded-[5px] mx-auto overflow-hidden text-center hover:brightness-95 cursor-pointer dark:bg-Dark-Desaturated-Blue hover:dark:brightness-125">
      {/* overflow-hidden: Lo que sobresale, se esconde (para redondear el article) */}
      {/* borders can not admit linear gradient, will use a div */}
      <div className={`${networkColors[network]} h-1 mb-8`}></div>
      <div className="flex items-center justify-center gap-2 ">
        {/* <img
        src={`/src/assets/images/icon-${network}.svg`}
        alt={`Logo ${network}`}
      /> */}
        {/* Other way: create an object networksLogo */}
        <img src={networksLogos[network]} alt={`logo ${network}`} />
        <p className="text-xs text-Dark-Grayish-Blue font-bold">{user}</p>
      </div>
      <p className="text-[56px] font-bold text-Very-Dark-Blue dark:text-white">
        {audience}
      </p>
      <p className="uppercase tracking-[5px] text-Dark-Grayish-Blue text-xs mb-6 ">
        {audienceType}
      </p>
      <div className="flex items-center justify-center gap-1">
        <img src={isUp ? iconUp : iconDown} alt="icon arrow" />
        <p
          className={`text-xs font-bold ${
            isUp ? "text-Lime-Green" : "text-Bright-Red"
          }`}
        >
          {today} Today
        </p>
      </div>
    </article>
  );
};
