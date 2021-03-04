<<<<<<< HEAD
module.exports = (url, data) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `https://boyeit.com/xiaochengxu/action/${url}`,
            header: {
                'Content-Type': 'json'
            },
            success: resolve,
            fail: reject
        })
    })
=======
module.exports = (url, data) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `https://boyeit.com/xiaochengxu/action/${url}`,
            header: {
                'Content-Type': 'json'
            },
            success: resolve,
            fail: reject
        })
    })
>>>>>>> 79616ba (提交文件)
}