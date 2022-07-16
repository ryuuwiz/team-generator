import type { NextPage } from "next";
import Form from "../components/Form";
import Items from "../components/Items";
import Team from "../components/Team";
import { useTeamStore } from "../store/TeamStore";

const Home: NextPage = () => {
  const teams = useTeamStore((state) => state.teams);
  return (
    <div className="mt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-2">
        <Items />
        <Form />
      </div>

      <section className="p-6 flex justify-center flex-col">
        <div className="divider mt-2 mb-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4 ">
          {teams
            ? teams.map((team, index) => (
                <Team team={team} index={index} key={index} />
              ))
            : ""}
        </div>
      </section>
    </div>
  );
};

export default Home;
