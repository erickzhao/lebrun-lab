import React from "react";
const Map = ({address}) => (
  <iframe
    frameBorder="0"
    style={{ width: "100%", height: "400px", border: "0" }}
    src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyCZ6JNjNv5n4Hzzw04K8ffErcBOWatdFzg&q="+address}
    allowFullScreen
  />
);

export default Map;
