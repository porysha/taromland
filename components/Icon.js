const P = {
  check: ["M20 6 9 17l-5-5"],
  phone: ["M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"],
  pin: ["M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z", "M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"],
  truck: ["M1 3h15v13H1z", "M16 8h4l3 3v5h-7z", "M5.5 16a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z", "M18.5 16a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"],
  leaf: ["M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z", "M2 21c0-3 1.9-5.4 5.1-6 2.4-.4 4.9-1.5 6.9-3.5"],
  tag: ["M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z", "M7 7h.01"],
  store: ["M3 9l1-5h16l1 5", "M3 9v11h18V9", "M9 20v-6h6v6"],
  chat: ["M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 20l1.2-5A8.4 8.4 0 1 1 21 11.5z"],
  chev: ["m6 9 6 6 6-6"],
  arrow: ["M19 12H5", "m12 19-7-7 7-7"],
  menu: ["M4 6h16", "M4 12h16", "M4 18h16"],
};
export default function Icon({ n, className = "size-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {P[n].map((d) => <path key={d} d={d} />)}
    </svg>
  );
}
