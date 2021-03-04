//index.js
//获取应用实例
var app = getApp();
var wxb = require('../../utils/wxb.js');
Page({
    data: {
        color: 'blue',

        class_id: '',
    },

    onShow: function(e) {
        // wxb.that = this;
    },

    onLoad: function(e) {
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
    //class_id name mobile message  class_id 可选

    /**
     * 提交在线咨询
     */
    fromSubmitConsult: function(e) {

        var { fName, phone, remarks } = e.detail.value;

        var phonetel = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
        if (fName == '') {
            wx.showToast({
                title: '请输入用户名!',
                icon: 'succes',
                duration: 1000,
                mask: true
            })
        } else if (phone == '') {
            wx.showToast({
                title: '手机号不能为空!',
            })
        } else if (phone.length != 11) {
            wx.showToast({
                title: '手机号长度有误!',
                icon: 'success',
                duration: 1500
            })
        } else if (!phonetel.test(phone)) {
            wx.showToast({
                title: '手机号有误！',
                icon: 'success',
                duration: 1500
            })
        } else {
            this.submitMsg(fName, phone, remarks);
        }

        // wxb.Post('/api/school.member/consult', {
        //   openid: wxb.getOpenId(),
        //   class_id: wxb.that.data.class_id,
        //   name: params.name,
        //   mobile: params.mobile,
        //   message: params.message,
        // },
        //  function(data){
        //   wx.hideLoading();
        //   wx.navigateBack({});
    },
    submitMsg: function(fName, phone, remarks) {
        wx.showLoading({
            title: '提交中...',
        })
        wxb('addMsg.php?fName=' + fName + '&phone=' + phone + '&remarks=' + remarks).then(res => {
            if (res) {
                wx.showToast({
                    title: '提交成功!',
                })
            } else {
                console.log('数据插入异常');
            }
        });
    }
})