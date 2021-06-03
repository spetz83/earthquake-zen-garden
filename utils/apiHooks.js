import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useDetails() {
  const { data, error } = useSWR("/api/details", fetcher);
  return {
    details: data,
    isDetailsLoading: !error && !data,
    isDetailsError: error,
  };
}

export function useMeta() {
  const { data, error } = useSWR("/api/details/meta", fetcher);
  return {
    meta: data,
    isMetaLoading: !error && !data,
    isMetaError: error,
  };
}

export function useQuakes() {
  const { data, error } = useSWR("/api/quakes", fetcher);
  return {
    quakes: data,
    isQuakesLoading: !error && !data,
    isQuakesError: error,
  };
}

export function useProfile() {
  const { data, error } = useSWR("/api/profiles", fetcher);
  return {
    profile: data,
    isProfileLoading: !error && !data,
    isProfileError: error,
  };
}
