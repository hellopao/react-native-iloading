"use strict";

import * as React from "react";
import {StyleSheet, View, Text, Modal, ActivityIndicatorIOS, ProgressBarAndroid, Platform} from "react-native";
import RootSiblings from 'react-native-root-siblings';

const styles = StyleSheet.create({
    center: {
        justifyContent:"center",
        alignItems: "center"
    },
    modal: {},
    wrapper: {
        width: 120,
        height: 100,
        borderRadius: 10
    },
    text: {
        color: "#fff"
    }
});

export default class Loading {
    
    constructor(opts) {
        this.opts = opts || {};
        this.loadingView = (
            <Modal style={[styles.modal]}>
                <View style={[styles.wrapper, styles.center]}>
                    {Platform.OS === 'ios' ?
                        <ActivityIndicatorIOS animating={true} color='white' style={styles.center} size='small' /> :
                        <ProgressBarAndroid styleAttr="Inverse" color='white' />
                    }}
                    <Text style={[styles.text]}>{this.opts.text || "loading..."}</Text>
                </View>
            </Modal>
        )
    }

    show() {
        this.loading = new RootSiblings(this.loadingView);
        if (this.opts.duration) {
            setTimeout(() => {
                this.hide();
            }, this.opts.duration);
        }
    }

    hide() {
        this.loading && this.loading.destory();
    }
}