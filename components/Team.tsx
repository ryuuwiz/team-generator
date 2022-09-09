type Props = {
  team: string[];
  index: number;
};

export default function Team({ team, index }: Props) {
  const teamId = index + 1;
  return (
    <div
      data-cy="team"
      className="card bg-primary text-primary-content shadow-xl"
      data-aos="zoom-in"
      data-aos-delay={teamId + "00"}
    >
      <div className="card-body">
        <h2 className="card-title">Team {teamId}</h2>
        <ul>
          {team ? team.map((item, index) => <li key={index}>{item}</li>) : ""}
        </ul>
      </div>
    </div>
  );
}
