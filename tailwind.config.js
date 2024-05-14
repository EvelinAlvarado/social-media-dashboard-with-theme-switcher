/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Primary colors */
        "Lime-Green": "hsl(163, 72%, 41%)",
        "Bright-Red": "hsl(356, 69%, 56%)",

        Facebook: "hsl(208, 92%, 53%)",
        Twitter: "hsl(203, 89%, 53%)",
        YouTube: "hsl(348, 97%, 39%)",

        /* Light Theme */
        Toggle: "hsl(230, 22%, 74%)",

        /* Dark Theme */
        "Very-Dark-Blue": "hsl(230, 17%, 14%)",
        "Very-Dark-Blue-Top": "hsl(232, 19%, 15%)",
        "Dark-Desaturated-Blue": "hsl(228, 28%, 20%)",
        "Desaturated-Blue": "hsl(228, 34%, 66%)",
        White: "hsl(0, 0%, 100%)",

        /* Light Theme */
        "Very-Pale-Blue": "hsl(225, 100%, 98%)",
        "Light-Grayish-Blue": "hsl(227, 47%, 96%)",
        "Dark-Grayish-Blue": "hsl(228, 12%, 44%)",
      },
      /* To create gradient color must create an objet backgroundImage */
      backgroundImage: {
        /* Dark theme */
        "Toggle-Gradient":
          "linear-gradient(to right, hsl(210, 78%, 56%),hsl(146, 68%, 55%))",

        /* Primary gradient colors */
        "Instagram-Gradient":
          "linear-gradient(to right,hsl(37, 97%, 70%),hsl(329, 70%, 58%))",
      },
      fontFamily: {
        Inter: ["Inter"],
      },
    },
  },
  plugins: [],
};
