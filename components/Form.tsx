import GenerateButton from "./GenerateButton";
import GroupsInput from "./GroupsInput";

export default function Form() {
  return (
    <div
      className="bg-base-200 p-5 rounded-lg shadow"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <section data-aos="fade-up" data-aos-delay="200">
        <div className="form-control flex flex-col justify-center">
          <GroupsInput />
          <GenerateButton />
        </div>
      </section>
    </div>
  );
}
