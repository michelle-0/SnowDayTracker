import React from 'react';
import {
    Text, View,
} from 'react-native';
import { Badge, Button } from "@rneui/themed";

const Demo = () => {
    return (
        <View>
            <Text>Hello Elmo</Text>
            <Badge value="3" status="success" />
            <Button buttonStyle={{ width: 150 }} title="Solid" />
        </View>

    );
};

export default Demo;