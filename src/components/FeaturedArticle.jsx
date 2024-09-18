import { Link } from "react-router-dom";
import { format } from "date-fns";
import ArticleStructuredData from "./ArticleStructuredData";

const FeaturedArticle = ({
  id,
  image,
  category,
  title,
  author,
  description,
  date,
}) => (
  <>
  <ArticleStructuredData 
    article={{id, image, title, author, description, date, category: "Business"}}
  />
  <Link
    to={`/article/${id}`}
    className="block hover:bg-gray-50 transition-colors duration-200 border-b border-gray-200 last:border-b-0"
  >
    <div className="p-4 @container">
      <div className="flex flex-col items-stretch justify-start rounded-xl sm:flex-row sm:items-start">
        <div
          className="w-full h-48 sm:h-full bg-center bg-no-repeat bg-cover rounded-xl sm:w-1/2 lg:w-2/5 overflow-hidden"
          style={{ backgroundImage: `url("${image}")` }}
        >
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="flex w-full grow flex-col items-stretch justify-center gap-2 py-4 sm:px-4">
          <p className="text-[#637588] text-sm font-normal leading-normal">
            {category} • {format(new Date(date), "MMMM d, yyyy • h:mm a")}
          </p>
          <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] sm:text-xl lg:text-2xl">
            {title}
          </h3>
          <p className="text-[#637588] text-base font-normal leading-normal">
            {description}
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <p className="text-[#637588] text-base font-normal leading-normal">
              By: {author}
            </p>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-red-600 text-white text-sm font-medium leading-normal mt-2 sm:mt-0">
              <span className="truncate">Read More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
   
  </Link>
</>
    
);

export default FeaturedArticle;
