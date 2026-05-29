import React from "react";
const sections = [
  "تحليل القضايا",
  "مكتبة القوانين اليمنية",
  "البحث القانوني الذكي",
  "إنشاء المستندات القانونية",
  "تقييم قوة القضية",
  "الأحكام والسوابق القضائية",
  "المدرب القضائي"
];
const colors = [
  "#19376d", "#eeba5a", "#19376d", "#eeba5a", "#19376d", "#eeba5a", "#19376d"
];

export default function Sections() {
  return (
    <div style={{
      maxWidth:470,
      margin:"25px auto 10px auto",
      display:"grid",
      gridTemplateColumns:"1fr 1fr",
      gap:12
    }}>
      {sections.map((sec, i) => (
        <div
          key={sec}
          style={{
            background: colors[i],
            color: i % 2 === 0 ? "#fff" : "#19376d",
            borderRadius: 8,
            fontWeight:"bold",
            fontSize:"1.07rem",
            textAlign:"center",
            padding:"25px 9px"
          }}
        >
          {sec}
        </div>
      ))}
    </div>
  );
}
