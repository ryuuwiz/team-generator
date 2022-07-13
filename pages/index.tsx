import type { NextPage } from "next";
import DownloadIcon from "../components/DownloadIcon";
import Form from "../components/Form";
import Items from "../components/Items";
import Team from "../components/Team";

const Home: NextPage = () => {
  return (
    <div className="mt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-2">
        <Items />
        <Form />
      </div>

      <section className="p-6 flex justify-center flex-col">
        <div className="divider mt-2 mb-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
          <Team />
          <Team />
          <Team />
          <Team />
        </div>
        <button className="btn btn-wide btn-success mx-auto mt-4 rounded gap-2">
          <DownloadIcon />
          Export to CSV
        </button>
      </section>
    </div>
  );
};

export default Home;
