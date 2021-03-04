//index.js
//获取应用实例
var app = getApp();
var wxb = require('../../utils/wxb.js');
Page({
    data: {
        title: '',
        time: '',
        newsContent: [],
    },

    /**
     * 拨打电话
     */
    callPhone: function(e) {
        // wx.makePhoneCall({
        //   phoneNumber: wxb.that.data.setting.service_tel,
        // })
    },

    onShow: function(e) {
        wxb.that = this;
    },

    onLoad: function(e) {

        this.getClassDetail(e.news_id);
        // wxb.that = this;
        // wxb.style();

        // wxb.that.setData({
        //   class_id: e.class_id,
        // });

        // wxb.globalData = app.globalData; //正确打开巅峰互联的方式
        // if (!wxb.checkAuthLogin(true)) {
        //   wxb.login();
        // }


    },

    /**
     * 获取学员风采详情
     */
    getClassDetail: function(news_id) {
        wx.showLoading({
            title: '加载中...',
        })
        wxb('getNews.php?id=' + news_id).then(res => {
            this.setData({
                title: res.data[0].title,
                time: res.data[0].time,
                newsContent: res.data
            })
        });
        // wxb.Post('/api/school.index/classDetail', {
        //   class_id: wxb.that.data.class_id,
        // }, function (data) {

        //   wxb.that.setData({
        //     datas: data,
        //   });
        // });
        wx.hideLoading();
    }
})