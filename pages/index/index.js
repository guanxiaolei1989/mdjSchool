<<<<<<< HEAD
//index.js
//获取应用实例
var app = getApp();
var wxb = require('../../utils/wxb.js');
Page({
    data: {
        banner: [],
        classification: [],
        album: [],
        photo: "../../img/p1.jpg",
        major: []
    },

    /**
     * 更多课程介绍
     */
    courseMore: function(e) {
        wx.navigateTo({
            url: '/pages/kecheng/index',
        })
    },

    /**
     * 拨打电话
     */
    callPhone: function(e) {
        wx.makePhoneCall({
            phoneNumber: '13121308884'
        })
    },

    onShow: function() {
        // wxb.that = this;
        // wxb.style();
        // console.log(wxb.that.data.setting);

    },

    onLoad: function() {
        this.getIndex();
    },

    /**
     * 预览照片
     */
    lookPhoto: function(e) {
        var urls = [];
        this.data.album.forEach(function(v, i) {
            urls.push(v.photo);
        })
        var url = e.target.dataset.url;
        wx.previewImage({
            current: url,
            urls: urls
        })
    },

    /**
     * 加载首页数据
     */
    getIndex: function(e) {
        wx.showLoading({
            title: '加载中...',
        })
        wxb('getBanner.php').then(res => {
            this.setData({
                banner: res.data
            })
        });
        wxb('getClassIfication.php').then(res => {
            this.setData({
                classification: res.data
            })
        });
        wxb('getAlbum.php').then(res => {
            this.setData({
                album: res.data
            })
        });
        wxb('getMajor.php').then(res => {
            this.setData({
                major: res.data
            })
            wx.hideLoading();
        });

    },

    onShareAppMessage: function(res) {
        // wxb.globalData = app.globalData; //正确打开巅峰互联的方式
        // wxb.that = this; //正确打开巅峰互联的方式
        if (res.from === 'button') {}
        return {
            title: "牡丹江职业技术学院",
            path: '/pages/index/index',
        }
    }
=======
//index.js
//获取应用实例
var app = getApp();
var wxb = require('../../utils/wxb.js');
Page({
    data: {
        banner: [],
        classification: [],
        album: [],
        photo: "../../img/p1.jpg",
        major: []
    },

    /**
     * 更多课程介绍
     */
    courseMore: function(e) {
        wx.navigateTo({
            url: '/pages/kecheng/index',
        })
    },

    /**
     * 拨打电话
     */
    callPhone: function(e) {
        wx.makePhoneCall({
            phoneNumber: '13121308884'
        })
    },

    onShow: function() {
        // wxb.that = this;
        // wxb.style();
        // console.log(wxb.that.data.setting);

    },

    onLoad: function() {
        this.getIndex();
    },

    /**
     * 预览照片
     */
    lookPhoto: function(e) {
        var urls = [];
        this.data.album.forEach(function(v, i) {
            urls.push(v.photo);
        })
        var url = e.target.dataset.url;
        wx.previewImage({
            current: url,
            urls: urls
        })
    },

    /**
     * 加载首页数据
     */
    getIndex: function(e) {
        wx.showLoading({
            title: '加载中...',
        })
        wxb('getBanner.php').then(res => {
            this.setData({
                banner: res.data
            })
        });
        wxb('getClassIfication.php').then(res => {
            this.setData({
                classification: res.data
            })
        });
        wxb('getAlbum.php').then(res => {
            this.setData({
                album: res.data
            })
        });
        wxb('getMajor.php').then(res => {
            this.setData({
                major: res.data
            })
            wx.hideLoading();
        });

    },

    onShareAppMessage: function(res) {
        // wxb.globalData = app.globalData; //正确打开巅峰互联的方式
        // wxb.that = this; //正确打开巅峰互联的方式
        if (res.from === 'button') {}
        return {
            title: "牡丹江职业技术学院",
            path: '/pages/index/index',
        }
    }
>>>>>>> 79616ba (提交文件)
})