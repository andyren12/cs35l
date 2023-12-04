import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, FlatList } from "react-native";

const YourListsPage = () => {
    const renderRectangle = () => (
        <View style={styles.rectangle} />
    );

    const data = Array(5).fill(); 

    return (
        <ScrollView style={styles.container}>
            <View style={styles.div}>
                <View style={styles.yourFavoriteAlbums}>
                    <View style={styles.overlapGroup}>
                      <View style={styles.group}>
                        <FlatList
                            data={data}
                            renderItem={renderRectangle}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal
                        />
                        </View>
                        <Text style={styles.textWrapper}>when im in my feels</Text>
                    </View>
                </View>

                <View style={styles.yourAlbumsOfThe}>
                    <View style={styles.overlap}>
                        <View style={styles.group}>
                            <FlatList
                                data={data}
                                renderItem={renderRectangle}
                                keyExtractor={(item, index) => index.toString()}
                                horizontal
                            />
                        </View>
                        <Text style={styles.textWrapper}>forever lit</Text>
                    </View>
                </View>

                <View style={styles.overlapWrapper}>
                    <View style={styles.overlap}>
                        <View style={styles.group}>
                            <FlatList
                                data={data}
                                renderItem={renderRectangle}
                                keyExtractor={(item, index) => index.toString()}
                                horizontal
                            />
                        </View>
                        <Text style={styles.textWrapper}>EDCCCCCCC</Text>
                    </View>
                </View>

                <View style={styles.overlapGroupWrapper}>
                    <View style={styles.overlapGroup}>
                      <View style={styles.group}>
                        <FlatList
                            data={data}
                            renderItem={renderRectangle}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal
                        />
                      </View>
                      <Text style={styles.textWrapper}>i hate cs</Text>
                    </View>
                </View>

                <View style={styles.divWrapper}>
                    <View style={styles.overlap}>
                        <View style={styles.group}>
                            <FlatList
                                data={data}
                                renderItem={renderRectangle}
                                keyExtractor={(item, index) => index.toString()}
                                horizontal
                            />
                        </View>
                        <Text style={styles.textWrapper}>fall vibes</Text>
                    </View>
                </View>

                <View style={styles.yourAlbumsOfThe2}>
                    <View style={styles.overlap}>
                        <View style={styles.group}>
                            <FlatList
                                data={data}
                                renderItem={renderRectangle}
                                keyExtractor={(item, index) => index.toString()}
                                horizontal
                            />
                        </View>
                        <Text style={styles.textWrapper}>dubstep</Text>
                    </View>
                </View>

                <View style={styles.yourFavoriteAlbums2}>
                    <View style={styles.overlapGroup}>
                        <FlatList
                            data={data}
                            renderItem={renderRectangle}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal
                        />
                        <Text style={styles.textWrapper}>when im in my feels</Text>
                    </View>
                </View>

                <View style={styles.yourAlbumsOfThe3}>
                    <View style={styles.overlap}>
                        <View style={styles.group}>
                            <FlatList
                                data={data}
                                renderItem={renderRectangle}
                                keyExtractor={(item, index) => index.toString()}
                                horizontal
                            />
                        </View>
                        <Text style={styles.textWrapper}>driving</Text>
                    </View>
                </View>

                <View style={styles.yourAlbumsOfThe4}>
                    <View style={styles.overlap}>
                        <View style={styles.group}>
                            <FlatList
                                data={data}
                                renderItem={renderRectangle}
                                keyExtractor={(item, index) => index.toString()}
                                horizontal
                            />
                        </View>
                        <Text style={styles.textWrapper}>beyond</Text>
                    </View>
                </View>

                <View style={styles.overlap2}>
                    <Text style={styles.textWrapper2}>Lists</Text>
                    <Text style={styles.textWrapper3}>username</Text>
                    <Text style={styles.textWrapper3}>username</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  div: {
      backgroundColor: '#ffffff',
      height: 850,
      overflow: 'hidden',
      position: 'relative',
      width: 375,
  },
  yourFavoriteAlbums: {
      height: 81,
      left: 24,
      position: 'absolute',
      top: 60,  // Adjusted top value to move it down a little
      width: '100%',
  },
  overlapGroup: {
      height: 81,
      position: 'relative',
      width: '100%',
  },
  rectangle: {
      backgroundColor: 'red',
      height: 60,
      width: 60,
      marginRight: 5,
  },
  textWrapper: {
      color: '#000000',
      fontFamily: 'Inter-Bold',
      fontSize: 12,
      fontWeight: '700',
      left: 0,
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      top: 0,
      width: '100%',
  },
  yourAlbumsOfThe: {
      height: 82,
      left: 24,
      position: 'absolute',
      top: 156,
      width: '95%',
  },
  overlap: {
      height: 82,
      position: 'relative',
      width: '100%',
  },
  group: {
      height: 60,
      left: 0,
      position: 'absolute',
      top: 22,
      width: '95%',
  },
  overlapWrapper: {
      height: 82,
      left: 24,
      position: 'absolute',
      top: 257,
      width: '95%',
  },
  overlapGroupWrapper: {
      height: 81,
      left: 24,
      position: 'absolute',
      top: 355,
      width: '95%',
  },
  divWrapper: {
      height: 82,
      left: 24,
      position: 'absolute',
      top: 657,
      width: '95%',
  },
  yourAlbumsOfThe2: {
      height: 82,
      left: 24,
      position: 'absolute',
      top: 759,
      width: '95%',
  },
  yourFavoriteAlbums2: {
      height: 81,
      left: 24,
      position: 'absolute',
      top: 857,
      width: '95%',
  },
  yourAlbumsOfThe3: {
      height: 82,
      left: 24,
      position: 'absolute',
      top: 457,
      width: '95%',
  },
  yourAlbumsOfThe4: {
      height: 82,
      left: 24,
      position: 'absolute',
      top: 558,
      width: '95%',
  },
  overlap2: {
      height: 52,
      left: 0,
      position: 'absolute',
      top: -3,
      width: '100%',
  },
  textWrapper2: {
      color: '#000000',
      fontFamily: 'Inter-Bold',
      fontSize: 12,
      fontWeight: '700',
      height: 52,
      left: 9,
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      textAlign: 'center',
      top: 0,
      width: '100%',
  },
  textWrapper3: {
      color: '#000000',
      fontFamily: 'Inter-Medium',
      fontSize: 11,
      fontWeight: '500',
      height: 15,
      left: 41,
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      top: 17,
      width: '25%',
  },
});

export default YourListsPage;
