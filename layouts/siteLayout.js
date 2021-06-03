import styles from "../styles/Layout.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useDetails, useMeta, useProfile } from "../utils/apiHooks";

const SiteLayout = (props) => {
  const { details, isDetailsLoading, isDetailsError } = useDetails();
  const { profile, isProfileLoading, isProfileError } = useProfile();

  const isLoading = isDetailsLoading || isProfileLoading;
  const isError = isDetailsError || isProfileError;

  if (isError) {
    return <h1>Failed to Load</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const title = details.title;

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <a>
            <Image
              src={details.logoImage}
              alt="Realtor.com Logo"
              width={50}
              height={50}
            />
          </a>
        </Link>
        <h1>{title}</h1>
        <Link href="/profile">
          <a>Welcome, {profile.firstName}</a>
        </Link>
      </header>

      <main className={styles.main}>{props.children}</main>
    </div>
  );
};

export default SiteLayout;
