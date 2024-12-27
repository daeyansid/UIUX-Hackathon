import MainLayout from "./mainLayout";
import HomePage from "./pages/home";

export default function page() {
  return (
    <MainLayout>
      {<HomePage />}
    </MainLayout>
  );
}
