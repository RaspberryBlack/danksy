import React, {useState} from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2019,mode=imports/optimized/react.js";
const area = 48;
const Burger = ({
  color = "currentColor",
  direction = "left",
  distance = "md",
  duration = 0.4,
  easing = "cubic-bezier(0, 0, 0, 1)",
  hideOutline = true,
  label,
  lines = 3,
  onToggle,
  render,
  rounded = false,
  size = 32,
  toggle,
  toggled
}) => {
  const [toggledInternal, toggleInternal] = useState(false);
  const width = Math.max(12, Math.min(area, size));
  const room = Math.round((area - width) / 2);
  const barHeightRaw = width / 12;
  const barHeight = Math.round(barHeightRaw);
  const space = distance === "lg" ? 0.25 : distance === "sm" ? 0.75 : 0.5;
  const marginRaw = width / (lines * (space + (lines === 3 ? 1 : 1.25)));
  const margin = Math.round(marginRaw);
  const height = barHeight * lines + margin * (lines - 1);
  const topOffset = Math.round((area - height) / 2);
  const translate = lines === 3 ? distance === "lg" ? 4.0425 : distance === "sm" ? 5.1625 : 4.6325 : distance === "lg" ? 6.7875 : distance === "sm" ? 8.4875 : 7.6675;
  const deviation = (barHeightRaw - barHeight + (marginRaw - margin)) / (lines === 3 ? 1 : 2);
  const move = parseFloat((width / translate - deviation / (4 / 3)).toFixed(2));
  const time = Math.max(0, duration);
  const burgerStyles = {
    cursor: "pointer",
    height: `${area}px`,
    position: "relative",
    transition: `${time}s ${easing}`,
    userSelect: "none",
    width: `${area}px`
  };
  const barStyles = {
    background: color,
    height: `${barHeight}px`,
    left: `${room}px`,
    position: "absolute"
  };
  if (hideOutline) {
    burgerStyles["outline"] = "none";
  }
  if (rounded) {
    barStyles["borderRadius"] = "9em";
  }
  const toggleFunction = toggle || toggleInternal;
  const isToggled = toggled !== void 0 ? toggled : toggledInternal;
  const handler = () => {
    toggleFunction(!isToggled);
    if (typeof onToggle === "function")
      onToggle(!isToggled);
  };
  return render({
    barHeight,
    barStyles,
    burgerStyles,
    easing,
    handler,
    isLeft: direction === "left",
    isToggled,
    label,
    margin,
    move,
    time,
    topOffset,
    width
  });
};
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
const Tilt = (props) => /* @__PURE__ */ React.createElement(Burger, _extends({}, props, {
  render: (o) => /* @__PURE__ */ React.createElement("div", {
    className: "hamburger-react",
    "aria-label": o.label,
    "aria-expanded": o.isToggled,
    onClick: o.handler,
    onKeyUp: (e) => e.key === "Enter" && o.handler(),
    role: "button",
    style: {
      ...o.burgerStyles,
      transform: `${o.isToggled ? `rotate(${90 * (o.isLeft ? -1 : 1)}deg)` : "none"}`
    },
    tabIndex: 0
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move}px)` : "none"}`
    }
  }), /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset + o.barHeight + o.margin}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? "scaleX(0)" : "none"}`
    }
  }), /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move * -1}px)` : "none"}`
    }
  }))
}));
function _extends$1() {
  _extends$1 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
const Cross = (props) => /* @__PURE__ */ React.createElement(Burger, _extends$1({}, props, {
  lines: 2,
  render: (o) => /* @__PURE__ */ React.createElement("div", {
    className: "hamburger-react",
    "aria-label": o.label,
    "aria-expanded": o.isToggled,
    onClick: o.handler,
    onKeyUp: (e) => e.key === "Enter" && o.handler(),
    role: "button",
    style: o.burgerStyles,
    tabIndex: 0
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move}px)` : "none"}`
    }
  }), /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset + o.barHeight + o.margin}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move * -1}px)` : "none"}`
    }
  }))
}));
function _extends$2() {
  _extends$2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
const Divide = (props) => /* @__PURE__ */ React.createElement(Burger, _extends$2({}, props, {
  render: (o) => /* @__PURE__ */ React.createElement("div", {
    className: "hamburger-react",
    "aria-label": o.label,
    "aria-expanded": o.isToggled,
    onClick: o.handler,
    onKeyUp: (e) => e.key === "Enter" && o.handler(),
    role: "button",
    style: o.burgerStyles,
    tabIndex: 0
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width / 2}px`,
      borderRadius: `${o.barStyles.borderRadius} 0 0 ${o.barStyles.borderRadius}`,
      top: `${o.topOffset}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `translate(${o.move * 0.48}px, ${o.move * 0.73}px) rotate(45deg)` : "none"}`
    }
  }), /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width / 2}px`,
      borderRadius: `0 ${o.barStyles.borderRadius} ${o.barStyles.borderRadius} 0`,
      left: "50%",
      top: `${o.topOffset}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `translate(-${o.move * 0.48}px, ${o.move * 0.73}px) rotate(-45deg)` : "none"}`
    }
  }), /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width / 2}px`,
      borderRadius: `${o.barStyles.borderRadius} 0 0 ${o.barStyles.borderRadius}`,
      top: `${o.topOffset + o.barHeight + o.margin}px`,
      transition: `${o.time}s ${o.easing}`,
      opacity: o.isToggled ? 0 : 1,
      transform: `${o.isToggled ? `translate(${-o.move * 1.25}px, 0)` : "none"}`
    }
  }), /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width / 2}px`,
      borderRadius: `0 ${o.barStyles.borderRadius} ${o.barStyles.borderRadius} 0`,
      top: `${o.topOffset + o.barHeight + o.margin}px`,
      left: "50%",
      transition: `${o.time}s ${o.easing}`,
      opacity: o.isToggled ? 0 : 1,
      transform: `${o.isToggled ? `translate(${o.move * 1.25}px, 0)` : "none"}`
    }
  }), /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width / 2}px`,
      borderRadius: `${o.barStyles.borderRadius} 0 0 ${o.barStyles.borderRadius}`,
      top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `translate(${o.move * 0.48}px, -${o.move * 0.73}px) rotate(-45deg)` : "none"}`
    }
  }), /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width / 2}px`,
      borderRadius: `0 ${o.barStyles.borderRadius} ${o.barStyles.borderRadius} 0`,
      left: "50%",
      top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `translate(-${o.move * 0.48}px, -${o.move * 0.73}px) rotate(45deg)` : "none"}`
    }
  }))
}));
function _extends$3() {
  _extends$3 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
const Fade = (props) => /* @__PURE__ */ React.createElement(Burger, _extends$3({}, props, {
  render: (o) => /* @__PURE__ */ React.createElement("div", {
    className: "hamburger-react",
    "aria-label": o.label,
    "aria-expanded": o.isToggled,
    onClick: o.handler,
    onKeyUp: (e) => e.key === "Enter" && o.handler(),
    role: "button",
    style: o.burgerStyles,
    tabIndex: 0
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move}px)` : "none"}`
    }
  }), /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset + o.barHeight + o.margin}px`,
      transition: `${o.time}s ${o.easing}`,
      opacity: `${o.isToggled ? "0" : "1"}`
    }
  }), /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move * -1}px)` : "none"}`
    }
  }))
}));
function _extends$4() {
  _extends$4 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4.apply(this, arguments);
}
const Pivot = (props) => /* @__PURE__ */ React.createElement(Burger, _extends$4({}, props, {
  lines: 2,
  render: (o) => /* @__PURE__ */ React.createElement("div", {
    className: "hamburger-react",
    "aria-label": o.label,
    "aria-expanded": o.isToggled,
    onClick: o.handler,
    onKeyUp: (e) => e.key === "Enter" && o.handler(),
    role: "button",
    style: {
      ...o.burgerStyles,
      transform: `${o.isToggled ? `rotate(${90 * (o.isLeft ? -1 : 1)}deg)` : "none"}`
    },
    tabIndex: 0
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? "0s" : `${o.time / 2}s`}`,
      transform: `${o.isToggled ? `translateY(${o.barHeight / 2 + o.margin / 2}px)` : "none"}`
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset}px`,
      transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? `${o.time / 2}s` : "0s"}`,
      transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg)` : "none"}`
    }
  })), /* @__PURE__ */ React.createElement("div", {
    style: {
      transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? "0s" : `${o.time / 2}s`}`,
      transform: `${o.isToggled ? `translateY(-${o.barHeight / 2 + o.margin / 2}px)` : "none"}`
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset + o.barHeight + o.margin}px`,
      transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? `${o.time / 2}s` : "0s"}`,
      transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg)` : "none"}`
    }
  })))
}));
function _extends$5() {
  _extends$5 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$5.apply(this, arguments);
}
const Rotate = (props) => /* @__PURE__ */ React.createElement(Burger, _extends$5({}, props, {
  lines: 2,
  render: (o) => /* @__PURE__ */ React.createElement("div", {
    className: "hamburger-react",
    "aria-label": o.label,
    "aria-expanded": o.isToggled,
    onClick: o.handler,
    onKeyUp: (e) => e.key === "Enter" && o.handler(),
    role: "button",
    style: {
      ...o.burgerStyles,
      transform: `${o.isToggled ? `rotateY(${180 * (o.isLeft ? -1 : 1)}deg)` : "none"}`
    },
    tabIndex: 0
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move}px)` : "none"}`
    }
  }), /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset + o.barHeight + o.margin}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move * -1}px)` : "none"}`
    }
  }))
}));
function _extends$6() {
  _extends$6 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$6.apply(this, arguments);
}
const Slant = (props) => /* @__PURE__ */ React.createElement(Burger, _extends$6({}, props, {
  lines: 2,
  render: (o) => /* @__PURE__ */ React.createElement("div", {
    className: "hamburger-react",
    "aria-label": o.label,
    "aria-expanded": o.isToggled,
    onClick: o.handler,
    onKeyUp: (e) => e.key === "Enter" && o.handler(),
    role: "button",
    style: {
      ...o.burgerStyles,
      transform: `${o.isToggled ? `rotate(${90 * (o.isLeft ? -1 : 1)}deg)` : "none"}`
    },
    tabIndex: 0
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move}px)` : "none"}`
    }
  }), /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset + o.barHeight + o.margin}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move * -1}px)` : "none"}`
    }
  }))
}));
function _extends$7() {
  _extends$7 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$7.apply(this, arguments);
}
const Sling = (props) => /* @__PURE__ */ React.createElement(Burger, _extends$7({}, props, {
  render: (o) => /* @__PURE__ */ React.createElement("div", {
    className: "hamburger-react",
    "aria-label": o.label,
    "aria-expanded": o.isToggled,
    onClick: o.handler,
    onKeyUp: (e) => e.key === "Enter" && o.handler(),
    role: "button",
    style: {
      ...o.burgerStyles,
      transform: `${o.isToggled ? `rotateY(${180 * (o.isLeft ? -1 : 1)}deg)` : "none"}`
    },
    tabIndex: 0
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move}px)` : "none"}`
    }
  }), /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset + o.barHeight + o.margin}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `scale(0, 1) translate(${o.move * 20 * (o.isLeft ? -1 : 1)}px, 0)` : "none"}`
    }
  }), /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move * -1}px)` : "none"}`
    }
  }))
}));
function _extends$8() {
  _extends$8 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$8.apply(this, arguments);
}
const Spin = (props) => /* @__PURE__ */ React.createElement(Burger, _extends$8({}, props, {
  render: (o) => /* @__PURE__ */ React.createElement("div", {
    className: "hamburger-react",
    "aria-label": o.label,
    "aria-expanded": o.isToggled,
    onClick: o.handler,
    onKeyUp: (e) => e.key === "Enter" && o.handler(),
    role: "button",
    style: {
      ...o.burgerStyles,
      transform: `${o.isToggled ? `rotate(${180 * (o.isLeft ? -1 : 1)}deg)` : "none"}`
    },
    tabIndex: 0
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move}px)` : "none"}`
    }
  }), /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset + o.barHeight + o.margin}px`,
      transition: `${o.time}s ${o.easing}`,
      opacity: `${o.isToggled ? "0" : "1"}`
    }
  }), /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move * -1}px)` : "none"}`
    }
  }))
}));
function _extends$9() {
  _extends$9 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$9.apply(this, arguments);
}
const Spiral = (props) => /* @__PURE__ */ React.createElement(Burger, _extends$9({}, props, {
  lines: 2,
  render: (o) => /* @__PURE__ */ React.createElement("div", {
    className: "hamburger-react",
    "aria-label": o.label,
    "aria-expanded": o.isToggled,
    onClick: o.handler,
    onKeyUp: (e) => e.key === "Enter" && o.handler(),
    role: "button",
    style: {
      ...o.burgerStyles,
      transform: `${o.isToggled ? `rotate(${180 * (o.isLeft ? -1 : 1)}deg)` : "none"}`
    },
    tabIndex: 0
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move}px)` : "none"}`
    }
  }), /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset + o.barHeight + o.margin}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move * -1}px)` : "none"}`
    }
  }))
}));
function _extends$a() {
  _extends$a = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$a.apply(this, arguments);
}
const Squash = (props) => /* @__PURE__ */ React.createElement(Burger, _extends$a({}, props, {
  render: (o) => /* @__PURE__ */ React.createElement("div", {
    className: "hamburger-react",
    "aria-label": o.label,
    "aria-expanded": o.isToggled,
    onClick: o.handler,
    onKeyUp: (e) => e.key === "Enter" && o.handler(),
    role: "button",
    style: o.burgerStyles,
    tabIndex: 0
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? "0s" : `${o.time / 2}s`}`,
      transform: `${o.isToggled ? `translateY(${o.barHeight + o.margin}px)` : "none"}`
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset}px`,
      transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? `${o.time / 2}s` : "0s"}`,
      transform: `${o.isToggled ? `rotate(45deg)` : "none"}`
    }
  })), /* @__PURE__ */ React.createElement("div", {
    style: {
      transition: `${o.time / 2}s ${o.easing}`,
      opacity: `${o.isToggled ? "0" : "1"}`
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset + o.barHeight + o.margin}px`,
      transition: `${o.time / 2}s ${o.easing}`
    }
  })), /* @__PURE__ */ React.createElement("div", {
    style: {
      transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? "0s" : `${o.time / 2}s`}`,
      transform: `${o.isToggled ? `translateY(-${o.barHeight + o.margin}px)` : "none"}`
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
      transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? `${o.time / 2}s` : "0s"}`,
      transform: `${o.isToggled ? `rotate(-45deg)` : "none"}`
    }
  })))
}));
function _extends$b() {
  _extends$b = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$b.apply(this, arguments);
}
const Squeeze = (props) => /* @__PURE__ */ React.createElement(Burger, _extends$b({}, props, {
  lines: 2,
  render: (o) => /* @__PURE__ */ React.createElement("div", {
    className: "hamburger-react",
    "aria-label": o.label,
    "aria-expanded": o.isToggled,
    onClick: o.handler,
    onKeyUp: (e) => e.key === "Enter" && o.handler(),
    role: "button",
    style: o.burgerStyles,
    tabIndex: 0
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? "0s" : `${o.time / 2}s`}`,
      transform: `${o.isToggled ? `translateY(${o.barHeight / 2 + o.margin / 2}px)` : "none"}`
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset}px`,
      transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? `${o.time / 2}s` : "0s"}`,
      transform: `${o.isToggled ? `rotate(45deg)` : "none"}`
    }
  })), /* @__PURE__ */ React.createElement("div", {
    style: {
      transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? "0s" : `${o.time / 2}s`}`,
      transform: `${o.isToggled ? `translateY(-${o.barHeight / 2 + o.margin / 2}px)` : "none"}`
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset + o.barHeight + o.margin}px`,
      transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? `${o.time / 2}s` : "0s"}`,
      transform: `${o.isToggled ? `rotate(-45deg)` : "none"}`
    }
  })))
}));
function _extends$c() {
  _extends$c = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$c.apply(this, arguments);
}
const Turn = (props) => /* @__PURE__ */ React.createElement(Burger, _extends$c({}, props, {
  render: (o) => /* @__PURE__ */ React.createElement("div", {
    className: "hamburger-react",
    "aria-label": o.label,
    "aria-expanded": o.isToggled,
    onClick: o.handler,
    onKeyUp: (e) => e.key === "Enter" && o.handler(),
    role: "button",
    style: o.burgerStyles,
    tabIndex: 0
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move}px)` : "none"}`
    }
  }), /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset + o.barHeight + o.margin}px`,
      transition: `${o.time / 2}s ${o.easing}`,
      transform: `${o.isToggled ? "scaleX(0)" : "none"}`
    }
  }), /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
      transition: `${o.time}s ${o.easing}`,
      transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move * -1}px)` : "none"}`
    }
  }))
}));
function _extends$d() {
  _extends$d = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$d.apply(this, arguments);
}
const Twirl = (props) => /* @__PURE__ */ React.createElement(Burger, _extends$d({}, props, {
  render: (o) => /* @__PURE__ */ React.createElement("div", {
    className: "hamburger-react",
    "aria-label": o.label,
    "aria-expanded": o.isToggled,
    onClick: o.handler,
    onKeyUp: (e) => e.key === "Enter" && o.handler(),
    role: "button",
    style: {
      ...o.burgerStyles,
      transform: `${o.isToggled ? `rotate(${90 * (o.isLeft ? -1 : 1)}deg)` : "none"}`
    },
    tabIndex: 0
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? "0s" : `${o.time / 2}s`}`,
      transform: `${o.isToggled ? `translateY(${o.barHeight + o.margin}px)` : "none"}`
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset}px`,
      transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? `${o.time / 2}s` : "0s"}`,
      transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg)` : "none"}`
    }
  })), /* @__PURE__ */ React.createElement("div", {
    style: {
      transition: `${o.time / 2}s ${o.easing}`,
      opacity: `${o.isToggled ? "0" : "1"}`
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset + o.barHeight + o.margin}px`,
      transition: `${o.time / 2}s ${o.easing}`
    }
  })), /* @__PURE__ */ React.createElement("div", {
    style: {
      transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? "0s" : `${o.time / 2}s`}`,
      transform: `${o.isToggled ? `translateY(-${o.barHeight + o.margin}px)` : "none"}`
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      ...o.barStyles,
      width: `${o.width}px`,
      top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
      transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? `${o.time / 2}s` : "0s"}`,
      transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg)` : "none"}`
    }
  })))
}));
export default Tilt;
export {Cross, Divide, Fade, Pivot, Rotate, Slant, Sling, Spin, Spiral, Squash, Squeeze, Turn, Twirl};
