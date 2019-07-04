/**
 *@author: meekoMa
 *@date: 19/05/15 10:19:20
 *@desc: 路由管理页面
 */
'use strict';
import React, {PureComponent} from 'react';
import {BackHandler, Platform, ToastAndroid,InteractionManager} from 'react-native';
import {connect} from 'react-redux';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import StackViewStyleInterpolator from "react-navigation-stack/src/views/StackView/StackViewStyleInterpolator";
import BackAndroidUtil from '../utils/BackAndroidUtil';
import SceneUtil from '../utils/SceneUtil';
import Network from '../utils/Network';

const TabsView = require('./TabsView');
// const LoginView = require('./login/LoginView');

// const Events = require('./home/Events');
// const AbnormalList = require('./home/AbnormalList');
// const AbnormalDetail = require('./home/AbnormalDetail');
// const EnforceDetail = require('./enforce/EnforceDetail');
// const Record = require('./record/Record');
// const UploadRecord = require('./record/UploadRecord');
// const UploadBiology = require('./record/UploadBiology');


// const Setting = require('./mine/Setting');
// const ModifyPassword = require('./mine/ModifyPassword');
// const Forget = require('./mine/Forget');

const RouteList = {
    'TabsView': TabsView,
    // 'LoginView': LoginView,
    // 'Events': Events,
    // 'AbnormalList': AbnormalList,
    // 'AbnormalDetail': AbnormalDetail,
    // 'UploadRecord': UploadRecord,
    // 'Setting': Setting,
    // 'ModifyPassword': ModifyPassword,
    // 'Forget': Forget,
    // 'EnforceDetail': EnforceDetail,
    // 'UploadBiology': UploadBiology,
    // "Record": Record,
};

let routeConfigs = {};
Object.keys(RouteList).forEach((key) => {
    routeConfigs[key] = {};
    routeConfigs[key].screen = RouteList[key];
});

class Routers extends PureComponent {

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            if(Platform.OS === 'android'){
                BackAndroidUtil.addBackAndroidListener();
            }
        })
    }

    componentWillUnmount() {
        if(Platform.OS === 'android'){
            BackAndroidUtil.removeBackAndroidListener();
        }
    }


    setNav(navigation) {
        let a = 100;
        SceneUtil.setStackNavigation(navigation);
    }

    constructor(props) {
        super(props);
        Network.setToken(this.props.token);
    }

    render() {
        const stackNavigatorConfig = {
            // initialRouteName: this.props.token ? 'TabsView' : 'LoginView',
            initialRouteName:'TabsView' ,
            // initialRouteParams: {count: 5},
            // defaultNavigationOptions: { this.props.count
            //     headerStyle: {
            //         backgroundColor: '#f4511e',
            //     },
            //     headerTintColor: '#fff',
            //     headerTitleStyle: {
            //         fontWeight: 'bold',
            //     },
            // },
            navigationOptions: ({navigation}) => {
                SceneUtil.setStackNavigation(navigation);
                return {
                    header: null,
                    swipeEnabled: false,
                    animationEnabled: false,
                    gesturesEnabled: true,
                }
            },

            // navigationOptions: ({navigation, screenProps}) => ({
            //     ...this.setNav(navigation),
            // }),
            headerMode: 'none',
            mode: Platform.OS === 'ios' ? 'card' : 'card',
            transitionConfig: () => ({
                screenInterpolator: StackViewStyleInterpolator.forHorizontal,
            }),
        };

        const AppNavigator = createStackNavigator(routeConfigs, stackNavigatorConfig);
        let AppContainer = createAppContainer(AppNavigator);
        return ( 
            <AppContainer
                ref={nav => {
                    SceneUtil.setStackNavigation(nav)
                }}
                onNavigationStateChange={(preState, newState, action) => {
                    SceneUtil.setNavigationStateChangeInfo(preState, newState, action)
                }}
            />
        );
    }
}

function select(store) {
    return {
        token: store.login.token,
    };
}

module.exports = connect(select)(Routers);
