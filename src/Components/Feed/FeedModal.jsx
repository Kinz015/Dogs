import React, { useEffect } from "react";
import styles from "./FeedPhotoItem.module.css";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "../Photo/PhotoContent";

const FeedModal = ({ photo }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options)
  }, [photo, request]);

  return <div>

      {error && <Error error={error}/>}
      {loading && <Loading loading={loading}/>}
      {data && <PhotoContent data={data} /> }
  </div>;
};

export default FeedModal;
