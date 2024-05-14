import { useState, useEffect } from "react";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    console.log("click");
    /* Add class dark to element main: <html Lang="en" class="dark">  */
    // document.documentElement.classList.add("dark");
    /* Best practices is use states */
    setDarkMode(!darkMode);
  };

  /* Is the state "darkMode" change, the function is executed */
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    console.log(darkMode);
  }, [darkMode]);

  return (
    <header className="bg-Very-Pale-Blue dark:bg-Very-Dark-Blue h-[235px] rounded-b-[20px] pt-8 px-6 mb-[1050px] md:mb-[420px] xl:mb-[140px] max-w-[1440px] mx-auto">
      <div className="md:flex md:justify-between max-w-[1140] mx-auto">
        <div>
          <h1 className="text-Very-Dark-Blue dark:text-Very-Pale-Blue text-2xl font-bold mb-1 ">
            Social Media Dashboard
          </h1>
          <p className="text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold mb-6">
            Total Followers: 23,004
          </p>
          <hr className="bg-black h-[2px] mb-[19px] md:hidden" />
        </div>

        <div className="flex justify-between gap-[13px]">
          <p className="text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold">
            {" "}
            Dark Mode
          </p>
          <label
            htmlFor="darkmode"
            className="border bg-Toggle w-12 h-6 rounded-full cursor-pointer p-[2px] relative overflow-hidden"
          >
            {/* Using "peer" when the input (hidden by sr-only) is clicked, change the div peer. peer just can be use in sibling elements */}
            <input
              onClick={handleClick}
              type="checkbox"
              id="darkmode"
              className="peer sr-only"
            />
            <div className="w-full h-full absolute top-0  left-0 peer-checked:bg-Toggle-Gradient "></div>
            <div className="w-[18px] h-[18px] bg-Light-Grayish-Blue rounded-full peer-checked:translate-x-[24px] transition-all z-10"></div>
          </label>
        </div>
      </div>
    </header>
  );
};
