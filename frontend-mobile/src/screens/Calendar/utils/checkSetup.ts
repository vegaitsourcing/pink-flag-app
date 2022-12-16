import { CALENDAR_SETUP_KEY } from '@pf/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const resetSetup = async (): Promise<void> => await AsyncStorage.setItem('@storage_Key', JSON.stringify(false));

/**
 * Checks if user has already completed calendar onboarding or not.
 * @returns Boolean indicator of setup status.
 */
export const checkSetup = async (): Promise<boolean> => {
  try {
    const isSetupAlreadyDone = await AsyncStorage.getItem(CALENDAR_SETUP_KEY);

    if (isSetupAlreadyDone === null) {
      return false;
    }

    return !!JSON.parse(isSetupAlreadyDone);
  } catch (e) {
    await resetSetup();
  }

  return false;
};
