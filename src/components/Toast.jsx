import { icons } from "@/constants";

const Toast = ({ type = "info", message }) => {
  return (
    <>
      <div
        role="alert"
        className="rounded-xl border border-gray-100 bg-white p-4 shadow-md w-fit"
      >
        <div className="flex items-start gap-4">
          <span className="mt-1">{icons[type]?.icon}</span>

          <div className="flex-1">
            <strong className="block font-medium text-gray-900">
              {" "}
              {icons[type]?.summary}{" "}
            </strong>

            <p className="mt-1 text-sm text-gray-700">{message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toast;
