import { Suspense } from "react";
import { UserList } from "./components/UserList";
import { QueryClient, QueryClientProvider } from "react-query";
import { Counter } from "./redux/Counter";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1 className="text-5xl">ユーザーリスト</h1>
        <Suspense fallback={<h1 className="text-5xl text-red-600">Loading</h1>}>
          <UserList />
        </Suspense>
        <Counter />
      </div>
    </QueryClientProvider>
  );
}

export default App;
