import Card from '@/Components/Card';
import { Bricolage } from '@/Utils/fonts';

const Projects: React.FC = () => {
  return (
    <>
      <p className={`text-4xl mt-8 font-bold flex justify-center p-4 mb-4 ${Bricolage}`}> Projects</p>
      <div className="grid grid-cols-2 gap-6 mx-96 justify-center">
        <Card
          Title="React Flip game"
          Desc="The application is about a memory game make eith typescript and react"
        />
        <Card Title="React Flip game" />
        <Card Title="React Flip game" />
        <Card Title="React Flip game" />
        <Card Title="React Flip game" />
        <Card Title="React Flip game" />
      </div>
    </>
  );
};

export default Projects;
