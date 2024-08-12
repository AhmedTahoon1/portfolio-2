import "./errorPage.scss";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <>
      <div className="error-page">
        <p className="text">انت رايح فين ياعم بطل قلة أدب بقى</p>
        <Link to="/" className="back-home">
          ارجع الى الصفحة الرئيسية
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
