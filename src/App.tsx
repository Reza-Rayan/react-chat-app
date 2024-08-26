// Custom Components
import Chat from "./components/chat/Chat";
import List from "./components/list/List";
import Detail from "./components/detail/Detail";

const App = () => {
  return (
    <section className="chat_container flex bg-[#21212180] rounded-xl backdrop-blur-lg overflow-hidden ">
      <List />
      <Chat />
      <Detail />
    </section>
  );
};

export default App;
