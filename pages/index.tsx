import Head from "next/head";
import Image from "next/image";
import GradientLayout from "../components/gradientLayout";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <GradientLayout
    roundImage
      subtitle="profile"
      title="Raage Diriye"
      description="fiften public playlist"
      color="blue"
      image={"https://media-exp1.licdn.com/dms/image/C4D03AQH_bk5B5GMMFQ/profile-displayphoto-shrink_800_800/0/1606729253648?e=1660176000&v=beta&t=QwXgD7nIqtEsCKB0TpG8Ej3h6PvPuNX3eXuZi7r7uSg"}
    >
      <div>homepage</div>
    </GradientLayout>
  );
};

export default Home;
