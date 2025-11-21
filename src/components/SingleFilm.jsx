import { Col } from "react-bootstrap";

const SingleFilm = function (props) {
  return (
    <Col className="col col-12 col-sm-6 col-lg-2 mb-2 text-center px-1">
      <img
        className=""
        width="auto"
        height="250px"
        src={props.singleElement.Poster}
        alt={props.singleElement.Title}
      />
    </Col>
  );
};

export default SingleFilm;
