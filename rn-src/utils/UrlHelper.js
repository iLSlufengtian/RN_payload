/**
 *
 *
 * @providesModule UrlHelper
 * @flow
 */
'use strict';
const appConfig = {
    // DOMAIN: 'https://ilab.qzwjtest.ilabservice.cloud/api/v2/', //开发板地址
    // DOMAIN: 'http://192.168.43.179:8901/api/v2/', //开发板地址
    // DOMAIN: 'http://192.168.0.127:8901/api/v2/', //开发板地址
    // DOMAIN: 'https://qz.qzwj.ilabservice.cloud/api/v2/', //正式板地址
    // DOMAIN: 'https://qz.qzwjtest.ilabservice.cloud/api/v2/',

};

const urlMap = {
    //登录注册
    // "login": "unsecure/login", // 登录  POST
    // "me": "secure/customer/me",
    // "queryRecord": "secure/customer/event",//查询灭菌锅消毒记录 get
    // "queryEvents": "secure/customer/weijian/events/data",//查询灭菌锅消毒记录 get
    // "queryDeviceEvents": "secure/customer/monitor_target/{deviceId}/ranged/telemetry?startTime={startTime}&endTime={endTime}", // 查询指定设备的灭菌锅消毒记录
    // "modifyPassword": "secure/customer/me/modify/password",
    // "statsWeijian": "secure/customer/weijian/stats",  //首页数据 卫监 get
    // "statsClinic": "secure/customer/weijian/department/{id}/stats",  //首页数据 诊所 get
    // "queryCount": "secure/customer/weijian/event/stats/status?startTime={startTime}&tense=current&eventTypeId=12", //获取执法办案记录count
    // "changeEventState": "secure/event/{id}/process",
    // "readEvent": "secure/customer/weijian/event/{id}/user/read",//是否查看事件 put
    // "checkVersion": "unsecure/managerment/apk/verison/file",//检查app版本 ，升级用get
    // "sendVerifyCode": "unsecure/customer/{company_domain}/send/{media}/verification",//忘记密码，发送验证码， POST
    // "validateCode": "unsecure/customer/{company_domain}/verify/{media}/verification/{code}/purpose/{purpose}",//验证收到的验证码后向用户发送密码
    // "uploadHeadImg": "secure/customer/me/avatar", //上传头像 post
    // "queryDevices":"secure/customer/monitor_target_lab_device",//查询设备get
};

const UrlHelper = {
    //Todo 各方法的注释以后添加
    restReplace: function (url, params) {
        Object.keys(params)
            .sort()
            .forEach(function (key) {
                let reg = new RegExp("{\\s*" + key + "\\s*}", "gi");
                url = url.replace(reg, params[key]);
            });
        return url;
    },

    NVL: function (str, def) {
        if (str === undefined || str === null) {
            return def;
        }
        return str;
    },

    toQueryString: function (obj) {
        return obj ?
            Object.keys(obj).map(function (key) {
                let val = obj[key];
                if (Array.isArray(val)) {
                    return val.map(function (val2) {
                        return key + '=' + UrlHelper.NVL(val2, '');
                    }).join('&');
                }
                return key + '=' + UrlHelper.NVL(val, '');
            }).join('&') :
            '';
    },

    toQuerySpring: function (obj, url) {
        let res = url;
        obj ? Object.keys(obj)
            .map(function (key) {
                let val = obj[key];
                let sd = "{" + key + "}";
                let index = res.indexOf(sd);
                if (index != -1) {
                    res = res.replace(sd, encodeURIComponent(val));
                    delete obj[key];
                }
            }) : '';
        return {ur: res, obj: obj};
    },



    //post请求用到的方法
    postUrlWithParamsMiddle: (key, obj) => {
        let url = urlMap[key];
        let result={};
        if (obj) {
            //1，替换掉url里面的参数
            result=UrlHelper.toQuerySpring(obj, url)
        }
        return {url:appConfig.DOMAIN + result.ur,params:result.obj};
    },

    //get，post请求用到的方法
    getUrl: (key) => {
        let url = urlMap[key];
        return appConfig.DOMAIN + url;
    },

    //get，post请求用到的方法
    getTureUrl: (url) => {
        return appConfig.DOMAIN + url;
    },

    //get请求用到的方法
    getUrlWithParamsMiddle: (key, obj) => {
        let url = urlMap[key];
        let paramStr = "";
        let result={};
        if (obj) {
            //1，替换掉url里面的参数
            result=UrlHelper.toQuerySpring(obj, url);
            url = result.ur;
            obj = result.obj;
            //2,把剩余的参数拼接到url后面
            paramStr = UrlHelper.toQueryString(obj);
            paramStr = ((url.indexOf('?') > -1) ? '&' : '?') + paramStr;
        }
        return appConfig.DOMAIN +url+ paramStr;
    },

    //get请求用到的方法
    getUrlWithParams: (key, obj) => {
        let url = urlMap[key];
        let paramStr = '';
        if (obj) {
            paramStr = UrlHelper.toQueryString(obj);
            paramStr = ((url.indexOf('?') > -1) ? '&' : '?') + paramStr;
        }
        return appConfig.DOMAIN + url + paramStr;
    },

    //获取项目域名
    getDomain: () => {
        return appConfig.DOMAIN
    },


};
module.exports = UrlHelper;


