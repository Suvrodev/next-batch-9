import Image from "next/image";

import tailwindImage1 from "../../images/talwind.png";

export default function Home() {
  return (
    <main className="">
      <h1>This is Home Page</h1>
      <div className="flex justify-center">
        {/* <img src={tailwindImage1} alt="" height="1000" width="750" /> */}
        <Image src={tailwindImage1} alt="" height={450} width={650} />
      </div>
    </main>
  );
}
