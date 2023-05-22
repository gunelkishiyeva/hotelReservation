import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {

  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=baku,madrid,london");
 
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait") : (<>
      <div className="featuredItem">
        <img
          src="https://img.traveltriangle.com/blog/wp-content/uploads/2019/11/cover-Things-To-Do-In-Baku.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Baku</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1653015477/klxnme5j2lv6tn7tagfs.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Madrid</h1>
          <h2>{data[1]}  properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.londonmalanders.com/wp-content/uploads/2020/02/Parks-London.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>London</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div>
      </>)}
    </div>
  );
};

export default Featured;