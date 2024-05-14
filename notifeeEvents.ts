import notifee from '@notifee/react-native';

export function notifeeEvents() {
  notifee.getInitialNotification().then(notification => {
    console.log('notifee', notification);
  })
}