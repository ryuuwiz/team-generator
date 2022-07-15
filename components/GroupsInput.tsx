export default function GroupsInput() {
  return (
    <>
      <label className="label">
        <span className="label-text text-lg text-base-content font-bold">
          Groups
        </span>
      </label>
      <input
        type="number"
        placeholder="1"
        className="input input-bordered border-base-content rounded w-full"
        min="1"
        value="1"
      />
    </>
  );
}
