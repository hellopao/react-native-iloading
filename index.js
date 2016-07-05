"use strict";

import * as React from "react";
import {StyleSheet, View, Text, ActivityIndicatorIOS, ProgressBarAndroid, Platform, Modal} from "react-native";
import Dimensions from "Dimensions";

import RootSiblings from 'react-native-root-siblings';

const {width, height} = Dimensions.get('window');
const [loadingWidth, loadingHeight] = [120, 100];

const styles = StyleSheet.create({
    container: {},
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "#fff",
        fontSize: 14
    }
})

class Loading {

    loading: RootSiblings;

    constructor(opts) {

    }

    renderLoadingView() {
        if (Platform.OS === 'ios') {
            return (
                <ActivityIndicatorIOS
                    animating={true}
                    color='white'
                    style={styles.center}
                    size='small'
                />
            );
        } else {
            return (
                <ProgressBarAndroid styleAttr="Inverse" color='white' />
            );
        }
    }
    show(text?: string) {
        this.loading = new RootSiblings(
            <Modal transparent={true} onRequestClose={()=>{}}>
                <View
                    style={[styles.center, {
                        top: (height - loadingHeight) / 2,
                        left: (width - loadingWidth) / 2,
                        backgroundColor: "rgba(0,0,0,.4)",
                        width: loadingWidth,
                        height: loadingHeight,
                        borderRadius: 10
                    }]}>
                    {this.renderLoadingView()}
                    <Text style={styles.text}>{text || "loading..."}</Text>
                </View>
            </Modal>
        )
    }

    destroy() {
        this.loading.destroy();
    }
}

export default Loading;