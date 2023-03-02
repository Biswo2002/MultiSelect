import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import React, { useState } from 'react';


const items = [
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
];

const MultiSelect = () => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleSelectItem = (itemId: string) => {
        if (selectedItems.includes(itemId)) {
            setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== itemId));
        } else {
            setSelectedItems([...selectedItems, itemId]);
        }
    };

    return (
        <View style={{ marginTop: '10%' }}>
            <FlatList data={items}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleSelectItem(item.id)}
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginVertical: 20,
                            borderWidth: 1,
                            backgroundColor: selectedItems.includes(item.id) ? 'blue' : '#A1b4f9',
                            padding: 20,
                            borderColor: 'gray',
                            marginHorizontal: 15,
                            borderRadius: 15,
                        }}
                    >
                        <Text
                            style={{
                                color: selectedItems.includes(item.id) ? '#fff' : '#000',
                                fontSize: 20, fontWeight: 'bold',
                            }}>
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default MultiSelect;
