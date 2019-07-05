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
import { connect } from 'react-redux';
import * as Images from "../../common/Images";
import Colors from "../../common/Colors";
import SceneUtil from '../../utils/SceneUtil';

class Home extends Component {

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
        let listMessage;
        if(this.state.time == 'today') {
            listMessage = (
                <View style={{ backgroundColor: '#eee' }}>
                    <ImageBackground style={{ height: 260 * uW, width: width, marginBottom: 16 * uW }}
                        source={{ uri: 'http://mp6.jmstatic.com/product/004/849/4849936_std/4849936_dx_1154_400.jpg?_t=1557819272&imageView2/2/w/800/q/90' }} >
                        <View style={{ marginLeft: 320 * uW, marginRight: 30 * uW, paddingTop: 20 * uW, paddingBottom: 20 * uW, height: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <Text>BEPERFECT(CARPF)太阳能3D塑形仪滚轮按摩仪提拉紧致瘦下巴</Text>
                            <View>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
                                    <Text style={{ color: Colors.mainText2,marginRight:10*uW }}>￥<Text style={{ fontSize: 40 * uW,}}>25.9</Text></Text>
                                    <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'double', textDecorationColor: '#999', }}>￥199</Text>
                                </View>
                                <Text>106条评论</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <ImageBackground style={{ height: 260 * uW, width: width, marginBottom: 16 * uW }}
                        source={{ uri: 'http://mp5.jmstatic.com/product/003/184/3184362_std/3184362_dx_1154_400.jpg?_t=1561554613&imageView2/2/w/800/q/90' }} >
                        <View style={{ marginLeft: 320 * uW, marginRight: 30 * uW, paddingTop: 20 * uW, paddingBottom: 20 * uW, height: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <Text>BEPERFECT 小巨蛋热喷蒸脸器 洁面仪 保湿补水仪蒸面机 离子蒸面器 家用美容仪器</Text>
                            <View>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
                                    <Text style={{ color: Colors.mainText2,marginRight:10*uW }}>￥<Text style={{ fontSize: 40 * uW }}>59</Text></Text>
                                    <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'double', textDecorationColor: '#999', }}>￥399</Text>
                                </View>
                                <Text>287条评论</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <ImageBackground style={{ height: 260 * uW, width: width, marginBottom: 16 * uW }}
                        source={{ uri: 'http://mp5.jmstatic.com/product/004/792/4792538_std/4792538_dx_1154_400.jpg?_t=1562230030&imageView2/2/w/800/q/90' }} >
                        <View style={{ marginLeft: 320 * uW, marginRight: 30 * uW, paddingTop: 20 * uW, paddingBottom: 20 * uW, height: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <Text>乐拖 家居浴室软底透气防滑洗澡情侣男女EVA日式</Text>
                            <View>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
                                    <Text style={{ color: Colors.mainText2,marginRight:10*uW }}>￥<Text style={{ fontSize: 40 * uW }}>19.9</Text></Text>
                                    <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'double', textDecorationColor: '#999', }}>￥49</Text>
                                </View>
                                <Text>43条评论</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <ImageBackground style={{ height: 260 * uW, width: width, marginBottom: 16 * uW }}
                        source={{ uri: 'http://mp6.jmstatic.com/product/004/459/4459740_std/4459740_dx_1154_400.jpg?_t=1561601665&imageView2/2/w/800/q/90' }} >
                        <View style={{ marginLeft: 320 * uW, marginRight: 30 * uW, paddingTop: 20 * uW, paddingBottom: 20 * uW, height: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <Text>BEPERFECT 清新款超声波电动牙刷 杜邦刷毛深层清洁</Text>
                            <View>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
                                    <Text style={{ color: Colors.mainText2,marginRight:10*uW }}>￥<Text style={{ fontSize: 40 * uW }}>39</Text></Text>
                                    <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'double', textDecorationColor: '#999', }}>￥299</Text>
                                </View>
                                <Text>258条评论</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <ImageBackground style={{ height: 260 * uW, width: width, marginBottom: 16 * uW }}
                        source={{ uri: 'http://mp5.jmstatic.com/product/004/404/4404894_std/4404894_dx_1154_400.jpg?_t=1561554409&imageView2/2/w/800/q/90' }} >
                        <View style={{ marginLeft: 320 * uW, marginRight: 30 * uW, paddingTop: 20 * uW, paddingBottom: 20 * uW, height: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <Text>BEPERFECT 二代24K黄金棒 电动按摩器 高频推送</Text>
                            <View>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
                                    <Text style={{ color: Colors.mainText2,marginRight:10*uW }}>￥<Text style={{ fontSize: 40 * uW }}>30.9</Text></Text>
                                    <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'double', textDecorationColor: '#999', }}>￥299</Text>
                                </View>
                                <Text>1385条评论</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            )
        } else {
            listMessage = (
                // {/* 明日内容列表 */}
                <View style={{backgroundColor:'#eee'}}>
                    <Image style={{height:260*uW,width:width,marginBottom:16*uW}}
                        source={{uri:'http://mp5.jmstatic.com//jmstore/image/000/007/7578_std/5d1ac0ee6a502_2048_710.jpg?1562055343&imageView2/2/w/800/q/90'}} >  
                    </Image>
                    <Image style={{height:260*uW,width:width,marginBottom:16*uW}}
                        source={{uri:'http://mp6.jmstatic.com//jmstore/image/000/007/7977_std/5d1b180169d6d_2048_710.jpg?1562057936&imageView2/2/w/800/q/90'}} >
                    </Image>
                    <Image style={{height:260*uW,width:width,marginBottom:16*uW}}
                        source={{uri:'http://mp6.jmstatic.com//jmstore/image/000/006/6845_std/5d1c10305f645_2048_710.jpg?1562242051&imageView2/2/w/800/q/90'}} >
                    </Image>
                    <Image style={{height:260*uW,width:width,marginBottom:16*uW}}
                        source={{uri:'http://mp5.jmstatic.com//jmstore/image/000/002/2963_std/5d1481526386d_2048_710.jpg?1562116777&imageView2/2/w/800/q/90'}} > 
                    </Image>
                    <Image style={{height:260*uW,width:width,marginBottom:16*uW}}
                        source={{uri:'http://mp5.jmstatic.com//jmstore/image/000/007/7005_std/5d1c49f808b84_2048_710.jpg?1562232020&imageView2/2/w/800/q/90'}} >   
                    </Image>
                </View>  
            )
        }
        return (
            <View style={styles.container}>
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
                            <TouchableOpacity activeOpacity={0.8} style={[styles.titles,{borderBottomWidth:4*uW,borderBottomColor:'#fe4070'}]}>
                                <Text style={[styles.titles_text,{color:'#fe4070'}]}>首页</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.8} style={styles.titles} onPress={()=>{SceneUtil.gotoScene('HomeList2')}}>
                                <Text style={styles.titles_text}>极速免税店</Text>
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
                    {/* <FlatList
                        style={{flex:1,paddingBottom:30*uW}}
                        data={this.props.data}
                        extraData={this.state}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                    /> */}
                    <View style={{width:width,}}>
                        <View style={{display:'flex',flexDirection:'row'}}>
                            <TouchableOpacity activeOpacity={1} onPress={this.getToday} style={{width:'50%',height:88*uW,display:'flex',alignItems:'center',justifyContent:'center'}}>
                                <Text style={{color:(this.state.time =='today'?'#fe4070':'#666666')}}>今日10点上新</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={1} onPress={this.getTomorrow} style={{width:'50%',height:88*uW,display:'flex',alignItems:'center',justifyContent:'center'}}>
                                <Text style={{color:(this.state.time =='tomorrow'?'#fe4070':'#666666')}}>明日10点预告</Text>
                            </TouchableOpacity>
                        </View>
                        {/* 今天和明天列表切换 */}
                        {listMessage}    
                    </View>
                </ScrollView>
                
                
            </View >
            )
        }
}
const styles  = StyleSheet.create({
    container: { 
        flex:1,
        // marginTop:44*uW,
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

module.exports = Home;
