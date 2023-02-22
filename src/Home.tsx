import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const name = [
    {
        id: '1',
        title: 'Biswopaban Nayak',
    },
    {
        id: '2',
        title: 'Pratyush Kumar',
    },
    {
        id: '3',
        title: 'Rajesh Kumar ',
    },
    {
        id: '4',
        title: 'Swostik Rudrakhya',
    },
    {
        id: '5',
        title: 'Ratan Sahoo ',
    },
    {
        id: '6',
        title: 'Kishan Kumar',
    },
    {
        id: '7',
        title: 'Biswojit Parida',
    },
]

const Home = () => {
    const [selectItem, setSelectItem] = React.useState('')
    // const [pratyush, setPratyush] = React.useState(false)
    // const [rajesh, setRajesh] = React.useState(false)
    // const [swostik, setSwostik] = React.useState(false)
    // const [avishek, setAvishek] = React.useState(false)
    // const [kishan, setKishan] = React.useState(false)
    // const [chinmaya, setChinmaya] = React.useState(false)
    return (
        <SafeAreaView
            style={{ backgroundColor: '#ffff', flex: 1, }}
        >
            <FlatList
                data={name}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => { setSelectItem(item?.id) }}
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginVertical: 20,
                            borderWidth: 1,
                            backgroundColor: selectItem === item?.id ? 'blue' : '#e1f8f9',
                            padding: 20,
                            borderColor: 'gray',
                            marginHorizontal: 15,
                            borderRadius: 15,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20, fontWeight: 'bold',
                                color: selectItem === item?.id ? '#ffff' : '#000',
                            }}
                        >
                            {item.title}
                        </Text>
                    </TouchableOpacity>

                )}
            />

        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})