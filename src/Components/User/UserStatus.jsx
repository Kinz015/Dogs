import React, { useEffect } from "react";
import Head from "../Helper/Head";
import useFetch from "../../Hooks/useFetch";

const UserStatus = () => {
  const {data, error, loading, request} = useFetch()
  useEffect(() => {
    async function getData() {
      const {url, response} = GET_ST
    }
  }, [request])

  return (
    <div>
      <Head title="Estatísticas" />
      Estatísticas
    </div>
  );
};

export default UserStatus;
