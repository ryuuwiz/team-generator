import { useTeamStore } from "../store/TeamStore";

export default function Items() {
  const { items, addItems } = useTeamStore((state) => state);

  return (
    <section
      className="p-5 bg-base-200 rounded-lg shadow"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <h2 className="font-bold text-xl mb-2 px-1 text-base-content">Items</h2>
      <textarea
        data-cy="itemsInput"
        className="textarea textarea-primary border-2 w-full h-48"
        placeholder="Type here, each item separated with a new line."
        value={items}
        onChange={(e) => addItems(e.target.value)}
      ></textarea>
    </section>
  );
}
