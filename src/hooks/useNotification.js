import Toast from "@/components/Toast";
import { useCallback, useState } from "react";

const useNotification = () => {
  const [notification, setNotification] = useState(null);

  let timer;

  const triggerNotification = useCallback((notificationProps) => {
    clearTimeout(timer);
    setNotification(notificationProps);
    timer = setTimeout(() => {
      setNotification(null);
    }, notificationProps.duration);
  }, []);

  const NotificationComponent = notification ? (
    <div className="style">
      <Toast {...notification} />
    </div>
  ) : null;

  return { NotificationComponent, triggerNotification };
};

export default useNotification;
