import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx, jsxs } from "react/jsx-runtime";
import React, { useEffect, useRef, useState } from "react";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), 6e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
//#region app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	ErrorBoundary: () => ErrorBoundary,
	Layout: () => Layout,
	default: () => root_default,
	links: () => links
});
var links = () => [
	{
		rel: "preconnect",
		href: "https://fonts.googleapis.com"
	},
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous"
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
	}
];
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", { children: [
			children,
			/* @__PURE__ */ jsx(ScrollRestoration, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	return /* @__PURE__ */ jsx(Outlet, {});
});
var ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary({ error }) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack;
	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
	}
	return /* @__PURE__ */ jsxs("main", {
		className: "pt-16 p-4 container mx-auto",
		children: [
			/* @__PURE__ */ jsx("h1", { children: message }),
			/* @__PURE__ */ jsx("p", { children: details }),
			stack
		]
	});
});
//#endregion
//#region app/routes/home.tsx
var home_exports = /* @__PURE__ */ __exportAll({ default: () => home_default });
var ArrowIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", {
	className,
	width: "16",
	height: "16",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [/* @__PURE__ */ jsx("line", {
		x1: "5",
		y1: "12",
		x2: "19",
		y2: "12"
	}), /* @__PURE__ */ jsx("polyline", { points: "12 5 19 12 12 19" })]
});
var SparkleIcon = ({ className }) => /* @__PURE__ */ jsx("svg", {
	className,
	width: "9",
	height: "9",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	children: /* @__PURE__ */ jsx("path", { d: "M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" })
});
var FilePdfIcon = ({ className }) => /* @__PURE__ */ jsxs("svg", {
	className,
	width: "14",
	height: "14",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [
		/* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
		/* @__PURE__ */ jsx("polyline", { points: "14 2 14 8 20 8" }),
		/* @__PURE__ */ jsx("line", {
			x1: "16",
			y1: "13",
			x2: "8",
			y2: "13"
		}),
		/* @__PURE__ */ jsx("line", {
			x1: "16",
			y1: "17",
			x2: "8",
			y2: "17"
		})
	]
});
var CheckIcon = ({ className }) => /* @__PURE__ */ jsx("svg", {
	className,
	width: "9",
	height: "9",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "3",
	children: /* @__PURE__ */ jsx("polyline", { points: "20 6 9 17 4 12" })
});
var home_default = UNSAFE_withComponentProps(function LandingPage() {
	const [isScrolled, setIsScrolled] = useState(false);
	const observerRef = useRef(null);
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 40);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	useEffect(() => {
		observerRef.current = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add("opacity-100", "translate-y-0");
					e.target.classList.remove("opacity-0", "translate-y-6");
					observerRef.current.unobserve(e.target);
				}
			});
		}, {
			threshold: .1,
			rootMargin: "0px 0px -40px 0px"
		});
		document.querySelectorAll(".fade-up-el").forEach((el) => {
			observerRef.current.observe(el);
		});
		return () => observerRef.current?.disconnect();
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "font-sans bg-[#f7f7f8] text-[#181d2d] antialiased overflow-x-hidden selection:bg-[#8ecfc5] selection:text-[#181d2d]",
		children: [
			/* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;700;800&display=swap');
        
        body { font-family: 'DM Sans', system-ui, sans-serif; }
        
        @keyframes draw-strike { to { width: 100%; } }
        .animate-strike::after {
          content: ''; position: absolute; left: 0; top: 52%; height: 3px;
          background: #8ecfc5; border-radius: 2px; width: 0;
          animation: draw-strike .45s cubic-bezier(.25,.46,.45,.94) forwards 1s;
        }
        
        @keyframes caret {
          0%,6% { width: 0; border-color: #181d2d; }
          46%,65% { width: 100%; border-color: #181d2d; }
          86%,100% { width: 100%; border-color: transparent; }
        }
        .animate-caret {
          font-family: 'DM Mono', monospace;
          animation: caret 6s infinite steps(52, end);
        }
        
        @keyframes photo-in { 0%,36%{ opacity:0; transform:translateY(6px); } 50%,100%{ opacity:1; transform:translateY(0); } }
        .animate-photo-in { animation: photo-in 6s ease infinite; }
        
        @keyframes pdf-float { 0%,100%{ transform: translateY(0); } 50%{ transform: translateY(-8px); } }
        .animate-pdf-float { animation: pdf-float 5s ease-in-out infinite; }
        
        @keyframes marquee-run { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-marquee-run { animation: marquee-run 22s linear infinite; }
        
        @keyframes sc-scroll {
          0%,12% { transform: translateY(0); }
          42%,65% { transform: translateY(-130px); }
          92%,100%{ transform: translateY(0); }
        }
        .animate-sc-scroll { animation: sc-scroll 12s ease-in-out infinite; }
      ` } }),
			/* @__PURE__ */ jsx("nav", {
				className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? "bg-[#181d2d]/90 backdrop-blur-md border-white/10" : "bg-transparent border-transparent"}`,
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-[1200px] mx-auto px-10",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between h-[66px]",
						children: [
							/* @__PURE__ */ jsx("a", {
								href: "#",
								className: "text-[1.0625rem] font-extrabold text-white no-underline tracking-tight",
								children: "Clic Diag"
							}),
							/* @__PURE__ */ jsxs("ul", {
								className: "hidden md:flex items-center gap-8 list-none m-0 p-0",
								children: [
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "#steps",
										className: "text-sm font-medium text-white/55 hover:text-white transition-colors",
										children: "Comment ca marche"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "#features",
										className: "text-sm font-medium text-white/55 hover:text-white transition-colors",
										children: "Fonctionnalites"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "#platform",
										className: "text-sm font-medium text-white/55 hover:text-white transition-colors",
										children: "Plateformes"
									}) })
								]
							}),
							/* @__PURE__ */ jsxs("button", {
								className: "inline-flex items-center gap-2 bg-[#8ecfc5] hover:brightness-105 text-[#181d2d] px-5 py-2 rounded-lg font-semibold text-sm transition-all hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(142,207,197,.4)]",
								children: ["Demander une demo", /* @__PURE__ */ jsx(ArrowIcon, {})]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "min-h-screen bg-[#181d2d] relative overflow-hidden flex items-center pt-28 pb-20",
				style: {
					backgroundImage: "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(142,207,197,.06) 0%, transparent 60%), radial-gradient(circle 1px at center, rgba(255,255,255,.04) 1px, transparent 1px)",
					backgroundSize: "auto, 32px 32px"
				},
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-[1200px] mx-auto px-10 w-full",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid lg:grid-cols-[1fr_1.15fr] gap-16 items-center w-full",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("div", {
								className: "text-[.7rem] font-bold uppercase tracking-[.12em] text-[#8ecfc5] mb-7 flex items-center gap-2.5",
								children: [/* @__PURE__ */ jsx("span", { className: "w-5 h-[1.5px] bg-[#8ecfc5] rounded-[2px]" }), "Rapports techniques"]
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "text-[clamp(2.75rem,4.5vw,4rem)] font-extrabold text-white leading-[1.08] tracking-[-.03em] mb-6",
								children: [
									"Fini ",
									/* @__PURE__ */ jsx("span", {
										className: "relative inline-block text-white/45 animate-strike",
										children: "Word"
									}),
									".",
									/* @__PURE__ */ jsx("br", {}),
									"Vos rapports,",
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("span", {
										className: "text-[#8ecfc5]",
										children: "generés"
									}),
									/* @__PURE__ */ jsx("br", {}),
									"en quelques clics."
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[1.075rem] text-white/50 leading-[1.7] max-w-[420px] mb-11",
								children: "Structurez vos observations, intégrez vos photos, laissez l'IA reformuler. Un PDF professionnel prêt a envoyer."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3.5 flex-wrap",
								children: [/* @__PURE__ */ jsxs("button", {
									className: "inline-flex items-center gap-2 bg-[#8ecfc5] hover:brightness-105 text-[#181d2d] px-6 py-2.5 rounded-lg font-semibold text-sm transition-all hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(142,207,197,.4)]",
									children: ["Demander une demo", /* @__PURE__ */ jsx(ArrowIcon, {})]
								}), /* @__PURE__ */ jsx("button", {
									className: "inline-flex items-center gap-2 bg-transparent text-white/75 border-[1.5px] border-white/20 hover:border-white/50 hover:text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all",
									children: "Voir la demo"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[.72rem] text-white/30 mt-5",
								children: "Sans engagement · Prise en main en 10 minutes"
							})
						] }), /* @__PURE__ */ jsx("div", {
							className: "relative hidden lg:block perspective-[1400px]",
							children: /* @__PURE__ */ jsxs("div", {
								className: "relative transform -rotate-y-6 rotate-x-2 origin-right transition-transform duration-600 hover:-rotate-y-2 hover:rotate-x-1",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "bg-white border border-white/10 rounded-2xl p-7 overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,.08),0_30px_80px_rgba(0,0,0,.45),0_8px_20px_rgba(0,0,0,.2)]",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex gap-1.5 mb-5 pb-4 border-b border-[#f1f2f4]",
											children: [
												/* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-[#fca5a5]" }),
												/* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-[#fcd34d]" }),
												/* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-[#86efac]" })
											]
										}),
										/* @__PURE__ */ jsx("div", {
											className: "text-[.6rem] font-bold uppercase tracking-[.08em] text-[#9ca3af] mb-2",
											children: "1 Structure"
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "bg-[#f9fafb] border border-[#f0f1f2] rounded-[9px] px-4 py-3 mb-3.5",
											children: [/* @__PURE__ */ jsx("div", {
												className: "text-[.58rem] font-bold uppercase tracking-[.06em] text-[#9ca3af] mb-1.5",
												children: "Observation"
											}), /* @__PURE__ */ jsx("div", {
												className: "text-[.7rem] text-[#374151] whitespace-nowrap overflow-hidden inline-block border-r-2 border-[#181d2d] animate-caret",
												children: "Une fissure verticale est observée sur le mur porteur."
											})]
										}),
										/* @__PURE__ */ jsx("div", { className: "w-[120px] aspect-[4/3] bg-gradient-to-br from-[#f3f4f6] to-[#e9eaec] border border-[#e9eaec] rounded-lg mb-3.5 relative overflow-hidden animate-photo-in after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-br after:from-transparent after:from-40% after:to-white/30" }),
										/* @__PURE__ */ jsxs("div", {
											className: "pl-4 border-l-2 border-[#f0f1f2]",
											children: [/* @__PURE__ */ jsx("div", {
												className: "text-[.6rem] font-bold uppercase tracking-[.08em] text-[#9ca3af] mb-1.5",
												children: "1.1 Préconisation"
											}), /* @__PURE__ */ jsxs("div", {
												className: "bg-[#f9fafb] border border-[#f0f1f2] rounded-lg px-4 py-[.7rem] flex items-center justify-between gap-3",
												children: [/* @__PURE__ */ jsx("p", {
													className: "text-[.7rem] text-[#4b5563] font-medium",
													children: "Surveiller l'evolution de la fissure."
												}), /* @__PURE__ */ jsxs("div", {
													className: "inline-flex items-center gap-1 bg-[#8ecfc5]/10 border border-[#8ecfc5]/35 text-[#1a6b63] text-[.62rem] font-bold px-2.5 py-1 rounded-md whitespace-nowrap shrink-0",
													children: [/* @__PURE__ */ jsx(SparkleIcon, { className: "text-[#1a6b63]" }), "Améliorer"]
												})]
											})]
										})
									]
								}), /* @__PURE__ */ jsxs("div", {
									className: "absolute -bottom-6 -right-8 w-[185px] bg-white border border-[#181d2d]/10 rounded-[14px] p-[1.125rem] shadow-[0_20px_60px_rgba(0,0,0,.28)] animate-pdf-float z-10",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2.5 pb-3 border-b border-[#f1f2f4] mb-3.5",
											children: [/* @__PURE__ */ jsx("div", {
												className: "w-[30px] h-[30px] bg-[#181d2d]/5 rounded-[7px] flex items-center justify-center shrink-0",
												children: /* @__PURE__ */ jsx(FilePdfIcon, { className: "text-[#181d2d]" })
											}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
												className: "text-[.7rem] font-bold text-[#181d2d]",
												children: "Rapport_Diag.pdf"
											}), /* @__PURE__ */ jsx("div", {
												className: "text-[.58rem] text-[#9ca3af] mt-[1px]",
												children: "Généré · 12 pages"
											})] })]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex flex-col gap-[5px]",
											children: [
												/* @__PURE__ */ jsx("div", { className: "h-[5px] bg-[#e9eaec] rounded-[3px] w-[70%]" }),
												/* @__PURE__ */ jsx("div", { className: "h-[5px] bg-[#e9eaec] rounded-[3px] w-full" }),
												/* @__PURE__ */ jsx("div", { className: "h-[5px] bg-[#f3f4f6] rounded-[3px] w-[82%]" })
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mt-2.5 pt-2.5 border-t border-[#f3f4f6] flex gap-[5px]",
											children: [/* @__PURE__ */ jsx("div", {
												className: "flex-1 h-[26px] bg-[#181d2d] rounded-md flex items-center justify-center text-[.58rem] font-bold text-white",
												children: "Télécharger"
											}), /* @__PURE__ */ jsx("div", { className: "flex-1 h-[26px] bg-[#f3f4f6] rounded-md" })]
										})
									]
								})]
							})
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "bg-[#8ecfc5] overflow-hidden py-3.5",
				children: /* @__PURE__ */ jsx("div", {
					className: "flex whitespace-nowrap animate-marquee-run",
					"aria-hidden": "true",
					children: [...Array(2)].map((_, i) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
						/* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-4 px-8 text-[.8rem] font-bold text-[#181d2d] tracking-[.01em] shrink-0",
							children: ["Structuration automatique", /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-[#181d2d]/30 shrink-0" })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-4 px-8 text-[.8rem] font-bold text-[#181d2d] tracking-[.01em] shrink-0",
							children: ["Photos intégrées", /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-[#181d2d]/30 shrink-0" })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-4 px-8 text-[.8rem] font-bold text-[#181d2d] tracking-[.01em] shrink-0",
							children: ["Rédaction assistée par IA", /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-[#181d2d]/30 shrink-0" })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-4 px-8 text-[.8rem] font-bold text-[#181d2d] tracking-[.01em] shrink-0",
							children: ["Génération PDF en 1 clic", /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-[#181d2d]/30 shrink-0" })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-4 px-8 text-[.8rem] font-bold text-[#181d2d] tracking-[.01em] shrink-0",
							children: ["Synchronisation mobile", /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-[#181d2d]/30 shrink-0" })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-4 px-8 text-[.8rem] font-bold text-[#181d2d] tracking-[.01em] shrink-0",
							children: ["Numérotation automatique", /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-[#181d2d]/30 shrink-0" })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-4 px-8 text-[.8rem] font-bold text-[#181d2d] tracking-[.01em] shrink-0",
							children: ["Rapports professionnels", /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-[#181d2d]/30 shrink-0" })]
						})
					] }, i))
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-white border-b border-[#e5e7eb] py-20",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-[1200px] mx-auto px-10",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid md:grid-cols-3 gap-0",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "px-12 md:border-x border-[#e5e7eb] border-b md:border-b-0 py-8 md:py-0 text-center fade-up-el opacity-0 translate-y-6 transition-all duration-600",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "text-[clamp(3rem,4.5vw,4.5rem)] font-extrabold text-[#181d2d] tracking-[-.04em] leading-none mb-2 block",
									children: ["3", /* @__PURE__ */ jsx("span", {
										className: "text-[#8ecfc5]",
										children: "h"
									})]
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[.875rem] text-[#64748b] font-medium",
									children: "économisées par rapport en moyenne"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "px-12 md:border-r border-[#e5e7eb] border-b md:border-b-0 py-8 md:py-0 text-center fade-up-el opacity-0 translate-y-6 transition-all duration-600 delay-100",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[clamp(3rem,4.5vw,4.5rem)] font-extrabold text-[#181d2d] tracking-[-.04em] leading-none mb-2 block",
									children: "0"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[.875rem] text-[#64748b] font-medium",
									children: "mise en forme manuelle requise"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "px-12 md:border-r border-[#e5e7eb] py-8 md:py-0 text-center fade-up-el opacity-0 translate-y-6 transition-all duration-600 delay-200",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "text-[clamp(3rem,4.5vw,4.5rem)] font-extrabold text-[#181d2d] tracking-[-.04em] leading-none mb-2 block",
									children: ["1", /* @__PURE__ */ jsx("span", {
										className: "text-[#8ecfc5] text-[clamp(1.5rem,2vw,2rem)] ml-2 align-middle",
										children: "clic"
									})]
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[.875rem] text-[#64748b] font-medium",
									children: "pour générer un PDF professionnel"
								})]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "steps",
				className: "bg-[#f7f7f8] py-28",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-[1200px] mx-auto px-10",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mb-16",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "text-[.65rem] font-bold uppercase tracking-[.12em] text-[#1a6b63] flex items-center gap-3 mb-3.5",
							children: [/* @__PURE__ */ jsx("span", { className: "w-[18px] h-[1.5px] bg-[#1a6b63] rounded-[2px] block" }), "Comment ca marche"]
						}), /* @__PURE__ */ jsxs("h2", {
							className: "text-[clamp(1.875rem,3vw,2.5rem)] font-extrabold tracking-[-.03em] mb-3 text-[#181d2d]",
							children: [
								"De l'observation au PDF.",
								/* @__PURE__ */ jsx("br", {}),
								"Quatre étapes."
							]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 relative before:hidden lg:before:block before:content-[''] before:absolute before:top-[2.375rem] before:left-[12.5%] before:right-[12.5%] before:h-[1px] before:bg-[#e5e7eb] before:z-0",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "relative pr-7 group fade-up-el opacity-0 translate-y-6 transition-all duration-600",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "w-[46px] h-[46px] rounded-full bg-white border-[1.5px] border-[#e5e7eb] flex items-center justify-center mb-8 relative z-10 transition-colors duration-250 group-hover:border-[#8ecfc5] group-hover:bg-[#8ecfc5]/10",
										children: [/* @__PURE__ */ jsxs("svg", {
											className: "stroke-[#9ca3af] transition-colors duration-250 group-hover:stroke-[#1a6b63]",
											width: "18",
											height: "18",
											viewBox: "0 0 24 24",
											fill: "none",
											strokeWidth: "1.75",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											children: [
												/* @__PURE__ */ jsx("rect", {
													x: "3",
													y: "3",
													width: "18",
													height: "18",
													rx: "2"
												}),
												/* @__PURE__ */ jsx("circle", {
													cx: "8.5",
													cy: "8.5",
													r: "1.5"
												}),
												/* @__PURE__ */ jsx("polyline", { points: "21 15 16 10 5 21" })
											]
										}), /* @__PURE__ */ jsx("span", {
											className: "absolute -top-2 -right-2 text-[.55rem] font-extrabold bg-[#181d2d] text-white w-[18px] h-[18px] rounded-full flex items-center justify-center tracking-normal",
											children: "01"
										})]
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "text-[.9375rem] font-bold text-[#181d2d] mb-2",
										children: "Ajouter des photos"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[.875rem] text-[#64748b] leading-[1.65]",
										children: "Importez vos clichés directement dans chaque observation depuis votre téléphone ou ordinateur."
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "relative pr-7 group fade-up-el opacity-0 translate-y-6 transition-all duration-600 delay-[80ms]",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "w-[46px] h-[46px] rounded-full bg-white border-[1.5px] border-[#e5e7eb] flex items-center justify-center mb-8 relative z-10 transition-colors duration-250 group-hover:border-[#8ecfc5] group-hover:bg-[#8ecfc5]/10",
										children: [/* @__PURE__ */ jsxs("svg", {
											className: "stroke-[#9ca3af] transition-colors duration-250 group-hover:stroke-[#1a6b63]",
											width: "18",
											height: "18",
											viewBox: "0 0 24 24",
											fill: "none",
											strokeWidth: "1.75",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											children: [
												/* @__PURE__ */ jsx("line", {
													x1: "8",
													y1: "6",
													x2: "21",
													y2: "6"
												}),
												/* @__PURE__ */ jsx("line", {
													x1: "8",
													y1: "12",
													x2: "21",
													y2: "12"
												}),
												/* @__PURE__ */ jsx("line", {
													x1: "8",
													y1: "18",
													x2: "21",
													y2: "18"
												}),
												/* @__PURE__ */ jsx("line", {
													x1: "3",
													y1: "6",
													x2: "3.01",
													y2: "6"
												}),
												/* @__PURE__ */ jsx("line", {
													x1: "3",
													y1: "12",
													x2: "3.01",
													y2: "12"
												}),
												/* @__PURE__ */ jsx("line", {
													x1: "3",
													y1: "18",
													x2: "3.01",
													y2: "18"
												})
											]
										}), /* @__PURE__ */ jsx("span", {
											className: "absolute -top-2 -right-2 text-[.55rem] font-extrabold bg-[#181d2d] text-white w-[18px] h-[18px] rounded-full flex items-center justify-center tracking-normal",
											children: "02"
										})]
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "text-[.9375rem] font-bold text-[#181d2d] mb-2",
										children: "Structurer"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[.875rem] text-[#64748b] leading-[1.65]",
										children: "Créez sections et sous-sections librement. La numérotation se met à jour automatiquement."
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "relative pr-7 group fade-up-el opacity-0 translate-y-6 transition-all duration-600 delay-[160ms]",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "w-[46px] h-[46px] rounded-full bg-white border-[1.5px] border-[#e5e7eb] flex items-center justify-center mb-8 relative z-10 transition-colors duration-250 group-hover:border-[#8ecfc5] group-hover:bg-[#8ecfc5]/10",
										children: [/* @__PURE__ */ jsxs("svg", {
											className: "stroke-[#9ca3af] transition-colors duration-250 group-hover:stroke-[#1a6b63]",
											width: "18",
											height: "18",
											viewBox: "0 0 24 24",
											fill: "none",
											strokeWidth: "1.75",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											children: [/* @__PURE__ */ jsx("path", { d: "M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" }), /* @__PURE__ */ jsx("path", {
												d: "M5 3l1 2.5L8 6.5 5.5 7.5 4.5 10 3.5 7.5 1 6.5 3.5 5.5z",
												opacity: ".4"
											})]
										}), /* @__PURE__ */ jsx("span", {
											className: "absolute -top-2 -right-2 text-[.55rem] font-extrabold bg-[#181d2d] text-white w-[18px] h-[18px] rounded-full flex items-center justify-center tracking-normal",
											children: "03"
										})]
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "text-[.9375rem] font-bold text-[#181d2d] mb-2",
										children: "Reformuler avec l'IA"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[.875rem] text-[#64748b] leading-[1.65]",
										children: "En un clic, l'IA améliore la rédaction de vos observations. Vous gardez toujours le contrôle."
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "relative pr-7 group fade-up-el opacity-0 translate-y-6 transition-all duration-600 delay-[240ms]",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "w-[46px] h-[46px] rounded-full bg-white border-[1.5px] border-[#e5e7eb] flex items-center justify-center mb-8 relative z-10 transition-colors duration-250 group-hover:border-[#8ecfc5] group-hover:bg-[#8ecfc5]/10",
										children: [/* @__PURE__ */ jsxs("svg", {
											className: "stroke-[#9ca3af] transition-colors duration-250 group-hover:stroke-[#1a6b63]",
											width: "18",
											height: "18",
											viewBox: "0 0 24 24",
											fill: "none",
											strokeWidth: "1.75",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											children: [
												/* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
												/* @__PURE__ */ jsx("polyline", { points: "14 2 14 8 20 8" }),
												/* @__PURE__ */ jsx("line", {
													x1: "16",
													y1: "13",
													x2: "8",
													y2: "13"
												}),
												/* @__PURE__ */ jsx("line", {
													x1: "16",
													y1: "17",
													x2: "8",
													y2: "17"
												})
											]
										}), /* @__PURE__ */ jsx("span", {
											className: "absolute -top-2 -right-2 text-[.55rem] font-extrabold bg-[#181d2d] text-white w-[18px] h-[18px] rounded-full flex items-center justify-center tracking-normal",
											children: "04"
										})]
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "text-[.9375rem] font-bold text-[#181d2d] mb-2",
										children: "Générer le PDF"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[.875rem] text-[#64748b] leading-[1.65]",
										children: "Exportez un document PDF mis en page, professionnel, prêt a envoyer a votre client."
									})
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "showcase",
				className: "bg-[#181d2d] py-32 overflow-hidden",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-[1200px] mx-auto px-10",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mb-16",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "text-[.65rem] font-bold uppercase tracking-[.12em] text-[#8ecfc5] flex items-center gap-3 mb-3.5",
								children: [/* @__PURE__ */ jsx("span", { className: "w-[18px] h-[1.5px] bg-[#8ecfc5] rounded-[2px] block" }), "Apercu produit"]
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "text-[clamp(1.875rem,3vw,2.5rem)] font-extrabold tracking-[-.03em] mb-3 text-white",
								children: [
									"Le rapport devient",
									/* @__PURE__ */ jsx("br", {}),
									"l'espace de travail."
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[1.0625rem] text-white/40 max-w-[460px] leading-[1.7]",
								children: "Organisez vos observations exactement comme elles apparaîtront dans le document final."
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "grid lg:grid-cols-2 gap-5 h-auto lg:h-[560px]",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "bg-[#1e2436] border border-white/5 rounded-[18px] p-[1.875rem] flex flex-col overflow-hidden h-[400px] lg:h-auto",
							children: [/* @__PURE__ */ jsx("div", {
								className: "text-[.6rem] font-bold uppercase tracking-[.1em] text-white/25 mb-6 pb-4 border-b border-white/5 shrink-0",
								children: "Editeur"
							}), /* @__PURE__ */ jsx("div", {
								className: "flex-1 overflow-hidden relative",
								children: /* @__PURE__ */ jsxs("div", {
									className: "absolute inset-x-0 top-0 animate-sc-scroll",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "text-base font-bold text-white mb-4 tracking-tight",
											children: "1 Facade"
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "pl-5 border-l-2 border-white/5 mb-10",
											children: [
												/* @__PURE__ */ jsx("div", {
													className: "text-[.72rem] font-semibold text-white/35 mb-2.5",
													children: "1.1 Fissure verticale"
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "bg-black/25 border border-white/5 rounded-lg p-3 mb-3",
													children: [/* @__PURE__ */ jsx("div", {
														className: "text-[.58rem] font-bold uppercase text-white/20 mb-1.5",
														children: "Observation"
													}), /* @__PURE__ */ jsx("p", {
														className: "text-[.7rem] text-white/55 leading-[1.5]",
														children: "Fissuration traversante mesurée a 2 mm d'ouverture au niveau de l'allège."
													})]
												}),
												/* @__PURE__ */ jsx("div", { className: "w-[90px] aspect-[4/3] bg-black/25 border border-white/5 rounded-md mt-2" }),
												/* @__PURE__ */ jsxs("div", {
													className: "mt-6",
													children: [
														/* @__PURE__ */ jsx("div", {
															className: "text-[.72rem] font-semibold text-white/35 mb-2.5",
															children: "1.2 Humidité"
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "bg-black/25 border border-white/5 rounded-lg p-3 mb-3",
															children: [/* @__PURE__ */ jsx("div", {
																className: "text-[.58rem] font-bold uppercase text-white/20 mb-1.5",
																children: "Observation"
															}), /* @__PURE__ */ jsx("p", {
																className: "text-[.7rem] text-white/55 leading-[1.5]",
																children: "Traces de remontées capillaires importantes sur le soubassement."
															})]
														}),
														/* @__PURE__ */ jsx("div", { className: "w-[90px] aspect-[4/3] bg-black/25 border border-white/5 rounded-md mt-2" })
													]
												})
											]
										}),
										/* @__PURE__ */ jsx("div", {
											className: "text-base font-bold text-white mb-4 tracking-tight",
											children: "2 Toiture"
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "pl-5 border-l-2 border-white/5 mb-10",
											children: [/* @__PURE__ */ jsx("div", {
												className: "text-[.72rem] font-semibold text-white/35 mb-2.5",
												children: "2.1 Etanchéité"
											}), /* @__PURE__ */ jsxs("div", {
												className: "bg-black/25 border border-white/5 rounded-lg p-3 mb-3",
												children: [/* @__PURE__ */ jsx("div", {
													className: "text-[.58rem] font-bold uppercase text-white/20 mb-1.5",
													children: "Observation"
												}), /* @__PURE__ */ jsx("p", {
													className: "text-[.7rem] text-white/55 leading-[1.5]",
													children: "Défaut d'étanchéité constaté en périphérie de la souche de cheminée."
												})]
											})]
										})
									]
								})
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "bg-[#1e2436] border border-white/5 rounded-[18px] p-[1.875rem] flex flex-col overflow-hidden bg-white h-[400px] lg:h-auto",
							children: [/* @__PURE__ */ jsx("div", {
								className: "text-[.6rem] font-bold uppercase tracking-[.1em] text-[#9ca3af] mb-6 pb-4 border-b border-[#f0f1f2] shrink-0",
								children: "PDF Généré"
							}), /* @__PURE__ */ jsx("div", {
								className: "flex-1 border border-[#e9eaec] rounded-[10px] overflow-hidden relative",
								children: /* @__PURE__ */ jsxs("div", {
									className: "absolute top-5 inset-x-5 animate-sc-scroll",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "text-[.9375rem] font-extrabold text-[#181d2d] pb-2.5 border-b-2 border-[#181d2d] mb-5 tracking-tight",
											children: "Rapport d'Expertise Technique"
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mb-6",
											children: [
												/* @__PURE__ */ jsx("div", {
													className: "text-[.8rem] font-bold text-[#181d2d] mb-3.5",
													children: "1. Facade"
												}),
												/* @__PURE__ */ jsx("div", {
													className: "text-[.6875rem] font-bold text-[#374151] mb-1.5",
													children: "1.1 Fissure verticale"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "text-[.6875rem] text-[#6b7280] leading-[1.55] mb-3",
													children: "Fissuration traversante mesurée a 2 mm d'ouverture au niveau de l'allège."
												}),
												/* @__PURE__ */ jsx("div", { className: "w-full aspect-[2.5] bg-[#f3f4f6] border border-[#e9eaec] rounded-md mb-4.5" }),
												/* @__PURE__ */ jsx("div", {
													className: "text-[.6875rem] font-bold text-[#374151] mb-1.5 mt-4",
													children: "1.2 Humidité"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "text-[.6875rem] text-[#6b7280] leading-[1.55] mb-3",
													children: "Traces de remontées capillaires importantes sur le soubassement."
												}),
												/* @__PURE__ */ jsx("div", { className: "w-full aspect-[2.5] bg-[#f3f4f6] border border-[#e9eaec] rounded-md mb-4.5" })
											]
										}),
										/* @__PURE__ */ jsxs("div", { children: [
											/* @__PURE__ */ jsx("div", {
												className: "text-[.8rem] font-bold text-[#181d2d] mb-3.5",
												children: "2. Toiture"
											}),
											/* @__PURE__ */ jsx("div", {
												className: "text-[.6875rem] font-bold text-[#374151] mb-1.5",
												children: "2.1 Etanchéité"
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-[.6875rem] text-[#6b7280] leading-[1.55] mb-3",
												children: "Défaut d'étanchéité constaté en périphérie de la souche de cheminée."
											})
										] })
									]
								})
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "features",
				className: "bg-white py-28",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-[1200px] mx-auto px-10",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mb-16",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "text-[.65rem] font-bold uppercase tracking-[.12em] text-[#1a6b63] flex items-center gap-3 mb-3.5",
								children: [/* @__PURE__ */ jsx("span", { className: "w-[18px] h-[1.5px] bg-[#1a6b63] rounded-[2px] block" }), "Fonctionnalités"]
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "text-[clamp(1.875rem,3vw,2.5rem)] font-extrabold tracking-[-.03em] mb-3 text-[#181d2d]",
								children: "Concu pour aller vite."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[1.0625rem] text-[#64748b] max-w-[460px] leading-[1.7]",
								children: "Chaque détail est pensé pour vous faire gagner du temps sur le terrain et au bureau."
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-0 mt-16",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "grid md:grid-cols-2 gap-10 md:gap-20 items-center py-16 border-t border-[#e5e7eb] fade-up-el opacity-0 translate-y-6 transition-all duration-600",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "order-2 md:order-1",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "text-[.65rem] font-bold uppercase tracking-[.1em] text-[#1a6b63] mb-4",
											children: "Structure"
										}),
										/* @__PURE__ */ jsxs("h3", {
											className: "text-[clamp(1.5rem,2.5vw,2rem)] font-extrabold tracking-[-.03em] mb-3.5 text-[#181d2d]",
											children: [
												"Hiérarchie libre,",
												/* @__PURE__ */ jsx("br", {}),
												"numérotation automatique."
											]
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-base text-[#64748b] leading-[1.7] mb-6",
											children: "Créez autant de niveaux que nécessaire. L'outil numérote et réorganise tout seul dès que vous bougez une section."
										}),
										/* @__PURE__ */ jsxs("ul", {
											className: "flex flex-col gap-2.5 m-0 p-0 list-none",
											children: [
												/* @__PURE__ */ jsxs("li", {
													className: "flex items-start gap-2.5 text-[.875rem] text-[#64748b] font-medium leading-[1.5]",
													children: [/* @__PURE__ */ jsx("span", {
														className: "w-[18px] h-[18px] rounded-full bg-[#8ecfc5]/10 border border-[#8ecfc5]/35 flex items-center justify-center shrink-0 mt-[1px]",
														children: /* @__PURE__ */ jsx(CheckIcon, { className: "text-[#1a6b63]" })
													}), "Sections et sous-sections illimitées"]
												}),
												/* @__PURE__ */ jsxs("li", {
													className: "flex items-start gap-2.5 text-[.875rem] text-[#64748b] font-medium leading-[1.5]",
													children: [/* @__PURE__ */ jsx("span", {
														className: "w-[18px] h-[18px] rounded-full bg-[#8ecfc5]/10 border border-[#8ecfc5]/35 flex items-center justify-center shrink-0 mt-[1px]",
														children: /* @__PURE__ */ jsx(CheckIcon, { className: "text-[#1a6b63]" })
													}), "Glisser-déposer pour réorganiser"]
												}),
												/* @__PURE__ */ jsxs("li", {
													className: "flex items-start gap-2.5 text-[.875rem] text-[#64748b] font-medium leading-[1.5]",
													children: [/* @__PURE__ */ jsx("span", {
														className: "w-[18px] h-[18px] rounded-full bg-[#8ecfc5]/10 border border-[#8ecfc5]/35 flex items-center justify-center shrink-0 mt-[1px]",
														children: /* @__PURE__ */ jsx(CheckIcon, { className: "text-[#1a6b63]" })
													}), "Numérotation mise a jour en temps réel"]
												})
											]
										})
									]
								}), /* @__PURE__ */ jsx("div", {
									className: "order-1 md:order-2 bg-[#f7f7f8] border border-[#e5e7eb] rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center relative p-8",
									children: /* @__PURE__ */ jsxs("div", {
										className: "w-full",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "mb-5",
											children: [
												/* @__PURE__ */ jsx("div", {
													className: "text-[.75rem] font-bold text-[#181d2d] mb-2 pb-2 border-b border-[#e5e7eb]",
													children: "1. Facade"
												}),
												/* @__PURE__ */ jsx("div", {
													className: "px-3 py-2 rounded-[7px] border border-[#8ecfc5]/40 bg-[#8ecfc5]/10 text-[#1a6b63] mb-1.5 text-[.7rem] flex items-center justify-between",
													children: "1.1 Fissure verticale"
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "pl-5",
													children: [
														/* @__PURE__ */ jsx("div", {
															className: "px-3 py-2 rounded-[7px] border border-[#e5e7eb] bg-white text-[#64748b] mb-1.5 text-[.7rem] flex items-center justify-between",
															children: "Observation"
														}),
														/* @__PURE__ */ jsx("div", {
															className: "px-3 py-2 rounded-[7px] border border-[#e5e7eb] bg-white text-[#64748b] mb-1.5 text-[.7rem] flex items-center justify-between",
															children: "Photo"
														}),
														/* @__PURE__ */ jsx("div", {
															className: "px-3 py-2 rounded-[7px] border border-[#e5e7eb] bg-white text-[#64748b] mb-1.5 text-[.7rem] flex items-center justify-between",
															children: "Préconisation"
														})
													]
												}),
												/* @__PURE__ */ jsx("div", {
													className: "px-3 py-2 rounded-[7px] border border-[#e5e7eb] bg-white text-[#64748b] mt-1.5 text-[.7rem] flex items-center justify-between",
													children: "1.2 Humidité"
												})
											]
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
											className: "text-[.75rem] font-bold text-[#181d2d] mb-2 pb-2 border-b border-[#e5e7eb]",
											children: "2. Toiture"
										}), /* @__PURE__ */ jsx("div", {
											className: "px-3 py-2 rounded-[7px] border border-[#e5e7eb] bg-white text-[#64748b] mb-1.5 text-[.7rem] flex items-center justify-between",
											children: "2.1 Etanchéité"
										})] })]
									})
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid md:grid-cols-2 gap-10 md:gap-20 items-center py-16 border-t border-[#e5e7eb] fade-up-el opacity-0 translate-y-6 transition-all duration-600",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "order-2",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "text-[.65rem] font-bold uppercase tracking-[.1em] text-[#1a6b63] mb-4",
											children: "Photos"
										}),
										/* @__PURE__ */ jsxs("h3", {
											className: "text-[clamp(1.5rem,2.5vw,2rem)] font-extrabold tracking-[-.03em] mb-3.5 text-[#181d2d]",
											children: [
												"Importez, placez,",
												/* @__PURE__ */ jsx("br", {}),
												"c'est dans le PDF."
											]
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-base text-[#64748b] leading-[1.7] mb-6",
											children: "Associez vos photos directement a chaque observation. Elles s'insèrent automatiquement au bon endroit dans le document généré."
										}),
										/* @__PURE__ */ jsxs("ul", {
											className: "flex flex-col gap-2.5 m-0 p-0 list-none",
											children: [
												/* @__PURE__ */ jsxs("li", {
													className: "flex items-start gap-2.5 text-[.875rem] text-[#64748b] font-medium leading-[1.5]",
													children: [/* @__PURE__ */ jsx("span", {
														className: "w-[18px] h-[18px] rounded-full bg-[#8ecfc5]/10 border border-[#8ecfc5]/35 flex items-center justify-center shrink-0 mt-[1px]",
														children: /* @__PURE__ */ jsx(CheckIcon, { className: "text-[#1a6b63]" })
													}), "Import depuis mobile ou ordinateur"]
												}),
												/* @__PURE__ */ jsxs("li", {
													className: "flex items-start gap-2.5 text-[.875rem] text-[#64748b] font-medium leading-[1.5]",
													children: [/* @__PURE__ */ jsx("span", {
														className: "w-[18px] h-[18px] rounded-full bg-[#8ecfc5]/10 border border-[#8ecfc5]/35 flex items-center justify-center shrink-0 mt-[1px]",
														children: /* @__PURE__ */ jsx(CheckIcon, { className: "text-[#1a6b63]" })
													}), "Plusieurs photos par observation"]
												}),
												/* @__PURE__ */ jsxs("li", {
													className: "flex items-start gap-2.5 text-[.875rem] text-[#64748b] font-medium leading-[1.5]",
													children: [/* @__PURE__ */ jsx("span", {
														className: "w-[18px] h-[18px] rounded-full bg-[#8ecfc5]/10 border border-[#8ecfc5]/35 flex items-center justify-center shrink-0 mt-[1px]",
														children: /* @__PURE__ */ jsx(CheckIcon, { className: "text-[#1a6b63]" })
													}), "Redimensionnement automatique pour le PDF"]
												})
											]
										})
									]
								}), /* @__PURE__ */ jsx("div", {
									className: "order-1 bg-[#f7f7f8] border border-[#e5e7eb] rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center relative p-8",
									children: /* @__PURE__ */ jsxs("div", {
										className: "grid grid-cols-2 gap-3 w-full",
										children: [
											/* @__PURE__ */ jsx("div", { className: "aspect-[4/3] bg-gradient-to-br from-[#dde1e7] to-[#c5cad4] rounded-[9px] border border-[#e5e7eb] relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-br after:from-transparent after:from-50% after:to-white/20" }),
											/* @__PURE__ */ jsx("div", { className: "aspect-[4/3] bg-gradient-to-br from-[#d4dae0] to-[#bfc5cf] rounded-[9px] border border-[#e5e7eb] relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-br after:from-transparent after:from-50% after:to-white/20" }),
											/* @__PURE__ */ jsx("div", { className: "aspect-[4/3] bg-gradient-to-br from-[#e0e4ea] to-[#cdd3db] rounded-[9px] border border-[#e5e7eb] relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-br after:from-transparent after:from-50% after:to-white/20" }),
											/* @__PURE__ */ jsx("div", { className: "aspect-[4/3] bg-gradient-to-br from-[#d8dde5] to-[#c8cfd9] rounded-[9px] border border-[#e5e7eb] relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-br after:from-transparent after:from-50% after:to-white/20" })
										]
									})
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid md:grid-cols-2 gap-10 md:gap-20 items-center py-16 border-y border-[#e5e7eb] fade-up-el opacity-0 translate-y-6 transition-all duration-600",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "order-2 md:order-1",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "text-[.65rem] font-bold uppercase tracking-[.1em] text-[#1a6b63] mb-4",
											children: "Intelligence artificielle"
										}),
										/* @__PURE__ */ jsxs("h3", {
											className: "text-[clamp(1.5rem,2.5vw,2rem)] font-extrabold tracking-[-.03em] mb-3.5 text-[#181d2d]",
											children: [
												"Rédaction professionnelle,",
												/* @__PURE__ */ jsx("br", {}),
												"en un clic."
											]
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-base text-[#64748b] leading-[1.7] mb-6",
											children: "Saisissez vos notes brutes, l'IA les reformule dans un langage technique et professionnel. Vous validez, vous conservez le contrôle."
										}),
										/* @__PURE__ */ jsxs("ul", {
											className: "flex flex-col gap-2.5 m-0 p-0 list-none",
											children: [
												/* @__PURE__ */ jsxs("li", {
													className: "flex items-start gap-2.5 text-[.875rem] text-[#64748b] font-medium leading-[1.5]",
													children: [/* @__PURE__ */ jsx("span", {
														className: "w-[18px] h-[18px] rounded-full bg-[#8ecfc5]/10 border border-[#8ecfc5]/35 flex items-center justify-center shrink-0 mt-[1px]",
														children: /* @__PURE__ */ jsx(CheckIcon, { className: "text-[#1a6b63]" })
													}), "Reformulation contextuelle par observation"]
												}),
												/* @__PURE__ */ jsxs("li", {
													className: "flex items-start gap-2.5 text-[.875rem] text-[#64748b] font-medium leading-[1.5]",
													children: [/* @__PURE__ */ jsx("span", {
														className: "w-[18px] h-[18px] rounded-full bg-[#8ecfc5]/10 border border-[#8ecfc5]/35 flex items-center justify-center shrink-0 mt-[1px]",
														children: /* @__PURE__ */ jsx(CheckIcon, { className: "text-[#1a6b63]" })
													}), "Vocabulaire technique du bâtiment"]
												}),
												/* @__PURE__ */ jsxs("li", {
													className: "flex items-start gap-2.5 text-[.875rem] text-[#64748b] font-medium leading-[1.5]",
													children: [/* @__PURE__ */ jsx("span", {
														className: "w-[18px] h-[18px] rounded-full bg-[#8ecfc5]/10 border border-[#8ecfc5]/35 flex items-center justify-center shrink-0 mt-[1px]",
														children: /* @__PURE__ */ jsx(CheckIcon, { className: "text-[#1a6b63]" })
													}), "Toujours éditable après reformulation"]
												})
											]
										})
									]
								}), /* @__PURE__ */ jsx("div", {
									className: "order-1 md:order-2 bg-[#f7f7f8] border border-[#e5e7eb] rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center relative p-8",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex flex-col gap-3 w-full",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "bg-white border border-[#e5e7eb] rounded-[9px] px-4 py-3.5",
												children: [/* @__PURE__ */ jsx("div", {
													className: "text-[.58rem] font-bold uppercase tracking-[.06em] text-[#9ca3af] mb-1.5",
													children: "Note brute"
												}), /* @__PURE__ */ jsx("div", {
													className: "text-[.7rem] text-[#374151] leading-[1.5]",
													children: "fissure mur gauche, 2mm env, verticale, bas de fenetre"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2 text-[.65rem] font-bold text-[#1a6b63] px-1",
												children: [
													/* @__PURE__ */ jsx(SparkleIcon, { className: "text-[#1a6b63]" }),
													"IA reformule",
													/* @__PURE__ */ jsx("svg", {
														width: "12",
														height: "12",
														viewBox: "0 0 24 24",
														fill: "none",
														stroke: "currentColor",
														strokeWidth: "2.5",
														strokeLinecap: "round",
														strokeLinejoin: "round",
														children: /* @__PURE__ */ jsx("polyline", { points: "6 9 12 15 18 9" })
													})
												]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "bg-[#8ecfc5]/10 border border-[#8ecfc5]/35 rounded-[9px] px-4 py-3.5",
												children: [/* @__PURE__ */ jsx("div", {
													className: "text-[.58rem] font-bold uppercase tracking-[.06em] text-[#1a6b63] mb-1.5",
													children: "Observation reformulée"
												}), /* @__PURE__ */ jsx("div", {
													className: "text-[.7rem] text-[#1a6b63] font-medium leading-[1.5]",
													children: "Fissuration verticale traversante d'une ouverture estimée a 2 mm, localisée sous l'appui de fenêtre du mur porteur gauche."
												})]
											})
										]
									})
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "platform",
				className: "bg-[#f7f7f8] py-28 border-t border-[#e5e7eb]",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-[1200px] mx-auto px-10",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid lg:grid-cols-[1fr_1.1fr] gap-20 items-center",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("div", {
								className: "text-[.65rem] font-bold uppercase tracking-[.12em] text-[#1a6b63] flex items-center gap-3 mb-3.5",
								children: [/* @__PURE__ */ jsx("span", { className: "w-[18px] h-[1.5px] bg-[#1a6b63] rounded-[2px] block" }), "Multi-plateforme"]
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "text-[clamp(1.875rem,3vw,2.5rem)] font-extrabold tracking-[-.03em] mb-3.5 text-[#181d2d]",
								children: "Sur chantier ou au bureau."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[1.0625rem] text-[#64748b] leading-[1.7] max-w-[400px]",
								children: "Commencez sur le terrain depuis votre téléphone, finalisez sur votre ordinateur. Tout synchronisé, en temps réel."
							}),
							/* @__PURE__ */ jsxs("ul", {
								className: "flex flex-col gap-3 m-0 p-0 list-none mt-8",
								children: [
									/* @__PURE__ */ jsxs("li", {
										className: "flex items-center gap-3 text-[.875rem] text-[#64748b] font-medium",
										children: [/* @__PURE__ */ jsx("span", {
											className: "w-[22px] h-[22px] bg-[#8ecfc5]/10 rounded-full flex items-center justify-center shrink-0",
											children: /* @__PURE__ */ jsx(CheckIcon, { className: "text-[#1a6b63] w-2.5 h-2.5" })
										}), "Synchronisation temps réel entre appareils"]
									}),
									/* @__PURE__ */ jsxs("li", {
										className: "flex items-center gap-3 text-[.875rem] text-[#64748b] font-medium",
										children: [/* @__PURE__ */ jsx("span", {
											className: "w-[22px] h-[22px] bg-[#8ecfc5]/10 rounded-full flex items-center justify-center shrink-0",
											children: /* @__PURE__ */ jsx(CheckIcon, { className: "text-[#1a6b63] w-2.5 h-2.5" })
										}), "Prise de photo directement depuis l'app mobile"]
									}),
									/* @__PURE__ */ jsxs("li", {
										className: "flex items-center gap-3 text-[.875rem] text-[#64748b] font-medium",
										children: [/* @__PURE__ */ jsx("span", {
											className: "w-[22px] h-[22px] bg-[#8ecfc5]/10 rounded-full flex items-center justify-center shrink-0",
											children: /* @__PURE__ */ jsx(CheckIcon, { className: "text-[#1a6b63] w-2.5 h-2.5" })
										}), "Interface adaptée a chaque appareil"]
									})
								]
							})
						] }), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col md:flex-row items-center justify-center gap-8",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "w-[195px] h-[390px] bg-white rounded-[36px] border-[7px] border-[#181d2d] p-3 relative shadow-[0_24px_60px_rgba(24,29,45,.15)] shrink-0",
								children: [/* @__PURE__ */ jsx("div", { className: "w-[68px] h-[13px] bg-[#181d2d] absolute top-0 left-1/2 -translate-x-1/2 rounded-b-[10px]" }), /* @__PURE__ */ jsxs("div", {
									className: "mt-[18px]",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "text-[.7rem] font-bold text-[#181d2d] mb-2.5",
											children: "1.1 Fissure"
										}),
										/* @__PURE__ */ jsx("div", { className: "w-full h-[85px] bg-gradient-to-br from-[#e0e4ea] to-[#cdd3db] rounded-[10px] border border-[#e5e7eb] mb-2.5" }),
										/* @__PURE__ */ jsxs("div", {
											className: "bg-[#f9fafb] border border-[#e5e7eb] rounded-lg p-2.5",
											children: [/* @__PURE__ */ jsx("div", { className: "h-[5px] bg-[#e5e7eb] rounded-[3px] mb-1 w-full" }), /* @__PURE__ */ jsx("div", { className: "h-[5px] bg-[#e5e7eb] rounded-[3px] w-[70%]" })]
										})
									]
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex-1 h-[270px] bg-white rounded-[14px] border border-[#e5e7eb] shadow-[0_8px_30px_rgba(24,29,45,.08)] overflow-hidden flex flex-col w-full md:w-auto mt-8 md:mt-0",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-[5px] px-4 py-2.5 border-b border-[#f1f2f4] shrink-0",
									children: [
										/* @__PURE__ */ jsx("div", { className: "w-[9px] h-[9px] rounded-full bg-[#e5e7eb]" }),
										/* @__PURE__ */ jsx("div", { className: "w-[9px] h-[9px] rounded-full bg-[#e5e7eb]" }),
										/* @__PURE__ */ jsx("div", { className: "w-[9px] h-[9px] rounded-full bg-[#e5e7eb]" })
									]
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex flex-1 overflow-hidden",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "w-[120px] border-r border-[#f1f2f4] p-3.5 flex flex-col gap-[7px] shrink-0",
										children: [
											/* @__PURE__ */ jsx("div", { className: "h-[7px] bg-[#eff0f1] rounded w-full" }),
											/* @__PURE__ */ jsx("div", { className: "h-[7px] bg-[#eff0f1] rounded w-[78%]" }),
											/* @__PURE__ */ jsx("div", { className: "h-[7px] bg-[#eff0f1] rounded w-[88%]" }),
											/* @__PURE__ */ jsx("div", { className: "h-[7px] bg-[#eff0f1] rounded w-[65%]" })
										]
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex-1 p-3.5 flex flex-col gap-2",
										children: [
											/* @__PURE__ */ jsx("div", { className: "h-3 bg-[#e9eaec] rounded w-[40%]" }),
											/* @__PURE__ */ jsx("div", { className: "h-[5px] bg-[#f3f4f6] rounded w-full mt-1" }),
											/* @__PURE__ */ jsx("div", { className: "h-[5px] bg-[#f3f4f6] rounded w-[84%]" }),
											/* @__PURE__ */ jsx("div", { className: "h-[72px] bg-[#f9fafb] border border-[#e9eaec] rounded-lg mt-1" })
										]
									})]
								})]
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-[#181d2d] py-32 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_50%_70%_at_50%_100%,rgba(142,207,197,.1)_0%,transparent_60%)]",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-[640px] mx-auto text-center relative z-10 px-10",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "text-[.65rem] font-bold uppercase tracking-[.12em] text-[#8ecfc5] flex items-center justify-center gap-3 mb-5",
							children: [/* @__PURE__ */ jsx("span", { className: "w-[18px] h-[1.5px] bg-[#8ecfc5] rounded-[2px] block" }), "Commencer maintenant"]
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold tracking-[-.035em] text-white mb-5 leading-[1.1]",
							children: [
								"Plus jamais",
								/* @__PURE__ */ jsx("br", {}),
								"un rapport dans ",
								/* @__PURE__ */ jsx("span", {
									className: "text-[#8ecfc5]",
									children: "Word"
								}),
								"."
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-[1.075rem] text-white/45 leading-[1.7] mb-12",
							children: "Rejoignez les professionnels qui gagnent déja des heures sur chaque rapport technique."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex items-center justify-center",
							children: /* @__PURE__ */ jsxs("button", {
								className: "inline-flex items-center justify-center gap-2 bg-[#8ecfc5] hover:brightness-105 text-[#181d2d] px-7 py-3 rounded-lg font-semibold text-base transition-all hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(142,207,197,.4)]",
								children: ["Demander une démonstration", /* @__PURE__ */ jsx(ArrowIcon, {})]
							})
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-[.72rem] text-white/30 mt-5",
							children: "Sans engagement · Aucune carte requise · Prise en main en 10 minutes"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("footer", {
				className: "bg-[#181d2d] border-t border-white/5 py-8",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-[1200px] mx-auto px-10",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ jsx("a", {
							href: "#",
							className: "text-base font-extrabold text-white/50 tracking-[-.035em] no-underline",
							children: "Clic Diag"
						}), /* @__PURE__ */ jsx("span", {
							className: "text-[.78rem] text-white/30",
							children: "2026 Clic Diag. Tous droits réservés."
						})]
					})
				})
			})
		]
	});
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-BihA2EXT.js",
		"imports": ["/assets/jsx-runtime-CMuTcSy_.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": true,
			"module": "/assets/root-BeT5yYPf.js",
			"imports": ["/assets/jsx-runtime-CMuTcSy_.js"],
			"css": ["/assets/root-BcDClsll.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home": {
			"id": "routes/home",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/home-BCXpU1Za.js",
			"imports": ["/assets/jsx-runtime-CMuTcSy_.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-a8b7d90c.js",
	"version": "a8b7d90c",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build/client";
var basename = "/";
var future = {
	"unstable_optimizeDeps": false,
	"v8_passThroughRequests": true,
	"v8_trailingSlashAwareDataRequests": true,
	"unstable_previewServerPrerendering": false,
	"v8_middleware": true,
	"v8_splitRouteModules": true,
	"v8_viteEnvironmentApi": true
};
var ssr = true;
var isSpaMode = false;
var prerender = [];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"routes/home": {
		id: "routes/home",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
