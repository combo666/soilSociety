import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { Button, Icon, NativeBaseProvider, VStack } from "native-base";
import { Entypo } from '@expo/vector-icons';


const results = [
    { "price": 30, "prod_id": 1, "rem_item": 50, "rating": 4.9, "name": "Item name 1", "img_src": 'https://images.pexels.com/photos/5840409/pexels-photo-5840409.jpeg?auto=compress&cs=tinysrgb&w=1600', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur massa in nunc sodales aliquet quis nec ligula. Curabitur vel nibh vel ipsum aliquet rutrum non quis tortor. Suspendisse pulvinar est vitae enim tincidunt lacinia in auctor nisi. Mauris sagittis tempor sapien, vel scelerisque risus eleifend nec. Aliquam sollicitudin enim quis eros mollis posuere. Maecenas vel purus a odio molestie ultrices sodales quis quam. Phasellus vel odio a erat posuere vehicula non sit amet dui. Donec vel massa lorem. Mauris ac mattis felis. Ut dictum libero interdum turpis lacinia, nec lobortis arcu sagittis. Cras faucibus, neque eget sagittis vulputate, lacus lorem commodo turpis, ut volutpat nulla est ut eros." },
    { "price": 40, "prod_id": 2, "rem_item": 48, "rating": 4.5, "name": "Item name 1", "img_src": 'https://images.pexels.com/photos/5840409/pexels-photo-5840409.jpeg?auto=compress&cs=tinysrgb&w=1600', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur massa in nunc sodales aliquet quis nec ligula. Curabitur vel nibh vel ipsum aliquet rutrum non quis tortor. Suspendisse pulvinar est vitae enim tincidunt lacinia in auctor nisi. Mauris sagittis tempor sapien, vel scelerisque risus eleifend nec. Aliquam sollicitudin enim quis eros mollis posuere. Maecenas vel purus a odio molestie ultrices sodales quis quam. Phasellus vel odio a erat posuere vehicula non sit amet dui. Donec vel massa lorem. Mauris ac mattis felis. Ut dictum libero interdum turpis lacinia, nec lobortis arcu sagittis. Cras faucibus, neque eget sagittis vulputate, lacus lorem commodo turpis, ut volutpat nulla est ut eros." },
    { "price": 100, "prod_id": 3, "rem_item": 88, "rating": 3.9, "name": "Item name 1", "img_src": 'https://images.pexels.com/photos/5840409/pexels-photo-5840409.jpeg?auto=compress&cs=tinysrgb&w=1600', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur massa in nunc sodales aliquet quis nec ligula. Curabitur vel nibh vel ipsum aliquet rutrum non quis tortor. Suspendisse pulvinar est vitae enim tincidunt lacinia in auctor nisi. Mauris sagittis tempor sapien, vel scelerisque risus eleifend nec. Aliquam sollicitudin enim quis eros mollis posuere. Maecenas vel purus a odio molestie ultrices sodales quis quam. Phasellus vel odio a erat posuere vehicula non sit amet dui. Donec vel massa lorem. Mauris ac mattis felis. Ut dictum libero interdum turpis lacinia, nec lobortis arcu sagittis. Cras faucibus, neque eget sagittis vulputate, lacus lorem commodo turpis, ut volutpat nulla est ut eros." }
];

const ResultDetails = () => {
    const parameters = useRoute().params;


    const thisItem = results.find((item) => item.prod_id == parameters.id);

    console.log(thisItem);

    // console.log(parameters);
    return (
        <View style={{ backgroundColor: '#1B1B1B', height: "100%" }}>
            <Text style={styles.titleStyle}>Product Details</Text>
            <View style={styles.viewStyle}>
                <SafeAreaView style={styles.container}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <NativeBaseProvider>
                        <View style={styles.imageViewStyle}>
                            <Image style={styles.imageStyle} source={{ uri: thisItem?.img_src }} />
                        </View>
                        <Text style={styles.priceText}>{thisItem?.price}৳</Text>
                        <View style={styles.MainInfo}>
                            <Text style={styles.itemTitle}>{thisItem?.name}</Text>
                            <TouchableOpacity style={styles.WatchList}>
                                <Ionicons name="eye-outline" size={24} color="black" />
                                <Text>Add to watchlist</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.MainInfo}>
                            <Text style={styles.itemTitle}>Ratings</Text>
                            <StarRatingDisplay rating={thisItem.rating} style={styles.ratingStar} />
                        </View>
                        <View style={styles.descBox}>
                            <Text style={styles.descrTitle}>Description: </Text>
                            <Text>{thisItem?.description}</Text>
                        </View>
                        <View style={styles.MainInfo}>
                            <Button 
                                leftIcon={<Icon as={Entypo}  name="shopping-bag" size="sm" />} 
                                style={{flex: .5}}
                                variant={'outline'}
                                colorScheme={'blueGray'}
                            >
                                Buy Now
                            </Button>
                            <Button 
                                leftIcon={<Icon as={Entypo}  name="shopping-cart" size="sm" />} 
                                style={{flex: .5}}
                                variant={'outline'}
                                colorScheme={'amber'}
                            >
                                Add to cart
                            </Button>
                        </View>
                        </NativeBaseProvider>
                    </ScrollView>
                </SafeAreaView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    ratingStar: {
        marginTop: 5,
        marginEnd: 50,
        alignItems: 'center',
    },
    container: {
        flex: 1,
        paddingTop: 5,
        paddingBottom: 100
    },
    descBox: {
        padding: 20,
        marginLeft: 10,
    },
    descrTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    WatchList: {
        marginTop: 10,
        marginEnd: 10,
        alignItems: 'center',
    },
    itemTitle: {
        color: 'black',
        padding: 20,
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 10,
        flex: 1
    },
    MainInfo: {
        flexDirection: "row",
    },
    priceText: {
        top: 20,
        left: 10,
        borderRadius: 15,
        backgroundColor: '#E0FFB4',
        color: 'black',
        padding: 20,
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 10,
        position: 'absolute'
    },
    titleStyle: {
        paddingTop: 42,
        backgroundColor: '#1B1B1B',
        color: "#D8E9A8",
        fontSize: 30,
        fontStyle: "normal",
        fontWeight: "700",
        paddingLeft: 20,
        paddingVertical: 20
    },
    imageStyle: {
        width: "100%",
        height: 400,
        borderRadius: 10
    },
    listStyle: {
        margin: 10
    },
    viewStyle: {
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: 'white',
        height: '100%',
        marginHorizontal: 5,
    },
    imageViewStyle: {
        padding: 10,
        top: 0,
        bottom: 0
    }
});

export default ResultDetails;