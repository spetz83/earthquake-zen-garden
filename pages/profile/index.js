import styles from "../../styles/Profile.module.css";
import { useProfile } from "../../utils/apiHooks";
import Image from "next/image";

export default function ProfilePage() {
  const { profile, isProfileLoading, isProfileError } = useProfile();

  if (isProfileLoading) {
    return <h1>Loading...</h1>;
  }

  if (isProfileError) {
    return <h1>Failed to Load</h1>;
  }

  return (
    <div className="content-container">
      <h1>Profile</h1>
      <div className={styles.profileContainer}>
        <div>
          <Image
            src={profile.avatarImage}
            alt="Sally Avatar Image"
            width={250}
            height={250}
          />
        </div>
        <div className={styles.midRow}>
          <ul className="headerList">
            <li>First name</li>
            <li>Last name</li>
            <li>Phone</li>
            <li>Email</li>
            <li>Bio</li>
          </ul>
        </div>
        <div className={styles.row}>
          <ul className="detailList">
            <li>{profile.firstName}</li>
            <li>{profile.lastName}</li>
            <li>{profile.phone}</li>
            <li>{profile.email}</li>
            <li>{profile.bio}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
