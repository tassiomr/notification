import { useEffect, useState } from 'react';
import * as Notifications from 'expo-notifications';
import notificationService from './notification.service';


function useNotification() {
  useEffect(() => {
    notificationService.requestPermission();
  }, [])

  useEffect(() => {
    "entrei aqui"
    const unsubscribe = Notifications.addNotificationResponseReceivedListener(response => {
      "entrei aqui 12"
      console.log(response);
      if (response) {
        "entrei aqui 13"
        console.log(response);
      }
    });
  }, [])

  useEffect(() => {

  }, [])


  return null;
}

export default useNotification;


