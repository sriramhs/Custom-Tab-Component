import Tabs, { DisplayTab } from "./Tabs";
import "./styles.css";
import { useState, Suspense, lazy } from "react";
const Lazycomp1 = lazy(() => import("./Comp1"));
const Lazycomp2 = lazy(() => import("./Comp2"));
const Lazycomp3 = lazy(() => import("./Comp3"));

export default function App() {
  const tabs = [
    { value: 1, label: "First Tab" },
    { value: 2, label: "Second Tab" },
    { value: 3, label: "ThirdTab" },
  ];
  const [tab, setTab] = useState(3);
  return (
    <div className="App">
      {/* <h1>Sriram H S - Medium Article</h1> */}
      <Tabs
        setTab={setTab}
        tabs={tabs}
        activeTab={tab}
        disabledTabs={[tabs[1]]}
      />
      <DisplayTab tabValue={tab} contentValue={1}>
        <Suspense fallback={<h1>loading...</h1>}>
          <Lazycomp1 />
        </Suspense>
      </DisplayTab>
      <DisplayTab tabValue={tab} contentValue={2}>
        <Suspense fallback={<h1>loading...</h1>}>
          <Lazycomp2 />
        </Suspense>
      </DisplayTab>
      <DisplayTab tabValue={tab} contentValue={3}>
        <Suspense fallback={<h1>loading...</h1>}>
          <Lazycomp3 />
        </Suspense>
      </DisplayTab>
    </div>
  );
}
