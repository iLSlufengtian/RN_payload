
'use strict';
import React, {PureComponent} from 'react';
import {
    View,
    DeviceEventEmitter,
    InteractionManager,
    AppState,
    Image,
    Text,
    StyleSheet,
    Platform
} from 'react-native';
import {createBottomTabNavigator, TabBarBottom, createAppContainer} from 'react-navigation';
import SceneUtil from '../utils/SceneUtil';
import {connect} from "react-redux";

const ScreenHome = require('./home/Home');
const ScreenList = require('./list/List');
const ScreenLove = require('./love/Love');
const ScreenCart = require('./cart/Cart');
const ScreenMine = require('./mine/Mine');


// const Record = require('./record/Record');
// const Enforce = require('./enforce/Enforce');

class TabsView extends PureComponent {

    render() {
        let flag = false;
        // if (this.props.role == "USER_COMPANY_MANAGER") {
        //     flag=true//是卫监
        // }
        // if (this.props.role == "USER_DEPARTMENT_MANAGER"  || this.props.role === 'USER_DEVICE_OWNER') {
        //     flag=false//是诊所
        // }

        let TabNavigator = createBottomTabNavigator(
            {
                Home: {
                    screen: ScreenHome,
                    navigationOptions: {tabBarLabel:'首页', showIcon: true}
                },
                // middle: {
                //     screen: flag?Enforce:Record ,
                //     navigationOptions: {tabBarLabel:flag?'办案':'记录',showIcon: true}
                // },
                List: {
                    screen: ScreenList,
                    navigationOptions: {tabBarLabel:'列表', showIcon: true}
                },
                Love: {
                    screen: ScreenLove,
                    navigationOptions: {tabBarLabel:'喜欢', showIcon: true}
                },
                Cart: {
                    screen: ScreenCart,
                    navigationOptions: {tabBarLabel:'购物车', showIcon: true}
                },
                Mine: {
                    screen: ScreenMine,
                    navigationOptions: {tabBarLabel: '我的', showIcon: true}
                },
            },
            {
                defaultNavigationOptions: ({navigation}) => ({
                    tabBarIcon: ({focused, horizontal, tintColor}) => {
                        SceneUtil.setTabNavigation(navigation, null);
                        const {routeName} = navigation.state;
                        let iconName, normalImage, selectedImage, badgeCount;
                        switch (routeName) {
                            case 'Home':
                                normalImage = require("../images/tabs/home.png");
                                selectedImage = require('../images/tabs/home_selected.png');
                                // badgeCount = this.props.count;
                                badgeCount =0;
                                break;
                            // case 'middle':
                            //     normalImage =flag?require('../images/tabs/enforce.png'):require('../images/tabs/record.png');
                            //     selectedImage = flag?require('../images/tabs/enforce_selected.png'):require('../images/tabs/record_selected.png');
                            //     badgeCount = 0;
                            //     break;
                            case 'List':
                                normalImage = require('../images/tabs/list.png');
                                selectedImage = require('../images/tabs/list_selected.png');
                                // badgeCount = this.props.count;
                                badgeCount =0;
                                break;
                            case 'Love':
                                normalImage = require('../images/tabs/love.png');
                                selectedImage = require('../images/tabs/love_selected.png');
                                // badgeCount = this.props.count;
                                badgeCount =0;
                                break;
                            case 'Cart':
                                normalImage = require('../images/tabs/cart.png');
                                selectedImage = require('../images/tabs/cart_selected.png');
                                // badgeCount = this.props.count;
                                badgeCount =0;
                                break;
                            case 'Mine':
                                normalImage = require('../images/tabs/mine.png');
                                selectedImage = require('../images/tabs/mine_selected.png');
                                badgeCount = 0;
                                break;
                        }
                        return (
                            <TabBarItemWithBadge
                                focused={focused}
                                routeName={iconName}
                                normalImage={normalImage}
                                selectedImage={selectedImage}
                                badgeCount={badgeCount}
                            />
                        );
                    },
                }),
                tabBarOptions: {
                    activeTintColor: '#e0620d',
                    inactiveTintColor: 'gray',
                    showLabel: true,

                },
            });

        let TabsContainer = createAppContainer(TabNavigator);
        return (
            <TabsContainer ref={nav => {
                // SceneUtils.setTabNavigator(nav,tabInfo)
            }}/>
        );
    }
}

class TabBarItemWithBadge extends PureComponent {
    render() {
        let imgSource = (this.props.focused) ? this.props.selectedImage : this.props.normalImage;
        const {name, badgeCount, color, size} = this.props;
        return (
            <View style={{width: 24, height: 24,}}>
                <Image source={imgSource} style={{width: 22, height: 22}} resizeMode="contain"/>
                {badgeCount > 0 && (
                    <View style={{
                        position: 'absolute',
                        right: -6,
                        top: -3,
                        backgroundColor: 'red',
                        borderRadius: 7.5,
                        width: 15,
                        height: 15,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{color: 'green', fontSize: 10, fontWeight: 'bold'}}>{badgeCount}</Text>
                    </View>
                )}
            </View>
        );
    }
}

class TabBarItem extends PureComponent {
    render() {
        let imgSource = (this.props.focused) ? this.props.selectedImage : this.props.normalImage;
        return (
            <Image source={imgSource} style={{width: 20,height:20}} resizeMode="contain"/>
        );
    }
}

function select(store) {
    return {
        count: store.login.count,
        role: store.login.role
    };
}

module.exports = connect(select)(TabsView);


