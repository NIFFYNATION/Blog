import { Helmet } from "react-helmet-async";
import Advertisement from "../components/Advertisement";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - News Metrics</title>
        <meta name="description" content="News Metrics Terms of Service" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold my-8">Terms of Service</h1>
        {/* Add content for the Terms of Service page here */}
        <div className="w-3/4 mx-auto">
  <Advertisement isHomePage={false} />
</div>
      </div>
    </>
  );
};

export default TermsOfService;