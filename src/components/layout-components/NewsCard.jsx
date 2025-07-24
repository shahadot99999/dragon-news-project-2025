import { FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
  } = news;

  return (
    <div className="card w-full bg-base-100 shadow-xl border rounded-xl">
      {/* Header Section */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src={author?.img || "https://via.placeholder.com/40"} // Fallback image
              alt="author"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h2 className="font-semibold text-sm">{author?.name || "Unknown Author"}</h2>
            <p className="text-xs text-gray-500">
              {author?.published_date?.split(" ")[0] || "No Date"}
            </p>
          </div>
        </div>

        <div className="flex gap-2 text-gray-500">
          <button className="btn btn-ghost btn-sm btn-circle">
            <i className="ri-bookmark-line"></i>
          </button>
          <button className="btn btn-ghost btn-sm btn-circle">
            <i className="ri-share-line"></i>
          </button>
        </div>
      </div>

      {/* Body Section */}
      <div className="card-body p-4">
        <h2 className="card-title text-base">{title}</h2>
        <figure className="my-3 rounded-lg overflow-hidden">
          <img
            src={thumbnail_url || "https://via.placeholder.com/300x200"} // Fallback thumbnail
            alt="news thumbnail"
            className="w-full h-auto"
          />
        </figure>
        <p className="text-sm text-gray-700">
          {details?.length > 200
            ? `${details.slice(0, 200)}...`
            : details || "No details available."}
          <span className="text-blue-500 font-medium ml-1 cursor-pointer">
            Read More
          </span>
        </p>
      </div>

      {/* Footer Section */}
      <div className="px-4 pb-4 flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-500">
          <span className="text-base">★</span>
          <span>{rating?.number || "N/A"}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
