import { useEffect, useState } from 'react';

import notificationService from './notification.service';


function useNotification() {
  const [data, setData] = useState(null);

  useEffect(() => {
    notificationService.requestPermission();
  }, [])

  useEffect(() => {
    return notificationService.getForegroundMessage();
  }, [])

  return null;
}

export default useNotification;


