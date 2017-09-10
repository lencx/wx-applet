/**
 * copy data to clipboard
 * @param {String} data 
 */
function clipboard(data) {
    wx.setClipboardData({
        data: data,
        success: res => {
            // show modal
            wx.showModal({
                title: '',
                content: '',
                showCancel: false,
                success: res => {
                    // console.log(res)
                }
            })
        }
    })
}

/**
 * Method
 * copy data
 * @param {String} data 
 * @param {Boolean} local 
 */
function copyData(data, local) {
    if (local === true) {
        clipboard(data)
    } else {
        wx.request({
            url: '',
            success: res => {
                // console.log(res)
            }
        })
    }
}

/**
 * Method
 * make a telephone call
 * @param {String} phoneNumber 
 */
function call(phoneNumber) {
    wx.makePhoneCall({
        phoneNumber: phoneNumber
    })
}

module.exports = {
    copyData,
    call
}