import React, { useState } from 'react';
import { Text, View, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Dropdown = ({
    options, label, title
}) => {
    const [visible, setVisible] = useState(false);

    const button = {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#efefef',
        height: 50,
        width: '90%',
        paddingHorizontal: 10,
        zIndex: 1,
    }

    const buttonText = {
        flex: 1,
        textAlign: 'center',
    }
    const titleText = {
        flex: 1,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ff8c00',
        textAlign: 'center',
    }

    const listItem = {
        backgroundColor: '#ff8c00',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    }

    const renderDropdown = () => {
        if (visible) {
            return (
                <View>
                    <FlatList
                        data={options}
                        renderItem={({ item }) => (
                            <View style={[listItem]}>
                                <Text>{item.label}</Text>
                            </View>
                        )}
                        keyExtractor={item => item.value}
                    />
                </View>
            )
        }
    };

    return (
        <View style={{ alignSelf:'center',flex:1}}>
            <Text style={[titleText]}>{title}</Text>
            <TouchableOpacity
                onPress={() => setVisible(!visible)}
                style={[button]}>
                <Text style={[buttonText]}>{label}</Text>
                <Icon name="arrow-drop-down-circle" size={30}></Icon>
            </TouchableOpacity>
            {[renderDropdown()]}

        </View>
    )
};


export default Dropdown;