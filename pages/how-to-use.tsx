import type { NextPage } from "next";

const HowToUse: NextPage = () => {
  return (
    <div className="mx-auto w-full md:w-6/12 p-4 text-base-content">
      <h1
        className="font-bold text-3xl text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        How To Use
      </h1>
      <section className="my-8" data-aos="fade-up" data-aos-delay="200">
        <h2 className="font-bold text-2xl">1. Add item</h2>
        <p>Add one item to each new line, for example.</p>
        <div className="bg-base-100 border-2 border-primary p-4 rounded my-2 w-48">
          <p>item 1</p>
          <p>item 2</p>
        </div>
      </section>
      <section className="my-8" data-aos="fade-up" data-aos-delay="300">
        <h2 className="font-bold text-2xl">2. How many groups ?</h2>
        <p>
          How many groups will be formed in total? For example, the total items
          are 6 and the group input is 2. Then it will divide the data into two
          groups of three items each.
        </p>
      </section>
      <section className="my-8" data-aos="fade-up" data-aos-delay="400">
        <h2 className="font-bold text-2xl">3. Generate</h2>
        <p>To make and view the output, click generate.</p>
      </section>
      <section className="my-8" data-aos="fade-up" data-aos-delay="500">
        <h2 className="font-bold text-2xl">4. Rerun</h2>
        <p>Click "rerun" to re-shuffle the groups.</p>
      </section>
      <section className="my-8" data-aos="fade-up" data-aos-delay="600">
        <h2 className="font-bold text-2xl">5. Export to CSV</h2>
        <p>To turn all groups into a spreadsheet, click "Export to CSV."</p>
      </section>
    </div>
  );
};

export default HowToUse;
