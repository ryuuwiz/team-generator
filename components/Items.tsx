import { useState } from "react";

export default function Items() {
  const [value, setValue] = useState("");

  function handleInput(data: string): void {
    setValue(data);
  }

  return (
    <section
      className="p-5 bg-base-200 rounded-lg shadow"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <h2 className="font-bold text-xl mb-2 px-1 text-base-content">Items</h2>
      <textarea
        className="textarea textarea-primary border-2 w-full h-48"
        placeholder="Type here, each item separated with a new line."
        onChange={(e) => handleInput(e.target.value)}
        value={value}
      ></textarea>
    </section>
  );
}
