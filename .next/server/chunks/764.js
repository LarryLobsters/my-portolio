exports.id = 764;
exports.ids = [764];
exports.modules = {

/***/ 20812:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 16110))

/***/ }),

/***/ 74934:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 61166));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 90004));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 61072));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 90681));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5874))

/***/ }),

/***/ 36387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Gt: () => (/* reexport */ AnimatedLetters),
  V0: () => (/* reexport */ AnimatedText),
  mw: () => (/* reexport */ defaultLetterVariants),
  Cs: () => (/* reexport */ defaultTextVariants)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(76931);
// EXTERNAL MODULE: external "next/dist/compiled/react-experimental"
var react_experimental_ = __webpack_require__(17640);
// EXTERNAL MODULE: ./node_modules/.pnpm/framer-motion@10.16.16_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/render/dom/motion.mjs + 193 modules
var motion = __webpack_require__(27479);
;// CONCATENATED MODULE: ./app/components/animated-text/animated-text.tsx
/* __next_internal_client_entry_do_not_use__ AnimatedText,AnimatedLetters auto */ 



const AnimatedText = ({ as: Tag = "p", text, variants = defaultLetterVariants, ...rest })=>{
    // Split the text into words and add a space after each word.
    const words = text.split(" ").map((word)=>`${word}\u00A0`);
    const renderWords = (0,react_experimental_.useMemo)(()=>words.map((word, index)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "inline-block overflow-hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.span, {
                    variants: variants,
                    className: "inline-block",
                    children: word
                })
            }, index)), [
        variants,
        words
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(Tag, {
        ...rest,
        children: /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.span, {
            variants: variants,
            children: renderWords
        })
    });
};
const AnimatedLetters = ({ as: Tag = "div", text, textVariants = defaultTextVariants, letterVariants = defaultLetterVariants, ...rest })=>{
    // Split the text into words and add a space after each word.
    const words = text.split(" ").map((word)=>`${word}\u00A0`);
    const id = (0,react_experimental_.useId)();
    return /*#__PURE__*/ jsx_runtime_.jsx(Tag, {
        ...rest,
        children: /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.span, {
            variants: textVariants,
            children: words.map((word, index)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "inline-block whitespace-nowrap",
                    children: Array.from(word).flat().map((letter, letterIndex)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "inline-block overflow-hidden",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.span, {
                                variants: letterVariants,
                                className: "inline-block",
                                children: letter
                            })
                        }, `${letter}-${id}-${letterIndex}`))
                }, `${word}-${id}-${index}`))
        })
    });
};

;// CONCATENATED MODULE: ./app/components/animated-text/animated-text.motion.ts
const defaultTextVariants = {
    visible: {}
};
const defaultLetterVariants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            ease: "circOut",
            duration: 0.5
        }
    }
};

;// CONCATENATED MODULE: ./app/components/animated-text/index.ts




/***/ }),

/***/ 90681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Footer: () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(76931);
// EXTERNAL MODULE: ./node_modules/.pnpm/framer-motion@10.16.16_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/render/dom/motion.mjs + 193 modules
var motion = __webpack_require__(27479);
;// CONCATENATED MODULE: ./app/components/footer/footer.motion.ts
const footerVariants = {
    visible: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.5
        }
    }
};
const footerItemVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    }
};

;// CONCATENATED MODULE: ./app/components/footer/index.ts



;// CONCATENATED MODULE: ./app/components/footer/footer.tsx
/* __next_internal_client_entry_do_not_use__ Footer auto */ 


function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.footer, {
        variants: footerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: true
        },
        className: "md:flex-row md:justify-between container flex flex-col justify-center gap-10 py-16",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "md:gap-12 flex w-1/2 gap-8 text-xl",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.a, {
                        href: "https://github.com/LarryLobsters",
                        target: "_blank",
                        rel: "noreferrer",
                        variants: footerItemVariants,
                        className: "nav-link text-dark-500 text-xl",
                        children: "Github"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.a, {
                        href: "https://www.linkedin.com/in/larry-l-3349721a4/",
                        target: "_blank",
                        rel: "noreferrer",
                        variants: footerItemVariants,
                        className: "nav-link text-dark-500 text-xl",
                        children: "Linkedin"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.p, {
                variants: footerItemVariants,
                className: "text-dark-300 dark:text-dark-400 font-light",
                children: [
                    "\xa9 larryLobsters ",
                    new Date().getFullYear()
                ]
            })
        ]
    });
}


/***/ }),

/***/ 96740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ MotionLinkButton)
/* harmony export */ });
/* unused harmony export LinkButton */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96925);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27479);
/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66289);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10494);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);






const LinkButton = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function LinkButton({ children = "Button", icon: Icon, ...rest }, ref) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        ref: ref,
        ...rest,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("group flex gap-3 text-3xl font-light text-dark-400 transition duration-300 ease-in-out hover:text-dark-500 dark:text-dark-200", rest.className),
        children: [
            children,
            Icon ?? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_vsc__WEBPACK_IMPORTED_MODULE_4__/* .VscArrowRight */ .bTI, {
                size: 36,
                className: "rotate-45 text-dark-200 transition duration-300 ease-in-out group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-dark-300 dark:text-dark-400"
            })
        ]
    });
});
const MotionLinkButton = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function MotionLinkButton({ children, motionProps, ...rest }, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .motion */ .E.div, {
        ...motionProps,
        ref: ref,
        className: rest.className,
        style: rest.style,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkButton, {
            ...rest,
            children: children
        })
    });
});


/***/ }),

/***/ 90004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  MobileNav: () => (/* binding */ MobileNav)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(76931);
// EXTERNAL MODULE: ./node_modules/.pnpm/framer-motion@10.16.16_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/render/dom/motion.mjs + 193 modules
var motion = __webpack_require__(27479);
// EXTERNAL MODULE: ./node_modules/.pnpm/framer-motion@10.16.16_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs + 5 modules
var AnimatePresence = __webpack_require__(92736);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.12_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js
var next_link = __webpack_require__(10494);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/.pnpm/use-scrollspy@1.2.0_react@18.2.0/node_modules/use-scrollspy/dist/index.mjs
var dist = __webpack_require__(27055);
// EXTERNAL MODULE: external "next/dist/compiled/react-experimental"
var react_experimental_ = __webpack_require__(17640);
;// CONCATENATED MODULE: ./app/components/logo.tsx

const Logo = ({ width = 50, height = 50, ...props })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 53 36",
        xmlns: "http://www.w3.org/2000/svg",
        height: height,
        width: width,
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "m33.681 26.844c-1.314 2.325-3.132 4.329-5.301 5.862-2.934 2.076-6.516 3.294-10.38 3.294-9.939 0-18-8.061-18-18 0-9.942 8.061-18 18-18 3.864 0 7.446 1.218 10.38 3.294h3e-3c2.169 1.533 3.984 3.537 5.295 5.859-3.057 1.764-5.118 5.061-5.118 8.847 0 3.783 2.061 7.086 5.121 8.844z",
                fill: "#5C5C5C"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "m51.279 26.655-2.691-1.554c-0.927-0.534-2.085-0.381-2.865 0.351-1.821 1.704-4.269 2.748-6.963 2.748-1.848 0-3.585-0.495-5.079-1.356-3.06-1.758-5.121-5.061-5.121-8.844 0-3.786 2.061-7.083 5.118-8.847h3e-3c1.494-0.861 3.231-1.353 5.079-1.353 2.685 0 5.13 1.038 6.951 2.733 0.78 0.729 1.935 0.882 2.862 0.348l2.691-1.554c1.335-0.771 1.62-2.592 0.561-3.711-3.282-3.459-7.92-5.616-13.065-5.616-3.867 0-7.443 1.218-10.377 3.294h-3e-3c-0.012 9e-3 -0.027 0.018-0.039 0.027-0.132 0.093-0.261 0.189-0.387 0.285-0.066 0.048-0.132 0.099-0.198 0.147-0.075 0.06-0.147 0.117-0.219 0.177-0.072 0.054-0.138 0.108-0.207 0.165s-0.135 0.111-0.201 0.168c-0.069 0.057-0.135 0.117-0.201 0.174-0.135 0.114-0.264 0.231-0.393 0.351-0.066 0.06-0.129 0.12-0.192 0.183-0.255 0.243-0.504 0.492-0.744 0.75-0.054 0.057-0.108 0.117-0.162 0.177-0.318 0.348-0.621 0.711-0.912 1.083-0.039 0.051-0.078 0.102-0.114 0.153-0.144 0.186-0.27 0.369-0.429 0.582-0.03 0.039-0.078 0.108-0.105 0.15-0.168 0.255-0.333 0.513-0.498 0.768-0.021 0.036-0.057 0.096-0.078 0.132-0.087 0.159-0.174 0.306-0.264 0.462-0.069 0.126-0.138 0.255-0.207 0.384-0.036 0.072-0.075 0.144-0.111 0.216-0.12 0.234-0.237 0.477-0.348 0.72l-0.108 0.243c-0.183 0.414-0.348 0.837-0.498 1.269-0.03 0.078-0.054 0.156-0.081 0.237-0.03 0.084-0.057 0.171-0.084 0.255-0.018 0.06-0.036 0.117-0.054 0.174-0.015 0.042-0.027 0.087-0.039 0.132-0.051 0.168-0.099 0.339-0.144 0.51-0.021 0.078-0.042 0.153-0.06 0.228-0.045 0.177-0.087 0.354-0.126 0.531-0.018 0.081-0.033 0.162-0.051 0.243-3e-3 9e-3 -3e-3 0.018-3e-3 0.027-0.021 0.087-0.036 0.177-0.054 0.267-0.033 0.171-0.06 0.342-0.093 0.51-0.015 0.075-0.024 0.15-0.033 0.222-0.018 0.168-0.045 0.351-0.066 0.537l-0.018 0.162c-6e-3 0.072-0.012 0.144-0.021 0.216-3e-3 0.057-9e-3 0.111-0.015 0.168l-9e-3 0.135c-0.012 0.153-0.021 0.306-0.03 0.459l-9e-3 0.216v0.03c-6e-3 0.066-6e-3 0.129-6e-3 0.195-3e-3 0.066-6e-3 0.132-6e-3 0.201 0 0.093-3e-3 0.189-3e-3 0.285 0 0.093 3e-3 0.189 3e-3 0.282 0 0.069 3e-3 0.135 6e-3 0.204 0 0.063 0 0.126 6e-3 0.192v0.03l9e-3 0.216c9e-3 0.156 0.018 0.306 0.03 0.459l9e-3 0.135c6e-3 0.057 0.012 0.114 0.015 0.168 9e-3 0.072 0.015 0.144 0.021 0.216l0.018 0.162c0.021 0.186 0.048 0.369 0.066 0.537 9e-3 0.075 0.018 0.147 0.033 0.222 0.033 0.168 0.06 0.339 0.093 0.51 0.018 0.09 0.033 0.18 0.054 0.267 0 9e-3 0 0.018 3e-3 0.027 0.018 0.081 0.033 0.162 0.051 0.243 0.039 0.177 0.081 0.354 0.126 0.531 0.018 0.075 0.039 0.153 0.06 0.228 0.045 0.171 0.093 0.342 0.144 0.51 0.012 0.045 0.024 0.09 0.039 0.132 0.018 0.057 0.036 0.117 0.054 0.174 0.027 0.087 0.054 0.171 0.084 0.255 0.027 0.081 0.051 0.159 0.081 0.24 0.15 0.429 0.315 0.852 0.498 1.266l0.108 0.243c0.111 0.243 0.228 0.486 0.348 0.723 0.036 0.072 0.075 0.144 0.111 0.216 0.069 0.126 0.138 0.255 0.207 0.381 0.066 0.114 0.129 0.222 0.192 0.333 0.075 0.135 0.207 0.345 0.288 0.474l0.348 0.54c0.027 0.045 0.078 0.117 0.111 0.159 0.162 0.213 0.288 0.402 0.435 0.588 0.036 0.051 0.075 0.102 0.114 0.153 0.291 0.372 0.594 0.735 0.912 1.086 0.054 0.06 0.108 0.117 0.162 0.174 0.24 0.258 0.489 0.51 0.744 0.75 0.063 0.063 0.126 0.123 0.192 0.183 0.129 0.12 0.258 0.237 0.393 0.351 0.066 0.06 0.132 0.117 0.201 0.174 0.066 0.057 0.132 0.114 0.201 0.168 0.069 0.057 0.135 0.114 0.207 0.168 0.072 0.057 0.144 0.114 0.219 0.174 0.066 0.048 0.132 0.099 0.198 0.15 0.126 0.096 0.255 0.189 0.387 0.282 0.012 9e-3 0.027 0.018 0.039 0.03 2.934 2.073 6.513 3.294 10.38 3.294 5.151 0 9.798-2.166 13.08-5.637 1.059-1.119 0.771-2.94-0.561-3.708z",
                className: "fill-dark-850 transition-colors delay-150 duration-300 ease-in-out dark:fill-dark-50"
            })
        ]
    });

// EXTERNAL MODULE: ./app/components/theme-toggle-button.tsx
var theme_toggle_button = __webpack_require__(4574);
;// CONCATENATED MODULE: ./app/hooks/use-click-away.ts

const defaultEvents = [
    "mousedown",
    "touchstart"
];
function on(obj, ...args) {
    if (obj && obj.addEventListener) {
        obj.addEventListener(...args);
    }
}
function off(obj, ...args) {
    if (obj && obj.removeEventListener) {
        obj.removeEventListener(...args);
    }
}
const useClickAway = (references, onClickAway)=>{
    const savedCallback = (0,react_experimental_.useRef)(onClickAway);
    (0,react_experimental_.useEffect)(()=>{
        savedCallback.current = onClickAway;
    }, [
        onClickAway
    ]);
    (0,react_experimental_.useEffect)(()=>{
        const handler = (event)=>{
            if (references?.some((ref)=>ref.current && ref.current.contains(event.target))) return;
            onClickAway(event);
        };
        for (const event of defaultEvents){
            on(document, event, handler);
        }
        return ()=>{
            for (const event of defaultEvents){
                off(document, event, handler);
            }
        };
    }, [
        references
    ]);
};

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.12_react-dom@18.2.0_react@18.2.0/node_modules/next/navigation.js
var navigation = __webpack_require__(10657);
;// CONCATENATED MODULE: ./app/components/mobile-navigation.tsx
/* __next_internal_client_entry_do_not_use__ MobileNav auto */ 








const navVariants = {
    hidden: {
        x: "100%",
        transition: {
            duration: 0.2,
            ease: [
                0.9,
                0.1,
                0.3,
                0.96
            ],
            when: "afterChildren"
        }
    },
    visible: {
        x: 0,
        transition: {
            duration: 0.3,
            ease: [
                0.9,
                0.1,
                0.3,
                0.96
            ],
            when: "beforeChildren",
            staggerChildren: 0.05
        }
    }
};
const linkVariants = {
    hidden: {
        opacity: 0,
        x: -20
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: "circOut"
        }
    }
};
const MotionLink = (0,motion/* motion */.E)((link_default()));
function MobileNav() {
    const navRef = (0,react_experimental_.useRef)(null);
    const navToggleRef = (0,react_experimental_.useRef)(null);
    const [isOpen, setIsOpen] = (0,react_experimental_.useState)(false);
    const toggle = ()=>setIsOpen((open)=>!open);
    useClickAway([
        navRef,
        navToggleRef
    ], ()=>setIsOpen(false));
    (0,dist/* useScrollspy */.$)({
        ids: [
            "intro",
            "projects",
            "about",
            "contact"
        ],
        hrefs: [
            "/#intro",
            "/#projects",
            "/#about",
            "/#contact"
        ],
        offset: "topCenter",
        activeClass: "active-nav-link"
    });
    const pathname = (0,navigation.usePathname)();
    (0,react_experimental_.useEffect)(()=>setIsOpen(false), [
        pathname
    ]);
    (0,react_experimental_.useEffect)(()=>{
        document.body.style.overflow = isOpen ? "hidden" : "visible";
    }, [
        isOpen
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/#",
                className: "fixed top-8 left-4 z-30 md:hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                    height: 36
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                ref: navToggleRef,
                type: "button",
                "aria-label": isOpen ? "Close menu" : "Open menu",
                onClick: toggle,
                className: "fixed top-8 right-4 z-30 text-dark-100 mix-blend-difference hover:opacity-60 dark:text-white md:hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    className: "h-8 w-8",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(AnimatePresence/* AnimatePresence */.M, {
                        children: isOpen ? /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.path, {
                            initial: {
                                pathLength: 0
                            },
                            animate: {
                                pathLength: 1,
                                pathOffset: 0
                            },
                            exit: {
                                pathOffset: 1
                            },
                            transition: {
                                duration: 1,
                                ease: "circOut"
                            },
                            strokeLinecap: "square",
                            strokeWidth: 1.5,
                            d: "M6 18L18 6M6 6l12 12"
                        }, "close") : /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.path, {
                            initial: {
                                pathLength: 0
                            },
                            animate: {
                                pathLength: 1,
                                pathOffset: 0
                            },
                            exit: {
                                pathOffset: 1
                            },
                            transition: {
                                duration: 1,
                                ease: "circOut"
                            },
                            strokeLinecap: "square",
                            strokeWidth: 1.5,
                            d: "M4 6h16M4 12h16m-7 6h7"
                        }, "open")
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(AnimatePresence/* AnimatePresence */.M, {
                children: isOpen && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.nav, {
                    ref: navRef,
                    variants: navVariants,
                    initial: "hidden",
                    animate: "visible",
                    exit: "hidden",
                    className: "fixed inset-y-0 right-0 z-20 flex w-9/12 flex-col bg-dark-100 px-12 transition-colors dark:bg-dark-700 md:hidden h-full flex-wrap items-start justify-center gap-y-14",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(MotionLink, {
                            href: "/#intro",
                            variants: linkVariants,
                            className: "mobile-nav-link",
                            children: "Introduction"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(MotionLink, {
                            href: "/#projects",
                            variants: linkVariants,
                            className: "mobile-nav-link",
                            children: "Projects"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(MotionLink, {
                            href: "/#about",
                            variants: linkVariants,
                            className: "mobile-nav-link",
                            children: "About"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(MotionLink, {
                            href: "/#contact",
                            variants: linkVariants,
                            className: "mobile-nav-link",
                            children: "Contact"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                            variants: linkVariants,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(theme_toggle_button/* ThemeToggleButton */.P, {})
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 61072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Navigation: () => (/* binding */ Navigation)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(76931);
// EXTERNAL MODULE: ./node_modules/.pnpm/framer-motion@10.16.16_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/render/dom/motion.mjs + 193 modules
var motion = __webpack_require__(27479);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.12_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js
var next_link = __webpack_require__(10494);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./public/larry/LarryLogo.png
/* harmony default export */ const LarryLogo = ({"src":"/_next/static/media/LarryLogo.99bc0292.png","height":368,"width":382,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAa0lEQVR42jWNOQqEUBQE3yTDDLiDmBgpCgpiJoK4oJGBl/E0HsBzFr6v2EnTVUELH9FQUZu+FwEtETEDkZk/Ogqm2484gkvKxsFfREUoeApWTnoFpQFfejJ2FgUzlmjZNOQkKvz3SMgon9sLb2g2W3MdBeAAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/components/navigation/navigation.motion.ts
const navVariants = {
    visible: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 1
        }
    }
};
const linkVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    }
};

;// CONCATENATED MODULE: ./app/components/navigation/index.ts



// EXTERNAL MODULE: ./app/components/theme-toggle-button.tsx
var theme_toggle_button = __webpack_require__(4574);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.12_react-dom@18.2.0_react@18.2.0/node_modules/next/image.js
var next_image = __webpack_require__(66703);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./app/components/navigation/navigation.tsx
/* __next_internal_client_entry_do_not_use__ Navigation auto */ 






const AnimatedLink = (0,motion/* motion */.E)((link_default()));
AnimatedLink.defaultProps = {
    className: "hover:text-primary-brand nav-link"
};
function Navigation() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.header, {
        variants: navVariants,
        initial: "hidden",
        animate: "visible",
        className: "md:flex container fixed inset-x-0 top-0 z-50 items-center justify-between hidden w-full h-32",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(AnimatedLink, {
                href: "/#",
                variants: linkVariants,
                className: "",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: LarryLogo,
                    alt: "Larry Logo",
                    width: 100,
                    height: 100
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "gap-x-14 flex items-center justify-center text-lg",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(AnimatedLink, {
                        href: "/#intro",
                        variants: linkVariants,
                        children: "Introduction"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(AnimatedLink, {
                        href: "/#projects",
                        variants: linkVariants,
                        children: "Projects"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(AnimatedLink, {
                        href: "/#about",
                        variants: linkVariants,
                        children: "About"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(AnimatedLink, {
                        href: "/#contact",
                        variants: linkVariants,
                        children: "Contact"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                        variants: linkVariants,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(theme_toggle_button/* ThemeToggleButton */.P, {})
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 4574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ ThemeToggleButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27479);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92736);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19138);
/* harmony import */ var _hooks_use_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14237);
/* harmony import */ var _hooks_use_mounted__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12020);
/* __next_internal_client_entry_do_not_use__ ThemeToggleButton auto */ 




const IconButton = ({ children, ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.button, {
        ...props,
        initial: {
            opacity: 0,
            rotate: -65,
            originY: "150%",
            originX: 0.5
        },
        animate: {
            opacity: 1,
            rotate: 0
        },
        exit: {
            opacity: 0,
            rotate: 65
        },
        transition: {
            duration: 0.4,
            ease: "backOut"
        },
        children: children
    });
IconButton.displayName = "IconButton";
const ThemeToggleButton = ()=>{
    const { theme, toggleTheme } = (0,_hooks_use_theme__WEBPACK_IMPORTED_MODULE_1__/* .useTheme */ .F)();
    const mounted = (0,_hooks_use_mounted__WEBPACK_IMPORTED_MODULE_2__/* .useMounted */ .s)();
    const isDarkMode = theme === "dark";
    if (!mounted) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .AnimatePresence */ .M, {
        mode: "wait",
        children: isDarkMode ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconButton, {
            className: "hover:text-primary-brand overflow-hidden text-dark-400 hover:text-dark-500 dark:text-dark-300 dark:hover:text-dark-200",
            onClick: toggleTheme,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__/* .MdOutlineLightMode */ .A9M, {
                title: "Light mode",
                size: 24
            })
        }, "light-mode") : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconButton, {
            className: "hover:text-primary-brand overflow-hidden text-dark-400 hover:text-dark-500 dark:text-dark-300 dark:hover:text-dark-200",
            onClick: toggleTheme,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__/* .MdOutlineDarkMode */ .UFB, {
                title: "Dark mode",
                size: 24
            })
        }, "dark-mode")
    });
};


/***/ }),

/***/ 12020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ useMounted)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ useMounted auto */ 
function useMounted() {
    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setMounted(true);
        return ()=>setMounted(false);
    }, []);
    return mounted;
}


/***/ }),

/***/ 14237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ useTheme)
/* harmony export */ });
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56606);
/* __next_internal_client_entry_do_not_use__ useTheme auto */ 
function useTheme() {
    const { theme, setTheme, ...rest } = (0,next_themes__WEBPACK_IMPORTED_MODULE_0__/* .useTheme */ .F)();
    const toggleTheme = ()=>{
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };
    return {
        theme,
        toggleTheme,
        ...rest
    };
}


/***/ }),

/***/ 16110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_animated_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36387);
/* harmony import */ var _components_link_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96740);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27479);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92736);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function NotFound() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        className: "container py-40 md:py-80",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.article, {
            variants: {
                hidden: {
                    transition: {
                        staggerChildren: 0.25,
                        delayChildren: 0.25
                    }
                },
                visible: {
                    transition: {
                        staggerChildren: 0.25,
                        delayChildren: 0.25
                    }
                }
            },
            initial: "hidden",
            whileInView: "visible",
            exit: "hidden",
            viewport: {
                once: true
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .AnimatePresence */ .M, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_animated_text__WEBPACK_IMPORTED_MODULE_1__/* .AnimatedLetters */ .Gt, {
                        as: "h2",
                        text: "That's awkward... I couldn't find that page.",
                        className: "text-4xl font-medium lg:text-5xl",
                        textVariants: {
                            hidden: {
                                transition: {
                                    staggerChildren: 0.015
                                }
                            },
                            visible: {
                                transition: {
                                    staggerChildren: 0.015
                                }
                            }
                        },
                        letterVariants: {
                            hidden: {
                                opacity: 0,
                                y: 75
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    ease: [
                                        0.455,
                                        0.03,
                                        0.515,
                                        0.955
                                    ],
                                    duration: 0.5
                                }
                            }
                        }
                    }, "title"),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_animated_text__WEBPACK_IMPORTED_MODULE_1__/* .AnimatedText */ .V0, {
                        as: "p",
                        className: "mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200 md:w-3/5",
                        text: "Maybe this page used to exist, is under development or maybe you typed in the wrong URL. Either way, I'm sorry for the inconvenience."
                    }, "text"),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_link_button__WEBPACK_IMPORTED_MODULE_2__/* .MotionLinkButton */ .G, {
                        href: "/",
                        motionProps: {
                            variants: {
                                hidden: {
                                    opacity: 0,
                                    y: 50
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        ease: "circOut",
                                        duration: 0.5
                                    }
                                }
                            }
                        },
                        className: "mt-8 inline-block md:mt-12",
                        children: "Go back home"
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 61166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Providers: () => (/* binding */ Providers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56606);
/* __next_internal_client_entry_do_not_use__ Providers auto */ 

function Providers({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_1__/* .ThemeProvider */ .f, {
        attribute: "class",
        children: children
    });
}


/***/ }),

/***/ 16894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(76931);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.12_react-dom@18.2.0_react@18.2.0/node_modules/next/font/local/target.css?{"path":"app/layout.tsx","import":"","arguments":[{"src":[{"path":"../public/assets/Epilogue-VariableFont_wght.ttf","style":"normal"},{"path":"../public/assets/Epilogue-Italic-VariableFont_wght.ttf","style":"italic"}],"variable":"--font-epilogue","display":"swap"}],"variableName":"epilogue"}
var Epilogue_Italic_VariableFont_wght_ttf_style_italic_variable_font_epilogue_display_swap_variableName_epilogue_ = __webpack_require__(75560);
var Epilogue_Italic_VariableFont_wght_ttf_style_italic_variable_font_epilogue_display_swap_variableName_epilogue_default = /*#__PURE__*/__webpack_require__.n(Epilogue_Italic_VariableFont_wght_ttf_style_italic_variable_font_epilogue_display_swap_variableName_epilogue_);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vercel+analytics@1.1.1/node_modules/@vercel/analytics/dist/react/index.js
var react = __webpack_require__(30171);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.0.0/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4758);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.12_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(37371);
;// CONCATENATED MODULE: ./app/components/footer/footer.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/larryly/Code/Builds/Portfolio/portfolio-maximus/app/components/footer/footer.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Footer"];

;// CONCATENATED MODULE: ./app/components/footer/footer.motion.ts
const footerVariants = {
    visible: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.5
        }
    }
};
const footerItemVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    }
};

;// CONCATENATED MODULE: ./app/components/footer/index.ts



;// CONCATENATED MODULE: ./app/components/mobile-navigation.tsx

const mobile_navigation_proxy = (0,module_proxy.createProxy)(String.raw`/Users/larryly/Code/Builds/Portfolio/portfolio-maximus/app/components/mobile-navigation.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: mobile_navigation_esModule, $$typeof: mobile_navigation_$$typeof } = mobile_navigation_proxy;
const mobile_navigation_default_ = mobile_navigation_proxy.default;

const mobile_navigation_e0 = mobile_navigation_proxy["MobileNav"];

;// CONCATENATED MODULE: ./app/components/navigation/navigation.tsx

const navigation_proxy = (0,module_proxy.createProxy)(String.raw`/Users/larryly/Code/Builds/Portfolio/portfolio-maximus/app/components/navigation/navigation.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: navigation_esModule, $$typeof: navigation_$$typeof } = navigation_proxy;
const navigation_default_ = navigation_proxy.default;

const navigation_e0 = navigation_proxy["Navigation"];

;// CONCATENATED MODULE: ./app/components/navigation/navigation.motion.ts
const navVariants = {
    visible: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 1
        }
    }
};
const linkVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    }
};

;// CONCATENATED MODULE: ./app/components/navigation/index.ts



// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(16579);
;// CONCATENATED MODULE: ./app/providers.tsx

const providers_proxy = (0,module_proxy.createProxy)(String.raw`/Users/larryly/Code/Builds/Portfolio/portfolio-maximus/app/providers.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: providers_esModule, $$typeof: providers_$$typeof } = providers_proxy;
const providers_default_ = providers_proxy.default;

const providers_e0 = providers_proxy["Providers"];

;// CONCATENATED MODULE: ./app/layout.tsx









const metadata = {
    title: "Larry Ly - Frontend developer",
    description: `I'm a self-taught designer & developer and I aim for smooth engaging user experience.`
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        className: "scroll-p-32 scroll-smooth",
        suppressHydrationWarning: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (0,clsx/* default */.Z)("bg-dark-50 text-dark-600 transition-colors duration-300 ease-in-out dark:bg-dark-850 dark:text-dark-50", (Epilogue_Italic_VariableFont_wght_ttf_style_italic_variable_font_epilogue_display_swap_variableName_epilogue_default()).className),
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(providers_e0, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(navigation_e0, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(mobile_navigation_e0, {}),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(react/* Analytics */.c, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(e0, {})
                ]
            })
        })
    });
}


/***/ }),

/***/ 54168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37371);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/larryly/Code/Builds/Portfolio/portfolio-maximus/app/not-found.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 87004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50538);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/svg+xml","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "icon.svg")

    return [{
      ...imageData,
      url: imageUrl + "?d2fed497c5b2cac6",
    }]
  });

/***/ }),

/***/ 16579:
/***/ (() => {



/***/ })

};
;