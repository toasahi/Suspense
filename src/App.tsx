import { Suspense } from "react";
import { UserList } from "./components/UserList";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1 className="text-5xl">ユーザーリスト</h1>
        <Suspense fallback={<p>Loading</p>}>
          <UserList />
        </Suspense>
      </div>
    </QueryClientProvider>
  );
}

export default App;
