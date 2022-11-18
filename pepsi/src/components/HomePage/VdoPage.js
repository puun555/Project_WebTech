import "./VdoPage.css";
const VdoPage = () => {
  return (
    <div className="vdo-container">
        <video className="vdo" autoPlay loop controls muted poster="vdo/poster.png">
            <source src="vdo/vdo.mp4"></source>
        </video>
    </div>
  );
};
export default VdoPage;
