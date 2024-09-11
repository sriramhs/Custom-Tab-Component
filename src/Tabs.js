export default function Tabs({ setTab, tabs, activeTab, disabledTabs }) {
  return (
    <>
      <div className="tabs">
        {tabs.map((item) => {
          return (
            <div
              onClick={() => {
                if (!disabledTabs.includes(item)) {
                  setTab(item?.value);
                }
              }}
              key={item}
              className={
                disabledTabs.includes(item)
                  ? "disabled"
                  : activeTab === item?.value
                  ? "active-tab"
                  : "tab"
              }
            >
              {item?.label}
            </div>
          );
        })}
      </div>
    </>
  );
}

export function DisplayTab({ tabValue, contentValue, children }) {
  if (tabValue === contentValue) return <>{children}</>;
  else {
    return <></>;
  }
}
