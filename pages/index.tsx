import type { NextPage } from "next";
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-file-earmark-arrow-down"
            viewBox="0 0 16 16"
          >
            <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z" />
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
          </svg>
          Export to CSV
        </button>
      </section>
    </div>
  );
};

export default Home;
