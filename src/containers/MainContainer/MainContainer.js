import React, {Component} from 'react';
import {styles} from "./MainContainerCss";
import {View, Text} from "react-native";

class MainContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello</Text>
            </View>
        );
    }
}



export default MainContainer;