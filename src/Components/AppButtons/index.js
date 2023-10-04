import "./index.css";

const AppButtons = (props) => {
  const { each, activeTabId, onChangeTab } = props;
  const { tabId, displayText } = each;
  const tabActive = activeTabId ? "active" : null;
  const onClickTab = () => {
    onChangeTab(tabId);
  };
  return (
    <li className="tab-items">
      <button
        className={`tab-btn ${tabActive}`}
        type="button"
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  );
};
export default AppButtons;
