import messaging from '@react-native-firebase/messaging';

class NotificationServices {
  foregroundMessage!: () => void;

  async requestPermission() {
    try {
      await messaging().requestPermission();
      const token = messaging().getToken();
    } catch {
      console.error('Get token error')
    }
  }

  getBackgroundMessage(): void {
    const unsubscribe = messaging().setBackgroundMessageHandler(async notification => {
      console.log("setBackground", notification);
    });

    return unsubscribe;
  }

  getInitialNotification() {
    messaging().getInitialNotification().then(message => {
      console.log("get initial notification", message);
    })
  }

  getForegroundMessage(): () => void {
    const unsubscribe = this.foregroundMessage = messaging().onMessage(async message => {
      console.log('onMessage', message);
    })

    return unsubscribe;
  }
}

export default new NotificationServices();
