import "./index.css";

const AppItems = (props) => {
  const { each } = props;
  const { appName, imageUrl } = each;
  return (
    <li className="app-item-card">
      <img src={imageUrl} alt={appName} className="app-img" />
      <h1 className="app-name">{appName}</h1>
    </li>
  );
};
export default AppItems;
