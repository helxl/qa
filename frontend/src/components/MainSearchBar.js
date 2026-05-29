import React, { useState } from "react";
const SAMPLES = [
  "شخص استدان مني مبلغاً ويرفض السداد.",
  "نزاع على أرض.",
  "دعوى نفقة.",
  "قضية سرقة.",
  "قضية اعتداء."
];

export default function MainSearchBar() {
  const [value, setValue] = useState("");
  return (
    <form>
      <input
        type="text"
        placeholder="اكتب سؤالك القانوني أو تفاصيل القضية..."
        value={value}
        onChange={e => setValue(e.target.value)}
        style={{
          width: "100%",
          fontSize: "18px",
          padding: "15px 17px",
          borderRadius: 7,
          border: "1.5px solid #ddd",
          direction: "rtl"
        }}
        dir="rtl"
      />
      <div style={{ margin: "7px 0", color: "#888" }}>
        <b>أمثلة:</b>{" "}
        {SAMPLES.map((ex, i) => (
          <span
            key={ex}
            style={{
              cursor: "pointer",
              marginRight: 5,
              textDecoration: "underline"
            }}
            onClick={() => setValue(ex)}
          >
            {ex}
            {i < SAMPLES.length - 1 ? "، " : ""}
          </span>
        ))}
      </div>
      <button
        type="submit"
        style={{
          background: "#19376d",
          color: "white",
          border: "none",
          borderRadius: 7,
          fontSize: 18,
          padding: "10px 27px",
          marginTop: 15,
          cursor: "pointer"
        }}
      >
        تحليل القضية
      </button>
    </form>
  );
}
