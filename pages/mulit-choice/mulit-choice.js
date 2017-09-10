Page({
    data: {
        selected: [],
        lists: [{
            index: 0,
            txt: 'JavaScript'
        }, {
            index: 1,
            txt: 'HTML'
        }, {
            index: 2,
            txt: 'CSS'
        }, {
            index: 3,
            txt: 'node.js'
        }, {
            index: 4,
            txt: 'webpack'
        }, {
            index: 5,
            txt: 'gulp'
        }]
    },
    selectTag: function (e) {
    // console.log(e)
    /**
     * Gets the index of the array element to be changed
     * Update lists data
     */
    let _data = e.currentTarget.dataset
    let index = _data.index
    let state = _data.state
    this.data.lists[index].state = !state
    let lists = this.data.lists

    /**
     * Create an empty array to hold the changed lists element
     */
    let _select = []
    this.data.lists.some(i => {
        if (i.state === true) {
            _select.push(i)
        }
    })

    /**
     * Set Data
     */
    this.setData({
        lists: lists,
        selected: _select
    })
    // console.log(this.data)
    }
})