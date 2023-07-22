"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchTopics } from "./api/TopicApi";

const HomePage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    fetchTopics().then((result) => {
      console.log(result);
      router.push(`/${result.data[0].id}`);
    });
  }, []);

  return null;
};

export default HomePage;
