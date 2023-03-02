import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const OPTIONS = ['Option 1', 'Option 2', 'Option 3'];

const MultipleSelect = () => {
    const [selected, setSelected] = useState<string[]>([]);

    const handleSelect = (option: string) => {
        if (selected.includes(option)) {
            setSelected(selected.filter((item) => item !== option));
        } else {
            setSelected([...selected, option]);
        }
    };

    return (
        <View>
            {OPTIONS.map((option) => (
                <TouchableOpacity
                    key={option}
                    onPress={() => handleSelect(option)}
                    style={{ backgroundColor: selected.includes(option) ? 'green' : 'white' }}
                >
                    <Text>{option}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default MultipleSelect;
