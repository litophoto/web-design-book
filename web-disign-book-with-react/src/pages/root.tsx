import TabSimpleExample from "../components/YankeeHedgehog/TabSimpleExample";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>

        <a href="/Index">Index</a>
        <TabSimpleExample></TabSimpleExample>
        
      </div>
      <div id="detail"></div>
    </>
  );
}