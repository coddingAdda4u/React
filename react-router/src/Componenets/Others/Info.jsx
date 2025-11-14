import { useParams } from "react-router-dom";

export default function Info() {
  const { firstname } = useParams();
  return (
    <div className="flex items-center justify-center h-120 bg-linear-to-r from-blue-500 to-purple-600">
      <h1 className="text-5xl font-bold text-white">Hello, {firstname}!</h1>
    </div>
  );
}
