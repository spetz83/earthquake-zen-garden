import styles from "../../styles/Quake.module.css";
import { useQuake } from "../../utils/apiHooks";
import { useRouter } from "next/router";
import { DateTime } from "luxon";
import { getDate } from "../../utils/dates";

export default function QuakeDetail(props) {
  const router = useRouter();
  const { id } = router.query;
  const { quake, isQuakeLoading, isQuakeError } = useQuake(id);

  if (isQuakeLoading) {
    return <h1>Loading...</h1>;
  }

  if (isQuakeError) {
    return <h1>Failed to Load</h1>;
  }

  const quakeDetails = quake.properties;

  const title = `M ${quakeDetails.mag} - ${quakeDetails.place}`;

  return (
    <div className={styles.profileContainer}>
      <h1>{title}</h1>
      <div className={styles.detailsContainer}>
        <ul className="headerList">
          <li>Title</li>
          <li>Magnitude</li>
          <li>Time</li>
          <li>Status</li>
          <li>Tsunami</li>
          <li>Type</li>
        </ul>

        <ul className="detailList">
          <li>{title}</li>
          <li>{quakeDetails.mag}</li>
          <li>{getDate(quake).toLocaleString(DateTime.DATETIME_MED)}</li>
          <li>{quakeDetails.status}</li>
          <li>{quakeDetails.tsunami}</li>
          <li>{quakeDetails.type}</li>
        </ul>
      </div>
    </div>
  );
}
