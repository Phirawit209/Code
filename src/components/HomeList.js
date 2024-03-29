import React from 'react';
import {Image, View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {colors, shadow, sizes, spacing} from '../constants/theme';


const CARD_WIDTH = sizes.width / 3 - (spacing.l + spacing.l / 2);
const CARD_HEIGHT = 130;

const HomeList = ({list}) => {
  return (
    <View style={styles.container}>
      {list.map((item) => {
        return (
          <TouchableOpacity style={styles.cardContainer}>
            <View style={[styles.card, shadow.light]} key={item.id} >
              <View style={styles.imageBox} >
                <Image style={styles.image} source={item.image}/>
              </View>
              <View style={styles.footer}>
                <View style={styles.titleBox}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.location}>{item.location}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardContainer: {
    marginLeft: spacing.l,
    marginBottom: spacing.l,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 55,
    borderTopLeftRadius: sizes.radius,
    borderTopRightRadius: sizes.radius,
    overflow: 'hidden',
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 32,
    resizeMode: 'center',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 1,
    marginLeft: 16,
    marginRight: 10,
  },
  titleBox: {
    flex: 1,
  },
  title: {
    marginVertical: 4,
    fontSize: sizes.body,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center'
  },
  location: {
    fontSize: sizes.body,
    color: colors.lightGray,
  },
});

export default HomeList;
