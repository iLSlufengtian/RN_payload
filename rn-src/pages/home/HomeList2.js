'use strict';
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    FlatList,
    ImageBackground
} from 'react-native';
import { width, uW, APP_CODE, statusBarHeight } from '../../utils/DeviceUtil'
// import { connect } from 'react-redux';
import * as Images from "../../common/Images";
import Colors from "../../common/Colors";
import TitleBar from "../../components/TitleBar";

class HomeList2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time:'today'
        }
    }

    getToday=()=>{
        this.setState({
            time:'today'
        })
    }
    getTomorrow=()=>{
        this.setState({
            time:'tomorrow'
        })
    }


    render() {
    
        return (
            <View style={styles.container}>
                <TitleBar title={"极速免税店"}/>
                <ScrollView stickyHeaderIndices={[1]}>
                    {/* 顶部搜索 */}
                    <View style={styles.search}>
                        {/* <TextInput 
                                style={styles.top_textInput}
                                placeholder={'搜索商品 分类 功效'}
                                placeholderTextColor={Colors.placeholderColor}
                                editable={false}//是否可编辑
                                onBlur={alert('225')}
                            >
                            </TextInput> */}
                        <TouchableOpacity activeOpacity={0.8} style={styles.top_textInput}>
                            <Image style={{ width: 36 * uW, height: 36 * uW, }} source={Images.search_btn}></Image>
                            <Text style={{ fontSize: 28 * uW }}>搜索商品 分类 功效</Text>
                        </TouchableOpacity>          
                        <Image style={{width:50*uW, height:36*uW,}} source={Images.search_list2}/>
                    </View>

                    {/* 横向滚动条 */}
                    <View style={{borderBottomWidth:2*uW,borderBottomColor:'#eee',height:88*uW,backgroundColor:'#fff'}}>
                        <ScrollView 
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.contentContainer}
                            horizontal={true}
                        >
                            <TouchableOpacity activeOpacity={0.8} style={styles.titles}>
                                <Text style={styles.titles_text}>首页</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.8} style={[styles.titles,{borderBottomWidth:4*uW,borderBottomColor:'#fe4070'}]}>
                                <Text style={[styles.titles_text,{color:'#fe4070'}]}>极速免税店</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.8} style={styles.titles}>
                                <Text style={styles.titles_text}>母婴</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.8} style={styles.titles}>
                                <Text style={styles.titles_text}>轻奢</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.8} style={styles.titles}>
                                <Text style={styles.titles_text}>名品特卖</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                   
                </ScrollView>
                
                
            </View >
            )
        }
}
const styles  = StyleSheet.create({
    container: { 
        flex:1,
        backgroundColor:'#ffffff'
    },  
    search: { 
        height: 96*uW, 
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:60*uW,
        paddingRight:30*uW,
    }, 
    top_textInput :  {
        width:'80%', 
        height:66*uW,  
        borderRadius: 60*uW,
        backgroundColor:'#f5f5f5',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    contentContainer: {
        paddingHorizontal: 30*uW,
        height: 88*uW,
    },
    titles: {
        marginHorizontal: 40*uW,
        height:88*uW,
    },
    titles_text: {
        lineHeight: 88*uW
    }
})

module.exports = HomeList2;
