import Categories from "@/components/Categories";
import NewButton from "@/components/NewButton";

const page = () => {
  return (
    <div>
      <Categories />
      <NewButton path="categories" />
    </div>
  );
};

export default page;
