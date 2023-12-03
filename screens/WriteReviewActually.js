import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export const WriteReview = () => {
  return (
    <View style={styles.writeReview}>
      <View style={styles.overlap}>
        <Text style={styles.textWrapper}>Add a Review</Text>
      </View>
      <View style={styles.overlapGroup}>
        {/* Assuming these rectangles are for input fields or similar */}
        <View style={styles.rectangle} />
        <View style={styles.rectangle2} />
        <View style={styles.rectangle3} />
        <View style={styles.rectangle4} />
        <View style={styles.rectangle5} />
      </View>
      <Text style={styles.textWrapper2}>Date:</Text>
      <Text style={styles.textWrapper3}>Rating:</Text>
      <Text style={styles.textWrapper4}>Add review...</Text>
      <View style={styles.overlap2}>
        <Text style={styles.textWrapper5}>Album Title</Text>
        <Text style={styles.textWrapper6}>Artist</Text>
      </View>
      <View style={styles.overlap3}>
        <View style={styles.rectangle6} />
        <Text style={styles.textWrapper7}>Save</Text>
      </View>
      <View style={styles.group}>
        <View style={styles.divWrapper}>
          <Text style={styles.textWrapper8}>ALBUM COVER</Text>
        </View>
      </View>
      <View style={styles.rectangle7} />
    </View>
  );
};

const styles = StyleSheet.create({
  writeReview: {
    backgroundColor: '#141313',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  div: {
    backgroundColor: '#141313',
    height: '100%', // Adjusted for full screen height
    width: '100%', // Adjusted for full screen width
    alignItems: 'center',
  },
  overlap: {
    height: 57,
    width: '100%',
    backgroundColor: "darkgray",
  },
  textWrapper: {
    color: '#000000',
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    fontWeight: '700',
    marginTop: 23,
    alignSelf: 'center',
  },
  line: {
    height: 16,
    width: 10,
    marginTop: 21,
    marginLeft: 23,
  },
  textWrapper2: {
    color: '#ffffff',
    fontFamily: 'Inter-Bold',
    fontSize: 10,
    fontWeight: '700',
    position: 'absolute',
    top: 145,
    left: '32.5%',
  },
  textWrapper3: {
    color: '#ffffff',
    fontFamily: 'Inter-Bold',
    fontSize: 10,
    fontWeight: '700',
    position: 'absolute',
    top: 178,
    left: 40,
  },
  textWrapper4: {
    color: '#ffffff',
    fontFamily: 'Inter-Bold',
    fontSize: 10,
    fontWeight: '700',
    position: 'absolute',
    top: 213,
    left: 39,
  },
  overlap2: {
    height: 22,
    width: 67,
    position: 'absolute',
    top: 84,
    left: '35%',
  },
  textWrapper5: {
    color: '#ffffff',
    fontFamily: 'Inter-Bold',
    fontSize: 10,
    fontWeight: '700',
    position: 'absolute',
    top: 0,
    left: '-15%',
  },
  textWrapper6: {
    color: '#ffffff',
    fontFamily: 'Inter-Medium',
    fontSize: 8,
    fontWeight: '500',
    position: 'absolute',
    top: 15,
    left: '-15%',
  },
  overlap3: {
    borderRadius: 15,
    height: 34,
    width: 138,
    position: 'absolute',
    top: 461,
    alignSelf: 'center',
  },
  rectangle6: {
    backgroundColor: '#d9d9d9',
    borderRadius: 15,
    height: 34,
    width: 138,
  },
  textWrapper7: {
    color: '#000000',
    fontFamily: 'Inter-SemiBold',
    fontSize: 10,
    fontWeight: '600',
    position: 'absolute',
    top: 10,
    left: 57,
  },
  group: {
    height: 73,
    width: 75,
    position: 'absolute',
    top: 83,
    left: 38,
  },
  divWrapper: {
    backgroundColor: '#d9d9d9',
    height: 73,
    width: 73,
  },
  textWrapper8: {
    color: '#000000',
    fontFamily: 'Inter-Bold',
    fontSize: 10,
    fontWeight: '700',
    position: 'absolute',
    top: 4,
    left: 9,
  },
  rectangle7: {
    backgroundColor: '#d9d9d999',
    borderRadius: 5,
    height: 165,
    width: 315,
    position: 'absolute',
    top: 232,
    left: 38,
  },
  img: {
    height: 1,
    width: 298,
    position: 'absolute',
    top: 195,
    left: 41,
  },
  line2: {
    height: 1,
    width: 211,
    position: 'absolute',
    top: 156,
    left: 128,
  },
});


export default WriteReview;
