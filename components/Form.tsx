import GearIcon from "./GearIcon";
import GroupsInput from "./GroupsInput";
import ShuffleIcon from "./ShuffleIcon";

export default function Form() {
  return (
    <form
      className="bg-base-200 p-5 rounded-lg shadow"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <section data-aos="fade-up" data-aos-delay="200">
        <div className="form-control flex flex-col justify-center">
          <GroupsInput />
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
