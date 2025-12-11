(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/lucide-react/dist/esm/icons/volume-x.js [app-client] (ecmascript) <export default as VolumeX>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function LoadingScreen({ onLoadComplete, onEnter, isLoaded }) {
    _s();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [muted, setMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [marioPosition, setMarioPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [coinsCollected, setCoinsCollected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showCoinPop, setShowCoinPop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const hasCalledComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoadingScreen.useEffect": ()=>{
            const interval = setInterval({
                "LoadingScreen.useEffect.interval": ()=>{
                    setProgress({
                        "LoadingScreen.useEffect.interval": (prev)=>{
                            if (prev >= 100) {
                                clearInterval(interval);
                                return 100;
                            }
                            // Collect a coin every 10%
                            if (prev > 0 && prev % 10 === 0 && prev !== 100) {
                                setCoinsCollected({
                                    "LoadingScreen.useEffect.interval": (c)=>c + 1
                                }["LoadingScreen.useEffect.interval"]);
                                setShowCoinPop(true);
                                setTimeout({
                                    "LoadingScreen.useEffect.interval": ()=>setShowCoinPop(false)
                                }["LoadingScreen.useEffect.interval"], 300);
                            }
                            return prev + 1;
                        }
                    }["LoadingScreen.useEffect.interval"]);
                }
            }["LoadingScreen.useEffect.interval"], 40);
            return ({
                "LoadingScreen.useEffect": ()=>clearInterval(interval)
            })["LoadingScreen.useEffect"];
        }
    }["LoadingScreen.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoadingScreen.useEffect": ()=>{
            if (progress >= 100 && !hasCalledComplete.current) {
                hasCalledComplete.current = true;
                onLoadComplete();
            }
        }
    }["LoadingScreen.useEffect"], [
        progress,
        onLoadComplete
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoadingScreen.useEffect": ()=>{
            setMarioPosition(progress / 100 * 85);
        }
    }["LoadingScreen.useEffect"], [
        progress
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0",
                animate: {
                    background: [
                        "linear-gradient(180deg, #87CEEB 0%, #98D8EA 50%, #90EE90 100%)",
                        "linear-gradient(180deg, #7EC8E3 0%, #87CEEB 50%, #8FBC8F 100%)",
                        "linear-gradient(180deg, #87CEEB 0%, #98D8EA 50%, #90EE90 100%)"
                    ]
                },
                transition: {
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY
                }
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                    ...Array(6)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute",
                        initial: {
                            x: -200
                        },
                        animate: {
                            x: "110vw"
                        },
                        transition: {
                            duration: 15 + i * 5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                            delay: i * 2
                        },
                        style: {
                            top: `${8 + i % 3 * 12}%`,
                            opacity: 0.9 - i * 0.1
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Cloud, {
                            scale: 0.6 + i % 3 * 0.3
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this)
                    }, i, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-24 left-0 right-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 1440 120",
                    className: "w-full h-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0,120 Q180,40 360,80 T720,60 T1080,90 T1440,70 L1440,120 Z",
                            fill: "#228B22",
                            opacity: "0.5"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0,120 Q240,60 480,90 T960,50 T1440,80 L1440,120 Z",
                            fill: "#2E8B2E",
                            opacity: "0.7"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 h-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-green-500 to-green-600"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-6 left-0 right-0 h-18 bg-amber-700 flex overflow-hidden",
                        children: [
                            ...Array(30)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: i * 0.02
                                },
                                className: "w-12 h-12 md:w-16 md:h-16 border border-amber-800 bg-amber-600 flex-shrink-0 relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-1 border border-amber-500/30 rounded-sm"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this)
                            }, i, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-36 left-1/4 flex gap-2",
                children: [
                    ...Array(3)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuestionBlock, {
                        delay: i * 0.15,
                        hit: progress > (i + 1) * 30
                    }, i, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col items-center gap-6 md:gap-8 px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            y: -80,
                            opacity: 0,
                            rotateX: 45
                        },
                        animate: {
                            y: 0,
                            opacity: 1,
                            rotateX: 0
                        },
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            delay: 0.2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-[var(--font-pixel)] text-2xl md:text-4xl lg:text-5xl text-white text-center",
                            style: {
                                textShadow: "3px 3px 0 #E52521, 6px 6px 0 #000, -1px -1px 0 #FFD700"
                            },
                            children: "My LFM Adventure"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-72 md:w-96 h-16 md:h-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 right-0 h-2 bg-green-600 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute bottom-2",
                                style: {
                                    left: `${marioPosition}%`
                                },
                                animate: {
                                    y: [
                                        0,
                                        -8,
                                        0
                                    ]
                                },
                                transition: {
                                    duration: 0.25,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarioSprite, {
                                    running: progress < 100
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-0 bottom-4 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            rotateY: [
                                                0,
                                                180,
                                                360
                                            ]
                                        },
                                        transition: {
                                            duration: 0.8,
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: "linear"
                                        },
                                        className: "w-6 h-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Coin, {}, void 0, false, {
                                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        initial: {
                                            scale: 1.5
                                        },
                                        animate: {
                                            scale: 1
                                        },
                                        className: "font-[var(--font-pixel)] text-yellow-300 text-sm drop-shadow-[2px_2px_0_#000]",
                                        children: [
                                            "x",
                                            coinsCollected
                                        ]
                                    }, coinsCollected, true, {
                                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: showCoinPop && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                y: 0,
                                                opacity: 1
                                            },
                                            animate: {
                                                y: -30,
                                                opacity: 0
                                            },
                                            exit: {
                                                opacity: 0
                                            },
                                            className: "absolute -top-4 left-0 font-[var(--font-pixel)] text-yellow-300 text-xs",
                                            children: "+100"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-80 md:w-[420px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -left-3 top-0 bottom-0 w-6 z-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full w-full bg-green-500 rounded-l-lg border-2 border-green-700 relative",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 left-1 bottom-0 w-2 bg-green-400 rounded-l-lg opacity-60"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                                lineNumber: 200,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -right-3 top-0 bottom-0 w-6 z-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full w-full bg-green-500 rounded-r-lg border-2 border-green-700 relative",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 right-1 bottom-0 w-2 bg-green-800 rounded-r-lg opacity-40"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                                lineNumber: 207,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                            lineNumber: 206,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                        lineNumber: 205,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-12 md:h-14 bg-green-700 border-y-4 border-green-800 overflow-hidden shadow-[inset_0_4px_8px_rgba(0,0,0,0.4)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-b from-green-900 via-green-800 to-green-900"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                                lineNumber: 214,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "absolute inset-y-0 left-0 overflow-hidden",
                                                style: {
                                                    width: `${progress}%`
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                className: "absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-400 to-orange-500",
                                                                animate: {
                                                                    opacity: [
                                                                        0.6,
                                                                        1,
                                                                        0.6
                                                                    ]
                                                                },
                                                                transition: {
                                                                    duration: 0.5,
                                                                    repeat: Number.POSITIVE_INFINITY
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                                                lineNumber: 221,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute inset-0 overflow-hidden",
                                                                children: [
                                                                    ...Array(8)
                                                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        className: "absolute w-3 h-3 md:w-4 md:h-4 rounded-full bg-yellow-300",
                                                                        style: {
                                                                            left: `${10 + i * 12}%`,
                                                                            bottom: "20%"
                                                                        },
                                                                        animate: {
                                                                            y: [
                                                                                -5,
                                                                                -15,
                                                                                -5
                                                                            ],
                                                                            opacity: [
                                                                                0.8,
                                                                                1,
                                                                                0.8
                                                                            ],
                                                                            scale: [
                                                                                1,
                                                                                1.2,
                                                                                1
                                                                            ]
                                                                        },
                                                                        transition: {
                                                                            duration: 0.6 + i * 0.1,
                                                                            repeat: Number.POSITIVE_INFINITY,
                                                                            delay: i * 0.1
                                                                        }
                                                                    }, i, false, {
                                                                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                                                        lineNumber: 230,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                                                lineNumber: 228,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent",
                                                                animate: {
                                                                    x: [
                                                                        "-100%",
                                                                        "200%"
                                                                    ]
                                                                },
                                                                transition: {
                                                                    duration: 2,
                                                                    repeat: Number.POSITIVE_INFINITY,
                                                                    ease: "linear"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                                                lineNumber: 252,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-yellow-300/60 to-transparent"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                                                lineNumber: 259,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        className: "absolute right-0 top-0 bottom-0 w-8",
                                                        animate: {
                                                            x: [
                                                                0,
                                                                2,
                                                                0
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 0.2,
                                                            repeat: Number.POSITIVE_INFINITY
                                                        },
                                                        children: [
                                                            ...Array(5)
                                                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                className: "absolute w-2 h-2 bg-yellow-400 rounded-full",
                                                                style: {
                                                                    right: i * 3,
                                                                    top: "30%"
                                                                },
                                                                animate: {
                                                                    y: [
                                                                        -10,
                                                                        -25,
                                                                        -10
                                                                    ],
                                                                    x: [
                                                                        0,
                                                                        i % 2 === 0 ? 5 : -5,
                                                                        0
                                                                    ],
                                                                    opacity: [
                                                                        1,
                                                                        0.5,
                                                                        1
                                                                    ],
                                                                    scale: [
                                                                        1,
                                                                        0.5,
                                                                        1
                                                                    ]
                                                                },
                                                                transition: {
                                                                    duration: 0.4,
                                                                    repeat: Number.POSITIVE_INFINITY,
                                                                    delay: i * 0.08
                                                                }
                                                            }, i, false, {
                                                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                                                lineNumber: 270,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                                lineNumber: 217,
                                                columnNumber: 15
                                            }, this),
                                            progress > 25 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "absolute top-1/2 -translate-y-1/2",
                                                style: {
                                                    left: "20%"
                                                },
                                                animate: {
                                                    rotate: 360,
                                                    scale: [
                                                        1,
                                                        1.2,
                                                        1
                                                    ]
                                                },
                                                transition: {
                                                    duration: 2,
                                                    repeat: Number.POSITIVE_INFINITY
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PowerStar, {
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                                lineNumber: 292,
                                                columnNumber: 17
                                            }, this),
                                            progress > 50 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "absolute top-1/2 -translate-y-1/2",
                                                style: {
                                                    left: "45%"
                                                },
                                                animate: {
                                                    rotate: -360,
                                                    scale: [
                                                        1,
                                                        1.2,
                                                        1
                                                    ]
                                                },
                                                transition: {
                                                    duration: 2,
                                                    repeat: Number.POSITIVE_INFINITY,
                                                    delay: 0.5
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PowerStar, {
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                                lineNumber: 302,
                                                columnNumber: 17
                                            }, this),
                                            progress > 75 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "absolute top-1/2 -translate-y-1/2",
                                                style: {
                                                    left: "70%"
                                                },
                                                animate: {
                                                    rotate: 360,
                                                    scale: [
                                                        1,
                                                        1.2,
                                                        1
                                                    ]
                                                },
                                                transition: {
                                                    duration: 2,
                                                    repeat: Number.POSITIVE_INFINITY,
                                                    delay: 1
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PowerStar, {
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                                lineNumber: 312,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-1 left-4 w-2 h-2 bg-green-600 rounded-full border border-green-800"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                                lineNumber: 323,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-1 left-4 w-2 h-2 bg-green-600 rounded-full border border-green-800"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                                lineNumber: 324,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-1 right-4 w-2 h-2 bg-green-600 rounded-full border border-green-800"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                                lineNumber: 325,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-1 right-4 w-2 h-2 bg-green-600 rounded-full border border-green-800"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                                lineNumber: 326,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex items-center justify-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            rotateY: [
                                                0,
                                                180,
                                                360
                                            ]
                                        },
                                        transition: {
                                            duration: 1,
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: "linear"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Coin, {}, void 0, false, {
                                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                            lineNumber: 336,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                        lineNumber: 332,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-black/60 px-4 py-1.5 rounded-full border-2 border-yellow-500",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-[var(--font-pixel)] text-yellow-400 text-lg md:text-xl drop-shadow-[2px_2px_0_#000]",
                                            children: [
                                                progress,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                            lineNumber: 339,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                        lineNumber: 338,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            rotateY: [
                                                0,
                                                180,
                                                360
                                            ]
                                        },
                                        transition: {
                                            duration: 1,
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: "linear",
                                            delay: 0.5
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Coin, {}, void 0, false, {
                                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                            lineNumber: 347,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                        lineNumber: 343,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                lineNumber: 331,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "mt-2 flex items-center justify-center gap-2",
                                animate: {
                                    opacity: [
                                        0.7,
                                        1,
                                        0.7
                                    ]
                                },
                                transition: {
                                    duration: 1.5,
                                    repeat: Number.POSITIVE_INFINITY
                                },
                                children: progress < 100 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            animate: {
                                                y: [
                                                    0,
                                                    -3,
                                                    0
                                                ]
                                            },
                                            transition: {
                                                duration: 0.5,
                                                repeat: Number.POSITIVE_INFINITY,
                                                delay: 0
                                            },
                                            className: "font-[var(--font-pixel)] text-sm text-white drop-shadow-[2px_2px_0_#000]",
                                            children: "L"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                            lineNumber: 359,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            animate: {
                                                y: [
                                                    0,
                                                    -3,
                                                    0
                                                ]
                                            },
                                            transition: {
                                                duration: 0.5,
                                                repeat: Number.POSITIVE_INFINITY,
                                                delay: 0.1
                                            },
                                            className: "font-[var(--font-pixel)] text-sm text-white drop-shadow-[2px_2px_0_#000]",
                                            children: "o"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                            lineNumber: 366,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            animate: {
                                                y: [
                                                    0,
                                                    -3,
                                                    0
                                                ]
                                            },
                                            transition: {
                                                duration: 0.5,
                                                repeat: Number.POSITIVE_INFINITY,
                                                delay: 0.2
                                            },
                                            className: "font-[var(--font-pixel)] text-sm text-white drop-shadow-[2px_2px_0_#000]",
                                            children: "a"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                            lineNumber: 373,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            animate: {
                                                y: [
                                                    0,
                                                    -3,
                                                    0
                                                ]
                                            },
                                            transition: {
                                                duration: 0.5,
                                                repeat: Number.POSITIVE_INFINITY,
                                                delay: 0.3
                                            },
                                            className: "font-[var(--font-pixel)] text-sm text-white drop-shadow-[2px_2px_0_#000]",
                                            children: "d"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                            lineNumber: 380,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            animate: {
                                                y: [
                                                    0,
                                                    -3,
                                                    0
                                                ]
                                            },
                                            transition: {
                                                duration: 0.5,
                                                repeat: Number.POSITIVE_INFINITY,
                                                delay: 0.4
                                            },
                                            className: "font-[var(--font-pixel)] text-sm text-white drop-shadow-[2px_2px_0_#000]",
                                            children: "i"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                            lineNumber: 387,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            animate: {
                                                y: [
                                                    0,
                                                    -3,
                                                    0
                                                ]
                                            },
                                            transition: {
                                                duration: 0.5,
                                                repeat: Number.POSITIVE_INFINITY,
                                                delay: 0.5
                                            },
                                            className: "font-[var(--font-pixel)] text-sm text-white drop-shadow-[2px_2px_0_#000]",
                                            children: "n"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                            lineNumber: 394,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            animate: {
                                                y: [
                                                    0,
                                                    -3,
                                                    0
                                                ]
                                            },
                                            transition: {
                                                duration: 0.5,
                                                repeat: Number.POSITIVE_INFINITY,
                                                delay: 0.6
                                            },
                                            className: "font-[var(--font-pixel)] text-sm text-white drop-shadow-[2px_2px_0_#000]",
                                            children: "g"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                            lineNumber: 401,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            animate: {
                                                scale: [
                                                    1,
                                                    1.3,
                                                    1
                                                ]
                                            },
                                            transition: {
                                                duration: 0.8,
                                                repeat: Number.POSITIVE_INFINITY
                                            },
                                            className: "font-[var(--font-pixel)] text-sm text-yellow-400 drop-shadow-[2px_2px_0_#000]",
                                            children: "..."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                            lineNumber: 408,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    initial: {
                                        scale: 0
                                    },
                                    animate: {
                                        scale: [
                                            1,
                                            1.1,
                                            1
                                        ]
                                    },
                                    transition: {
                                        duration: 0.5,
                                        repeat: Number.POSITIVE_INFINITY
                                    },
                                    className: "font-[var(--font-pixel)] text-lg text-yellow-400 drop-shadow-[2px_2px_0_#000]",
                                    children: "READY!"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                    lineNumber: 417,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                lineNumber: 352,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            initial: {
                                scale: 0,
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                scale: 1,
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                scale: 0,
                                opacity: 0
                            },
                            whileHover: {
                                scale: 1.1,
                                y: -4
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            onClick: onEnter,
                            className: "mt-2 px-8 py-4 bg-gradient-to-b from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white font-[var(--font-pixel)] text-sm md:text-base rounded-lg border-b-4 border-red-800 hover:border-red-700 shadow-xl transition-all relative overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent",
                                    animate: {
                                        x: [
                                            "-100%",
                                            "200%"
                                        ]
                                    },
                                    transition: {
                                        duration: 2,
                                        repeat: Number.POSITIVE_INFINITY,
                                        repeatDelay: 1
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                    lineNumber: 442,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative",
                                    children: "Enter Scrapbook"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                                    lineNumber: 447,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                            lineNumber: 432,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                        lineNumber: 430,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 0.5
                },
                onClick: ()=>setMuted(!muted),
                className: "absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors shadow-lg",
                children: muted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                    className: "w-5 h-5 text-white"
                }, void 0, false, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                    lineNumber: 461,
                    columnNumber: 18
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                    className: "w-5 h-5 text-white"
                }, void 0, false, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                    lineNumber: 461,
                    columnNumber: 63
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                lineNumber: 454,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-24 left-[8%]",
                initial: {
                    y: 100
                },
                animate: {
                    y: 0
                },
                transition: {
                    duration: 0.5,
                    delay: 0.8,
                    type: "spring"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pipe, {}, void 0, false, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                    lineNumber: 471,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                lineNumber: 465,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-24 right-[12%]",
                initial: {
                    y: 100
                },
                animate: {
                    y: 0
                },
                transition: {
                    duration: 0.5,
                    delay: 1.2,
                    type: "spring"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pipe, {
                    size: "large"
                }, void 0, false, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                    lineNumber: 479,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                lineNumber: 473,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(LoadingScreen, "3L4louZEk++zafWFXZKWGr/DB0I=");
_c = LoadingScreen;
function Cloud({ scale = 1 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: 120 * scale,
        height: 70 * scale,
        viewBox: "0 0 120 70",
        fill: "white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "35",
                cy: "45",
                rx: "30",
                ry: "20"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                lineNumber: 488,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "60",
                cy: "35",
                rx: "35",
                ry: "25"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                lineNumber: 489,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "90",
                cy: "45",
                rx: "25",
                ry: "18"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                lineNumber: 490,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "55",
                cy: "22",
                rx: "25",
                ry: "18"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                lineNumber: 491,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "80",
                cy: "28",
                rx: "20",
                ry: "14"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                lineNumber: 492,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
        lineNumber: 487,
        columnNumber: 5
    }, this);
}
_c1 = Cloud;
function QuestionBlock({ delay = 0, hit = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        animate: hit ? {
            y: [
                0,
                -15,
                0
            ]
        } : {
            y: [
                0,
                -4,
                0
            ]
        },
        transition: hit ? {
            duration: 0.2
        } : {
            duration: 0.6,
            delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 2.5
        },
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-10 h-10 md:w-12 md:h-12 ${hit ? "bg-amber-800" : "bg-yellow-500"} border-4 ${hit ? "border-amber-900" : "border-yellow-700"} rounded-sm flex items-center justify-center shadow-lg transition-colors`,
                children: [
                    !hit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        animate: {
                            opacity: [
                                1,
                                0.5,
                                1
                            ]
                        },
                        transition: {
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY
                        },
                        className: "font-[var(--font-pixel)] text-yellow-900 text-lg font-bold",
                        children: "?"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                        lineNumber: 510,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1 left-1 w-2 h-2 bg-yellow-300 rounded-sm opacity-60"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                        lineNumber: 519,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                lineNumber: 506,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: hit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        y: 0,
                        opacity: 1
                    },
                    animate: {
                        y: -40,
                        opacity: 0
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.4
                    },
                    className: "absolute -top-2 left-1/2 -translate-x-1/2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Coin, {}, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                        lineNumber: 532,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                    lineNumber: 525,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                lineNumber: 523,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
        lineNumber: 499,
        columnNumber: 5
    }, this);
}
_c2 = QuestionBlock;
function MarioSprite({ running = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "relative w-10 h-14 md:w-12 md:h-16",
        animate: running ? {
            scaleX: [
                1,
                1,
                1
            ]
        } : {},
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-1/2 -translate-x-1/2 w-8 h-4 bg-red-600 rounded-t-full shadow-md"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                lineNumber: 544,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-3 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-red-600 rounded-full"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                lineNumber: 546,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-1/2 -translate-x-1/2 w-7 h-5 bg-amber-200 rounded-md"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                lineNumber: 548,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-5 left-1/2 -translate-x-1/2 flex gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1.5 h-1.5 bg-black rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                        lineNumber: 551,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1.5 h-1.5 bg-black rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                        lineNumber: 552,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                lineNumber: 550,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-7 left-1/2 -translate-x-1/2 w-5 h-1.5 bg-amber-900 rounded-full"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                lineNumber: 555,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-8 left-1/2 -translate-x-1/2 w-8 h-4 bg-red-600 rounded-t-md"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                lineNumber: 557,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-11 left-1/2 -translate-x-1/2 w-7 h-3 bg-blue-700 rounded-b-md"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                lineNumber: 559,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-11.5 left-1/2 -translate-x-1/2 flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1 h-1 bg-yellow-400 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                        lineNumber: 562,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1 h-1 bg-yellow-400 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                        lineNumber: 563,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                lineNumber: 561,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
        lineNumber: 542,
        columnNumber: 5
    }, this);
}
_c3 = MarioSprite;
function Coin() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-6 h-6 bg-yellow-400 rounded-full border-2 border-yellow-500 shadow-md flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-2.5 h-4 border-2 border-yellow-600 rounded-sm bg-yellow-300"
        }, void 0, false, {
            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
            lineNumber: 572,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
        lineNumber: 571,
        columnNumber: 5
    }, this);
}
_c4 = Coin;
function PowerStar({ size = 24 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        className: "drop-shadow-[0_0_4px_rgba(255,215,0,0.8)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9",
                fill: "#FFD700",
                stroke: "#FFA500",
                strokeWidth: "1"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                lineNumber: 580,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "12,5 14,10 19,10 15,13 16.5,19 12,15 7.5,19 9,13 5,10 10,10",
                fill: "#FFEC8B",
                opacity: "0.6"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                lineNumber: 586,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
        lineNumber: 579,
        columnNumber: 5
    }, this);
}
_c5 = PowerStar;
function Pipe({ size = "medium" }) {
    const height = size === "large" ? 60 : 40;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-14 md:w-16 h-5 md:h-6 bg-green-500 rounded-t-lg border-2 border-green-700 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 left-1 bottom-0 w-3 bg-green-400 rounded-tl-lg opacity-60"
                }, void 0, false, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                    lineNumber: 598,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                lineNumber: 597,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-12 md:w-14 mx-auto bg-green-600 border-x-2 border-green-700 relative",
                style: {
                    height
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 bottom-0 w-2 bg-green-400 opacity-40"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                        lineNumber: 602,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 bottom-0 w-2 bg-green-800 opacity-40"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                        lineNumber: 603,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
                lineNumber: 601,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx",
        lineNumber: 595,
        columnNumber: 5
    }, this);
}
_c6 = Pipe;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "LoadingScreen");
__turbopack_context__.k.register(_c1, "Cloud");
__turbopack_context__.k.register(_c2, "QuestionBlock");
__turbopack_context__.k.register(_c3, "MarioSprite");
__turbopack_context__.k.register(_c4, "Coin");
__turbopack_context__.k.register(_c5, "PowerStar");
__turbopack_context__.k.register(_c6, "Pipe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MarioBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function MarioBackground() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 -z-10 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-300 to-sky-200"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: [
                    ...Array(8)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute opacity-80",
                        initial: {
                            x: -300
                        },
                        animate: {
                            x: "110vw"
                        },
                        transition: {
                            duration: 30 + i * 8,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                            delay: i * 4
                        },
                        style: {
                            top: `${5 + i % 4 * 20}%`,
                            scale: 0.5 + i % 3 * 0.3
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Cloud, {
                            variant: i % 3
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this)
                    }, i, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 1440 200",
                    className: "w-full h-32 md:h-48",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0,200 Q180,100 360,150 T720,120 T1080,160 T1440,140 L1440,200 Z",
                            fill: "#22c55e",
                            opacity: "0.6"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0,200 Q240,120 480,160 T960,130 T1440,170 L1440,200 Z",
                            fill: "#16a34a",
                            opacity: "0.8"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 h-16 bg-amber-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 right-0 h-4 bg-green-600"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex",
                        children: [
                            ...Array(30)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 border border-amber-800 bg-amber-600 flex-shrink-0"
                            }, i, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            [
                ...Array(5)
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute",
                    style: {
                        left: `${15 + i * 18}%`,
                        top: `${20 + i % 3 * 15}%`
                    },
                    animate: {
                        y: [
                            0,
                            -10,
                            0
                        ],
                        scaleX: [
                            1,
                            0.2,
                            1
                        ]
                    },
                    transition: {
                        duration: 2,
                        delay: i * 0.3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 bg-yellow-400 rounded-full border-2 border-yellow-500 shadow-lg opacity-60"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                }, i, false, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-16 left-[10%]",
                initial: {
                    y: 100
                },
                animate: {
                    y: 0
                },
                transition: {
                    duration: 0.5,
                    delay: 1
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pipe, {}, void 0, false, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-16 right-[15%]",
                initial: {
                    y: 100
                },
                animate: {
                    y: 0
                },
                transition: {
                    duration: 0.5,
                    delay: 1.5
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pipe, {
                    size: "large"
                }, void 0, false, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = MarioBackground;
function Cloud({ variant = 0 }) {
    const sizes = [
        {
            w: 120,
            h: 70
        },
        {
            w: 90,
            h: 55
        },
        {
            w: 150,
            h: 85
        }
    ];
    const { w, h } = sizes[variant];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        viewBox: "0 0 120 70",
        fill: "white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "35",
                cy: "45",
                rx: "30",
                ry: "22"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "60",
                cy: "38",
                rx: "35",
                ry: "28"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "90",
                cy: "48",
                rx: "25",
                ry: "18"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "55",
                cy: "25",
                rx: "25",
                ry: "20"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "80",
                cy: "30",
                rx: "20",
                ry: "16"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c1 = Cloud;
function Pipe({ size = "medium" }) {
    const height = size === "large" ? 80 : 50;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-16 h-6 bg-green-500 rounded-t-lg border-2 border-green-700",
                style: {
                    boxShadow: "inset 4px 0 0 #22c55e, inset -4px 0 0 #15803d"
                }
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-14 mx-auto bg-green-600 border-x-2 border-green-700",
                style: {
                    height,
                    boxShadow: "inset 4px 0 0 #22c55e, inset -4px 0 0 #15803d"
                }
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_c2 = Pipe;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MarioBackground");
__turbopack_context__.k.register(_c1, "Cloud");
__turbopack_context__.k.register(_c2, "Pipe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/web.levvtzy.xyz/krufav/components/elements/photo-frame.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PhotoFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PhotoFrame({ src, alt, variant = "polaroid", caption, rotation = 0, className = "" }) {
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const baseStyles = "relative overflow-hidden transition-all duration-300 cursor-pointer";
    const variants = {
        polaroid: "bg-white p-3 md:p-4 pb-12 md:pb-16 shadow-xl rounded-sm",
        vintage: "bg-amber-100 p-2 md:p-3 border-4 md:border-6 border-amber-200 shadow-lg",
        filmstrip: "bg-gray-900 p-2 md:p-3 border-y-4 md:border-y-6 border-gray-800 shadow-lg",
        taped: "bg-white p-2 md:p-3 shadow-md rounded-sm",
        frameless: "rounded-lg shadow-xl overflow-hidden"
    };
    const photoHeight = variant === "frameless" ? "h-full" : "h-[75%]";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        onHoverStart: ()=>setIsHovered(true),
        onHoverEnd: ()=>setIsHovered(false),
        whileHover: {
            scale: 1.08,
            rotate: rotation + 2,
            zIndex: 50,
            boxShadow: "0 25px 50px rgba(0,0,0,0.35)"
        },
        whileTap: {
            scale: 0.98
        },
        className: `${baseStyles} ${variants[variant]} ${className}`,
        style: {
            transform: `rotate(${rotation}deg)`,
            aspectRatio: variant === "frameless" ? "3/2" : undefined
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative w-full ${photoHeight} overflow-hidden bg-gray-200`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: src || "/placeholder.svg",
                        alt: alt,
                        fill: true,
                        className: "object-cover transition-transform duration-300",
                        style: {
                            filter: variant === "vintage" ? "sepia(30%) contrast(90%)" : "none",
                            transform: isHovered ? "scale(1.08)" : "scale(1)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/photo-frame.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    variant === "vintage" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-br from-amber-200/30 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/photo-frame.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 opacity-20",
                                style: {
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/photo-frame.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    variant === "frameless" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.15)]"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/photo-frame.tsx",
                        lineNumber: 81,
                        columnNumber: 37
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-transparent",
                        initial: {
                            x: "-100%",
                            opacity: 0
                        },
                        animate: {
                            x: isHovered ? "100%" : "-100%",
                            opacity: isHovered ? 1 : 0
                        },
                        transition: {
                            duration: 0.6
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/photo-frame.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/photo-frame.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            caption && variant === "polaroid" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                className: "absolute bottom-3 md:bottom-4 left-0 right-0 text-center font-sans text-base md:text-lg text-gray-600",
                children: caption
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/photo-frame.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this),
            caption && variant === "frameless" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 md:p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center font-sans text-sm md:text-base text-white drop-shadow-md",
                    children: caption
                }, void 0, false, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/photo-frame.tsx",
                    lineNumber: 109,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/photo-frame.tsx",
                lineNumber: 104,
                columnNumber: 9
            }, this),
            variant === "filmstrip" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 right-0 flex justify-around py-1",
                        children: [
                            ...Array(5)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2.5 md:w-3 h-1.5 md:h-2 bg-gray-700 rounded-sm"
                            }, i, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/photo-frame.tsx",
                                lineNumber: 118,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/photo-frame.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0 flex justify-around py-1",
                        children: [
                            ...Array(5)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2.5 md:w-3 h-1.5 md:h-2 bg-gray-700 rounded-sm"
                            }, i, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/photo-frame.tsx",
                                lineNumber: 123,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/photo-frame.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            variant === "vintage" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 w-5 h-5 bg-gradient-to-br from-amber-300/50 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/photo-frame.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 right-0 w-6 h-6 bg-gradient-to-tl from-amber-400/30 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/photo-frame.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/photo-frame.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(PhotoFrame, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = PhotoFrame;
var _c;
__turbopack_context__.k.register(_c, "PhotoFrame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MarioSticker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function MarioSticker({ type, className = "" }) {
    _s();
    const [isClicked, setIsClicked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        whileHover: {
            scale: 1.25,
            rotate: [
                0,
                -10,
                10,
                -5,
                5,
                0
            ],
            transition: {
                rotate: {
                    duration: 0.5
                }
            }
        },
        whileTap: {
            scale: 0.85
        },
        animate: isClicked ? {
            y: [
                0,
                -20,
                0
            ],
            transition: {
                duration: 0.3
            }
        } : {},
        onClick: ()=>{
            setIsClicked(true);
            setTimeout(()=>setIsClicked(false), 300);
        },
        className: `relative cursor-pointer ${className}`,
        style: {
            filter: "drop-shadow(2px 2px 2px rgba(0,0,0,0.3))"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StickerContent, {
                type: type
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            isClicked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0,
                    opacity: 1
                },
                animate: {
                    scale: 2,
                    opacity: 0
                },
                className: "absolute inset-0 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full bg-yellow-300 rounded-full"
                }, void 0, false, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                    lineNumber: 39,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(MarioSticker, "+2jvnzgqyS4sm44z1s1whgWD4Tg=");
_c = MarioSticker;
function StickerContent({ type }) {
    switch(type){
        case "mushroom":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 40 40",
                className: "w-full h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "20",
                        cy: "30",
                        rx: "10",
                        ry: "7",
                        fill: "#F5DEB3"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "20",
                        cy: "18",
                        rx: "14",
                        ry: "12",
                        fill: "#E52521"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "13",
                        cy: "16",
                        r: "4",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "27",
                        cy: "16",
                        r: "4",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "20",
                        cy: "22",
                        r: "3",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "16",
                        cy: "32",
                        rx: "1.5",
                        ry: "2.5",
                        fill: "#2D1B0E"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "24",
                        cy: "32",
                        rx: "1.5",
                        ry: "2.5",
                        fill: "#2D1B0E"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this);
        case "star":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 40 40",
                className: "w-full h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: "20,3 24,14 36,14 26,22 30,34 20,27 10,34 14,22 4,14 16,14",
                        fill: "#FFD700",
                        stroke: "#DAA520",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "14",
                        cy: "17",
                        rx: "2",
                        ry: "2.5",
                        fill: "#2D1B0E"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "26",
                        cy: "17",
                        rx: "2",
                        ry: "2.5",
                        fill: "#2D1B0E"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M16,22 Q20,25 24,22",
                        fill: "none",
                        stroke: "#2D1B0E",
                        strokeWidth: "1.5",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this);
        case "coin":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 40 40",
                className: "w-full h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "20",
                        cy: "20",
                        r: "15",
                        fill: "#FFD700",
                        stroke: "#DAA520",
                        strokeWidth: "2"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "20",
                        cy: "20",
                        r: "11",
                        fill: "none",
                        stroke: "#FFA500",
                        strokeWidth: "1"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "20",
                        cy: "20",
                        rx: "6",
                        ry: "10",
                        fill: "none",
                        stroke: "#DAA520",
                        strokeWidth: "2"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "16",
                        cy: "20",
                        rx: "1",
                        ry: "8",
                        fill: "#FFA500",
                        opacity: "0.5"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this);
        case "flower":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 40 40",
                className: "w-full h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "20",
                        cy: "8",
                        r: "5",
                        fill: "#FF6B35"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "30",
                        cy: "14",
                        r: "5",
                        fill: "#FF6B35"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "28",
                        cy: "26",
                        r: "5",
                        fill: "#FF6B35"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "26",
                        r: "5",
                        fill: "#FF6B35"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "10",
                        cy: "14",
                        r: "5",
                        fill: "#FF6B35"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "20",
                        cy: "18",
                        r: "7",
                        fill: "#FFD700",
                        stroke: "#FFA500",
                        strokeWidth: "1"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "17",
                        cy: "16",
                        r: "1.5",
                        fill: "#2D1B0E"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "23",
                        cy: "16",
                        r: "1.5",
                        fill: "#2D1B0E"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M17,21 Q20,23 23,21",
                        fill: "none",
                        stroke: "#2D1B0E",
                        strokeWidth: "1",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, this);
        case "block":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 40 40",
                className: "w-full h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "4",
                        y: "4",
                        width: "32",
                        height: "32",
                        rx: "4",
                        fill: "#FFB347",
                        stroke: "#CC8800",
                        strokeWidth: "2"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "6",
                        y: "6",
                        width: "8",
                        height: "8",
                        rx: "1",
                        fill: "#FFCC80",
                        opacity: "0.6"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "20",
                        y: "28",
                        textAnchor: "middle",
                        fontSize: "18",
                        fontWeight: "bold",
                        fill: "#8B4513",
                        fontFamily: "sans-serif",
                        children: "?"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this);
        case "pipe":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 40 40",
                className: "w-full h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "6",
                        y: "4",
                        width: "28",
                        height: "8",
                        rx: "2",
                        fill: "#22C55E",
                        stroke: "#15803D",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "8",
                        y: "12",
                        width: "24",
                        height: "24",
                        fill: "#16A34A",
                        stroke: "#15803D",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "6",
                        y: "4",
                        width: "6",
                        height: "8",
                        fill: "#4ADE80",
                        opacity: "0.5"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "8",
                        y: "12",
                        width: "5",
                        height: "24",
                        fill: "#4ADE80",
                        opacity: "0.3"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                lineNumber: 117,
                columnNumber: 9
            }, this);
        case "goomba":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 40 40",
                className: "w-full h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "20",
                        cy: "18",
                        rx: "14",
                        ry: "12",
                        fill: "#8B4513"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "20",
                        cy: "32",
                        rx: "8",
                        ry: "6",
                        fill: "#D2691E"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "12",
                        cy: "34",
                        rx: "4",
                        ry: "3",
                        fill: "#8B4513"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "28",
                        cy: "34",
                        rx: "4",
                        ry: "3",
                        fill: "#8B4513"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "14",
                        cy: "16",
                        rx: "4",
                        ry: "5",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "26",
                        cy: "16",
                        rx: "4",
                        ry: "5",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "15",
                        cy: "17",
                        r: "2",
                        fill: "#2D1B0E"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "27",
                        cy: "17",
                        r: "2",
                        fill: "#2D1B0E"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "20",
                        cy: "24",
                        rx: "3",
                        ry: "2",
                        fill: "#2D1B0E"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                lineNumber: 126,
                columnNumber: 9
            }, this);
        case "shell":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 40 40",
                className: "w-full h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "20",
                        cy: "24",
                        rx: "16",
                        ry: "12",
                        fill: "#22C55E",
                        stroke: "#15803D",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "20",
                        cy: "28",
                        rx: "14",
                        ry: "6",
                        fill: "#16A34A"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8,20 Q20,8 32,20",
                        fill: "none",
                        stroke: "#15803D",
                        strokeWidth: "2"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "14",
                        cy: "20",
                        r: "3",
                        fill: "#4ADE80"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "26",
                        cy: "20",
                        r: "3",
                        fill: "#4ADE80"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "20",
                        cy: "16",
                        r: "2.5",
                        fill: "#4ADE80"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx",
                lineNumber: 140,
                columnNumber: 9
            }, this);
        default:
            return null;
    }
}
_c1 = StickerContent;
var _c, _c1;
__turbopack_context__.k.register(_c, "MarioSticker");
__turbopack_context__.k.register(_c1, "StickerContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/web.levvtzy.xyz/krufav/components/elements/tape-element.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TapeElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function TapeElement({ rotation = 0, variant = "washi", className = "" }) {
    const colors = {
        washi: "bg-pink-200/70",
        masking: "bg-amber-100/80",
        scotch: "bg-yellow-100/60"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        whileHover: {
            scale: 1.1
        },
        className: `w-12 md:w-16 h-4 md:h-5 ${colors[variant]} shadow-sm ${className}`,
        style: {
            transform: `rotate(${rotation}deg)`,
            clipPath: "polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 opacity-30",
            style: {
                backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)"
            }
        }, void 0, false, {
            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/tape-element.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/tape-element.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = TapeElement;
var _c;
__turbopack_context__.k.register(_c, "TapeElement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/web.levvtzy.xyz/krufav/components/elements/washi-tape.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WashiTape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function WashiTape({ pattern = "dots", color = "pink", rotation = 0, className = "" }) {
    const colors = {
        pink: {
            bg: "bg-pink-200",
            pattern: "bg-pink-400"
        },
        blue: {
            bg: "bg-blue-200",
            pattern: "bg-blue-400"
        },
        green: {
            bg: "bg-green-200",
            pattern: "bg-green-400"
        },
        yellow: {
            bg: "bg-yellow-200",
            pattern: "bg-yellow-400"
        }
    };
    const selectedColor = colors[color];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        whileHover: {
            scale: 1.05
        },
        className: `h-6 ${selectedColor.bg} opacity-70 overflow-hidden ${className}`,
        style: {
            transform: `rotate(${rotation}deg)`,
            clipPath: "polygon(0% 0%, 100% 0%, 98% 100%, 2% 100%)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-around",
                children: [
                    pattern === "dots" && [
                        ...Array(8)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-2 h-2 ${selectedColor.pattern} rounded-full opacity-60`
                        }, i, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/washi-tape.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this)),
                    pattern === "stripes" && [
                        ...Array(12)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-1 h-full ${selectedColor.pattern} opacity-40`
                        }, i, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/washi-tape.tsx",
                            lineNumber: 38,
                            columnNumber: 40
                        }, this)),
                    pattern === "hearts" && [
                        ...Array(5)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs opacity-50",
                            children: "♥"
                        }, i, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/washi-tape.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this)),
                    pattern === "stars" && [
                        ...Array(6)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs opacity-50",
                            children: "★"
                        }, i, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/washi-tape.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/washi-tape.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-20",
                style: {
                    backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(0,0,0,0.1) 4px, rgba(0,0,0,0.1) 5px)"
                }
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/washi-tape.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/washi-tape.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = WashiTape;
var _c;
__turbopack_context__.k.register(_c, "WashiTape");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/web.levvtzy.xyz/krufav/components/elements/doodle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Doodle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Doodle({ type, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DoodleContent, {
            type: type
        }, void 0, false, {
            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/doodle.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/doodle.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Doodle;
function DoodleContent({ type }) {
    const strokeColor = "#8B4513";
    switch(type){
        case "underline":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 100 10",
                className: "w-full h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M0,5 Q25,8 50,5 T100,5",
                    fill: "none",
                    stroke: strokeColor,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    opacity: "0.5"
                }, void 0, false, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/doodle.tsx",
                    lineNumber: 23,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/doodle.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this);
        case "star":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: "w-full h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12,2 L14,9 L21,9 L15,14 L17,21 L12,17 L7,21 L9,14 L3,9 L10,9 Z",
                    fill: "none",
                    stroke: strokeColor,
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/doodle.tsx",
                    lineNumber: 36,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/doodle.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this);
        case "heart":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: "w-full h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12,21 C12,21 3,14 3,8 C3,4 7,2 12,6 C17,2 21,4 21,8 C21,14 12,21 12,21 Z",
                    fill: "none",
                    stroke: strokeColor,
                    strokeWidth: "1.5",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/doodle.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/doodle.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this);
        case "arrow":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: "w-full h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M5,12 L19,12 M14,7 L19,12 L14,17",
                    fill: "none",
                    stroke: strokeColor,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/doodle.tsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/doodle.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this);
        case "circle":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: "w-full h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    fill: "none",
                    stroke: strokeColor,
                    strokeWidth: "1.5",
                    strokeDasharray: "2,3"
                }, void 0, false, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/doodle.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/doodle.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this);
        default:
            return null;
    }
}
_c1 = DoodleContent;
var _c, _c1;
__turbopack_context__.k.register(_c, "Doodle");
__turbopack_context__.k.register(_c1, "DoodleContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/web.levvtzy.xyz/krufav/components/elements/clip-element.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClipElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function ClipElement({ color = "red", className = "" }) {
    const colors = {
        red: "bg-red-500",
        blue: "bg-blue-500",
        yellow: "bg-yellow-500",
        green: "bg-green-500"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        whileHover: {
            y: -2
        },
        className: `relative ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-6 h-8 ${colors[color]} rounded-t-full shadow-md`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-2 left-1/2 -translate-x-1/2 w-3 h-5 bg-white/30 rounded-t-full"
                }, void 0, false, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/clip-element.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/clip-element.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/20 rounded-full blur-sm"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/clip-element.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/elements/clip-element.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = ClipElement;
var _c;
__turbopack_context__.k.register(_c, "ClipElement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrapbookCover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$photo$2d$frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/components/elements/photo-frame.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$mario$2d$sticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$tape$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/components/elements/tape-element.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$washi$2d$tape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/components/elements/washi-tape.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$doodle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/components/elements/doodle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$clip$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/components/elements/clip-element.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function ScrapbookCover({ onOpen }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        whileHover: {
            scale: 1.02
        },
        onClick: onOpen,
        className: "relative w-full h-full cursor-pointer rounded-r-lg overflow-hidden",
        style: {
            background: "linear-gradient(135deg, #8B4513 0%, #A0522D 30%, #8B4513 70%, #654321 100%)",
            boxShadow: "10px 10px 30px rgba(0,0,0,0.4), inset -5px 0 15px rgba(0,0,0,0.2)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-30",
                style: {
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`
                }
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 border-r-2 border-amber-950",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-y-4 left-1/2 -translate-x-1/2 w-1 bg-amber-950 rounded-full opacity-50"
                }, void 0, false, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 left-8 md:left-12 p-4 md:p-8 flex flex-col items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$washi$2d$tape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "absolute top-4 left-[5%] w-32 md:w-44",
                        pattern: "stars",
                        rotation: -20
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$washi$2d$tape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "absolute top-[15%] -right-8 w-28 md:w-40",
                        pattern: "dots",
                        rotation: -80
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$washi$2d$tape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "absolute bottom-[25%] -left-6 w-24 md:w-32",
                        pattern: "stripes",
                        rotation: 85
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$washi$2d$tape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "absolute bottom-8 right-[10%] w-26 md:w-36",
                        pattern: "stars",
                        rotation: 12
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$washi$2d$tape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "absolute top-[40%] -right-4 w-20 md:w-28",
                        pattern: "dots",
                        rotation: -70
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute top-6 right-[15%] w-14 h-16 md:w-18 md:h-22 bg-white p-1 shadow-md z-20",
                        style: {
                            transform: "rotate(8deg)"
                        },
                        whileHover: {
                            scale: 1.1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full border-2 border-dashed border-gray-300 bg-gradient-to-br from-red-100 to-red-200 flex flex-col items-center justify-center p-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$mario$2d$sticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        type: "mushroom",
                                        className: "w-6 h-6 md:w-8 md:h-8"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[8px] md:text-[10px] font-bold text-red-800 mt-1",
                                        children: "LFM 2025"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-1 left-0 right-0 flex justify-around",
                                children: [
                                    ...Array(6)
                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1.5 h-1.5 bg-amber-800 rounded-full"
                                    }, i, false, {
                                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-1 left-0 right-0 flex justify-around",
                                children: [
                                    ...Array(6)
                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1.5 h-1.5 bg-amber-800 rounded-full"
                                    }, i, false, {
                                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute top-[12%] left-[8%] w-24 md:w-32 bg-white shadow-lg z-15",
                        style: {
                            transform: "rotate(-12deg)"
                        },
                        whileHover: {
                            rotate: -8,
                            scale: 1.05
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative p-2 bg-[repeating-linear-gradient(transparent,transparent_23px,#91cbff_24px)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-3 top-0 bottom-0 w-px bg-red-300"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-sans text-[10px] md:text-xs text-gray-600 pl-3 leading-relaxed",
                                        children: "Best year ever!"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$tape$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                rotation: -5,
                                variant: "scotch",
                                className: "absolute -top-2 left-1/3 z-20"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute top-[8%] left-[35%] bg-amber-100 px-4 py-1.5 rounded shadow-lg border-2 border-amber-300 z-20",
                        style: {
                            transform: "rotate(-6deg)"
                        },
                        animate: {
                            rotate: [
                                -6,
                                -4,
                                -6
                            ]
                        },
                        transition: {
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-[var(--font-marker)] text-sm md:text-base text-amber-800",
                            children: "MEMORIES"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute top-[22%] right-[8%] bg-red-500 w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg flex items-center justify-center z-20",
                        style: {
                            transform: "rotate(15deg)"
                        },
                        whileHover: {
                            scale: 1.1,
                            rotate: 20
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-400 w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-dashed border-white flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-[var(--font-pixel)] text-xs md:text-sm text-white font-bold",
                                children: "2025"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-amber-400 opacity-60"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-amber-400 opacity-60"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-amber-400 opacity-60"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-amber-400 opacity-60"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "font-[var(--font-marker)] text-2xl md:text-4xl lg:text-5xl text-amber-200 text-center drop-shadow-[2px_2px_0_#000] z-10",
                        style: {
                            textShadow: "2px 2px 4px rgba(0,0,0,0.5), -1px -1px 0 rgba(255,255,255,0.1)"
                        },
                        children: "My LFM Adventure"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$doodle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "underline",
                        className: "w-32 md:w-48 h-3 mt-1 opacity-60"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.8
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            delay: 0.2
                        },
                        className: "relative mt-4 z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$tape$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                rotation: -12,
                                variant: "washi",
                                className: "absolute -top-4 left-[15%] z-10"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$tape$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                rotation: 10,
                                variant: "masking",
                                className: "absolute -top-3 right-[15%] z-10"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$photo$2d$frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/placeholder.svg?height=220&width=220",
                                alt: "Profile Photo",
                                variant: "polaroid",
                                caption: "That's me!",
                                className: "w-44 h-56 md:w-56 md:h-68",
                                rotation: -2
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute top-[30%] left-[5%] w-16 h-20 md:w-20 md:h-24 bg-white p-1 shadow-lg z-5",
                        style: {
                            transform: "rotate(-18deg)"
                        },
                        whileHover: {
                            scale: 1.15,
                            rotate: -12,
                            zIndex: 30
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-3/4 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$mario$2d$sticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    type: "star",
                                    className: "w-8 h-8"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-[8px] font-sans text-gray-500 mt-0.5",
                                children: "Fun!"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$tape$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                rotation: 8,
                                variant: "scotch",
                                className: "absolute -top-2 left-1/4 z-10"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute bottom-[35%] right-[5%] w-14 h-18 md:w-18 md:h-22 bg-white p-1 shadow-lg z-5",
                        style: {
                            transform: "rotate(15deg)"
                        },
                        whileHover: {
                            scale: 1.15,
                            rotate: 10,
                            zIndex: 30
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-3/4 bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$mario$2d$sticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    type: "pipe",
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-[8px] font-sans text-gray-500 mt-0.5",
                                children: "Yay!"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute bottom-[18%] left-[12%] w-16 h-20 md:w-20 md:h-24 bg-white p-1 shadow-lg z-5",
                        style: {
                            transform: "rotate(22deg)"
                        },
                        whileHover: {
                            scale: 1.15,
                            rotate: 18,
                            zIndex: 30
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-3/4 bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$mario$2d$sticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    type: "flower",
                                    className: "w-8 h-8"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-[8px] font-sans text-gray-500 mt-0.5",
                                children: "Nice!"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$clip$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                color: "yellow",
                                className: "absolute -top-4 left-1/2 -translate-x-1/2 z-10"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 0.4
                        },
                        className: "font-sans text-lg md:text-xl text-amber-300 text-center italic mt-3 z-10",
                        children: "A journey worth remembering"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$mario$2d$sticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "mushroom",
                        className: "absolute top-[45%] right-[3%] w-10 h-10 md:w-14 md:h-14 z-15"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$mario$2d$sticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "star",
                        className: "absolute bottom-[30%] left-[3%] w-10 h-10 md:w-14 md:h-14 z-15"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$mario$2d$sticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "coin",
                        className: "absolute top-[55%] left-[2%] w-8 h-8 md:w-10 md:h-10 z-15"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$mario$2d$sticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "block",
                        className: "absolute top-[18%] left-[55%] w-8 h-8 md:w-10 md:h-10 z-15"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$mario$2d$sticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "coin",
                        className: "absolute bottom-[45%] right-[25%] w-6 h-6 md:w-8 md:h-8 z-15"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$mario$2d$sticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "flower",
                        className: "absolute bottom-[12%] right-[30%] w-8 h-8 md:w-10 md:h-10 z-15"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$clip$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        color: "red",
                        className: "absolute top-[35%] right-[12%] z-20"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$clip$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        color: "blue",
                        className: "absolute bottom-[40%] left-[25%] z-20"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$clip$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        color: "green",
                        className: "absolute top-[60%] right-[35%] z-20"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute bottom-[38%] left-[30%] w-20 h-20 md:w-24 md:h-24 bg-yellow-200 shadow-lg z-10",
                        style: {
                            transform: "rotate(-8deg)"
                        },
                        whileHover: {
                            rotate: -4,
                            scale: 1.05
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 right-0 h-4 bg-yellow-300"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-sans text-[9px] md:text-[11px] text-gray-700 p-2 pt-5 leading-tight",
                                children: "Don't forget to smile!"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$doodle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                type: "heart",
                                className: "absolute bottom-2 right-2 w-4 h-4 opacity-50"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$doodle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "star",
                        className: "absolute top-[65%] right-[8%] w-8 h-8 md:w-10 md:h-10 opacity-40"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$doodle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "heart",
                        className: "absolute bottom-[55%] left-[8%] w-6 h-6 md:w-8 md:h-8 opacity-35"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$doodle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "circle",
                        className: "absolute top-[28%] right-[40%] w-10 h-10 opacity-25"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$doodle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "squiggle",
                        className: "absolute bottom-[22%] right-[15%] w-16 h-5 opacity-30"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$doodle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "arrow",
                        className: "absolute top-[72%] left-[40%] w-8 h-8 opacity-35"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$doodle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "star",
                        className: "absolute bottom-[8%] left-[45%] w-6 h-6 opacity-30"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute top-[58%] left-[6%] w-12 h-20 md:w-14 md:h-24 bg-gradient-to-b from-red-400 to-red-500 rounded-t-lg shadow-lg z-10",
                        style: {
                            transform: "rotate(-25deg)"
                        },
                        whileHover: {
                            rotate: -20,
                            scale: 1.1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-2 left-0 right-0 border-t border-dashed border-white/50"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 right-0 h-6 bg-red-600 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[8px] text-white font-bold",
                                    children: "ADMIT ONE"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center h-full pb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white text-[10px] font-bold",
                                        children: "LFM"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                        lineNumber: 222,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white text-[8px]",
                                        children: "★★★"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                        lineNumber: 223,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 0.6
                        },
                        className: "absolute bottom-6 md:bottom-8 z-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            animate: {
                                scale: [
                                    1,
                                    1.05,
                                    1
                                ]
                            },
                            transition: {
                                duration: 1.5,
                                repeat: Number.POSITIVE_INFINITY
                            },
                            className: "font-[var(--font-pixel)] text-xs text-amber-300",
                            children: "Click to Open"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    y: [
                        0,
                        -5,
                        0
                    ]
                },
                transition: {
                    duration: 0.8,
                    repeat: Number.POSITIVE_INFINITY
                },
                className: "absolute bottom-8 right-8 md:right-12 z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-10 h-10 md:w-12 md:h-12 bg-yellow-500 border-3 border-yellow-700 rounded-sm flex items-center justify-center shadow-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-[var(--font-pixel)] text-yellow-900 text-lg font-bold",
                        children: "?"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                        lineNumber: 251,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                    lineNumber: 250,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = ScrapbookCover;
var _c;
__turbopack_context__.k.register(_c, "ScrapbookCover");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrapbookPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$photo$2d$frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/components/elements/photo-frame.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$tape$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/components/elements/tape-element.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$clip$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/components/elements/clip-element.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$mario$2d$sticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$doodle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/components/elements/doodle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$washi$2d$tape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/components/elements/washi-tape.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function ScrapbookPage({ pageIndex, content }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full flex rounded-lg overflow-hidden shadow-2xl select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-1/2 h-full overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            background: "linear-gradient(135deg, #f5ead6 0%, #ebe0c8 50%, #e5d8bc 100%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-40",
                        style: {
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[15%] left-[20%] w-12 h-12 bg-amber-800/5 rounded-full blur-xl"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[25%] right-[30%] w-16 h-16 bg-amber-700/5 rounded-full blur-2xl"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[60%] left-[10%] w-8 h-8 bg-amber-600/5 rounded-full blur-lg"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/20 via-black/8 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-1 top-0 bottom-0 w-4 flex flex-col justify-evenly py-4",
                        children: [
                            ...Array(12)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 rounded-full bg-amber-200 border-2 border-amber-400 shadow-inner"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-1/2 -right-1 w-2 h-0.5 bg-gray-400 rounded-full -translate-y-1/2"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LeftPageContent, {
                        content: content,
                        pageIndex: pageIndex
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-px bg-amber-400"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-sans text-sm text-amber-600",
                                children: pageIndex * 2 + 1
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-px bg-amber-400"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-0 bottom-0 w-4 -translate-x-1/2 bg-gradient-to-r from-black/10 via-black/20 to-black/10 z-10"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-1/2 h-full overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            background: "linear-gradient(225deg, #f5ead6 0%, #ebe0c8 50%, #e5d8bc 100%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-40",
                        style: {
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[30%] right-[20%] w-14 h-14 bg-amber-800/5 rounded-full blur-xl"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[20%] left-[25%] w-10 h-10 bg-amber-700/5 rounded-full blur-lg"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/20 via-black/8 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RightPageContent, {
                        content: content,
                        pageIndex: pageIndex
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-px bg-amber-400"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-sans text-sm text-amber-600",
                                children: pageIndex * 2 + 2
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-px bg-amber-400"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-amber-400/40 rounded-tl-lg"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-amber-400/40 rounded-tr-lg"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-amber-400/40 rounded-bl-lg"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-amber-400/40 rounded-br-lg"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = ScrapbookPage;
function LeftPageContent({ content, pageIndex }) {
    // Random positions for messy effect based on page index
    const titleRotations = [
        -4,
        2,
        -3,
        5,
        -2,
        3,
        -5,
        4,
        -1,
        2
    ];
    const titleRotation = titleRotations[pageIndex % titleRotations.length];
    const useFrameless = pageIndex % 3 === 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 p-4 pr-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$washi$2d$tape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "absolute -top-1 left-[10%] w-28 z-20",
                pattern: "dots",
                rotation: -25 + pageIndex * 5
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$washi$2d$tape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "absolute top-[30%] -left-6 w-24 z-20",
                pattern: "stripes",
                rotation: 85 + pageIndex * 3
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$washi$2d$tape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "absolute bottom-[20%] left-[5%] w-20 z-20",
                pattern: "stars",
                rotation: -15 - pageIndex * 2
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "absolute z-40",
                style: {
                    top: "4%",
                    left: "6%",
                    transform: `rotate(${titleRotation}deg)`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-amber-50/80 px-3 py-1 rounded-lg shadow-sm inline-block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-[var(--font-marker)] text-xl md:text-2xl lg:text-3xl text-amber-900 whitespace-nowrap",
                            children: content.leftTitle
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$doodle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "underline",
                        className: "w-full h-3 mt-1"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            content.leftPhoto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.8,
                    rotate: -10
                },
                animate: {
                    opacity: 1,
                    scale: 1,
                    rotate: content.leftPhoto.rotation || -5
                },
                transition: {
                    delay: 0.2,
                    type: "spring"
                },
                className: "absolute z-30",
                style: {
                    top: "18%",
                    left: useFrameless ? "5%" : "8%"
                },
                children: [
                    !useFrameless && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$tape$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                rotation: -15,
                                variant: "washi",
                                className: "absolute -top-4 left-[20%] z-40"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                                lineNumber: 160,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$tape$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                rotation: 12,
                                variant: "masking",
                                className: "absolute -top-3 right-[15%] z-40"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                                lineNumber: 161,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    useFrameless && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$tape$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                rotation: -12,
                                variant: "scotch",
                                className: "absolute -top-3 left-[10%] z-40"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                                lineNumber: 166,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$tape$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                rotation: 8,
                                variant: "scotch",
                                className: "absolute -top-3 right-[10%] z-40"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                                lineNumber: 167,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$photo$2d$frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: content.leftPhoto.src,
                        alt: content.leftPhoto.alt,
                        variant: useFrameless ? "frameless" : content.leftPhoto.variant || "polaroid",
                        caption: useFrameless ? undefined : content.leftPhoto.caption,
                        rotation: content.leftPhoto.rotation || -5,
                        className: useFrameless ? "w-52 md:w-64 lg:w-72" : "w-48 h-56 md:w-56 md:h-64 lg:w-64 lg:h-76"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 148,
                columnNumber: 9
            }, this),
            pageIndex % 2 === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    rotate: 8
                },
                animate: {
                    opacity: 1,
                    rotate: 6
                },
                transition: {
                    delay: 0.4
                },
                className: "absolute z-25",
                style: {
                    top: "55%",
                    left: "45%"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$tape$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        rotation: -5,
                        variant: "masking",
                        className: "absolute -top-3 left-[30%] z-40"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$photo$2d$frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/placeholder.svg?height=120&width=180",
                        alt: "Memory",
                        variant: "frameless",
                        rotation: 6,
                        className: "w-36 md:w-44 lg:w-52"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 190,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 182,
                columnNumber: 9
            }, this),
            !content.leftPhoto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    rotate: 15
                },
                animate: {
                    opacity: 1,
                    rotate: 12
                },
                transition: {
                    delay: 0.3
                },
                className: "absolute z-30",
                style: {
                    top: "20%",
                    left: "10%"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$tape$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        rotation: -8,
                        variant: "scotch",
                        className: "absolute -top-3 left-1/3 z-40"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$photo$2d$frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/placeholder.svg?height=200&width=200",
                        alt: "Memory",
                        variant: "polaroid",
                        caption: "Good times!",
                        rotation: 12,
                        className: "w-44 h-52 md:w-52 md:h-60 lg:w-60 lg:h-72"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 202,
                columnNumber: 9
            }, this),
            content.leftText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 0.3
                },
                className: "absolute z-50 max-w-[85%]",
                style: {
                    bottom: "8%",
                    left: "5%",
                    transform: `rotate(${-1 + pageIndex % 3}deg)`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/90 p-3 rounded-lg shadow-md border-l-4 border-amber-400",
                    children: content.leftText.map((text, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-sans text-sm md:text-base text-amber-800 leading-relaxed mb-1",
                            children: text
                        }, i, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                            lineNumber: 235,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                    lineNumber: 233,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 222,
                columnNumber: 9
            }, this),
            content.leftList && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    x: -20
                },
                animate: {
                    opacity: 1,
                    x: 0
                },
                transition: {
                    delay: 0.4
                },
                className: "absolute z-50 max-w-[80%]",
                style: {
                    bottom: "10%",
                    left: "5%",
                    transform: `rotate(${-0.5 + pageIndex % 2}deg)`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/90 p-3 rounded-lg shadow-md",
                    children: content.leftList.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -10
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                delay: 0.5 + i * 0.1
                            },
                            className: "flex items-start gap-2 mb-1.5",
                            style: {
                                transform: `rotate(${i % 2 === 0 ? 0.3 : -0.3}deg)`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$mario$2d$sticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    type: "coin",
                                    className: "w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                                    lineNumber: 265,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-sans text-sm md:text-base text-amber-800",
                                    children: item
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                                    lineNumber: 266,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                            lineNumber: 257,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                    lineNumber: 255,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 244,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    rotate: -20
                },
                animate: {
                    opacity: 1,
                    rotate: -18
                },
                transition: {
                    delay: 0.5
                },
                className: "absolute z-15",
                style: {
                    top: "65%",
                    right: "12%"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-20 h-24 md:w-24 md:h-28 bg-white p-1 shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-3/4 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$mario$2d$sticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                type: pageIndex % 2 === 0 ? "mushroom" : "star",
                                className: "w-10 h-10"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                                lineNumber: 283,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-xs font-sans text-gray-500 mt-1",
                            children: "Memories!"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                    lineNumber: 281,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$doodle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: "star",
                className: "absolute top-[45%] right-[5%] w-10 h-10 opacity-40 z-5"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$doodle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: "heart",
                className: "absolute bottom-[35%] right-[20%] w-8 h-8 opacity-30 z-5"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$doodle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: "circle",
                className: "absolute top-[70%] left-[55%] w-12 h-12 opacity-25 z-5"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$doodle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: "arrow",
                className: "absolute bottom-[50%] left-[65%] w-8 h-8 opacity-35 z-5"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$doodle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: "squiggle",
                className: "absolute top-[12%] right-[5%] w-16 h-6 opacity-30 z-5"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$mario$2d$sticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: "flower",
                className: "absolute top-[50%] right-[3%] w-10 h-10 z-15"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 297,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$mario$2d$sticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: "block",
                className: "absolute bottom-[30%] left-[70%] w-8 h-8 z-15"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$clip$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                color: [
                    "red",
                    "blue",
                    "yellow",
                    "green"
                ][pageIndex % 4],
                className: "absolute top-[3%] right-[8%] z-25"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_c1 = LeftPageContent;
function RightPageContent({ content, pageIndex }) {
    const titleRotations = [
        3,
        -4,
        2,
        -3,
        5,
        -2,
        4,
        -5,
        1,
        -3
    ];
    const titleRotation = titleRotations[pageIndex % titleRotations.length];
    const useFramelessRight = pageIndex % 3 === 2;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 p-4 pl-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$washi$2d$tape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "absolute -top-1 right-[15%] w-26 z-20",
                pattern: "stars",
                rotation: 20 - pageIndex * 4
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 318,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$washi$2d$tape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "absolute top-[45%] -right-6 w-22 z-20",
                pattern: "dots",
                rotation: -80 + pageIndex * 3
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 319,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$washi$2d$tape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "absolute bottom-[15%] right-[10%] w-24 z-20",
                pattern: "stripes",
                rotation: 18 + pageIndex * 2
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 320,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: 0.15
                },
                className: "absolute z-40",
                style: {
                    top: "4%",
                    left: "10%",
                    transform: `rotate(${titleRotation}deg)`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$doodle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "arrow",
                        className: "absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-6"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-amber-50/80 px-3 py-1 rounded-lg shadow-sm inline-block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-[var(--font-marker)] text-xl md:text-2xl lg:text-3xl text-amber-900 whitespace-nowrap",
                            children: content.rightTitle
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                            lineNumber: 339,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 326,
                columnNumber: 7
            }, this),
            content.rightPhotos && content.rightPhotos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute z-30",
                style: {
                    top: "15%",
                    left: "8%"
                },
                children: content.rightPhotos.map((photo, i)=>{
                    const positions = [
                        {
                            top: 0,
                            left: 0,
                            rotate: -8
                        },
                        {
                            top: 10,
                            left: 130,
                            rotate: 6
                        },
                        {
                            top: 100,
                            left: 50,
                            rotate: -4
                        }
                    ];
                    const pos = positions[i % positions.length];
                    const isFrameless = useFramelessRight && i === 0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.7
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            delay: 0.3 + i * 0.15,
                            type: "spring"
                        },
                        className: "absolute",
                        style: {
                            top: pos.top,
                            left: pos.left,
                            zIndex: 30 + i
                        },
                        children: [
                            !isFrameless && (i % 2 === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$clip$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                color: [
                                    "red",
                                    "blue",
                                    "yellow",
                                    "green"
                                ][i % 4],
                                className: "absolute -top-5 left-1/2 -translate-x-1/2 z-40"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                                lineNumber: 371,
                                columnNumber: 21
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$tape$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                rotation: 5 + i * 4,
                                variant: "scotch",
                                className: "absolute -top-3 right-[20%] z-40"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                                lineNumber: 376,
                                columnNumber: 21
                            }, this)),
                            isFrameless && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$tape$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        rotation: -8,
                                        variant: "masking",
                                        className: "absolute -top-3 left-[15%] z-40"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                                        lineNumber: 380,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$tape$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        rotation: 10,
                                        variant: "masking",
                                        className: "absolute -top-3 right-[15%] z-40"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                                        lineNumber: 381,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$photo$2d$frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: photo.src,
                                alt: photo.alt,
                                variant: isFrameless ? "frameless" : photo.variant || "vintage",
                                caption: isFrameless ? undefined : photo.caption,
                                rotation: pos.rotate,
                                className: isFrameless ? "w-44 md:w-52 lg:w-60" : "w-36 h-40 md:w-44 md:h-48 lg:w-48 lg:h-56"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                                lineNumber: 384,
                                columnNumber: 17
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 357,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 346,
                columnNumber: 9
            }, this),
            (!content.rightPhotos || content.rightPhotos.length === 0) && !content.messageBox && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    rotate: 8
                },
                animate: {
                    opacity: 1,
                    rotate: 6
                },
                transition: {
                    delay: 0.3
                },
                className: "absolute z-30",
                style: {
                    top: "18%",
                    left: "15%"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$tape$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        rotation: -10,
                        variant: "washi",
                        className: "absolute -top-4 left-[25%] z-40"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 406,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$tape$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        rotation: 15,
                        variant: "masking",
                        className: "absolute -top-3 right-[20%] z-40"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 407,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$photo$2d$frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/placeholder.svg?height=200&width=200",
                        alt: "Memory",
                        variant: "vintage",
                        caption: "Great times!",
                        rotation: 6,
                        className: "w-48 h-56 md:w-56 md:h-64 lg:w-64 lg:h-76"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 408,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 399,
                columnNumber: 9
            }, this),
            pageIndex % 2 === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    rotate: -6
                },
                animate: {
                    opacity: 1,
                    rotate: -4
                },
                transition: {
                    delay: 0.5
                },
                className: "absolute z-20",
                style: {
                    top: "50%",
                    right: "5%"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$tape$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        rotation: 3,
                        variant: "scotch",
                        className: "absolute -top-3 left-[20%] z-40"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 427,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$photo$2d$frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/placeholder.svg?height=100&width=150",
                        alt: "Fun moment",
                        variant: "frameless",
                        rotation: -4,
                        className: "w-32 md:w-40 lg:w-48"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 428,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 420,
                columnNumber: 9
            }, this),
            content.rightText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 0.4
                },
                className: "absolute z-50 max-w-[85%]",
                style: {
                    bottom: "8%",
                    left: "8%",
                    transform: `rotate(${0.5 + pageIndex % 3}deg)`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/90 p-3 rounded-lg shadow-md border-l-4 border-yellow-400",
                    children: content.rightText.map((text, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-sans text-sm md:text-base text-amber-800 leading-relaxed mb-1",
                            style: {
                                transform: `rotate(${i % 2 === 0 ? -0.2 : 0.3}deg)`
                            },
                            children: text
                        }, i, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                            lineNumber: 452,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                    lineNumber: 450,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 439,
                columnNumber: 9
            }, this),
            content.rightList && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    x: 20
                },
                animate: {
                    opacity: 1,
                    x: 0
                },
                transition: {
                    delay: 0.45
                },
                className: "absolute z-50 max-w-[75%]",
                style: {
                    bottom: "8%",
                    right: "8%",
                    transform: `rotate(${1 - pageIndex % 2}deg)`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/90 p-3 rounded-lg shadow-md",
                    children: content.rightList.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: 10
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                delay: 0.55 + i * 0.1
                            },
                            className: "flex items-start gap-2 mb-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$mario$2d$sticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    type: "star",
                                    className: "w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                                    lineNumber: 485,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-sans text-sm md:text-base text-amber-800",
                                    children: item
                                }, void 0, false, {
                                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                                    lineNumber: 486,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                            lineNumber: 478,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                    lineNumber: 476,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 465,
                columnNumber: 9
            }, this),
            content.messageBox && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.9
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    delay: 0.5,
                    type: "spring"
                },
                className: "absolute z-50",
                style: {
                    bottom: "6%",
                    left: "10%",
                    transform: `rotate(${-2 + pageIndex % 4}deg)`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$tape$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        rotation: -8,
                        variant: "washi",
                        className: "absolute -top-4 left-[15%] z-30"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 505,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$tape$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        rotation: 5,
                        variant: "washi",
                        className: "absolute -top-3 right-[20%] z-30"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 506,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-yellow-100 border-2 border-yellow-300 rounded-lg p-3 md:p-4 shadow-lg max-w-[240px] md:max-w-[300px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-4 left-4 bg-amber-300 px-2 py-1 rounded text-xs font-[var(--font-marker)] text-amber-800 shadow-sm",
                                children: content.messageBox.label
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                                lineNumber: 508,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-sans text-sm md:text-base text-amber-800 italic leading-relaxed pt-2",
                                children: content.messageBox.text
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                                lineNumber: 511,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                        lineNumber: 507,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 494,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    rotate: 25
                },
                animate: {
                    opacity: 1,
                    rotate: 22
                },
                transition: {
                    delay: 0.6
                },
                className: "absolute z-10",
                style: {
                    top: "55%",
                    right: "3%"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-18 h-22 md:w-22 md:h-26 bg-white p-1 shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-3/4 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$mario$2d$sticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                type: pageIndex % 2 === 0 ? "pipe" : "flower",
                                className: "w-8 h-8"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                                lineNumber: 528,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                            lineNumber: 527,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-xs font-sans text-gray-500 mt-1",
                            children: "Fun!"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                            lineNumber: 530,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                    lineNumber: 526,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 519,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$doodle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: "heart",
                className: "absolute top-[35%] left-[60%] w-8 h-8 opacity-35 z-5"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 535,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$doodle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: "star",
                className: "absolute bottom-[40%] right-[15%] w-10 h-10 opacity-40 z-5"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 536,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$doodle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: "circle",
                className: "absolute top-[75%] right-[40%] w-14 h-14 opacity-20 z-5"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 537,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$doodle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: "arrow",
                className: "absolute top-[10%] right-[35%] w-7 h-7 opacity-30 z-5"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 538,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$doodle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: "squiggle",
                className: "absolute bottom-[25%] left-[50%] w-14 h-5 opacity-25 z-5"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 539,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$mario$2d$sticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: "mushroom",
                className: "absolute top-[40%] right-[25%] w-9 h-9 z-15"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 542,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$mario$2d$sticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: "coin",
                className: "absolute bottom-[35%] left-[65%] w-7 h-7 z-15"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 543,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$clip$2d$element$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                color: [
                    "green",
                    "red",
                    "blue",
                    "yellow"
                ][(pageIndex + 1) % 4],
                className: "absolute top-[2%] left-[55%] z-25"
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
                lineNumber: 546,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx",
        lineNumber: 316,
        columnNumber: 5
    }, this);
}
_c2 = RightPageContent;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ScrapbookPage");
__turbopack_context__.k.register(_c1, "LeftPageContent");
__turbopack_context__.k.register(_c2, "RightPageContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-back-cover.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrapbookBackCover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$mario$2d$sticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/components/elements/mario-sticker.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function ScrapbookBackCover({ onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        className: "relative w-full h-full cursor-pointer rounded-l-lg overflow-hidden",
        style: {
            background: "linear-gradient(225deg, #8B4513 0%, #A0522D 30%, #8B4513 70%, #654321 100%)",
            boxShadow: "-10px 10px 30px rgba(0,0,0,0.4), inset 5px 0 15px rgba(0,0,0,0.2)"
        },
        onClick: onClose,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-30",
                style: {
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`
                }
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-back-cover.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-l from-amber-900 via-amber-800 to-amber-900 border-l-2 border-amber-950",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-y-4 left-1/2 -translate-x-1/2 w-1 bg-amber-950 rounded-full opacity-50"
                }, void 0, false, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-back-cover.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-back-cover.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 right-8 md:right-12 p-6 md:p-10 flex flex-col items-center justify-center gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-amber-400 opacity-60"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-back-cover.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 right-12 w-8 h-8 border-r-4 border-t-4 border-amber-400 opacity-60"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-back-cover.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-amber-400 opacity-60"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-back-cover.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 right-12 w-8 h-8 border-r-4 border-b-4 border-amber-400 opacity-60"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-back-cover.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.3
                        },
                        className: "font-[var(--font-marker)] text-3xl md:text-4xl text-amber-200 text-center",
                        style: {
                            textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
                        },
                        children: "The End"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-back-cover.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.8
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            delay: 0.5
                        },
                        className: "text-center space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-sans text-lg md:text-xl text-amber-300",
                                children: "Thanks for visiting my scrapbook!"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-back-cover.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-sans text-base text-amber-400 italic",
                                children: "Every page holds a piece of my journey."
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-back-cover.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-back-cover.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$mario$2d$sticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                type: "star",
                                className: "w-12 h-12 md:w-16 md:h-16"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-back-cover.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$mario$2d$sticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                type: "mushroom",
                                className: "w-10 h-10 md:w-14 md:h-14"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-back-cover.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$mario$2d$sticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                type: "flower",
                                className: "w-12 h-12 md:w-16 md:h-16"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-back-cover.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-back-cover.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 0.8
                        },
                        className: "absolute bottom-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            animate: {
                                opacity: [
                                    0.5,
                                    1,
                                    0.5
                                ]
                            },
                            transition: {
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY
                            },
                            className: "font-[var(--font-pixel)] text-xs text-amber-300",
                            children: "Click to return to cover"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-back-cover.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-back-cover.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 1
                        },
                        className: "absolute bottom-20 right-16 text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-sans text-sm text-amber-400",
                                children: "Made with love"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-back-cover.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-[var(--font-marker)] text-lg text-amber-300",
                                children: "- Your Name"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-back-cover.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-back-cover.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-back-cover.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    y: 50,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    delay: 0.6
                },
                className: "absolute bottom-4 left-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$elements$2f$mario$2d$sticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    type: "pipe",
                    className: "w-16 h-20"
                }, void 0, false, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-back-cover.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-back-cover.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-back-cover.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = ScrapbookBackCover;
var _c;
__turbopack_context__.k.register(_c, "ScrapbookBackCover");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/web.levvtzy.xyz/krufav/lib/page-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pageContents",
    ()=>pageContents
]);
const pageContents = [
    // Spread 1: Introduction
    {
        leftTitle: "Hello, I'm...",
        rightTitle: "About Me",
        leftPhoto: {
            src: "/placeholder.svg?height=200&width=200",
            alt: "My Profile Photo",
            caption: "That's me!",
            variant: "polaroid",
            rotation: -3
        },
        leftText: [
            "Name: [Your Name]",
            "Age: [Your Age]",
            "Hometown: [Your City]"
        ],
        rightText: [
            "Welcome to my scrapbook! I'm passionate about technology, creativity, and making a positive impact.",
            "This little book holds all my favorite memories from my incredible journey at LFM."
        ],
        stickers: [
            {
                type: "mushroom",
                position: "top-4 right-4",
                size: "w-8 h-8"
            },
            {
                type: "star",
                position: "bottom-12 right-8",
                size: "w-6 h-6"
            }
        ]
    },
    // Spread 2: My Journey at LFM
    {
        leftTitle: "My LFM Timeline",
        rightTitle: "What I've Done",
        leftList: [
            "Started my journey with excitement",
            "Learned new skills every day",
            "Made amazing friends",
            "Completed challenging projects",
            "Grew as a person and professional"
        ],
        rightText: [
            "My time at LFM has been transformative. From day one, I knew this would be special.",
            "Every challenge became an opportunity, and every setback taught me resilience."
        ],
        rightPhotos: [
            {
                src: "/placeholder.svg?height=120&width=120",
                alt: "Team Meeting",
                variant: "vintage",
                rotation: 3
            },
            {
                src: "/placeholder.svg?height=120&width=120",
                alt: "Working",
                variant: "polaroid",
                rotation: -5
            }
        ],
        stickers: [
            {
                type: "coin",
                position: "top-8 left-8",
                size: "w-6 h-6"
            },
            {
                type: "block",
                position: "bottom-16 right-4",
                size: "w-10 h-10"
            }
        ]
    },
    // Spread 3: Most Memorable Moments
    {
        leftTitle: "Memorable Moments",
        rightTitle: "The Stories Behind",
        leftPhoto: {
            src: "/placeholder.svg?height=180&width=180",
            alt: "Celebration Photo",
            caption: "Best day ever!",
            variant: "polaroid",
            rotation: 2
        },
        leftText: [
            "Some moments are just too precious to forget. This page is dedicated to those times that made me smile the widest."
        ],
        rightText: [
            "Every photo here tells a story. Stories of late nights, early mornings, and everything in between.",
            "These are the moments that shaped who I am today."
        ],
        messageBox: {
            label: "Favorite Memory",
            text: "That time when our team pulled together to deliver an impossible deadline. We did it!"
        },
        stickers: [
            {
                type: "star",
                position: "top-4 right-4",
                size: "w-10 h-10"
            },
            {
                type: "flower",
                position: "bottom-8 left-4",
                size: "w-8 h-8"
            }
        ]
    },
    // Spread 4: Education Memories
    {
        leftTitle: "Learning Journey",
        rightTitle: "Growth & Discovery",
        leftList: [
            "Technical skills that amazed me",
            "Soft skills that changed me",
            "Leadership lessons I'll carry forever",
            "Creative problem-solving techniques"
        ],
        rightText: [
            "Education isn't just about what you learn—it's about who you become in the process.",
            "Every class, every workshop, every mentoring session added a new layer to my understanding."
        ],
        rightPhotos: [
            {
                src: "/placeholder.svg?height=100&width=100",
                alt: "Studying",
                variant: "filmstrip",
                rotation: -2
            }
        ],
        stickers: [
            {
                type: "mushroom",
                position: "bottom-4 right-4",
                size: "w-12 h-12"
            }
        ]
    },
    // Spread 5: My Work
    {
        leftTitle: "Projects & Work",
        rightTitle: "Skills I Gained",
        leftPhoto: {
            src: "/placeholder.svg?height=160&width=160",
            alt: "Project Demo",
            caption: "My favorite project",
            variant: "vintage",
            rotation: -4
        },
        leftText: [
            "Building things that matter. Creating solutions that help people. That's what drives me."
        ],
        rightList: [
            "Project Management",
            "Creative Problem Solving",
            "Team Collaboration",
            "Technical Excellence",
            "Communication"
        ],
        rightText: [
            "Each project taught me something new. Each challenge made me stronger."
        ],
        stickers: [
            {
                type: "block",
                position: "top-6 right-6",
                size: "w-8 h-8"
            },
            {
                type: "coin",
                position: "bottom-10 left-6",
                size: "w-6 h-6"
            }
        ]
    },
    // Spread 6: Message for Interviewer
    {
        leftTitle: "A Note For You",
        rightTitle: "Dear Interviewer",
        leftPhoto: {
            src: "/placeholder.svg?height=150&width=150",
            alt: "Professional Photo",
            variant: "polaroid",
            rotation: 3
        },
        leftText: [
            "Thank you for taking the time to explore my scrapbook. It means a lot to me."
        ],
        rightText: [
            "Thank you for considering my application. This scrapbook represents not just my achievements, but my heart and soul.",
            "I hope it gives you a glimpse of who I am beyond my resume—a passionate, dedicated individual ready to make an impact.",
            "I look forward to the opportunity to bring this same energy and creativity to your team."
        ],
        messageBox: {
            label: "P.S.",
            text: "I can't wait to hear from you and discuss how I can contribute to your amazing team!"
        },
        stickers: [
            {
                type: "star",
                position: "top-2 right-2",
                size: "w-8 h-8"
            },
            {
                type: "flower",
                position: "bottom-4 right-4",
                size: "w-10 h-10"
            }
        ]
    },
    // Spread 7: Message for Class of 2025
    {
        leftTitle: "Class of 2025",
        rightTitle: "You've Got This!",
        leftPhoto: {
            src: "/placeholder.svg?height=140&width=200",
            alt: "Group Photo",
            caption: "The best crew!",
            variant: "polaroid",
            rotation: -2
        },
        leftText: [
            "To my fellow classmates—what a journey it's been! We made it through together."
        ],
        rightText: [
            "Remember: Every challenge you faced made you stronger. Every late night was worth it.",
            "As we move forward, carry these memories with you. They're proof of what you can achieve.",
            "Stay curious. Stay hungry. Stay connected. We're all in this together!"
        ],
        messageBox: {
            label: "My Wish for You",
            text: "May your future be as bright as the stars in a Mario sky! Keep collecting those coins of success! 🌟"
        },
        stickers: [
            {
                type: "star",
                position: "top-4 left-4",
                size: "w-12 h-12"
            },
            {
                type: "mushroom",
                position: "bottom-4 right-4",
                size: "w-10 h-10"
            },
            {
                type: "coin",
                position: "top-8 right-8",
                size: "w-6 h-6"
            }
        ]
    },
    // Spread 8: Crew Photos
    {
        leftTitle: "My Amazing Crew",
        rightTitle: "Friends Forever",
        leftPhoto: {
            src: "/placeholder.svg?height=180&width=180",
            alt: "Team Photo",
            caption: "Squad goals!",
            variant: "polaroid",
            rotation: -3
        },
        leftText: [
            "These are the people who made every day an adventure."
        ],
        rightPhotos: [
            {
                src: "/placeholder.svg?height=100&width=100",
                alt: "Friend 1",
                variant: "vintage",
                rotation: 5
            },
            {
                src: "/placeholder.svg?height=100&width=100",
                alt: "Friend 2",
                variant: "polaroid",
                rotation: -3
            },
            {
                src: "/placeholder.svg?height=100&width=100",
                alt: "Friend 3",
                variant: "taped",
                rotation: 2
            }
        ],
        rightText: [
            "True friends are the family we choose. I'm grateful for each and every one of you."
        ],
        stickers: [
            {
                type: "star",
                position: "top-2 right-2",
                size: "w-8 h-8"
            },
            {
                type: "flower",
                position: "bottom-8 left-8",
                size: "w-8 h-8"
            }
        ]
    },
    // Spread 9: Fun Facts
    {
        leftTitle: "Fun Facts About Me",
        rightTitle: "My Hobbies",
        leftList: [
            "I can solve a Rubik's cube in under 2 minutes",
            "Coffee is my best friend",
            "I've watched every Mario game speedrun",
            "I dream in code sometimes",
            "Pizza is always the right answer"
        ],
        rightText: [
            "When I'm not working, you'll find me exploring new hobbies, reading, or gaming.",
            "Life is about balance, and these activities keep me grounded and happy."
        ],
        rightPhotos: [
            {
                src: "/placeholder.svg?height=100&width=100",
                alt: "Gaming",
                variant: "vintage",
                rotation: -4
            }
        ],
        stickers: [
            {
                type: "mushroom",
                position: "top-4 right-4",
                size: "w-10 h-10"
            },
            {
                type: "pipe",
                position: "bottom-4 left-4",
                size: "w-12 h-12"
            },
            {
                type: "block",
                position: "bottom-16 right-8",
                size: "w-8 h-8"
            }
        ]
    },
    // Spread 10: Back Cover / Closing
    {
        leftTitle: "The End",
        rightTitle: "Let's Connect!",
        leftText: [
            "Thank you for taking this journey with me through my LFM adventure.",
            "Every page of this scrapbook holds a piece of my heart. I hope you enjoyed it as much as I enjoyed creating it.",
            "This isn't goodbye—it's just the beginning of a new chapter!"
        ],
        rightText: [
            "I'd love to hear from you! Feel free to reach out:",
            "Email: your.email@example.com",
            "LinkedIn: linkedin.com/in/yourname",
            "Portfolio: yourportfolio.com"
        ],
        messageBox: {
            label: "Final Thoughts",
            text: "Thank you for being part of my story. Now let's write the next chapter together!"
        },
        stickers: [
            {
                type: "star",
                position: "top-4 right-4",
                size: "w-12 h-12"
            },
            {
                type: "mushroom",
                position: "bottom-8 left-8",
                size: "w-10 h-10"
            },
            {
                type: "coin",
                position: "top-12 left-4",
                size: "w-6 h-6"
            },
            {
                type: "flower",
                position: "bottom-4 right-8",
                size: "w-8 h-8"
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Scrapbook
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$scrapbook$2d$cover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-cover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$scrapbook$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$scrapbook$2d$back$2d$cover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook-back-cover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$lib$2f$page$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/lib/page-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Scrapbook() {
    _s();
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1) // -1 = cover, totalPages = back cover
    ;
    const [isFlipping, setIsFlipping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [flipDirection, setFlipDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("forward");
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dragStartX, setDragStartX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const totalPages = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$lib$2f$page$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pageContents"].length;
    const goToNextPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Scrapbook.useCallback[goToNextPage]": ()=>{
            if (currentPage < totalPages && !isFlipping) {
                setFlipDirection("forward");
                setIsFlipping(true);
                setTimeout({
                    "Scrapbook.useCallback[goToNextPage]": ()=>{
                        setCurrentPage({
                            "Scrapbook.useCallback[goToNextPage]": (prev)=>prev + 1
                        }["Scrapbook.useCallback[goToNextPage]"]);
                        setIsFlipping(false);
                    }
                }["Scrapbook.useCallback[goToNextPage]"], 600);
            }
        }
    }["Scrapbook.useCallback[goToNextPage]"], [
        currentPage,
        totalPages,
        isFlipping
    ]);
    const goToPrevPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Scrapbook.useCallback[goToPrevPage]": ()=>{
            if (currentPage >= 0 && !isFlipping) {
                setFlipDirection("backward");
                setIsFlipping(true);
                setTimeout({
                    "Scrapbook.useCallback[goToPrevPage]": ()=>{
                        setCurrentPage({
                            "Scrapbook.useCallback[goToPrevPage]": (prev)=>prev - 1
                        }["Scrapbook.useCallback[goToPrevPage]"]);
                        setIsFlipping(false);
                    }
                }["Scrapbook.useCallback[goToPrevPage]"], 600);
            }
        }
    }["Scrapbook.useCallback[goToPrevPage]"], [
        currentPage,
        isFlipping
    ]);
    const goToCover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Scrapbook.useCallback[goToCover]": ()=>{
            if (!isFlipping && currentPage !== -1) {
                setFlipDirection("backward");
                setIsFlipping(true);
                setTimeout({
                    "Scrapbook.useCallback[goToCover]": ()=>{
                        setCurrentPage(-1);
                        setIsFlipping(false);
                    }
                }["Scrapbook.useCallback[goToCover]"], 600);
            }
        }
    }["Scrapbook.useCallback[goToCover]"], [
        isFlipping,
        currentPage
    ]);
    // Keyboard navigation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Scrapbook.useEffect": ()=>{
            const handleKeyDown = {
                "Scrapbook.useEffect.handleKeyDown": (e)=>{
                    if (e.key === "ArrowRight" || e.key === " ") {
                        e.preventDefault();
                        goToNextPage();
                    } else if (e.key === "ArrowLeft") {
                        e.preventDefault();
                        goToPrevPage();
                    } else if (e.key === "Home") {
                        e.preventDefault();
                        goToCover();
                    }
                }
            }["Scrapbook.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "Scrapbook.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["Scrapbook.useEffect"];
        }
    }["Scrapbook.useEffect"], [
        goToNextPage,
        goToPrevPage,
        goToCover
    ]);
    // Drag to turn pages
    const handleDragStart = (e)=>{
        if (isFlipping) return;
        setIsDragging(true);
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        setDragStartX(clientX);
    };
    const handleDragEnd = (e)=>{
        if (!isDragging) return;
        setIsDragging(false);
        const clientX = "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
        const diff = clientX - dragStartX;
        if (Math.abs(diff) > 100) {
            if (diff < 0) {
                goToNextPage();
            } else {
                goToPrevPage();
            }
        }
    };
    const isBackCover = currentPage === totalPages;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen flex items-center justify-center p-4 md:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-5xl aspect-[4/3]",
            style: {
                perspective: "2000px"
            },
            onMouseDown: handleDragStart,
            onMouseUp: handleDragEnd,
            onMouseLeave: ()=>setIsDragging(false),
            onTouchStart: handleDragStart,
            onTouchEnd: handleDragEnd,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: currentPage === -1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            rotateY: flipDirection === "forward" ? 0 : -30,
                            opacity: 0
                        },
                        animate: {
                            rotateY: 0,
                            opacity: 1
                        },
                        exit: {
                            rotateY: -100,
                            opacity: 0,
                            transition: {
                                duration: 0.6,
                                ease: [
                                    0.4,
                                    0,
                                    0.2,
                                    1
                                ]
                            }
                        },
                        transition: {
                            duration: 0.6,
                            ease: [
                                0.4,
                                0,
                                0.2,
                                1
                            ]
                        },
                        className: "absolute inset-0",
                        style: {
                            transformStyle: "preserve-3d",
                            transformOrigin: "left center"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$scrapbook$2d$cover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onOpen: goToNextPage
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook.tsx",
                            lineNumber: 130,
                            columnNumber: 15
                        }, this)
                    }, "cover", false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook.tsx",
                        lineNumber: 114,
                        columnNumber: 13
                    }, this) : isBackCover ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            rotateY: 90,
                            opacity: 0
                        },
                        animate: {
                            rotateY: 0,
                            opacity: 1
                        },
                        exit: {
                            rotateY: 90,
                            opacity: 0
                        },
                        transition: {
                            duration: 0.6,
                            ease: [
                                0.4,
                                0,
                                0.2,
                                1
                            ]
                        },
                        className: "absolute inset-0",
                        style: {
                            transformStyle: "preserve-3d",
                            transformOrigin: "right center"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$scrapbook$2d$back$2d$cover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onClose: goToCover
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook.tsx",
                            lineNumber: 145,
                            columnNumber: 15
                        }, this)
                    }, "back-cover", false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook.tsx",
                        lineNumber: 133,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            rotateY: flipDirection === "forward" ? 90 : -90,
                            opacity: 0,
                            z: -50
                        },
                        animate: {
                            rotateY: 0,
                            opacity: 1,
                            z: 0
                        },
                        exit: {
                            rotateY: flipDirection === "forward" ? -90 : 90,
                            opacity: 0,
                            z: -50
                        },
                        transition: {
                            duration: 0.6,
                            ease: [
                                0.4,
                                0,
                                0.2,
                                1
                            ]
                        },
                        className: "absolute inset-0",
                        style: {
                            transformStyle: "preserve-3d",
                            transformOrigin: flipDirection === "forward" ? "left center" : "right center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute inset-0 pointer-events-none z-10",
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: isFlipping ? 0.3 : 0
                                },
                                style: {
                                    background: flipDirection === "forward" ? "linear-gradient(to right, transparent 40%, rgba(0,0,0,0.2) 50%, transparent 60%)" : "linear-gradient(to left, transparent 40%, rgba(0,0,0,0.2) 50%, transparent 60%)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook.tsx",
                                lineNumber: 176,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$scrapbook$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                pageIndex: currentPage,
                                content: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$lib$2f$page$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pageContents"][currentPage]
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook.tsx",
                                lineNumber: 187,
                                columnNumber: 15
                            }, this)
                        ]
                    }, `page-${currentPage}`, true, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook.tsx",
                        lineNumber: 148,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this),
                currentPage >= 0 && !isBackCover && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            onClick: goToPrevPage,
                            disabled: isFlipping,
                            whileHover: {
                                scale: 1.1
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 md:-translate-x-20 p-2 md:p-3 disabled:opacity-50 disabled:cursor-not-allowed z-20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-12 h-12 md:w-14 md:h-14 bg-yellow-500 rounded-lg border-4 border-yellow-700 shadow-lg flex items-center justify-center transform transition-transform hover:border-yellow-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        className: "w-6 h-6 md:w-8 md:h-8 text-yellow-900"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook.tsx",
                                        lineNumber: 204,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-1 left-1 w-3 h-3 bg-yellow-300 rounded-sm opacity-60"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook.tsx",
                                        lineNumber: 206,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook.tsx",
                                lineNumber: 203,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook.tsx",
                            lineNumber: 196,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            onClick: goToNextPage,
                            disabled: isFlipping,
                            whileHover: {
                                scale: 1.1
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 md:translate-x-20 p-2 md:p-3 disabled:opacity-50 disabled:cursor-not-allowed z-20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-12 h-12 md:w-14 md:h-14 bg-yellow-500 rounded-lg border-4 border-yellow-700 shadow-lg flex items-center justify-center transform transition-transform hover:border-yellow-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-6 h-6 md:w-8 md:h-8 text-yellow-900"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook.tsx",
                                        lineNumber: 219,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-1 left-1 w-3 h-3 bg-yellow-300 rounded-sm opacity-60"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook.tsx",
                                        lineNumber: 220,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook.tsx",
                                lineNumber: 218,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook.tsx",
                            lineNumber: 211,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                currentPage >= 0 && !isBackCover && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    className: "absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-amber-100/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            onClick: goToCover,
                            whileHover: {
                                scale: 1.1
                            },
                            whileTap: {
                                scale: 0.9
                            },
                            className: "p-2 bg-red-500 hover:bg-red-400 rounded-full text-white shadow-md transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook.tsx",
                                lineNumber: 239,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook.tsx",
                            lineNumber: 233,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                                ...Array(totalPages)
                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    animate: {
                                        scale: i === currentPage ? 1.3 : 1,
                                        backgroundColor: i === currentPage ? "#ef4444" : "#fcd34d"
                                    },
                                    className: "w-2 h-2 rounded-full transition-colors cursor-pointer",
                                    onClick: ()=>{
                                        if (i !== currentPage && !isFlipping) {
                                            setFlipDirection(i > currentPage ? "forward" : "backward");
                                            setIsFlipping(true);
                                            setTimeout(()=>{
                                                setCurrentPage(i);
                                                setIsFlipping(false);
                                            }, 600);
                                        }
                                    }
                                }, i, false, {
                                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook.tsx",
                                    lineNumber: 244,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook.tsx",
                            lineNumber: 242,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-[var(--font-pixel)] text-xs text-amber-800 min-w-[60px] text-center",
                            children: [
                                currentPage + 1,
                                " / ",
                                totalPages
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook.tsx",
                            lineNumber: 265,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook.tsx",
                    lineNumber: 228,
                    columnNumber: 11
                }, this),
                currentPage === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: 1
                    },
                    className: "absolute -bottom-8 left-1/2 -translate-x-1/2 text-amber-700 text-sm font-sans",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        animate: {
                            x: [
                                -5,
                                5,
                                -5
                            ]
                        },
                        transition: {
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY
                        },
                        children: "Swipe or use arrow keys"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook.tsx",
                        lineNumber: 279,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook.tsx",
                    lineNumber: 273,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook.tsx",
            lineNumber: 103,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_s(Scrapbook, "fg4nMjrx9B+2rX2QyiXD5+jQnyg=");
_c = Scrapbook;
var _c;
__turbopack_context__.k.register(_c, "Scrapbook");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InteractiveMario
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function InteractiveMario({ className = "" }) {
    _s();
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 20,
        y: 80
    });
    const [isJumping, setIsJumping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("right");
    const [showSpeech, setShowSpeech] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [speechText, setSpeechText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const speeches = [
        "Let's-a go!",
        "Mama mia!",
        "Here we go!",
        "Yahoo!",
        "It's-a me!",
        "Wahoo!"
    ];
    const handleClick = ()=>{
        setIsJumping(true);
        setSpeechText(speeches[Math.floor(Math.random() * speeches.length)]);
        setShowSpeech(true);
        setTimeout(()=>setIsJumping(false), 500);
        setTimeout(()=>setShowSpeech(false), 2000);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InteractiveMario.useEffect": ()=>{
            const interval = setInterval({
                "InteractiveMario.useEffect.interval": ()=>{
                    setPosition({
                        "InteractiveMario.useEffect.interval": (prev)=>{
                            const newX = prev.x + (direction === "right" ? 2 : -2);
                            if (newX > 85) {
                                setDirection("left");
                                return {
                                    ...prev,
                                    x: 85
                                };
                            }
                            if (newX < 5) {
                                setDirection("right");
                                return {
                                    ...prev,
                                    x: 5
                                };
                            }
                            return {
                                ...prev,
                                x: newX
                            };
                        }
                    }["InteractiveMario.useEffect.interval"]);
                }
            }["InteractiveMario.useEffect.interval"], 100);
            return ({
                "InteractiveMario.useEffect": ()=>clearInterval(interval)
            })["InteractiveMario.useEffect"];
        }
    }["InteractiveMario.useEffect"], [
        direction
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: `fixed z-30 cursor-pointer ${className}`,
        style: {
            left: `${position.x}%`,
            bottom: `${position.y}px`
        },
        onClick: handleClick,
        whileHover: {
            scale: 1.1
        },
        animate: isJumping ? {
            y: [
                0,
                -40,
                0
            ]
        } : {
            y: [
                0,
                -3,
                0
            ]
        },
        transition: isJumping ? {
            duration: 0.5
        } : {
            duration: 0.8,
            repeat: Number.POSITIVE_INFINITY
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showSpeech && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 10,
                        scale: 0.8
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: -10,
                        scale: 0.8
                    },
                    className: "absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white px-3 py-1.5 rounded-lg shadow-lg border-2 border-gray-200 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-[var(--font-pixel)] text-xs text-gray-800",
                                children: speechText
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-white"
                            }, void 0, false, {
                                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-12 h-16",
                style: {
                    transform: direction === "left" ? "scaleX(-1)" : "scaleX(1)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 40 52",
                    className: "w-full h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "20",
                            cy: "6",
                            rx: "10",
                            ry: "5",
                            fill: "#E52521"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "8",
                            y: "5",
                            width: "24",
                            height: "8",
                            rx: "2",
                            fill: "#E52521"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "6",
                            y: "11",
                            width: "28",
                            height: "3",
                            rx: "1",
                            fill: "#E52521"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "20",
                            cy: "20",
                            rx: "10",
                            ry: "9",
                            fill: "#FFD8B0"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "15",
                            cy: "18",
                            rx: "2.5",
                            ry: "3",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "25",
                            cy: "18",
                            rx: "2.5",
                            ry: "3",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "16",
                            cy: "18",
                            r: "1.5",
                            fill: "#000"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "26",
                            cy: "18",
                            r: "1.5",
                            fill: "#000"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "20",
                            cy: "22",
                            rx: "4",
                            ry: "3",
                            fill: "#FFD8B0"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M10,26 Q15,28 20,25 Q25,28 30,26",
                            fill: "#4A2C0A"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "12",
                            cy: "26",
                            rx: "3",
                            ry: "2",
                            fill: "#4A2C0A"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "28",
                            cy: "26",
                            rx: "3",
                            ry: "2",
                            fill: "#4A2C0A"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "8",
                            y: "16",
                            width: "3",
                            height: "8",
                            fill: "#4A2C0A",
                            rx: "1"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "29",
                            y: "16",
                            width: "3",
                            height: "8",
                            fill: "#4A2C0A",
                            rx: "1"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "10",
                            y: "28",
                            width: "20",
                            height: "10",
                            fill: "#E52521",
                            rx: "2"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "8",
                            y: "36",
                            width: "24",
                            height: "12",
                            fill: "#2563EB",
                            rx: "2"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "14",
                            y: "32",
                            width: "4",
                            height: "8",
                            fill: "#2563EB"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "22",
                            y: "32",
                            width: "4",
                            height: "8",
                            fill: "#2563EB"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "16",
                            cy: "38",
                            r: "2",
                            fill: "#FFD700"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "24",
                            cy: "38",
                            r: "2",
                            fill: "#FFD700"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "12",
                            cy: "50",
                            rx: "6",
                            ry: "3",
                            fill: "#4A2C0A"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "28",
                            cy: "50",
                            rx: "6",
                            ry: "3",
                            fill: "#4A2C0A"
                        }, void 0, false, {
                            fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(InteractiveMario, "ih6tZNVkjm1zYeEKOdUjyg+mLyw=");
_c = InteractiveMario;
var _c;
__turbopack_context__.k.register(_c, "InteractiveMario");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/web.levvtzy.xyz/krufav/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$loading$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/components/loading-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$mario$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/components/mario-background.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$scrapbook$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/components/scrapbook.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$interactive$2d$mario$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web.levvtzy.xyz/krufav/components/interactive-mario.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Home() {
    _s();
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showScrapbook, setShowScrapbook] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleLoadComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleLoadComplete]": ()=>{
            setIsLoaded(true);
        }
    }["Home.useCallback[handleLoadComplete]"], []);
    const handleEnterScrapbook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleEnterScrapbook]": ()=>{
            setShowScrapbook(true);
        }
    }["Home.useCallback[handleEnterScrapbook]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative min-h-screen overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$mario$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/app/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            !showScrapbook ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$loading$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onLoadComplete: handleLoadComplete,
                onEnter: handleEnterScrapbook,
                isLoaded: isLoaded
            }, void 0, false, {
                fileName: "[project]/Documents/web.levvtzy.xyz/krufav/app/page.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$scrapbook$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/app/page.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2e$levvtzy$2e$xyz$2f$krufav$2f$components$2f$interactive$2d$mario$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/app/page.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/web.levvtzy.xyz/krufav/app/page.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(Home, "6ZOU9N5ip6rs9sPgf9Ol4qjH4HQ=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_web_levvtzy_xyz_krufav_8b232d3c._.js.map