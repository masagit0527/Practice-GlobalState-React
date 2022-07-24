import { UserProvider } from "./providers/UserProvider";
import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "ショウ",
  image: "https://source.unsplash.com/vmBik4xv27s",
  email: "test@example.com",
  phone: "0120-000-111",
  company: {
    name: "テスト株式会社"
  },
  website: "htttps://google.com"
};

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
