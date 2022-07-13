import GearIcon from "./GearIcon";
import ShuffleIcon from "./ShuffleIcon";

export default function Form() {
  return (
    <form
      className="bg-base-200 p-5 rounded-lg shadow"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <section data-aos="fade-up" data-aos-delay="200">
        <label className="label">
          <span className="label-text text-lg text-base-content font-bold">
            Groups
          </span>
        </label>
        <div className="form-control flex flex-col justify-center items-center">
          <input
            type="number"
            placeholder="1"
            className="input input-bordered border-base-content rounded w-full"
            min="1"
            value="1"
          />
          <button className="btn btn-block mt-4 btn-primary rounded gap-2">
            <GearIcon />
            Generate
          </button>
          <button className="btn btn-block mt-4 btn-secondary rounded gap-2">
            <ShuffleIcon />
            Rerun
          </button>
        </div>
      </section>
    </form>
  );
}
