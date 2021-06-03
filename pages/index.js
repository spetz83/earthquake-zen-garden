import MaterialTable from "@material-table/core";
import Link from "next/link";
import { DateTime } from "luxon";
import { getDate } from "../utils/dates";
import { useMeta, useQuakes } from "../utils/apiHooks";

export default function Home(props) {
  const { quakes, isQuakesLoading, isQuakesError } = useQuakes();
  const { meta, isMetaLoading, isMetaError } = useMeta();

  const isError = isQuakesError || isMetaError;
  const isLoading = isQuakesLoading || isMetaLoading;

  if (isError) {
    return <h1>Failed to Load</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const linkRenderer = (row) => {
    return (
      <Link href={`/quakes/${row.id}`}>
        <a>{row.properties.place}</a>
      </Link>
    );
  };

  const dateTimeRenderer = (row) => {
    return getDate(row).toLocaleString(DateTime.DATETIME_MED);
  };

  const columns = [
    { field: "properties.place", title: "Title", render: linkRenderer },
    { field: "properties.mag", title: "Magnitude" },
    { field: "properties.time", title: "Time", render: dateTimeRenderer },
  ];

  return (
    <div className="content-container">
      <h1>{meta.title}</h1>
      <MaterialTable
        columns={columns}
        data={quakes}
        options={{
          paging: false,
          search: false,
          toolbar: false,
          sorting: true,
        }}
      />
    </div>
  );
}
