import { useTeamStore } from "../store/TeamStore";

export default function GroupsInput() {
  const { groups, addGroups } = useTeamStore((state) => state);
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
        onChange={(e) => addGroups(Number(e.target.value))}
        value={groups}
      />
    </>
  );
}
