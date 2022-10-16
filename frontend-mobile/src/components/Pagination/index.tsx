import { Pressable, StyleSheet, View } from 'react-native';
import { StyledText } from '../CustomText/styles';
import { NextFilledSvg, NextSvg, PreviosFilledSvg, PreviosSvg } from '@pf/assets';

export interface PaginationProps {
  activePage: number;
  total: number;
  next: () => void;
  previous: () => void;
}

export const Pagination: React.FC<PaginationProps> = ({ activePage, total, next, previous }: PaginationProps) => {
  return (
    <View style={styles.paginationContainer}>
      <Pressable onPress={previous}>
        {activePage == 1 ? <PreviosSvg></PreviosSvg> : <PreviosFilledSvg></PreviosFilledSvg>}
      </Pressable>
      <StyledText style={styles.activePageText}>{activePage + 1}</StyledText>
      <StyledText style={styles.totalPages}> / {total}</StyledText>
      <Pressable onPress={next}>
        {activePage == total ? <NextSvg></NextSvg> : <NextFilledSvg></NextFilledSvg>}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 20 },
  activePageText: { marginLeft: 20, fontWeight: 'bold' },
  totalPages: { marginRight: 20 },
});
