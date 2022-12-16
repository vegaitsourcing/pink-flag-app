import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useRef, useState } from 'react';
import PagerView from 'react-native-pager-view';
import { ScrollIndicator } from './components';
import {
  NameInputScreen,
  OverviewScreen,
  BirthdayInputScreen,
  PeriodInputScreen,
  CalendarInputScreen,
} from './screens';
import { Container, StyledPagerView, IndicatorContainer, Footer, StyledPrimaryButton } from './styles';

const PAGE_MARGIN = 40;
const SLIDE_COUNT = 4;

const ButtonContents = ['Sledeće', 'Sledeći korak', 'Sledeći korak', 'Sledeći korak', 'Završi'];

export const OnboardingScreen: React.FC = () => {
  const { goBack } = useNavigation();
  const pagerViewRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [buttonStates, setButtonStates] = useState([false, true, true, true, true]);
  const notFirstPage = currentPage !== 0;

  const handleOnButtonPress = useCallback((): void => {
    if (currentPage === SLIDE_COUNT) {
      goBack();
      return;
    }
    const nextPage = currentPage + 1;
    pagerViewRef.current?.setPage(nextPage);
    setCurrentPage(nextPage);
  }, [currentPage, goBack]);

  const onInputChange = useCallback(
    (isValid: boolean) => {
      const newStates = [...buttonStates];
      newStates[currentPage] = !isValid;
      setButtonStates(newStates);
    },
    [buttonStates, currentPage],
  );

  return (
    <Container>
      <StyledPagerView pageMargin={PAGE_MARGIN} scrollEnabled={false} ref={pagerViewRef}>
        <OverviewScreen />
        <NameInputScreen onInputChange={onInputChange} />
        <BirthdayInputScreen onInputChange={onInputChange} />
        <PeriodInputScreen onInputChange={onInputChange} currentPageIndex={currentPage} />
        <CalendarInputScreen />
      </StyledPagerView>
      <Footer>
        {notFirstPage && (
          <IndicatorContainer>
            {Array.from(Array(SLIDE_COUNT).keys()).map((key, index) => (
              <ScrollIndicator isFilled={currentPage === index + 1} key={key} />
            ))}
          </IndicatorContainer>
        )}
        <StyledPrimaryButton
          content={ButtonContents[currentPage]}
          disabled={buttonStates[currentPage]}
          onPress={handleOnButtonPress}
        />
      </Footer>
    </Container>
  );
};
