//index.js
//获取应用实例
var app = getApp();
var wxb = require('../../utils/wxb.js');
Page({
    data: {
        title: '',
        photo: '',
        contents: [
            { content: "本课程由牡丹江职业专修学院自主研发,已经有50年的历史...", photo: "../../img/p1.jpg" },
        ]
    },


    /**
     * 拨打电话
     */
    callPhone: function(e) {
        wx.makePhoneCall({
            phoneNumber: '13121308884',
        })
    },

    onShow: function(e) {
        // wxb.that = this;
    },

    onLoad: function(e) {

        wxb('getMajor.php?id=' + e.major_id).then(res => {
            this.setData({
                title: res.data[0].mName,
                photo: res.data[0].photo,
                contents: res.data
            })
            wx.hideLoading();
        });

        // wxb.that = this;
        // wxb.style();

        // wxb.that.setData({
        //     class_id: e.class_id,
        // });

        // wxb.globalData = app.globalData; //正确打开巅峰互联的方式
        // if (!wxb.checkAuthLogin(true)) {
        //     wxb.login();
        // }

        // this.getClassDetail();
    },

    /**
     * 获取课程详情
     */
    getClassDetail: function(e) {
        wx.showLoading({
            title: '加载中...',
        })
        wxb.Post('/api/school.index/classDetail', {
            class_id: wxb.that.data.class_id,
        }, function(data) {
            wx.hideLoading();
            // wxb.that.setData({
            //     datas: data,
            // });
        });
    },

    onShareAppMessage: function(res) {
        wxb.globalData = app.globalData; //正确打开巅峰互联的方式
        wxb.that = this; //正确打开巅峰互联的方式
        if (res.from === 'button') {}
        return {
            title: wxb.that.data.datas.title,
            path: '/pages/kecheng/detail?class_id=' + wxb.that.data.class_id,
        }
    }
})