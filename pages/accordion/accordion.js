Page({
  data: {
    flag: '',
    tmpId: 0,
    eid: 0,
    lists: [{
      class: 'web-dev',
      title: 'Web Dev',
      sub: 'Knowledge Structure',
      content: [{
        id: 0,
        height: 200,
        title: 'Title one',
        content: 'content one content one content one content one content one content one content one content one content one content one content one content one'
      }, {
        id: 1,
        height: 150,
        title: 'Title two',
        content: 'content two content two content two content two content two content two content two content two'
      }, {
        id: 2,
        height: 150,
        title: 'Title three',
        content: 'content three content three content three content three content three content three content three content three'
      }, {
        id: 3,
        height: 300,
        title: 'Title four',
        content: 'content four content four content four content four content four content four content four content four content four content four content four content four content four content four content four content four content four content four'
      }]
    }]
  },

  accordion: function (e) {
    let tid = e.currentTarget.dataset.tid
    this.data.eid = tid
    // console.log(tid, this.data.tmpId, this.data.eid)
    if (this.data.tmpId === this.data.eid) {
      this.setData({
        flag: -1,
        tmpId: ''
      })
    } else {
      this.setData({
        flag: tid,
        tmpId: tid
      })
    }
  }
})