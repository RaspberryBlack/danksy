module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      '-sm': {'max': '575px'},
      'md': '768px',
      '-md': {'max': '767px'},
      'lg': '992px',
      '-lg': {'max': '991px'},
      'xl': '1200px',
      '-xl': {'max': '1199px'},
    },
    extend: {
      colors: {
        body: "#333333",
        white: {
          DEFAULT: "#FFFFFF",
          "light": "#f3f2f2"
        },
        dark: "#202020"
      },
      fontFamily: {
        body: ['var(--font-merriweather)', 'sans-serif'],
        heading: ['var(--font-archivo)', 'sans-serif']
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        lg: '1.25rem',
        xl: '1.563rem',
        '2xl': '1.953rem',
        '3xl': '2.441rem',
        '4xl': '3.052rem'
      },
      container: {
        center: true,
        padding: "1rem"
      },
      gridTemplateColumns: {
        repeat: "repeat(auto-fit,minmax(var(--min, 15rem),1fr))"
      },
      backgroundPosition: {
        "center-top": "50% 0px"
      },
      letterSpacing: {
        "1": "1px"
      },
      boxShadow: {
        "scroll-top": "0px -2px 9.9px 0.1px rgb(186 187 188 / 25%)"
      },
      borderWidth: {
        1: "1px"
      },
      transformStyle: {
        "none": "none"
      },
      transitionDuration: {
        "400": "0.4s"
      },
      transitionProperty: {
        "height": "height",
        "spacing": "margin, padding",
      },
      height: {
        unset: "unset"
      },
      animation: {
        "lineround": "lineround 1200ms linear 0s infinite",
        "lineheight": "lineheight 1000ms ease-in-out 0s forwards;",
        "preloaded": "preloaded 500ms ease-in-out 300ms forwards;"
      },
      keyframes: {
        lineround: {
          "0%": {transform: "translateY(-100%)"},
          "100%": {transform: "translateY(200%)"},
        },
        lineheight: {
          "0%": {height: 0},
          "100%": {height: "100%"}
        },
        preloaded: {
          "0%": {width: "50%"},
          "100%": {width: 0}
        }
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/forms')
  ],
}
