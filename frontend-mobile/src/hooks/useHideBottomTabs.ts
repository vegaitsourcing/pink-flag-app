import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from './useRedux';
import { useEffect } from 'react';
import { toggleCalendarOnboardingStatus } from '@pf/reducers/settingsReducer';

export const useHideBottomTabs = (): void => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(toggleCalendarOnboardingStatus());
  }, [dispatch]);

  useEffect(() => {
    navigation.addListener('beforeRemove', () => {
      dispatch(toggleCalendarOnboardingStatus());
    });
  }, [dispatch, navigation]);
};
