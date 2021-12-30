import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ id }) {
  return (
    <div className="container mx-auto bg-[#31ba9c]">
      <h2 className="font-bold text-white text-2xl text-center mt-2 pt-6">
        Hoy es el último día
      </h2>
      <h2 className="font-bold text-white text-4xl text-center -mt-5 pt-6">
        de tu vida de pobre
      </h2>
      <Image
        priority
        src="/images/financialimg2.webp"
        className="img-fluid mx-auto text-center"
        height={783}
        width={1024}
        alt="bla"
      />
      <div className="text-center">
        <Link href={`/questions/${id}`}>
          <a className="rounded-lg p-3 bg-yellow-400 text-black text-center mx-auto">
            Start Assessment
          </a>
        </Link>
      </div>
    </div>
  );

  // export default async function getServerSideProps() {
  //   // Fetch data from external API
  //   const apiUrl = "http://localhost:3000/api/questions";
  //   const response = await fetch(apiUrl);
  //   const data = await response.json();
  //   console.log(data);
  //   //  setQuestions(data);
  //   //  console.log(questions);
  // }

  return <div></div>;
}
