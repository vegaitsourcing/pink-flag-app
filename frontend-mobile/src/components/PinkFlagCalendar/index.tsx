import React from 'react';
import { Calendar } from 'react-native-calendars';
import { Arrow, Header } from './components';
import { ConfigureCalendar } from './config';
import { styles } from './styles';

ConfigureCalendar();
const today = new Date().toString();

export const PinkFlagCalendar: React.FC = () => {
  return (
    // <Header />
    <Calendar
      // Initially visible month. Default = now
      initialDate={today}
      // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
      minDate={'2012-05-10'}
      // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
      maxDate={today}
      // Handler which gets executed on day press. Default = undefined
      onDayPress={day => {
        console.log('selected day', day);
      }}
      // Handler which gets executed on day long press. Default = undefined
      onDayLongPress={day => {
        console.log('selected day', day);
      }}
      // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
      monthFormat={'yyyy MM'}
      // Handler which gets executed when visible month changes in calendar. Default = undefined
      onMonthChange={month => {
        console.log('month changed', month);
      }}
      // Replace default arrows with custom ones (direction can be 'left' or 'right')
      // renderArrow={direction => <Arrow direction={direction} />}
      // Do not show days of other months in month page. Default = false
      hideExtraDays={false}
      // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
      // day from another month that is visible in calendar page. Default = false
      disableMonthChange={false}
      // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
      firstDay={1}
      renderArrow={direction => <Arrow direction={direction} />}
      // Hide day names. Default = false
      hideDayNames={false}
      // Show week numbers to the left. Default = false
      // showWeekNumbers={true}
      // Handler which gets executed when press arrow icon left. It receive a callback can go back month
      onPressArrowLeft={subtractMonth => subtractMonth()}
      // Handler which gets executed when press arrow icon right. It receive a callback can go next month
      onPressArrowRight={addMonth => addMonth()}
      // Disable left arrow. Default = false
      disableArrowLeft={false}
      // Disable right arrow. Default = false
      disableArrowRight={false}
      // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
      disableAllTouchEventsForDisabledDays={false}
      renderHeader={date => <Header date={date as Date} />}
      // Replace default month and year title with custom one. the function receive a date as parameter
      // renderHeader={date => <Header date={date as Date} />}
      // Enable the option to swipe between months. Default = false
      enableSwipeMonths={true}
      markingType="custom"
      markedDates={{
        '2022-10-14': {
          customStyles: {
            container: styles.menstruationMarker,
            text: styles.whiteTextMarker,
          },
        },
        '2022-10-13': {
          customStyles: {
            container: styles.fertilityMarker,
            text: styles.whiteTextMarker,
          },
        },
        '2022-10-12': {
          customStyles: {
            container: styles.expectedMenstruationMarker,
            text: styles.blackTextMarker,
          },
        },
        '2022-10-11': {
          customStyles: {
            container: styles.ovulationMarker,
            text: styles.blackTextMarker,
          },
        },
      }}
    />
  );
};
