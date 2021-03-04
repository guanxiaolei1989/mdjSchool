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
}