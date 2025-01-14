import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import GithubButton from "../components/Buttons/Github";
import { Layout } from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <main className={styles.main}>
          <div>
            <h1 className={styles.title}> Now make your own ticket 😎</h1>
            <p className={styles.description}>
              Generate a unique ticket image with your GitHub profile.
            </p>
          </div>
          <GithubButton />
          <div className={styles.ticket_container}>
            <img className={styles.ticket} src="/img/ticket.png" alt="Ticket" />
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Home;
