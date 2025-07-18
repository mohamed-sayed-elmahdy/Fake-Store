/* eslint-disable react/prop-types */
export default function Error({ message }) {
  return (
    <div className="text-center text-red-600 py-10 font-bold text-lg">
      {message}
    </div>
  );
}