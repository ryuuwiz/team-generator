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
        data-cy="groupsInput"
        type="number"
        placeholder="0"
        className="input input-bordered border-2 border-primary rounded w-full"
        onChange={(e) => addGroups(Number(e.target.value))}
        value={String(groups)}
      />
    </>
  );
}
