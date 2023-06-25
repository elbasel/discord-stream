interface Props {}

const HomePage = ({}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-8">
      <h1 className="text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text">
        Hello Valencia
      </h1>
      <div>
        <h1 className="text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text">
          <a href="https://discord-stream.vercel.app/">
            https://discord-stream.vercel.app/
          </a>
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
