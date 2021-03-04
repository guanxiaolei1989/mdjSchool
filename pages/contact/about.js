//index.js
//获取应用实例
var app = getApp();
var wxb = require('../../utils/wxb.js');
Page({
    data: {
        introduce: [],
        album: []
    },

    onShow: function(e) {},

    onLoad: function(options) {
        wxb('getIntroduce.php').then(res => {
            this.setData({
                introduce: res.data
            })
        });
        wxb('getAlbum.php').then(res => {
            this.setData({
                album: res.data
            })
        });
    },

    /**
     * 获取学校介绍信息
     */
    // getSchoolIntroduce: function(e) {
    //     wx.showLoading({
    //         title: '加载中...',
    //     })
    //     wxb.Post('/api/school.index/getIntroduce', {
    //         // openid: wxb.getOpenId(),
    //     }, function(data) {
    //         wx.hideLoading();
    //         var array = wxb.that.data.photos;
    //         for (var index in data.photos) {
    //             array.push(data.photos[index].photo);
    //         }

    //         // wxb.that.setData({
    //         //     datas: data,
    //         //     photos: array,
    //         // });
    //     });
    // },

    /**
     * 查看照片
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
    }

})